import React, { createContext, useContext, useReducer, useEffect, useDebugValue, useCallback, useMemo, useState, useLayoutEffect, useRef } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { dequal } from 'dequal';
import initialPages from '/@react-pages/pages';
import initialTheme from '/@react-pages/theme';
import { unstable_batchedUpdates } from 'react-dom';
import { jsx } from 'react/jsx-runtime';

/**
 * During ssr hydration, we pass all the data needed by App
 * with this ctx
 * so the App can render the page data directly
 * instead of render the loading state
 */
const dataCacheCtx = /*#__PURE__*/createContext({});
const setDataCacheCtx = /*#__PURE__*/createContext(() => {
  throw new Error(`setDataCacheCtx not found`);
});

let keyCount = 0;
function atom$1(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = (get) => get(config);
    config.write = (get, set, arg) => set(
      config,
      typeof arg === "function" ? arg(get(config)) : arg
    );
  }
  if (write) {
    config.write = write;
  }
  return config;
}

const SUSPENSE_PROMISE = Symbol();
const isSuspensePromise = (promise) => !!promise[SUSPENSE_PROMISE];
const isSuspensePromiseAlreadyCancelled = (suspensePromise) => !suspensePromise[SUSPENSE_PROMISE].c;
const cancelSuspensePromise = (suspensePromise) => {
  var _a;
  const { b: basePromise, c: cancelPromise } = suspensePromise[SUSPENSE_PROMISE];
  if (cancelPromise) {
    cancelPromise();
    (_a = promiseAbortMap.get(basePromise)) == null ? void 0 : _a();
  }
};
const isEqualSuspensePromise = (oldSuspensePromise, newSuspensePromise) => {
  const oldOriginalPromise = oldSuspensePromise[SUSPENSE_PROMISE].o;
  const newOriginalPromise = newSuspensePromise[SUSPENSE_PROMISE].o;
  return oldOriginalPromise === newOriginalPromise || oldSuspensePromise === newOriginalPromise || isSuspensePromise(oldOriginalPromise) && isEqualSuspensePromise(oldOriginalPromise, newSuspensePromise);
};
const createSuspensePromise = (basePromise, promise) => {
  const suspensePromiseExtra = {
    b: basePromise,
    o: promise,
    c: null
  };
  const suspensePromise = new Promise((resolve) => {
    suspensePromiseExtra.c = () => {
      suspensePromiseExtra.c = null;
      resolve();
    };
    promise.finally(suspensePromiseExtra.c);
  });
  suspensePromise[SUSPENSE_PROMISE] = suspensePromiseExtra;
  return suspensePromise;
};
const copySuspensePromise = (suspensePromise) => createSuspensePromise(
  suspensePromise[SUSPENSE_PROMISE].b,
  suspensePromise[SUSPENSE_PROMISE].o
);
const promiseAbortMap = /* @__PURE__ */ new WeakMap();

const hasInitialValue = (atom) => "init" in atom;
const READ_ATOM = "r";
const WRITE_ATOM = "w";
const COMMIT_ATOM = "c";
const SUBSCRIBE_ATOM = "s";
const RESTORE_ATOMS = "h";
const DEV_SUBSCRIBE_STATE = "n";
const DEV_GET_MOUNTED_ATOMS = "l";
const DEV_GET_ATOM_STATE = "a";
const DEV_GET_MOUNTED = "m";
const createStore = (initialValues) => {
  const committedAtomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingMap = /* @__PURE__ */ new Map();
  let stateListeners;
  let mountedAtoms;
  if ((import.meta.env && import.meta.env.MODE) !== "production") {
    stateListeners = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  if (initialValues) {
    for (const [atom, value] of initialValues) {
      const atomState = {
        v: value,
        r: 0,
        y: true,
        // not invalidated
        d: /* @__PURE__ */ new Map()
      };
      if ((import.meta.env && import.meta.env.MODE) !== "production") {
        Object.freeze(atomState);
        if (!hasInitialValue(atom)) {
          console.warn(
            "Found initial value for derived atom which can cause unexpected behavior",
            atom
          );
        }
      }
      committedAtomStateMap.set(atom, atomState);
    }
  }
  const suspensePromiseCacheMap = /* @__PURE__ */ new WeakMap();
  const addSuspensePromiseToCache = (version, atom, suspensePromise) => {
    let cache = suspensePromiseCacheMap.get(atom);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      suspensePromiseCacheMap.set(atom, cache);
    }
    suspensePromise.then(() => {
      if (cache.get(version) === suspensePromise) {
        cache.delete(version);
        if (!cache.size) {
          suspensePromiseCacheMap.delete(atom);
        }
      }
    });
    cache.set(version, suspensePromise);
  };
  const cancelAllSuspensePromiseInCache = (atom) => {
    const versionSet = /* @__PURE__ */ new Set();
    const cache = suspensePromiseCacheMap.get(atom);
    if (cache) {
      suspensePromiseCacheMap.delete(atom);
      cache.forEach((suspensePromise, version) => {
        cancelSuspensePromise(suspensePromise);
        versionSet.add(version);
      });
    }
    return versionSet;
  };
  const versionedAtomStateMapMap = /* @__PURE__ */ new WeakMap();
  const getVersionedAtomStateMap = (version) => {
    let versionedAtomStateMap = versionedAtomStateMapMap.get(version);
    if (!versionedAtomStateMap) {
      versionedAtomStateMap = /* @__PURE__ */ new Map();
      versionedAtomStateMapMap.set(version, versionedAtomStateMap);
    }
    return versionedAtomStateMap;
  };
  const getAtomState = (version, atom) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      let atomState = versionedAtomStateMap.get(atom);
      if (!atomState) {
        atomState = getAtomState(version.p, atom);
        if (atomState && "p" in atomState && isSuspensePromiseAlreadyCancelled(atomState.p)) {
          atomState = void 0;
        }
        if (atomState) {
          versionedAtomStateMap.set(atom, atomState);
        }
      }
      return atomState;
    }
    return committedAtomStateMap.get(atom);
  };
  const setAtomState = (version, atom, atomState) => {
    if ((import.meta.env && import.meta.env.MODE) !== "production") {
      Object.freeze(atomState);
    }
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.set(atom, atomState);
    } else {
      const prevAtomState = committedAtomStateMap.get(atom);
      committedAtomStateMap.set(atom, atomState);
      if (!pendingMap.has(atom)) {
        pendingMap.set(atom, prevAtomState);
      }
    }
  };
  const createReadDependencies = (version, prevReadDependencies = /* @__PURE__ */ new Map(), dependencies) => {
    if (!dependencies) {
      return prevReadDependencies;
    }
    const readDependencies = /* @__PURE__ */ new Map();
    let changed = false;
    dependencies.forEach((atom) => {
      var _a;
      const revision = ((_a = getAtomState(version, atom)) == null ? void 0 : _a.r) || 0;
      readDependencies.set(atom, revision);
      if (prevReadDependencies.get(atom) !== revision) {
        changed = true;
      }
    });
    if (prevReadDependencies.size === readDependencies.size && !changed) {
      return prevReadDependencies;
    }
    return readDependencies;
  };
  const setAtomValue = (version, atom, value, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      v: value,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      y: true,
      // not invalidated
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    let changed = !(atomState == null ? void 0 : atomState.y);
    if (!atomState || !("v" in atomState) || // new value, or
    !Object.is(atomState.v, value)) {
      changed = true;
      ++nextAtomState.r;
      if (nextAtomState.d.has(atom)) {
        nextAtomState.d = new Map(nextAtomState.d).set(atom, nextAtomState.r);
      }
    } else if (nextAtomState.d !== atomState.d && (nextAtomState.d.size !== atomState.d.size || !Array.from(nextAtomState.d.keys()).every((a) => atomState.d.has(a)))) {
      changed = true;
      Promise.resolve().then(() => {
        flushPending(version);
      });
    }
    if (atomState && !changed) {
      return atomState;
    }
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomReadError = (version, atom, error, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      e: error,
      // set read error
      r: ((atomState == null ? void 0 : atomState.r) || 0) + 1,
      y: true,
      // not invalidated
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomSuspensePromise = (version, atom, suspensePromise, dependencies) => {
    const atomState = getAtomState(version, atom);
    if (atomState && "p" in atomState) {
      if (isEqualSuspensePromise(atomState.p, suspensePromise) && !isSuspensePromiseAlreadyCancelled(atomState.p)) {
        if (!atomState.y) {
          return { ...atomState, y: true };
        }
        return atomState;
      }
      cancelSuspensePromise(atomState.p);
    }
    addSuspensePromiseToCache(version, atom, suspensePromise);
    const nextAtomState = {
      p: suspensePromise,
      r: ((atomState == null ? void 0 : atomState.r) || 0) + 1,
      y: true,
      // not invalidated
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomPromiseOrValue = (version, atom, promiseOrValue, dependencies) => {
    if (promiseOrValue instanceof Promise) {
      const suspensePromise = createSuspensePromise(
        promiseOrValue,
        promiseOrValue.then((value) => {
          setAtomValue(version, atom, value, dependencies, suspensePromise);
        }).catch((e) => {
          if (e instanceof Promise) {
            if (isSuspensePromise(e)) {
              return e.then(() => {
                readAtomState(version, atom, true);
              });
            }
            return e;
          }
          setAtomReadError(version, atom, e, dependencies, suspensePromise);
        })
      );
      return setAtomSuspensePromise(
        version,
        atom,
        suspensePromise,
        dependencies
      );
    }
    return setAtomValue(
      version,
      atom,
      promiseOrValue,
      dependencies
    );
  };
  const setAtomInvalidated = (version, atom) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      const nextAtomState = {
        ...atomState,
        // copy everything
        y: false
        // invalidated
      };
      setAtomState(version, atom, nextAtomState);
    } else if ((import.meta.env && import.meta.env.MODE) !== "production") {
      console.warn("[Bug] could not invalidate non existing atom", atom);
    }
  };
  const readAtomState = (version, atom, force) => {
    if (!force) {
      const atomState = getAtomState(version, atom);
      if (atomState) {
        if (atomState.y && // not invalidated
        "p" in atomState && !isSuspensePromiseAlreadyCancelled(atomState.p)) {
          return atomState;
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom) {
            if (!mountedMap.has(a)) {
              readAtomState(version, a);
            } else {
              const aState = getAtomState(version, a);
              if (aState && !aState.y) {
                readAtomState(version, a);
              }
            }
          }
        });
        if (Array.from(atomState.d).every(([a, r]) => {
          const aState = getAtomState(version, a);
          return aState && !("p" in aState) && // has no suspense promise
          aState.r === r;
        })) {
          if (!atomState.y) {
            return { ...atomState, y: true };
          }
          return atomState;
        }
      }
    }
    const dependencies = /* @__PURE__ */ new Set();
    try {
      const promiseOrValue = atom.read((a) => {
        dependencies.add(a);
        const aState = a === atom ? getAtomState(version, a) : readAtomState(version, a);
        if (aState) {
          if ("e" in aState) {
            throw aState.e;
          }
          if ("p" in aState) {
            throw aState.p;
          }
          return aState.v;
        }
        if (hasInitialValue(a)) {
          return a.init;
        }
        throw new Error("no atom init");
      });
      return setAtomPromiseOrValue(version, atom, promiseOrValue, dependencies);
    } catch (errorOrPromise) {
      if (errorOrPromise instanceof Promise) {
        const suspensePromise = isSuspensePromise(errorOrPromise) && isSuspensePromiseAlreadyCancelled(errorOrPromise) ? copySuspensePromise(errorOrPromise) : createSuspensePromise(errorOrPromise, errorOrPromise);
        return setAtomSuspensePromise(
          version,
          atom,
          suspensePromise,
          dependencies
        );
      }
      return setAtomReadError(version, atom, errorOrPromise, dependencies);
    }
  };
  const readAtom = (readingAtom, version) => {
    const atomState = readAtomState(version, readingAtom);
    return atomState;
  };
  const addAtom = (version, addingAtom) => {
    let mounted = mountedMap.get(addingAtom);
    if (!mounted) {
      mounted = mountAtom(version, addingAtom);
    }
    return mounted;
  };
  const canUnmountAtom = (atom, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom));
  const delAtom = (version, deletingAtom) => {
    const mounted = mountedMap.get(deletingAtom);
    if (mounted && canUnmountAtom(deletingAtom, mounted)) {
      unmountAtom(version, deletingAtom);
    }
  };
  const invalidateDependents = (version, atom) => {
    const mounted = mountedMap.get(atom);
    mounted == null ? void 0 : mounted.t.forEach((dependent) => {
      if (dependent !== atom) {
        setAtomInvalidated(version, dependent);
        invalidateDependents(version, dependent);
      }
    });
  };
  const writeAtomState = (version, atom, update) => {
    let isSync = true;
    const writeGetter = (a, options) => {
      const aState = readAtomState(version, a);
      if ("e" in aState) {
        throw aState.e;
      }
      if ("p" in aState) {
        if (options == null ? void 0 : options.unstable_promise) {
          return aState.p.then(() => {
            const s = getAtomState(version, a);
            if (s && "p" in s && s.p === aState.p) {
              return new Promise((resolve) => setTimeout(resolve)).then(
                () => writeGetter(a, options)
              );
            }
            return writeGetter(a, options);
          });
        }
        if ((import.meta.env && import.meta.env.MODE) !== "production") {
          console.info(
            "Reading pending atom state in write operation. We throw a promise for now.",
            a
          );
        }
        throw aState.p;
      }
      if ("v" in aState) {
        return aState.v;
      }
      if ((import.meta.env && import.meta.env.MODE) !== "production") {
        console.warn(
          "[Bug] no value found while reading atom in write operation. This is probably a bug.",
          a
        );
      }
      throw new Error("no value found");
    };
    const setter = (a, v) => {
      let promiseOrVoid2;
      if (a === atom) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const versionSet = cancelAllSuspensePromiseInCache(a);
        versionSet.forEach((cancelledVersion) => {
          if (cancelledVersion !== version) {
            setAtomPromiseOrValue(cancelledVersion, a, v);
          }
        });
        const prevAtomState = getAtomState(version, a);
        const nextAtomState = setAtomPromiseOrValue(version, a, v);
        if (prevAtomState !== nextAtomState) {
          invalidateDependents(version, a);
        }
      } else {
        promiseOrVoid2 = writeAtomState(version, a, v);
      }
      if (!isSync) {
        flushPending(version);
      }
      return promiseOrVoid2;
    };
    const promiseOrVoid = atom.write(writeGetter, setter, update);
    isSync = false;
    return promiseOrVoid;
  };
  const writeAtom = (writingAtom, update, version) => {
    const promiseOrVoid = writeAtomState(version, writingAtom, update);
    flushPending(version);
    return promiseOrVoid;
  };
  const isActuallyWritableAtom = (atom) => !!atom.write;
  const mountAtom = (version, atom, initialDependent) => {
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom, mounted);
    if ((import.meta.env && import.meta.env.MODE) !== "production") {
      mountedAtoms.add(atom);
    }
    const atomState = readAtomState(void 0, atom);
    atomState.d.forEach((_, a) => {
      const aMounted = mountedMap.get(a);
      if (aMounted) {
        aMounted.t.add(atom);
      } else {
        if (a !== atom) {
          mountAtom(version, a, atom);
        }
      }
    });
    if (isActuallyWritableAtom(atom) && atom.onMount) {
      const setAtom = (update) => writeAtom(atom, update, version);
      const onUnmount = atom.onMount(setAtom);
      version = void 0;
      if (onUnmount) {
        mounted.u = onUnmount;
      }
    }
    return mounted;
  };
  const unmountAtom = (version, atom) => {
    var _a;
    const onUnmount = (_a = mountedMap.get(atom)) == null ? void 0 : _a.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom);
    if ((import.meta.env && import.meta.env.MODE) !== "production") {
      mountedAtoms.delete(atom);
    }
    const atomState = getAtomState(version, atom);
    if (atomState) {
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
      atomState.d.forEach((_, a) => {
        if (a !== atom) {
          const mounted = mountedMap.get(a);
          if (mounted) {
            mounted.t.delete(atom);
            if (canUnmountAtom(a, mounted)) {
              unmountAtom(version, a);
            }
          }
        }
      });
    } else if ((import.meta.env && import.meta.env.MODE) !== "production") {
      console.warn("[Bug] could not find atom state to unmount", atom);
    }
  };
  const mountDependencies = (version, atom, atomState, prevReadDependencies) => {
    const dependencies = new Set(atomState.d.keys());
    prevReadDependencies == null ? void 0 : prevReadDependencies.forEach((_, a) => {
      if (dependencies.has(a)) {
        dependencies.delete(a);
        return;
      }
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom);
        if (canUnmountAtom(a, mounted)) {
          unmountAtom(version, a);
        }
      }
    });
    dependencies.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.add(atom);
      } else if (mountedMap.has(atom)) {
        mountAtom(version, a, atom);
      }
    });
  };
  const flushPending = (version) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.forEach((atomState, atom) => {
        const committedAtomState = committedAtomStateMap.get(atom);
        if (atomState !== committedAtomState) {
          const mounted = mountedMap.get(atom);
          mounted == null ? void 0 : mounted.l.forEach((listener) => listener(version));
        }
      });
      return;
    }
    while (pendingMap.size) {
      const pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(([atom, prevAtomState]) => {
        const atomState = getAtomState(void 0, atom);
        if (atomState && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(void 0, atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
        if (prevAtomState && !prevAtomState.y && // invalidated
        (atomState == null ? void 0 : atomState.y)) {
          return;
        }
        const mounted = mountedMap.get(atom);
        mounted == null ? void 0 : mounted.l.forEach((listener) => listener());
      });
    }
    if ((import.meta.env && import.meta.env.MODE) !== "production") {
      stateListeners.forEach((l) => l());
    }
  };
  const commitVersionedAtomStateMap = (version) => {
    const versionedAtomStateMap = getVersionedAtomStateMap(version);
    versionedAtomStateMap.forEach((atomState, atom) => {
      const prevAtomState = committedAtomStateMap.get(atom);
      if (!prevAtomState || atomState.r > prevAtomState.r || atomState.y !== prevAtomState.y || atomState.r === prevAtomState.r && atomState.d !== prevAtomState.d) {
        committedAtomStateMap.set(atom, atomState);
        if (atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(version, atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
      }
    });
  };
  const commitAtom = (_atom, version) => {
    if (version) {
      commitVersionedAtomStateMap(version);
    }
    flushPending(void 0);
  };
  const subscribeAtom = (atom, callback, version) => {
    const mounted = addAtom(version, atom);
    const listeners = mounted.l;
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
      delAtom(version, atom);
    };
  };
  const restoreAtoms = (values, version) => {
    for (const [atom, value] of values) {
      if (hasInitialValue(atom)) {
        setAtomPromiseOrValue(version, atom, value);
        invalidateDependents(version, atom);
      }
    }
    flushPending(version);
  };
  if ((import.meta.env && import.meta.env.MODE) !== "production") {
    return {
      [READ_ATOM]: readAtom,
      [WRITE_ATOM]: writeAtom,
      [COMMIT_ATOM]: commitAtom,
      [SUBSCRIBE_ATOM]: subscribeAtom,
      [RESTORE_ATOMS]: restoreAtoms,
      [DEV_SUBSCRIBE_STATE]: (l) => {
        stateListeners.add(l);
        return () => {
          stateListeners.delete(l);
        };
      },
      [DEV_GET_MOUNTED_ATOMS]: () => mountedAtoms.values(),
      [DEV_GET_ATOM_STATE]: (a) => committedAtomStateMap.get(a),
      [DEV_GET_MOUNTED]: (a) => mountedMap.get(a)
    };
  }
  return {
    [READ_ATOM]: readAtom,
    [WRITE_ATOM]: writeAtom,
    [COMMIT_ATOM]: commitAtom,
    [SUBSCRIBE_ATOM]: subscribeAtom,
    [RESTORE_ATOMS]: restoreAtoms
  };
};

const createScopeContainer = (initialValues, unstable_createStore) => {
  const store = unstable_createStore ? unstable_createStore(initialValues).SECRET_INTERNAL_store : createStore(initialValues);
  return { s: store };
};
const ScopeContextMap = /* @__PURE__ */ new Map();
const getScopeContext = (scope) => {
  if (!ScopeContextMap.has(scope)) {
    ScopeContextMap.set(scope, createContext(createScopeContainer()));
  }
  return ScopeContextMap.get(scope);
};

function atom(read, write) {
  return atom$1(read, write);
}

function useAtomValue$1(atom, scope) {
  const ScopeContext = getScopeContext(scope);
  const scopeContainer = useContext(ScopeContext);
  const { s: store, v: versionFromProvider } = scopeContainer;
  const getAtomValue = (version2) => {
    const atomState = store[READ_ATOM](atom, version2);
    if ((import.meta.env && import.meta.env.MODE) !== "production" && !atomState.y) {
      throw new Error("should not be invalidated");
    }
    if ("e" in atomState) {
      throw atomState.e;
    }
    if ("p" in atomState) {
      throw atomState.p;
    }
    if ("v" in atomState) {
      return atomState.v;
    }
    throw new Error("no atom value");
  };
  const [[version, valueFromReducer, atomFromReducer], rerenderIfChanged] = useReducer(
    (prev, nextVersion) => {
      const nextValue = getAtomValue(nextVersion);
      if (Object.is(prev[1], nextValue) && prev[2] === atom) {
        return prev;
      }
      return [nextVersion, nextValue, atom];
    },
    versionFromProvider,
    (initialVersion) => {
      const initialValue = getAtomValue(initialVersion);
      return [initialVersion, initialValue, atom];
    }
  );
  let value = valueFromReducer;
  if (atomFromReducer !== atom) {
    rerenderIfChanged(version);
    value = getAtomValue(version);
  }
  useEffect(() => {
    const { v: versionFromProvider2 } = scopeContainer;
    if (versionFromProvider2) {
      store[COMMIT_ATOM](atom, versionFromProvider2);
    }
    const unsubscribe = store[SUBSCRIBE_ATOM](
      atom,
      rerenderIfChanged,
      versionFromProvider2
    );
    rerenderIfChanged(versionFromProvider2);
    return unsubscribe;
  }, [store, atom, scopeContainer]);
  useEffect(() => {
    store[COMMIT_ATOM](atom, version);
  });
  useDebugValue(value);
  return value;
}

function useSetAtom(atom, scope) {
  const ScopeContext = getScopeContext(scope);
  const { s: store, w: versionedWrite } = useContext(ScopeContext);
  const setAtom = useCallback(
    (update) => {
      if ((import.meta.env && import.meta.env.MODE) !== "production" && !("write" in atom)) {
        throw new Error("not writable atom");
      }
      const write = (version) => store[WRITE_ATOM](atom, update, version);
      return versionedWrite ? versionedWrite(write) : write();
    },
    [store, versionedWrite, atom]
  );
  return setAtom;
}

function useAtom(atom, scope) {
  if ("scope" in atom) {
    console.warn(
      "atom.scope is deprecated. Please do useAtom(atom, scope) instead."
    );
    scope = atom.scope;
  }
  return [
    useAtomValue$1(atom, scope),
    // We do wrong type assertion here, which results in throwing an error.
    useSetAtom(atom, scope)
  ];
}

function atomFamily(initializeAtom, areEqual) {
  let shouldRemove = null;
  const atoms = /* @__PURE__ */ new Map();
  const createAtom = (param) => {
    let item;
    if (areEqual === void 0) {
      item = atoms.get(param);
    } else {
      for (const [key, value] of atoms) {
        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }
    if (item !== void 0) {
      if (shouldRemove == null ? void 0 : shouldRemove(item[1], param)) {
        createAtom.remove(param);
      } else {
        return item[0];
      }
    }
    const newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    return newAtom;
  };
  createAtom.remove = (param) => {
    if (areEqual === void 0) {
      atoms.delete(param);
    } else {
      for (const [key] of atoms) {
        if (areEqual(key, param)) {
          atoms.delete(key);
          break;
        }
      }
    }
  };
  createAtom.setShouldRemove = (fn) => {
    shouldRemove = fn;
    if (!shouldRemove)
      return;
    for (const [key, value] of atoms) {
      if (shouldRemove(value[1], key)) {
        atoms.delete(key);
      }
    }
  };
  return createAtom;
}
atom(() => []);

const useAtomValue = (...args) => {
  console.warn("[DEPRECATED]: use `useAtomValue` from `jotai` instead.");
  return useAtomValue$1(...args);
};
const useUpdateAtom = (...args) => {
  console.warn("[DEPRECATED]: use `useSetAtom` from `jotai` instead.");
  return useSetAtom(...args);
};

let useTheme;
let usePagePaths;
let usePageModule;
let useStaticData;
let useAllPagesOutlines;

// TODO: simplify this
// there is no easy way to handle the hmr of module such as `/@react-pages/pages/page1` so stop trying it
// https://github.com/vitejs/vite-plugin-react-pages/pull/19#discussion_r604251258

const initialPagePaths = Object.keys(initialPages);

// This HMR code assumes that our Jotai atoms are always managed
// by the same Provider. It also mutates during render, which is
// generally discouraged, but in this case it's okay.
if (import.meta.hot) {
  let setTheme;
  import.meta.hot.accept('/@react-pages/theme', module => {
    // console.log('@@hot update /@react-pages/theme', module)
    if (!module) {
      console.error('unexpected hot module', module);
      return;
    }
    setTheme?.({
      Theme: module.default
    });
  });
  const themeAtom = atom({
    Theme: initialTheme
  });
  useTheme = () => {
    const [{
      Theme
    }, set] = useAtom(themeAtom);
    setTheme = set;
    return Theme;
  };
  let setPages;
  import.meta.hot.accept('/@react-pages/pages', module => {
    // console.log('@@hot update /@react-pages/pages', module)
    if (!module) {
      console.error('unexpected hot module', module);
      return;
    }
    setPages?.(module.default);
  });
  let setAllPagesOutlines;
  import.meta.hot.accept('/@react-pages/allPagesOutlines', module => {
    // console.log('@@hot update /@react-pages/allPagesOutlines', module)
    if (!module) {
      console.error('unexpected hot module', module);
      return;
    }
    setAllPagesOutlines?.(module);
  });
  const pagesAtom = atom(initialPages);
  const pagePathsAtom = atom(initialPagePaths.sort());
  const staticDataAtom = atom(toStaticData(initialPages));
  const allPagesOutlinesAtom = atom(initialPages);
  const setPagesAtom = atom(null, (get, set, newPages) => {
    let newStaticData;
    const pages = get(pagesAtom);
    for (const path in newPages) {
      const newPage = newPages[path];
      const page = pages[path];

      // Avoid changing the identity of `page.staticData` unless
      // a change is detected. This prevents unnecessary renders
      // of components that depend on `useStaticData(path)` call.
      if (page && dequal(page.staticData, newPage.staticData)) {
        newPage.staticData = page.staticData;
      } else {
        newStaticData ??= {};
        newStaticData[path] = newPage.staticData;
      }
    }

    // detect deleted pages
    for (const path in pages) {
      if (!newPages[path]) {
        newStaticData ??= {};
        newStaticData[path] = undefined;
      }
    }

    // Update the `pagesAtom` every time, since no hook uses it directly.
    set(pagesAtom, newPages);

    // Avoid re-rendering `useStaticData()` callers if no data changed.
    if (newStaticData) {
      newStaticData = {
        ...get(staticDataAtom),
        ...newStaticData
      };
      // filter out deleted paths
      newStaticData = Object.fromEntries(Object.entries(newStaticData).filter(([k, v]) => v !== undefined));
      set(staticDataAtom, newStaticData);
    }

    // Avoid re-rendering `usePagePaths()` callers if no paths were added/deleted.
    const newPagePaths = Object.keys(newPages).sort();
    if (!dequal(get(pagePathsAtom), newPagePaths)) {
      set(pagePathsAtom, newPagePaths);
    }
  });
  const dataAtoms = atomFamily(path => atom(get => {
    const pages = get(pagesAtom);
    return pages[path];
  }));
  const staticDataAtoms = atomFamily(path => atom(get => {
    const pages = get(pagesAtom);
    const page = pages[path];
    return page?.staticData;
  }));
  usePagePaths = () => {
    setPages = useUpdateAtom(setPagesAtom);
    return useAtomValue(pagePathsAtom);
  };
  usePageModule = pagePath => {
    const data = useAtomValue(dataAtoms(pagePath));
    return useMemo(() => data?.data(), [data]);
  };
  useStaticData = (pagePath, selector) => {
    const staticData = pagePath ? staticDataAtoms(pagePath) : staticDataAtom;
    if (selector) {
      const selection = useMemo(() => atom(get => selector(get(staticData))), [staticData]);
      return useAtomValue(selection);
    }
    return useAtomValue(staticData);
  };
  useAllPagesOutlines = timeout => {
    const [data, set] = useAtom(allPagesOutlinesAtom);
    setAllPagesOutlines = set;
    useEffect(() => {
      setTimeout(() => {
        import('/@react-pages/allPagesOutlines').then(mod => {
          set(mod);
        });
      }, timeout);
    }, []);
    return data;
  };
}

// Static mode
else {
  useTheme = () => initialTheme;
  usePagePaths = () => initialPagePaths;
  usePageModule = path => {
    const page = initialPages[path];
    return useMemo(() => page?.data(), [page]);
  };
  useStaticData = (path, selector) => {
    if (path) {
      const page = initialPages[path];
      const staticData = page?.staticData || {};
      return selector ? selector(staticData) : staticData;
    }
    return toStaticData(initialPages);
  };
  useAllPagesOutlines = timeout => {
    const [data, set] = useState();
    useEffect(() => {
      setTimeout(() => {
        import('/@react-pages/allPagesOutlines').then(mod => {
          set(mod);
        });
      }, timeout);
    }, []);
    return data;
  };
}
function toStaticData(pages) {
  const staticData = {};
  for (const path in pages) {
    staticData[path] = pages[path].staticData;
  }
  return staticData;
}
if (globalThis['__vite_pages_use_static_data']) {
  throw new Error(`[vite-pages] global hooks (.e.g useStaticData) already exists on window. It means there are multiple vite-pages runtime in this page. Please report this to vite-pages.`);
} else {
  globalThis['__vite_pages_use_static_data'] = useStaticData;
  globalThis['__vite_pages_use_all_pages_outlines'] = useAllPagesOutlines;
}

const isSSR = import.meta.env.SSR;

// fix warning of useLayoutEffect during ssr
// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;

function useAppState(routePath) {
  const dataCache = useContext(dataCacheCtx);
  const setDataCache = useContext(setDataCacheCtx);
  const [loadState, setLoadState] = useState(() => {
    if (dataCache[routePath]) {
      // this is a ssr or hydration
      // this page's data has already been loaded
      return {
        type: 'loaded',
        routePath
      };
    }
    if (routePath === '/internal-404-page') {
      // this is a ssr or hydration
      // for the 404 page
      return {
        type: '404',
        routePath
      };
    }
    return {
      type: 'loading',
      routePath
    };
  });
  const onLoadState = (type, routePath, error) => setLoadState({
    type,
    routePath,
    error
  });
  const loading = usePageModule(routePath);
  const loadingRef = useRef();
  useIsomorphicLayoutEffect(() => {
    loadingRef.current = loading;
    if (!loading) {
      onLoadState('404', routePath);
    } else {
      if (dataCache[routePath]) {
        /**
         * Data already exists. Possible causes:
         * - User navigates back to a loaded page.
         * - This is a hmr update during dev. The dataCache[routePath] contains the old data. We need to load() the new data (but don't show loading state).
         * - This is a ssr client-side render. The page data is loaded before hydration.
         */
        onLoadState('loaded', routePath);
        if (import.meta.hot) {
          // If user navigates back to a loaded page during dev
          // this will also be executed.
          // But in this case, it will import() the same es module again,
          // which is handled by the browser es module cache.
          // So it won't load the module from dev server again and won't evaluate the module again.
          load();
        }
      } else {
        onLoadState('loading', routePath);
        load();
      }
    }
    function load() {
      loading.then(page => loading === loadingRef.current && unstable_batchedUpdates(() => {
        onLoadState('loaded', routePath);
        setDataCache(prev => ({
          ...prev,
          [routePath]: page.default
        }));
      }), error => loading === loadingRef.current && onLoadState('load-error', routePath, error));
    }
  }, [loading]);
  return loadState;
}

const PageLoader = /*#__PURE__*/React.memo(({
  routePath
}) => {
  const Theme = useTheme();
  const loadState = useAppState(routePath);
  const dataCache = useContext(dataCacheCtx);
  return /*#__PURE__*/jsx(Theme, {
    loadState: loadState,
    loadedData: dataCache
  });
});

const App = () => {
  const pageRoutes = usePagePaths().filter(path => path !== '/404').map(path => {
    return {
      path,
      element: /*#__PURE__*/jsx(PageLoader, {
        routePath: path
      })
    };
  });
  pageRoutes.push({
    path: '*',
    element: /*#__PURE__*/jsx(UseLocation, {
      children: location => /*#__PURE__*/jsx(PageLoader, {
        routePath: location.pathname
      })
    })
  });
  const routesRender = useRoutes(pageRoutes);
  return routesRender;
};
function UseLocation({
  children
}) {
  const location = useLocation();
  // console.log('###UseLocation', location)
  return children(location);
}

export { App as A, dataCacheCtx as d, setDataCacheCtx as s };
//# sourceMappingURL=App-caf536e2.js.map
