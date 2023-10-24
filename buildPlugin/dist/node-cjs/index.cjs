'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var events = require('events');
var slash = require('slash');
var jestDocblock = require('jest-docblock');
var grayMatter = require('gray-matter');
var fs = require('fs-extra');
var chokidar = require('chokidar');
var dequal = require('dequal');
var miniDebounce = require('mini-debounce');
var tsMorph = require('ts-morph');
var invariant = require('tiny-invariant');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var path__namespace = /*#__PURE__*/_interopNamespaceDefault(path);

async function extractStaticData(file) {
  const code = await file.read();
  switch (file.extname) {
    case 'md':
    case 'mdx':
      const {
        data: frontmatter
      } = grayMatter(code);
      const staticData = {
        ...frontmatter,
        sourceType: 'md',
        __sourceFilePath: file.path
      };
      if (staticData.title === undefined) {
        staticData.title = extractMarkdownTitle(code);
      }
      return staticData;
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx':
      return {
        ...jestDocblock.parse(jestDocblock.extract(code)),
        sourceType: 'js'
      };
    default:
      throw new Error(`unexpected extension name "${file.extname}"`);
  }
}
function extractMarkdownTitle(code) {
  const match = code.match(/^# (.*)$/m);
  return match?.[1];
}

class PendingTaskCounter {
  count = 0;
  callbacks = [];
  countTask() {
    this.count++;
    let ended = false;
    return () => {
      if (ended) return;
      ended = true;
      this.count--;
      if (this.count === 0) {
        this.callbacks.forEach(cb => cb());
        this.callbacks.length = 0;
      }
    };
  }

  /**
   * the callback style is preferred over the promise style
   * because cb will be called **synchronously** when count turn 0
   * while promise-then-cb would be called in next microtask (at that time the state may have changed)
   */
  callOnceWhenIdle(cb) {
    if (this.count === 0) {
      cb();
    } else {
      this.callbacks.push(cb);
    }
  }

  /** track a changeable pending state */
  countPendingState(pendingState) {
    let stopCounting;
    pendingState.onStateChange(isPending => {
      if (isPending) {
        // if this task has already been counted, don't count again
        if (stopCounting) return;
        stopCounting = this.countTask();
      } else {
        stopCounting?.();
        stopCounting = undefined;
      }
    });
  }
}
class PendingState {
  _isPending = false;
  get isPending() {
    return this._isPending;
  }
  set isPending(value) {
    if (this._isPending === value) return;
    this._isPending = value;
    this.cbs.forEach(cb => cb(value));
  }
  cbs = [];
  onStateChange(cb) {
    this.cbs.push(cb);
    return () => {
      this.cbs = this.cbs.filter(v => v !== cb);
    };
  }
}

class File {
  content = null;
  constructor(path, base) {
    this.path = path;
    this.base = base;
  }
  get relative() {
    return path__namespace.posix.relative(this.base, this.path);
  }
  get extname() {
    return path__namespace.posix.extname(this.path).slice(1);
  }
  read() {
    return this.content || (this.content = fs.readFile(this.path, 'utf-8'));
  }
}

class VirtualModuleGraph {
  /**
   * the module inside this graph may be virtual module or real fs module
   */
  modules = new Map();

  /**
   * Serialize the update works (instead of doing them concurrently)
   * to make the result more predictable.
   *
   * If there is already a queuing update with same updaterId,
   * it won't schedule a new one.
   *
   * Before executing an updater, it will automatically cleanup the effects of
   * previous update with same updaterId.
   * Example:
   * When find module1 for the first time:
   *   the updater set data for module2 and module3 (upstreamModule is module1)
   * Then, when observe that module1 is updated:
   *   the updater set data for module2 (upstreamModule is module1)
   * At this time, the data in module3 should be automatically cleanup!
   * So the updater(users) don't need to manually delete the old data in module3.
   */
  updateQueue = new UpdateQueue();
  /** track updateQueue empty state (isPending means not empty) */
  updateQueueEmptyState = new PendingState();
  getModuleIds(filter) {
    const ids = Array.from(this.modules.keys());
    if (filter) return ids.filter(filter);
    return ids;
  }
  getModuleData(moduleId) {
    const module = this.modules.get(moduleId);
    if (!module) return [];
    return module.getData();
  }
  getModules(filter) {
    let entries = Array.from(this.modules.entries());
    // filter is a performance optimization:
    // don't call module.getData() for filtered-out modules
    if (filter) entries = entries.filter(([moduleId]) => filter(moduleId));
    const modules = {};
    entries.forEach(([moduleId, module]) => {
      modules[moduleId] = module.getData();
    });
    return modules;
  }

  /**
   * This is the only way to update virtual modules
   */
  scheduleUpdate(updaterId, updater) {
    this.updateQueue.push(updaterId, updater);
    this.updateQueueEmptyState.isPending = true;
    // don't schedule setTimeout if there is already one
    if (this.updateQueue.size === 1) {
      setTimeout(() => {
        this.executeUpdates();
      }, 0);
    }
  }
  addModuleListener(handler, filter) {
    return this._addModuleListener((moduleId, data, prevData) => {
      if (filter && !filter(moduleId)) return;
      handler(moduleId, data, prevData);
    });
  }
  /**
   * listen to virtual module updates.
   * users can scheduleUpdate in these listeners, creating dependency chain of
   * virtual modules.
   * (.i.e when a virtual module changes, it will update another virtual module)
   *
   * users will retrieve new module data and previous module data,
   * so users can diff them to decide whether the module has "really" changed.
   * if users think they are the same, they can skip updating other virtual modules.
   * VirtualModuleGraph works on a very low level. It don't know what module data means. So it send updates event to users very often and let users to interpret module data (and whether the data has "really" changed).
   *
   * @return unsubscribe function
   */
  _addModuleListener(cb) {
    this.moduleUpdateListeners.push(cb);
    return () => {
      const index = this.moduleUpdateListeners.indexOf(cb);
      if (index === -1) return;
      this.moduleUpdateListeners.splice(index, 1);
    };
  }
  moduleUpdateListeners = [];
  callModuleUpdateListeners(updatedModules) {
    updatedModules.forEach(({
      prevData
    }, module) => {
      const data = module.getData();
      this.moduleUpdateListeners.forEach(moduleUpdateListener => {
        moduleUpdateListener(module.id, data, prevData);
      });
    });
  }

  // executeUpdates_Inner is not reentrant
  // use a state(lock) to prevent concurrent execution
  updateExecutingState = new PendingState();
  async executeUpdates() {
    if (this.updateExecutingState.isPending) return;
    this.updateExecutingState.isPending = true;
    try {
      await this.executeUpdates_Inner();
    } finally {
      this.updateExecutingState.isPending = false;
      if (this.updateQueue.size === 0) this.updateQueueEmptyState.isPending = false;
    }
  }
  async executeUpdates_Inner(depth = 1) {
    if (this.updateQueue.size === 0) return;
    if (depth > MAX_CASCADE_UPDATE_DEPTH) throw new Error(`Cascaded updates exceed max depth ${MAX_CASCADE_UPDATE_DEPTH}. Probably because the depth of the virtual module tree is too high, or there is a cycle in the virtual module graph.`);

    // record the updatedModules so that we can notify listeners in the end
    // also store prevData so users can diff it with new data
    const updatedModules = new Map();
    /** it must be called before updating data so that it can record prevData */
    const recordAffectedModule = module => {
      if (updatedModules.has(module)) return;
      updatedModules.set(module, {
        prevData: module.getData()
      });
    };
    while (true) {
      const update = this.updateQueue.pop();
      if (!update) break;
      // cleanup the effects of previous update with same updaterId
      cleanupEdgesWithUpdaterId(update.updaterId, recordAffectedModule);
      const {
        disableAPIs,
        ...apis
      } = this.createUpdateAPIs(update.updaterId, recordAffectedModule);
      await update.updater(apis);
      disableAPIs();
    }
    this.callModuleUpdateListeners(updatedModules);
    // if the listeners schedule more updates,
    // execute them synchronously and recursively
    await this.executeUpdates_Inner(depth + 1);
  }
  createUpdateAPIs(updaterId, recordAffectedModule) {
    let outdated = false;
    const _this = this;
    const OUTDATED_ERROR_MSG = `You should not call update APIs after the updater async function.`;
    return {
      addModuleData(moduleId, data, upstreamModuleId) {
        if (outdated) throw new Error(OUTDATED_ERROR_MSG);
        if (moduleId === upstreamModuleId) throw new Error(`addModuleData param error: source and target modules are the same`);
        // upstreamModuleId may be real file in fs
        const fromModule = _this.ensureModule(upstreamModuleId);
        const toModule = _this.ensureModule(moduleId);
        recordAffectedModule(toModule);
        Edge.addEdge(fromModule, toModule, data, updaterId);
      },
      getModuleData(moduleId) {
        if (outdated) throw new Error(OUTDATED_ERROR_MSG);
        return _this.getModuleData(moduleId);
      },
      deleteModule(moduleId) {
        if (outdated) throw new Error(OUTDATED_ERROR_MSG);
        const module = _this.modules.get(moduleId);
        if (!module) return;
        module.delete(recordAffectedModule);
        _this.modules.delete(moduleId);
      },
      disableAPIs() {
        outdated = true;
      }
    };
  }
  ensureModule(moduleId) {
    let result = this.modules.get(moduleId);
    if (!result) {
      result = new Module(moduleId);
      this.modules.set(moduleId, result);
    }
    return result;
  }
}
/**
 * Modules are nodes in the graph
 */
class Module {
  constructor(id) {
    this.id = id;
  }
  getData() {
    return Array.from(this.data).map(({
      data
    }) => data);
  }

  /** unlink this module */
  delete(recordAffectedModule) {
    if (this.data.size > 0) {
      // there are upstream modules that are "piping" data to this module
      throw new Error(`This module has upstream modules. You should delete modules in topological order. moduleID: ${this.id}`);
    }
    recordAffectedModule(this);
    this.downstream.forEach(edge => {
      recordAffectedModule(edge.to);
      edge.unlink();
    });
  }

  /**
   * incoming edges of the node
   * indicating the data of this virtual module
   *
   * real fs module won't need this
   */
  data = new Set();

  /**
   * outcoming edges of the node
   * indicating which modules depend on this module
   *
   * it is needed because we need to update downstream modules
   * when a fs module is deleted
   */
  downstream = new Set();
}
class Edge {
  static addEdge(from, to, data, updaterId) {
    const edge = new Edge(from, to, data, updaterId)
    // set private fields of modules
    ;
    from.downstream.add(edge);
    to.data.add(edge);
    bindEdgeWithUpdaterId(edge);
  }
  constructor(from, to, data, updaterId) {
    this.from = from;
    this.to = to;
    this.data = data;
    this.updaterId = updaterId;
  }
  hasUnlinked = false;
  unlink() {
    if (this.hasUnlinked) {
      return;
    }
    this.from.downstream.delete(this);
    this.to.data.delete(this);
    unbindEdgeWithUpdaterId(this);
    this.hasUnlinked = true;
  }
}
const mapUpdaterIdToEdges = new Map();
function bindEdgeWithUpdaterId(edge) {
  const {
    updaterId
  } = edge;
  let edges = mapUpdaterIdToEdges.get(updaterId);
  if (!edges) {
    edges = new Set();
    mapUpdaterIdToEdges.set(updaterId, edges);
  }
  edges.add(edge);
}
function unbindEdgeWithUpdaterId(edge) {
  const {
    updaterId
  } = edge;
  const edges = mapUpdaterIdToEdges.get(updaterId);
  if (!edges || !edges.has(edge)) throw new Error(`assertion fail: unlinkEdgeWithUpdaterId`);
  edges.delete(edge);
}
function cleanupEdgesWithUpdaterId(updaterId, recordAffectedModule) {
  const edges = mapUpdaterIdToEdges.get(updaterId);
  if (!edges) return;
  edges.forEach(edge => {
    recordAffectedModule(edge.to);
    edge.unlink();
  });
  if (edges.size > 0) throw new Error(`assertion fail: all edges with updaterId should already be unlinked`);
  edges.clear();
}
class Update {
  constructor(updaterId, updater) {
    this.updaterId = updaterId;
    this.updater = updater;
  }
}
class UpdateQueue {
  queue = [];
  map = new Map();
  get size() {
    return this.queue.length;
  }
  push(updaterId, updater) {
    // ignore it if the updaterId already exists in the queue
    if (this.map.has(updaterId)) return;
    const update = new Update(updaterId, updater);
    this.queue.push(update);
    this.map.set(updaterId, update);
  }
  pop() {
    const update = this.queue.shift();
    if (!update) return null;
    const {
      updaterId
    } = update;
    this.map.delete(updaterId);
    return update;
  }
}

// it indicates the depth of virtual modules
const MAX_CASCADE_UPDATE_DEPTH = 10;

let nextWatcherId = 0;

/**
 * watch fs and update corresponding virtual module when a file changed
 */
class VirtualModulesManager {
  watchers = new Set();
  virtualModules = new VirtualModuleGraph();
  fileCache = {};
  /**
   * don't return half-finished data when there are pending tasks
   */
  pendingTaskCounter = new PendingTaskCounter();
  constructor() {
    this.pendingTaskCounter.countPendingState(this.virtualModules.updateExecutingState);
    this.pendingTaskCounter.countPendingState(this.virtualModules.updateQueueEmptyState);
  }
  addFSWatcher(baseDir, globs, fileHandler) {
    const watcherId = String(nextWatcherId++);

    // should wait for a complete fs scan
    // before returning the page data
    const fsScanFinish = this.pendingTaskCounter.countTask();
    this.watchers.add(chokidar.watch(globs, {
      cwd: baseDir,
      ignored: ['**/node_modules/**/*', '**/.git/**']
    }).on('add', this.handleFileChange(baseDir, fileHandler, watcherId)).on('change', this.handleFileChange(baseDir, fileHandler, watcherId)).on('unlink', this.handleFileUnLink(baseDir, watcherId)).on('ready', () => {
      setTimeout(() => {
        // ready event may be fired too early,
        // before initial scan callbacks are called
        // https://github.com/paulmillr/chokidar/issues/1011
        fsScanFinish();
      }, 10);
    }));
  }
  getModules(cb, filter) {
    this.callOnceWhenIdle(() => {
      cb(this.virtualModules.getModules(filter));
    });
  }
  getModule(moduleId, cb) {
    this.callOnceWhenIdle(() => {
      cb(this.virtualModules.getModuleData(moduleId));
    });
  }

  /**
   * Idle means:
   * fs watcher is ready
   * no update is executing
   * update queue is empty
   */
  callOnceWhenIdle(cb) {
    this.pendingTaskCounter.callOnceWhenIdle(cb);
  }

  /**
   * return the current state of modules.
   * it doesn't wait for update task to finish
   * so it may see intermediate state.
   * use it carefully.
   */
  _getModulesNow(filter) {
    return this.virtualModules.getModules(filter);
  }
  /**
   * return the current state of module.
   * it doesn't wait for update task to finish
   * so it may see intermediate state.
   * use it carefully.
   */
  _getModuleDataNow(moduleId) {
    return this.virtualModules.getModuleData(moduleId);
  }
  addModuleListener(handler, filter) {
    return this.virtualModules.addModuleListener(handler, filter);
  }
  close() {
    this.watchers.forEach(w => w.close());
  }
  scheduleUpdate(updaterId, updater) {
    return this.virtualModules.scheduleUpdate(updaterId, updater);
  }
  handleFileChange(baseDir, fileHandler, watcherId) {
    return filePath => {
      filePath = slash(path__namespace.join(baseDir, filePath));
      const file = this.fileCache[filePath] || (this.fileCache[filePath] = new File(filePath, baseDir));
      // update content cache
      file.content = null;
      file.read();
      this.virtualModules.scheduleUpdate(`${watcherId}-${filePath}`, async apis => {
        const handlerAPI = {
          addModuleData(moduleId, data) {
            apis.addModuleData(moduleId, data, filePath);
          },
          getModuleData: apis.getModuleData
        };
        await fileHandler(file, handlerAPI);
      });
    };
  }
  handleFileUnLink(baseDir, watcherId) {
    return filePath => {
      filePath = slash(path__namespace.join(baseDir, filePath));
      this.virtualModules.scheduleUpdate(`${watcherId}-${filePath}-unlink`, async apis => {
        // delete the node that represent this fs file in the virtual modules graph
        // also delete all outcome edges
        apis.deleteModule(filePath);
      });
    };
  }
}

/**
 * built upon VirtualModulesManager.
 * map each sourceFile into a proxyModule, which is a virtual module.
 * when the sourceFile is updated, it will emit update event for the proxyModule.
 */
class ProxyModulesManager {
  vmm = new VirtualModulesManager();
  register = {};
  constructor(proxyModulePrefix) {
    this.proxyModulePrefix = proxyModulePrefix;
    if (!proxyModulePrefix) throw new Error(`invalid proxyModulePrefix: ${proxyModulePrefix}`);
  }

  /**
   * register a source file to watch,
   * map its data into a proxy module,
   * return the proxyModuleId
   *
   * to create multiple proxy modules for one sourceFilePath,
   * you can pass in keys to differentiate between them.
   */
  registerProxyModule(sourceFilePath, getProxyModuleData, key) {
    const proxyModuleId = this.getProxyModuleId(sourceFilePath, key);
    if (this.register[proxyModuleId]) return proxyModuleId;
    this.vmm.addFSWatcher('', [sourceFilePath], async (file, api) => {
      const proxyModuleData = await getProxyModuleData(file);
      api.addModuleData(proxyModuleId, proxyModuleData);
    });
    this.register[proxyModuleId] = true;
    return proxyModuleId;
  }

  /**
   * get proxy module data by proxyModuleId
   */
  async getProxyModuleData(proxyModuleId) {
    return new Promise((res, rej) => {
      this.vmm.getModule(proxyModuleId, moduleData => {
        if (!Array.isArray(moduleData) || moduleData.length === 0) return rej(new Error(`assertion fail: proxy module is empty: ${proxyModuleId}`));
        if (moduleData.length !== 1) return rej(new Error(`assertion fail: proxy module has multiple data: ${proxyModuleId}`));
        res(moduleData[0]);
      });
    });
  }

  /**
   * emit event when a proxyModule has been updated
   */
  onProxyModuleUpdate(cb) {
    this.vmm.addModuleListener((proxyModuleId, data, prevData) => {
      cb(proxyModuleId, data, prevData);
    });
  }
  close() {
    this.vmm.close();
  }
  getProxyModuleId(sourceFilePath, key) {
    let prefix = this.proxyModulePrefix;
    if (key) prefix += `--${key}--`;
    return prefix + sourceFilePath;
  }
  isProxyModuleId(id) {
    return id.startsWith(this.proxyModulePrefix) && this.register[id];
  }
}

/**
 * Types of page data updates.
 *
 * add:
 *  A new page is added.
 *  The page list module will be updated.
 * update:
 *  A page is updated.
 *  The page list module will be updated if it is static data change
 *  The page data module will be updated if it is runtime data change
 * delete:
 *  A page is deleted.
 *  The page list module will be updated.
 *  Buffered update of the deleted page will be canceled.
 */

/**
 * Buffer page data updates.
 * Can flush a batch of updates together
 * and cancel unnecessary updates
 */
class PageUpdateBuffer extends events.EventEmitter {
  /**
   * which pages should be updated
   */
  pageUpdateBuffer = new Set();

  /**
   * whether the page list should be updated
   */
  pageListUpdateBuffer = false;
  constructor() {
    super();
    this.scheduleFlush = miniDebounce.debounce(() => {
      let havePageUpdate = false;
      if (this.pageUpdateBuffer.size > 0) {
        havePageUpdate = true;
        const updates = [...this.pageUpdateBuffer.values()];
        this.emit('page', updates);
        this.pageUpdateBuffer.clear();
      }
      if (this.pageListUpdateBuffer) {
        // if we have just sent a page update,
        // we don't need to trigger page list update.
        // because during the page update hmr, the page list will automatically get updated
        // (because the whole import chain will get re-imported)
        if (!havePageUpdate) this.emit('page-list');
        this.pageListUpdateBuffer = false;
      }
    }, 100);
  }
  scheduleUpdate(update) {
    switch (update.type) {
      case 'add':
        this.pageListUpdateBuffer = true;
        break;
      case 'update':
        if (update.dataType === 'static') this.pageListUpdateBuffer = true;else this.pageUpdateBuffer.add(update.pageId);
        break;
      case 'delete':
        this.pageListUpdateBuffer = true;
        this.pageUpdateBuffer.delete(update.pageId);
        break;
      default:
        throw new Error(`invalid update type ${JSON.stringify(update)}`);
    }
    this.scheduleFlush();
  }
  async batchUpdate(exec) {
    let updates = [];
    const _this = this;
    try {
      await exec(scheduleUpdate);
    } finally {
      updates.forEach(update => {
        _this.scheduleUpdate(update);
      });
      updates = null;
      this.scheduleFlush();
    }
    function scheduleUpdate(update) {
      if (!updates) {
        // the batch lifetime has already expired
        // add it to buffer directly
        _this.scheduleUpdate(update);
        return;
      }
      // store it, will flush these updates together later
      updates.push(update);
    }
  }
}

const PAGE_MODULE_PREFIX = '/@vp-page';
const ensurePageId = moduleId => moduleId.startsWith(PAGE_MODULE_PREFIX) ? moduleId.slice(PAGE_MODULE_PREFIX.length) : moduleId;
const ensureModuleId = pageId => pageId.startsWith(PAGE_MODULE_PREFIX) ? pageId : PAGE_MODULE_PREFIX + pageId;
const isPageRelatedModule = moduleId => moduleId.startsWith(PAGE_MODULE_PREFIX);

/**
 * building upon VirtualModulesManager,
 * PagesDataKeeper recognize and handle page modules.
 */
class PagesDataKeeper extends PageUpdateBuffer {
  /**
   * this.pages is a cache of this.virtualModulesManager.getModules
   * which is updated in batch (may be outdated for a short time)
   */
  pages = {};
  constructor(virtualModulesManager) {
    super();
    this.virtualModulesManager = virtualModulesManager;
    virtualModulesManager.getModules(modules => {
      Object.entries(modules).forEach(([moduleId, data]) => {
        this.setPageData(moduleId, data);
      });
      virtualModulesManager.addModuleListener((moduleId, data) => {
        this.setPageData(moduleId, data);
      }, isPageRelatedModule);
    }, isPageRelatedModule);
  }

  /** turn PagesDataInternal to PagesData */
  getPages() {
    return Object.fromEntries(Object.entries(this.pages).map(([pageId, page]) => [pageId, transformOnePageDataInternal(page)]));
  }
  getPage(pageId) {
    const page = this.pages[pageId];
    if (!page) return null;
    return transformOnePageDataInternal(page);
  }

  /**
   * when low-level page virtual modules has changed, update this.pages data
   * and notify listeners
   */
  setPageData(moduleId, rawData) {
    const pageId = ensurePageId(moduleId);
    const oldPageData = this.pages[pageId];
    const pageData = this.createPageDataFromRaw(rawData);
    // Page is deleted
    if (!pageData) {
      if (oldPageData) {
        delete this.pages[pageId];
        this.scheduleUpdate({
          type: 'delete',
          pageId
        });
      }
      return;
    }
    // Page is added
    if (!oldPageData) {
      this.pages[pageId] = pageData;
      this.scheduleUpdate({
        type: 'add',
        pageId
      });
      return;
    }
    // Page is updated
    this.pages[pageId] = pageData;
    if (!dequal.dequal(pageData.runtimeData, oldPageData.runtimeData)) {
      this.scheduleUpdate({
        type: 'update',
        dataType: 'runtime',
        pageId
      });
    }
    if (!dequal.dequal(pageData.staticData, oldPageData.staticData)) {
      this.scheduleUpdate({
        type: 'update',
        dataType: 'static',
        pageId
      });
    }
  }
  createPageDataFromRaw(rawData) {
    const pageData = {
      runtimeData: {},
      staticData: {}
    };
    const {
      runtimeData: dataMap,
      staticData: staticDataMap
    } = pageData;
    rawData.forEach(data => {
      if (!data) return;
      const {
        dataPath,
        staticData
      } = data;
      if (!dataPath && !staticData) return;
      const key = data.key ?? 'main';
      const priority = data.priority ?? 1;
      if (dataPath) {
        if (!dataMap[key] || priority > dataMap[key].priority) dataMap[key] = {
          dataPath,
          priority
        };
      }
      if (staticData) {
        if (!staticDataMap[key] || priority > staticDataMap[key].priority) staticDataMap[key] = {
          staticData,
          priority
        };
      }
    });
    if (isEmptyPage(pageData)) return null;
    return pageData;
    function isEmptyPage(pageData) {
      const {
        runtimeData,
        staticData
      } = pageData;
      return Object.keys(runtimeData).length === 0 && Object.keys(staticData).length === 0;
    }
  }

  /**
   * update page virtual modules according to fs files
   */
  addFSWatcher(baseDir, globs, fileHandler) {
    this.virtualModulesManager.addFSWatcher(baseDir, globs, async (file, lowerAPI) => {
      const pageAPIs = this.createPageAPIs(lowerAPI);
      const res = await fileHandler(file, pageAPIs);
      if (res) {
        pageAPIs.addPageData(res);
      }
    });
  }
  createOneTimePageAPIs(updaterAPIs) {
    const handlerAPI = {
      addModuleData(moduleId, data) {
        // if the update has no upstream, use a constant name
        updaterAPIs.addModuleData(moduleId, data, 'VP_ANONYMOUS_MODULE');
      },
      getModuleData: updaterAPIs.getModuleData
    };
    return this.createPageAPIs(handlerAPI);
  }

  /**
   * TODO:
   * getRuntimeData and getStaticData are very inefficient to implement,
   * redesign them in the next version
   */
  createPageAPIs(lowerAPI) {
    const getRuntimeData = pageId => {
      const moduleId = ensureModuleId(pageId);
      // don't use pages as data source because this is a cache updated in batch.
      // instead, get data by virtualModulesManager._getModuleDataNow
      // which is updated immediately after updating virtual modules
      const getDataObject = () => {
        // reconstruct the data object, which is inefficient
        const rawData = this.virtualModulesManager._getModuleDataNow(moduleId);
        const pageData = this.createPageDataFromRaw(rawData);
        if (!pageData) return {};
        return pageData.runtimeData;
      };
      const setData = (key, value) => {
        lowerAPI.addModuleData(moduleId, {
          key,
          dataPath: value
        });
      };
      const getData = key => {
        const existValue = getDataObject()[key];
        return existValue?.dataPath;
      };
      return createProxy({
        getDataObject,
        setData,
        getData
      });
    };
    const getStaticData = pageId => {
      const moduleId = ensureModuleId(pageId);
      const getDataObject = () => {
        const rawData = this.virtualModulesManager._getModuleDataNow(moduleId);
        const pageData = this.createPageDataFromRaw(rawData);
        if (!pageData) return {};
        return pageData.staticData;
      };
      const setData = (key, value) => {
        lowerAPI.addModuleData(moduleId, {
          key,
          staticData: value
        });
      };
      const getData = key => {
        const existValue = getDataObject()[key];
        return existValue?.staticData;
      };
      return createProxy({
        getDataObject,
        setData,
        getData
      });
    };
    const addPageData = dataPiece => {
      const moduleId = ensureModuleId(dataPiece.pageId);
      lowerAPI.addModuleData(moduleId, dataPiece);
    };
    return {
      getRuntimeData,
      getStaticData,
      addPageData
    };
    function createProxy({
      getDataObject,
      setData,
      getData
    }) {
      return new Proxy({}, {
        ...defaultProxyTraps,
        set(target, key, value) {
          setData(key, value);
          return true;
        },
        get(target, key) {
          return getData(key);
        },
        has(target, key) {
          return Reflect.has(getDataObject(), key);
        },
        ownKeys: function (target) {
          return Reflect.ownKeys(getDataObject());
        }
      });
    }
  }
}
const defaultProxyTraps = Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(fnName => [fnName, () => {
  throw new Error(`unsupported operation on page data object proxy`);
}]));
function transformOnePageDataInternal(page) {
  const runtimeData = Object.fromEntries(Object.entries(page.runtimeData).map(([key, {
    dataPath
  }]) => [key, dataPath]));
  const staticData = Object.fromEntries(Object.entries(page.staticData).map(([key, {
    staticData
  }]) => [key, staticData]));
  return {
    data: runtimeData,
    staticData
  };
}

class PageStrategy extends events.EventEmitter {
  pagesDir = '/pagesDir_not_initialized';
  virtualModulesManager = null;
  pagesDataKeeper = null;
  started = false;
  constructor(findPages) {
    super();
    this.findPages = findPages;
  }

  /**
   * start() will be called by the vite buildStart hook,
   * which may be called multiple times.
   * we only execute it once
   */
  start(pagesDir, virtualModulesManager) {
    if (this.started) return;
    this.started = true;
    this.pagesDir = pagesDir;
    this.virtualModulesManager = virtualModulesManager;
    this.pagesDataKeeper = new PagesDataKeeper(virtualModulesManager);
    this.pagesDataKeeper.on('page', updates => {
      this.emit('page', updates);
    });
    this.pagesDataKeeper.on('page-list', () => {
      this.emit('page-list');
    });
    this.virtualModulesManager.scheduleUpdate('pages-init', async virtualModuleAPIs => {
      this.oneTimePageAPIs = this.pagesDataKeeper.createOneTimePageAPIs(virtualModuleAPIs);
      const helpers = this.createHelpers(() => {
        throw new Error(`No defaultFileHandler found. You should pass fileHandler argument when calling watchFiles`);
      });
      await this.findPages(pagesDir, helpers);
    });
  }

  // these are one-time api that are only used in "pages-init"
  oneTimePageAPIs = null;
  getPages() {
    if (!this.started) throw new Error(`PageStrategy not started yet`);
    return new Promise(resolve => {
      this.virtualModulesManager.callOnceWhenIdle(() => {
        resolve(this.pagesDataKeeper.getPages());
      });
    });
  }
  getPage(pageId) {
    if (!this.started) throw new Error(`PageStrategy not started yet`);
    return new Promise(resolve => {
      this.virtualModulesManager.callOnceWhenIdle(() => {
        resolve(this.pagesDataKeeper.getPage(pageId));
      });
    });
  }

  /**
   * Custom PageStrategy can use it to create helpers with custom defaultFileHandler
   */
  createHelpers(defaultFileHandler) {
    const helpers = {
      extractStaticData,
      watchFiles,
      ...this.oneTimePageAPIs
    };
    const _this = this;
    return helpers;
    function watchFiles(baseDir, arg2, arg3) {
      const {
        pagesDir,
        pagesDataKeeper
      } = _this;
      // Strip trailing slash and make absolute
      baseDir = slash(path__namespace.resolve(pagesDir, baseDir));
      let globs;
      let fileHandler;
      if (typeof arg2 === 'function') {
        globs = ['**/*'];
        fileHandler = arg2;
      } else {
        globs = Array.isArray(arg2) ? arg2 : [arg2 || '**/*'];
        fileHandler = arg3 || defaultFileHandler;
      }
      pagesDataKeeper.addFSWatcher(baseDir, globs, fileHandler);
    }
  }
}

class DefaultPageStrategy extends PageStrategy {
  constructor(opts = {}) {
    const {
      extraFindPages,
      fileHandler = defaultFileHandler
    } = opts;
    // pass a wrapped findPages function to super class
    super((pagesDir, helpersFromParent) => {
      // we can create our own helpers, providing a default fileHandler
      // and not using helpersFromParent
      const helpers = this.createHelpers(fileHandler);
      helpers.watchFiles(pagesDir, '**/*$.{md,mdx,js,jsx,ts,tsx}');
      if (typeof extraFindPages === 'function') {
        extraFindPages(pagesDir, helpers);
      }
    });
  }
}

/**
 * The defaultFileHandler return the result to caller,
 * instead of directly setting the pageData object.
 * so that it is more useful to users.
 */
const defaultFileHandler = async (file, api) => {
  const pagePublicPath = getPagePublicPath(file.relative);
  const staticData = await extractStaticData(file);
  if (staticData.sourceType === 'md') {
    api.addPageData({
      pageId: pagePublicPath,
      key: 'outlineInfo',
      dataPath: `${file.path}?outlineInfo`
    });
  }
  return {
    pageId: pagePublicPath,
    dataPath: file.path,
    staticData
  };
};

/**
 * turn `sub-path/page2/index.tsx` into `/sub-path/page2`
 */
function getPagePublicPath(relativePageFilePath) {
  let pagePublicPath = relativePageFilePath.replace(/\$\.(md|mdx|js|jsx|ts|tsx)$/, '');
  pagePublicPath = pagePublicPath.replace(/index$/, '');
  // remove trailing slash
  pagePublicPath = pagePublicPath.replace(/\/$/, '');
  // ensure starting slash
  pagePublicPath = pagePublicPath.replace(/^\//, '');
  pagePublicPath = `/${pagePublicPath}`;

  // turn [id] into :id
  // so that react-router can recognize it as url params
  pagePublicPath = pagePublicPath.replace(/\[(.*?)\]/g, (_, paramName) => `:${paramName}`);
  return pagePublicPath;
}

async function renderPageList(pagesData, isBuild) {
  const addPagesData = Object.entries(pagesData).map(([pageId, {
    staticData
  }]) => {
    let subPath = pageId;
    if (subPath === '/') {
      // import("/@react-pages/pages/") would make vite confused
      // so we change the sub path
      subPath = '/index__';
    }
    const dataModulePath = `/@react-pages/pages${subPath}`;
    let code = `
pages["${pageId}"] = {};
pages["${pageId}"].data = () => import("${dataModulePath}");
pages["${pageId}"].staticData = ${JSON.stringify(cleanStaticData(staticData))};`;
    return code;
  });
  return `
const pages = {};
${addPagesData.join('\n')}
export default pages;
`;
}
async function renderPageListInSSR(pagesData) {
  const addPagesData = Object.entries(pagesData).map(([pageId, {
    staticData
  }], index) => {
    let subPath = pageId;
    if (subPath === '/') {
      // import("/@react-pages/pages/") would make vite confused
      // so we change the sub path
      subPath = '/index__';
    }
    const code = `
pages["${pageId}"] = {};
import page${index} from "/@react-pages/pages${subPath}";
pages["${pageId}"] = page${index};`;
    return code;
  });
  return `
const pages = {};
${addPagesData.join('\n')}
export default pages;
`;
}
function renderOnePageData(onePageData) {
  const importModule = Object.entries(onePageData).map(([dataKey, path], idx) => `
import * as m${idx} from "${slash(path)}";
modules["${dataKey}"] = m${idx};`);
  return `
  const modules = {};
  ${importModule.join('\n')}
  export default modules;`;
}
function renderAllPagesOutlines(pagesData) {
  const res = [];
  Object.entries(pagesData).map(([pageId, {
    staticData
  }], index1) => {
    const outlinesForThisPage = [];
    // check all data pieces (identified by key within a page) of all pages
    Object.entries(staticData).forEach(([key, dataPiece], index2) => {
      if (dataPiece?.sourceType === 'md' && dataPiece.__sourceFilePath) {
        // collect outline info of markdown pages
        const varName = `pageOutline_${index1}_${index2}`;
        outlinesForThisPage.push({
          key,
          varName,
          importOutlineInfo: `import * as ${varName} from ${JSON.stringify(dataPiece.__sourceFilePath + '?outlineInfo')}`
        });
      }
    });
    if (outlinesForThisPage.length === 0) return;
    res.push(`allPagesOutlines["${pageId}"] = {};`);
    outlinesForThisPage.forEach(({
      key,
      varName,
      importOutlineInfo
    }) => {
      res.push(importOutlineInfo);
      res.push(`allPagesOutlines["${pageId}"]["${key}"] = ${varName};`);
    });
  });
  return `
export const allPagesOutlines = {};
${res.join('\n')}
`;
}

// filter out internal data field in staticData
// don't leak them into build output assets
function cleanStaticData(staticData) {
  if (!staticData || typeof staticData !== 'object') return staticData;
  return Object.fromEntries(Object.entries(staticData).map(([key, value]) => {
    if (value?.__sourceFilePath) return [key, {
      ...value,
      __sourceFilePath: undefined
    }];
    return [key, value];
  }));
}

async function resolveTheme(pagesDirPath) {
  for (let filename of ['_theme.js', '_theme.ts', '_theme.jsx', '_theme.tsx']) {
    filename = path__namespace.join(pagesDirPath, filename);
    if (await fs.pathExists(filename)) {
      return slash(filename);
    }
  }
  throw new Error("can't find theme inside pagesDir: " + pagesDirPath);
}

/**
 * create mdast node for expression:
 * import * as name from 'from'
 */
function createNameSpaceImportNode({
  name,
  from
}) {
  return {
    type: 'mdxjsEsm',
    value: '',
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [{
          type: 'ImportDeclaration',
          specifiers: [{
            type: 'ImportNamespaceSpecifier',
            local: {
              type: 'Identifier',
              name
            }
          }],
          source: {
            type: 'Literal',
            value: from,
            raw: JSON.stringify(from)
          }
        }]
      }
    }
  };
}

/**
 * create mdast node for expression:
 * import name from 'from'
 */
function createDefaultImportNode({
  name,
  from
}) {
  return {
    type: 'mdxjsEsm',
    value: '',
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [{
          type: 'ImportDeclaration',
          specifiers: [{
            type: 'ImportDefaultSpecifier',
            local: {
              type: 'Identifier',
              name
            }
          }],
          source: {
            type: 'Literal',
            value: from,
            raw: JSON.stringify(from)
          }
        }]
      }
    }
  };
}

/**
 * create mdast node for expression:
 * <Component {...props} />
 */
function createJSXWithSpreadPropsNode({
  Component,
  props
}) {
  return {
    type: 'mdxJsxFlowElement',
    name: Component,
    data: {
      _mdxExplicitJsx: true
    },
    children: [],
    attributes: [{
      type: 'mdxJsxExpressionAttribute',
      value: '',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [{
            type: 'ExpressionStatement',
            expression: {
              type: 'ObjectExpression',
              properties: [{
                type: 'SpreadElement',
                argument: {
                  type: 'Identifier',
                  name: props
                }
              }]
            }
          }]
        }
      }
    }]
  };
}

/// <reference types="remark-mdx" />

function DemoMdxPlugin() {
  return transformer;
  function transformer(tree, file) {
    const children = tree.children;
    const addImports = [];
    children.forEach((child, index) => {
      // find jsx node like: <Demo src="srcValue" />
      if (child.type === 'mdxJsxFlowElement' && child.name === 'Demo') {
        const srcAttr = child.attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'src' && typeof attr.value === 'string');
        const srcValue = srcAttr?.value;
        if (srcValue) {
          const nextIndex = addImports.length;
          const varName = `_demo${nextIndex}`;
          // add import:
          // import * as varName from "${srcValue}?demo"
          addImports.push(createNameSpaceImportNode({
            name: varName,
            from: `${srcValue}?demo`
          }));
          // replace this node with:
          // <Demo {...varName} />
          children.splice(index, 1, createJSXWithSpreadPropsNode({
            Component: 'Demo',
            props: varName
          }));
        }
      }
    });
    children.unshift(...addImports);
  }
}

// mark demo proxy files as virtual files to avoid vite warning "missing source files"
// https://github.com/vitejs/vite/blob/60721ac53a1bf326d1cac097f23642faede234ff/packages/vite/src/node/server/sourcemap.ts#L39
// https://vitejs.dev/guide/api-plugin.html#virtual-modules-convention
const DEMO_PROXY_PREFIX = '\0/@react-pages/demos';
class DemoModuleManager {
  pmm = new ProxyModulesManager(DEMO_PROXY_PREFIX);
  registerProxyModule(demoPath) {
    return this.pmm.registerProxyModule(demoPath, async file => {
      const content = await file.read();
      const staticData = await extractStaticData(file);
      // strip staticData notation
      const code = jestDocblock.strip(content);
      return {
        demoPath,
        code,
        staticData
      };
    });
  }
  isProxyModuleId(id) {
    return this.pmm.isProxyModuleId(id);
  }
  async loadProxyModule(demoProxyId) {
    const data = await this.pmm.getProxyModuleData(demoProxyId);
    const {
      demoPath,
      code,
      staticData
    } = data ?? {};
    if (!demoPath || !code || !staticData) throw new Error(`assertion fail: invalid demo data: ${demoProxyId}`);
    return `export * from "${demoPath}";
    export { default } from "${demoPath}";
    
    const code = ${JSON.stringify(jestDocblock.strip(code))};
    const title = ${JSON.stringify(staticData.title)};
    const desc = ${JSON.stringify(staticData.description || staticData.desc)};
    
    export const demoMeta = { code, title, desc };
    export const isDemo = true;`;
  }
  onUpdate(cb) {
    this.pmm.onProxyModuleUpdate(cb);
  }
  close() {
    this.pmm.close();
  }
}

const defaultTsConfig = {
  target: tsMorph.ts.ScriptTarget.ESNext,
  lib: ['lib.esnext.full.d.ts'],
  moduleResolution: tsMorph.ts.ModuleResolutionKind.NodeJs
};
function collectInterfaceInfo(fileName, exportName, options = {}) {
  const project = new tsMorph.Project({
    compilerOptions: {
      ...defaultTsConfig,
      ...options
    }
  });
  const sourceFile = project.addSourceFileAtPath(fileName);
  const typeChecker = project.getTypeChecker();
  const exportedDeclarations = sourceFile.getExportedDeclarations().get(exportName);
  if (!exportedDeclarations) {
    throw new Error(`Can not find export. ${JSON.stringify({
      exportName,
      fileName
    })}`);
  }
  if (exportedDeclarations.length !== 1) {
    throw new Error(`Unexpected exportedDeclaration.length. ${JSON.stringify({
      exportName,
      fileName
    })}`);
  }
  const node = exportedDeclarations[0];
  if (tsMorph.Node.isTypeAliasDeclaration(node)) {
    // type A = { k: v } (type literal)
    // or type A = 'asd' | 123 (complex type)
    const name = node.getName();
    const description = node.getJsDocs().map(jsDoc => {
      return jsDoc.getDescription().trim();
    }).join('\n\n');
    const typeNode = node.getTypeNode();
    if (tsMorph.Node.isTypeLiteral(typeNode)) {
      // example: type A = { k: v }
      const members = handleTypeElementMembered(typeNode, typeChecker);
      return {
        type: 'object-literal',
        name,
        description,
        properties: members
      };
    } else {
      // example: type A = 'asd' | 123
      return {
        type: 'other',
        name,
        description,
        text: typeNode?.getText({
          includeJsDocComments: false,
          trimLeadingIndentation: true
        }) || ''
      };
    }
  }
  if (tsMorph.Node.isInterfaceDeclaration(node)) {
    const name = node.getName();
    const description = node.getJsDocs().map(jsDoc => {
      return jsDoc.getDescription().trim();
    }).join('\n\n');
    const members = handleTypeElementMembered(node, typeChecker);
    return {
      type: 'interface',
      name,
      description,
      properties: members
    };
  }
  throw new Error('unexpected node type: ' + node.getKindName());
}

// handle Interface or TypeLiteral
// iterate members at type level
// which is higher than ast level, so that we can get inherited membered from a Interface
// https://github.com/dsherret/ts-morph/issues/457#issuecomment-427688926
function handleTypeElementMembered(node, typeChecker) {
  const result = [];
  const nodeType = node.getType();
  const properties = nodeType.getProperties();
  for (const prop of properties) {
    const name = prop.getName();
    const description = tsMorph.ts.displayPartsToString(prop.compilerSymbol.getDocumentationComment(typeChecker.compilerObject));
    const type = prop.getTypeAtLocation(node).getText();
    const defaultValue = (() => {
      let res = '';
      prop.getJsDocTags().find(tag => {
        const match = ['defaultvalue', 'default'].includes(tag.getName().toLowerCase());
        if (match) {
          res = tsMorph.ts.displayPartsToString(tag.getText());
          return true;
        }
      });
      return res;
    })();
    const optional = prop.isOptional();
    result.push({
      name,
      description,
      type,
      defaultValue,
      optional
    });
  }
  return result;
}

/**
 * ref:
 *
 * https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 * https://stackoverflow.com/questions/59838013/how-can-i-use-the-ts-compiler-api-to-find-where-a-variable-was-defined-in-anothe
 *
 * https://stackoverflow.com/questions/60249275/typescript-compiler-api-generate-the-full-properties-arborescence-of-a-type-ide
 *
 * https://stackoverflow.com/questions/47429792/is-it-possible-to-get-comments-as-nodes-in-the-ast-using-the-typescript-compiler
 *
 * Instructions of learning ts compiler:
 * https://stackoverflow.com/a/58885450
 *
 * https://learning-notes.mistermicheels.com/javascript/typescript/compiler-api/
 */

/// <reference types="remark-mdx" />

function TsInfoMdxPlugin() {
  return transformer;
  function transformer(tree, file) {
    const children = tree.children;
    const addImports = [];
    children.forEach((child, index) => {
      // find jsx node like: <TsInfo src="srcValue" name="nameValue" />
      if (child.type === 'mdxJsxFlowElement' && child.name === 'TsInfo') {
        const srcAttr = child.attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'src' && typeof attr.value === 'string');
        const srcValue = srcAttr?.value;
        const nameAttr = child.attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'name' && typeof attr.value === 'string');
        const nameValue = nameAttr?.value;
        if (srcValue && nameValue) {
          const nextIndex = addImports.length;
          const varName = `_tsInfo${nextIndex}`;
          // add import:
          // import * as varName from "${srcValue}?tsInfo=${nameValue}"
          addImports.push(createNameSpaceImportNode({
            name: varName,
            from: `${srcValue}?tsInfo=${nameValue}`
          }));
          // replace this node with:
          // <TsInfo {...varName} />
          children.splice(index, 1, createJSXWithSpreadPropsNode({
            Component: 'TsInfo',
            props: varName
          }));
        }
      }
    });
    children.unshift(...addImports);
  }
}

const PROXY_PREFIX = '/@react-pages/tsInfo';

/**
 * TODO:
 * currently we only watch one sourceFilePath for each virtual module(proxyModule).
 * but if the sourceFilePath import other modules, and when that module has updated,
 * TsInfoModuleManager won't notice that.
 * we need a way to create virtual modules with dependencies.
 *
 * currently it is ok to tell users to write a whole type doc in a single file.
 * so supporting virtual modules with dependencies is not needed.
 * but supporting that feature would make our virtual module system more powerful.
 *
 * the same goes for DemoModuleManager.
 */

class TsInfoModuleManager {
  pmm = new ProxyModulesManager(PROXY_PREFIX);
  registerProxyModule(sourcePath, exportName) {
    return this.pmm.registerProxyModule(sourcePath, async file => {
      const tsInfo = collectInterfaceInfo(sourcePath, exportName);
      return {
        sourcePath,
        exportName,
        tsInfo
      };
    }, exportName);
  }
  isProxyModuleId(id) {
    return this.pmm.isProxyModuleId(id);
  }
  async loadProxyModule(proxyModuleId) {
    const data = await this.pmm.getProxyModuleData(proxyModuleId);
    const {
      sourcePath,
      exportName,
      tsInfo
    } = data ?? {};
    if (!sourcePath || !exportName || !tsInfo) throw new Error(`assertion fail: invalid data: ${proxyModuleId}`);
    return `export const data = ${JSON.stringify(tsInfo)};`;
  }
  onUpdate(cb) {
    this.pmm.onProxyModuleUpdate(cb);
  }
  close() {
    this.pmm.close();
  }
}

const bodyInjectRE = /<\/body>/;
function injectHTMLTag(html, tagHtml) {
  if (bodyInjectRE.test(html)) {
    return html.replace(bodyInjectRE, `${tagHtml}\n$&`);
  }
  // if no body, append
  return html + `\n` + tagHtml;
}

/// <reference types="remark-mdx" />

function FileTextMdxPlugin() {
  return transformer;
  function transformer(tree, file) {
    const children = tree.children;
    const addImports = [];
    children.forEach((child, index) => {
      // find jsx node like: <FileText src="srcValue" syntax="syntaxValue" />
      if (child.type === 'mdxJsxFlowElement' && child.name === 'FileText') {
        const srcAttr = child.attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'src' && typeof attr.value === 'string');
        const srcValue = srcAttr?.value;
        const syntaxAttr = child.attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'syntax' && typeof attr.value === 'string');
        const syntaxValue = syntaxAttr?.value;
        if (srcValue && syntaxValue) {
          const nextIndex = addImports.length;
          const varName = `_fileText${nextIndex}`;
          // add import:
          // import varName from "${srcValue}?raw"
          addImports.push(createDefaultImportNode({
            name: varName,
            from: `${srcValue}?raw`
          }));
          // replace this node with:
          // <FileText text={varName} syntax="syntaxValue" />
          children.splice(index, 1, createFileTextJSXNode({
            text: varName,
            syntax: syntaxValue
          }));
        }
      }
    });
    children.unshift(...addImports);
  }
}

/**
 * create mdast node for expression:
 * <FileText text={text} syntax="syntax" />
 */
function createFileTextJSXNode({
  text,
  syntax
}) {
  return {
    type: 'mdxJsxFlowElement',
    name: 'FileText',
    data: {
      _mdxExplicitJsx: true
    },
    children: [],
    attributes: [{
      type: 'mdxJsxAttribute',
      name: 'text',
      value: {
        type: 'mdxJsxAttributeValueExpression',
        value: text,
        data: {
          estree: {
            type: 'Program',
            sourceType: 'module',
            body: [{
              type: 'ExpressionStatement',
              expression: {
                type: 'Identifier',
                name: text
              }
            }]
          }
        }
      }
    }, {
      type: 'mdxJsxAttribute',
      name: 'syntax',
      value: syntax
    }]
  };
}

// collect headings
// ref: https://github.com/syntax-tree/mdast-util-toc/blob/ba8f680a3cbcd96351febe2b73edb21598720945/lib/search.js#L67
async function extractOutlineInfo(md) {
  const {
    remark
  } = await import('remark');
  const {
    default: remarkMdx
  } = await import('remark-mdx');
  const {
    default: frontmatter
  } = await import('remark-frontmatter');
  const {
    default: gfm
  } = await import('remark-gfm');
  const {
    visit
  } = await import('unist-util-visit');
  const {
    toString
  } = await import('mdast-util-to-string');
  const {
    default: Slugger
  } = await import('github-slugger');
  const ast = remark().use(frontmatter).use(gfm).use(remarkMdx).parse(md);
  const slugs = new Slugger();
  const headings = [];
  visit(ast, 'heading', node => {
    const text = toString(node, {
      includeImageAlt: false
    });
    let id = node.data && node.data.hProperties && node.data.hProperties.id;
    id = slugs.slug(id || text);
    if (!id) return;
    headings.push({
      depth: node.depth,
      text,
      id
    });
  });

  // debugger
  return {
    ast,
    outline: headings
  };
}

// extractOutlineInfo(`
// # t1
// 123123
// ## t1.1
// 23412

// import ChildContent from './ChildContent';

// <ChildContent />

// # t2
// asd
// `)

// mark demo proxy files as virtual files to avoid vite warning "missing source files"
// https://github.com/vitejs/vite/blob/60721ac53a1bf326d1cac097f23642faede234ff/packages/vite/src/node/server/sourcemap.ts#L39
// https://vitejs.dev/guide/api-plugin.html#virtual-modules-convention
const OUTLINE_INFO_MODULE_ID_PREFIX = '\0/@react-pages/outline-info';
class OutlineInfoModuleManager {
  pmm = new ProxyModulesManager(OUTLINE_INFO_MODULE_ID_PREFIX);
  registerProxyModule(datasourceFilePath) {
    return this.pmm.registerProxyModule(datasourceFilePath, async file => {
      const content = await file.read();
      const {
        outline
      } = await extractOutlineInfo(content);
      return {
        datasourceFilePath,
        outline
        // content,
      };
    });
  }

  isProxyModuleId(id) {
    return this.pmm.isProxyModuleId(id);
  }
  async loadProxyModule(proxyModuleId) {
    const data = await this.pmm.getProxyModuleData(proxyModuleId);
    const {
      outline
    } = data ?? {};
    if (!outline) throw new Error(`assertion fail: invalid outline data: ${proxyModuleId}`);
    return `export const outline = ${JSON.stringify(outline)};`;
  }
  onUpdate(cb) {
    this.pmm.onProxyModuleUpdate((proxyModuleId, data, prevData) => {
      invariant(data.length <= 1);
      invariant(prevData.length <= 1);
      const outline = data[0]?.outline;
      const prevOutline = prevData[0]?.outline;
      if (dequal.dequal(outline, prevOutline)) {
        // outline hasn't changed. skip update
        return;
      }
      cb(proxyModuleId);
    });
  }
  close() {
    this.pmm.close();
  }
}

/**
 * This is a public API that users use in their index.html.
 * Changing this would introduce breaking change for users.
 */
const appEntryId = '/@pages-infra/main.js';

/**
 * This is a private prefix and users should not use them directly
 */
const modulePrefix = '/@react-pages/';
const pagesModuleId = modulePrefix + 'pages';
const themeModuleId = modulePrefix + 'theme';
const ssrDataModuleId = modulePrefix + 'ssrData';
const allOutlineDataModuleId = modulePrefix + 'allPagesOutlines';
const tsInfoQueryReg = /\?tsInfo=(.*)$/;
function pluginFactory(opts = {}) {
  const {
    useHashRouter = false,
    staticSiteGeneration
  } = opts;
  let pagesDir;
  let pageStrategy;
  /** used as data source for PageStrategy and other dynamic-modules */
  const virtualModulesManager = new VirtualModulesManager();
  const demoModuleManager = new DemoModuleManager();
  const tsInfoModuleManager = new TsInfoModuleManager();
  const outlineInfoModuleManager = new OutlineInfoModuleManager();
  return {
    name: 'vite-plugin-react-pages',
    enforce: 'pre',
    config: (config, env) => ({
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom', '@mdx-js/react'],
        exclude: ['vite-plugin-react-pages']
      },
      define: {
        __HASH_ROUTER__: !!useHashRouter,
        'process.env.VITE_PAGES_IS_SSR': env.ssrBuild ? JSON.stringify('true') : JSON.stringify('false')
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined,
            // local rollup's types may not be compatible with vite's rollup types
            plugins: [outputPluginDisableJekyll()]
          }
        }
      }
    }),
    async configResolved({
      root,
      plugins,
      logger,
      command
    }) {
      pagesDir = opts.pagesDir ?? path__namespace.resolve(root, 'pages');
      if (opts.pageStrategy) {
        pageStrategy = opts.pageStrategy;
      } else {
        pageStrategy = new DefaultPageStrategy();
      }
      const mdxPlugin = plugins.find(plugin => plugin.name === 'vite-plugin-mdx');
      if (mdxPlugin) {
        throw new Error('You should not use vite-plugin-mdx with vite-plugin-react-pages. vite-pages v5 has buildin plugin for mdx.');
      }
    },
    configureServer({
      watcher,
      moduleGraph
    }) {
      const reloadVirtualModule = moduleId => {
        const module = moduleGraph.getModuleById(moduleId);
        if (module) {
          moduleGraph.invalidateModule(module);
          watcher.emit('change', moduleId);
        }
      };
      pageStrategy.on('page-list', () => reloadVirtualModule(pagesModuleId)).on('page', pageIds => {
        pageIds.forEach(pageId => {
          reloadVirtualModule(pagesModuleId + pageId);
        });
      });
      demoModuleManager.onUpdate(reloadVirtualModule);
      tsInfoModuleManager.onUpdate(reloadVirtualModule);
      outlineInfoModuleManager.onUpdate(reloadVirtualModule);
    },
    buildStart() {
      // buildStart may be called multiple times
      // if the port has already been taken and vite retry with another port

      // pageStrategy.start can't be put in configResolved
      // because vite's resolveConfig will call configResolved without calling close hook
      pageStrategy.start(pagesDir, virtualModulesManager);
    },
    async resolveId(id, importer) {
      if (id === appEntryId) return id;
      if (id.startsWith(modulePrefix)) return id;
      if (id.endsWith('?demo')) {
        const bareImport = id.slice(0, 0 - '?demo'.length);
        const resolved = await this.resolve(bareImport, importer);
        if (!resolved || resolved.external) throw new Error(`can not resolve demo: ${id}. importer: ${importer}`);
        return demoModuleManager.registerProxyModule(resolved.id);
      }
      if (id.endsWith('?outlineInfo')) {
        const bareImport = id.slice(0, 0 - '?outlineInfo'.length);
        const resolved = await this.resolve(bareImport, importer);
        if (!resolved || resolved.external) throw new Error(`can not resolve outlineInfo: ${id}. importer: ${importer}`);
        return outlineInfoModuleManager.registerProxyModule(resolved.id);
      }
      const matchTsInfo = id.match(tsInfoQueryReg);
      if (matchTsInfo) {
        const bareImport = id.replace(tsInfoQueryReg, '');
        const resolved = await this.resolve(bareImport, importer);
        if (!resolved || resolved.external) throw new Error(`can not resolve tsInfo: ${id}. importer: ${importer}`);
        const exportName = matchTsInfo[1];
        return tsInfoModuleManager.registerProxyModule(resolved.id, exportName);
      }
      return undefined;
    },
    async load(id) {
      // vite will resolve it with v=${versionHash} query
      // so that this import can be cached
      if (id === appEntryId) return `import "vite-plugin-react-pages/dist/client-bundles/entries/csr.mjs";`;
      // page list
      if (id === pagesModuleId) {
        return renderPageList(await pageStrategy.getPages());
      }
      // one page data
      if (id.startsWith(pagesModuleId + '/')) {
        let pageId = id.slice(pagesModuleId.length);
        if (pageId === '/index__') pageId = '/';
        const page = await pageStrategy.getPage(pageId);
        if (!page) {
          throw Error(`Page not found: ${pageId}`);
        }
        return renderOnePageData(page.data);
      }
      if (id === themeModuleId) {
        return `export { default } from "${await resolveTheme(pagesDir)}";`;
      }
      if (id === ssrDataModuleId) {
        return renderPageListInSSR(await pageStrategy.getPages());
      }
      if (demoModuleManager.isProxyModuleId(id)) {
        return demoModuleManager.loadProxyModule(id);
      }
      if (outlineInfoModuleManager.isProxyModuleId(id)) {
        return outlineInfoModuleManager.loadProxyModule(id);
      }
      if (id === allOutlineDataModuleId) {
        return renderAllPagesOutlines(await pageStrategy.getPages());
      }
      if (tsInfoModuleManager.isProxyModuleId(id)) {
        return tsInfoModuleManager.loadProxyModule(id);
      }
    },
    closeBundle() {
      virtualModulesManager.close();
      demoModuleManager.close();
      tsInfoModuleManager.close();
      outlineInfoModuleManager.close();
    },
    transformIndexHtml(html, ctx) {
      return moveScriptTagToBodyEnd(html, ctx);
    },
    // Read by the cli script to get staticSiteGeneration config
    // @ts-expect-error
    vitePagesStaticSiteGeneration: staticSiteGeneration
  };
}

/**
 * vite put script before style, which cause style problem for antd
 * so we move the script tag to the end of the body
 * https://github.com/vitejs/vite/blob/4112c5d103673b83c50d446096086617dfaac5a3/packages/vite/src/node/plugins/html.ts#L352
 */
function moveScriptTagToBodyEnd(html, ctx) {
  if (ctx.chunk) {
    const reg = new RegExp(`<script\\s[^>]*?${ctx.chunk.fileName}[^<]*?<\\/script>`);
    const match = html.match(reg);
    if (match) {
      const script = match[0];
      html = html.replace(script, '');
      return injectHTMLTag(html, script);
    }
  }
}
async function setupPlugins(vpConfig = {}) {
  // use dynamic import so that it supports node commonjs
  const mdx = await import('@mdx-js/rollup');
  return [mdx.default({
    remarkPlugins: await getRemarkPlugins(),
    rehypePlugins: await getRehypePlugins(),
    // treat .md as mdx
    mdExtensions: [],
    mdxExtensions: ['.md', '.mdx'],
    providerImportSource: '@mdx-js/react'
  }), createMdxTransformPlugin(), pluginFactory(vpConfig)];
}
function getRemarkPlugins() {
  return Promise.all([
  // use dynamic import so that it works in node commonjs
  import('remark-frontmatter').then(m => m.default), import('remark-gfm').then(m => m.default), import('remark-mdx-images').then(m => m.default), import('remark-math').then(m => m.default),
  // plugins created for vite-pages:
  DemoMdxPlugin, TsInfoMdxPlugin, FileTextMdxPlugin]);
}
function getRehypePlugins() {
  return Promise.all([
  // use dynamic import so that it works in node commonjs
  import('rehype-slug').then(m => m.default), import('rehype-katex').then(m => m.default)]);
}

/**
 * use @vitejs/plugin-react to handle the output of @mdx-js/rollup
 * workaround this issue: https://github.com/vitejs/vite-plugin-react/issues/38
 */
function createMdxTransformPlugin() {
  let vitePluginReactTrasnform;
  return {
    name: 'vite-pages:mdx-transform',
    configResolved: ({
      plugins
    }) => {
      // find this plugin to call it's transform function:
      // https://github.com/vitejs/vite-plugin-react/blob/b647e74c38565696bd6fb931b8bd9ac7f3bebe88/packages/plugin-react/src/index.ts#L206
      vitePluginReactTrasnform = plugins.find(p => p.name === 'vite:react-babel' && typeof p.transform === 'function')?.transform;
      if (!vitePluginReactTrasnform) {
        throw new Error(`Can't find an instance of @vitejs/plugin-react. You should apply this plugin to make mdx work.`);
      }
    },
    transform: (code, id, options) => {
      const [filepath, querystring = ''] = id.split('?');
      if (filepath.match(/\.mdx?$/) && !id.startsWith(OUTLINE_INFO_MODULE_ID_PREFIX)) {
        // make @vitejs/plugin-react treat the "output of @mdx-js/rollup transform" like a jsx file
        // https://github.com/vitejs/vite-plugin-react/blob/b647e74c38565696bd6fb931b8bd9ac7f3bebe88/packages/plugin-react/src/index.ts#L215
        let newId;
        if (querystring) {
          newId = id + '&ext=.jsx';
        } else {
          newId = id + '?ext=.jsx';
        }
        return vitePluginReactTrasnform(code, newId, options);
      }
    }
  };
}

/**
 * Some chunk filenames may start with `_`, which will be treated as special resource by github pages. So we need to disable jekyll of github pages.
 * https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/
 */
function outputPluginDisableJekyll() {
  return {
    name: 'vite-pages-disable-jekyll',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: '.nojekyll',
        source: ''
      });
    }
  };
}

exports.DefaultPageStrategy = DefaultPageStrategy;
exports.File = File;
exports.PageStrategy = PageStrategy;
exports.default = setupPlugins;
exports.defaultFileHandler = defaultFileHandler;
exports.extractStaticData = extractStaticData;
//# sourceMappingURL=index.cjs.map
