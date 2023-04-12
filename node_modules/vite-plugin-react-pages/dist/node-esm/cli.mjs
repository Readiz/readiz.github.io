import chalk from 'chalk';
import fs from 'fs-extra';
import minimist from 'minimist';
import path$1 from 'node:path';
import { build, resolveConfig } from 'vite';
import * as path from 'path';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { minify } from 'html-minifier-terser';
import { pathToFileURL } from 'node:url';

const PKG_ROOT = resolve(fileURLToPath(import.meta.url), '../../..');
const CLIENT_PATH = resolve(PKG_ROOT, 'dist/client-bundles');

const minifyOptions = {
  keepClosingSlash: true,
  removeRedundantAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true
};
async function ssrBuild(viteConfig, argv, ssrConfig) {
  // ssr build should not use hash router
  // if (viteOptions?.define?.['__HASH_ROUTER__'])
  //   viteOptions!.define!['__HASH_ROUTER__'] = false
  const root = viteConfig.root;
  let outDir = viteConfig.build?.outDir ?? 'dist';
  outDir = path.resolve(root, outDir);
  await fs.emptyDir(outDir);
  const ssrOutDir = path.join(outDir, 'ssr-tmp');
  const clientOutDir = path.join(outDir, 'client-tmp');
  console.log('\n\npreparing vite pages ssr bundle...');
  await build({
    root,
    configFile: viteConfig.configFile,
    // mode: "development",
    build: {
      ssr: true,
      cssCodeSplit: false,
      rollupOptions: {
        input: path.join(CLIENT_PATH, 'entries', 'ssg-server.mjs'),
        // preserveEntrySignatures: 'allow-extension',
        output: {
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name]-[hash].mjs'
        }
      },
      outDir: ssrOutDir,
      minify: false
    },
    ssr: {
      // `vite-pages-theme-doc/dist/index.js` have `import './index.css'`
      // so it needs to be bundled by vite before executed by node.js.
      // This is coupled to theme-doc,
      // but we don't want to ask users to put this in their vite config.
      // So let's put it here :)
      noExternal: ['vite-pages-theme-doc']
    }
  });
  console.log('\n\nrendering html...');
  const ssrPluginPromises = [];
  global['register_vite_pages_ssr_plugin'] = importSSRPlugin => {
    ssrPluginPromises.push(importSSRPlugin());
  };
  process.env.VITE_PAGES_IS_SSR = 'true';
  const {
    renderToString,
    ssrData
  } = await import(pathToFileURL(path.join(ssrOutDir, 'ssg-server.mjs')).toString());
  const ssrPlugins = await Promise.all(ssrPluginPromises);
  ssrPlugins.forEach((plugin, index) => {
    // validate ssr plugins
    if (!plugin?.id) {
      console.error('invalid ssr plugins:', ssrPlugins);
      throw new Error('invalid ssr plugin: no plugin id');
    }
    const idx = ssrPlugins.findIndex(p => p.id === plugin.id);
    if (idx !== index) {
      console.error('invalid ssr plugins:', ssrPlugins);
      throw new Error(`duplicate ssr plugin: ${plugin.id}`);
    }
  });
  const pagePaths = Object.keys(ssrData);
  console.log('\n\npreparing vite pages client bundle...');
  const _clientResult = await build({
    root,
    configFile: viteConfig.configFile,
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        input: path.join(CLIENT_PATH, 'entries', 'ssg-client.mjs'),
        preserveEntrySignatures: 'allow-extension'
      },
      assetsDir: 'assets',
      outDir: clientOutDir
    }
  });
  let clientResult;
  if (Array.isArray(_clientResult)) {
    if (_clientResult.length !== 1) throw new Error(`expect viteBuild to have only one BuildResult`);
    clientResult = _clientResult[0];
  } else {
    clientResult = _clientResult;
  }
  const entryChunk = (() => {
    const _entryChunks = clientResult.output.filter(chunkOrAsset => {
      return chunkOrAsset.type === 'chunk' && chunkOrAsset.isEntry;
    });
    if (_entryChunks.length !== 1) {
      throw new Error(`Expect one entryChunk. Got ${_entryChunks.length}.`);
    }
    return _entryChunks[0];
  })();
  const cssChunks = clientResult.output.filter(chunk => {
    return chunk.type === 'asset' && chunk.fileName.endsWith('.css');
  });
  const basePath = viteConfig.base ?? '/';
  const htmlCode = await fs.readFile(path.join(root, 'index.html'), 'utf-8');
  const RootElementInjectPoint = '<div id="root"></div>';
  if (!htmlCode.includes(RootElementInjectPoint)) {
    throw new Error(`Your index.html should contain the RootElementInjectPoint: "${RootElementInjectPoint}" (it must appear exactly as-is)`);
  }
  const EntryModuleInjectPoint = '<script type="module" src="/@pages-infra/main.js"></script>';
  if (!htmlCode.includes(EntryModuleInjectPoint)) {
    throw new Error(`Your index.html should contain EntryModuleInjectPoint: "${EntryModuleInjectPoint}" (it must appear exactly as-is)`);
  }
  const CSSInjectPoint = '</head>';
  if (!htmlCode.includes(CSSInjectPoint)) {
    throw new Error(`Your index.html should contain CSSInjectPoint: "${CSSInjectPoint}" (it must appear exactly as-is)`);
  }
  await Promise.all(pagePaths.map(async pagePath => {
    // currently not support pages with path params
    // .e.g /users/:userId
    if (pagePath.match(/\/:\w/)) return;
    const html = await renderHTML(pagePath);
    // TODO: injectPreload
    // preload data module for this page
    // html = injectPreload(html, "path/to/page/data")
    const writePath = path.join(clientOutDir, pagePath.replace(/^\//, ''), 'index.html');
    await fs.ensureDir(path.dirname(writePath));
    await fs.writeFile(writePath, html);
    if (pagePath !== '/') {
      // should write to both /pagePath/index.html and /pagePath.html
      const writePath2 = path.join(clientOutDir, pagePath.replace(/^\//, '') + '.html');
      await fs.ensureDir(path.dirname(writePath2));
      await fs.writeFile(writePath2, html);
    }
  }));
  const html404Path = path.join(clientOutDir, '404.html');
  // pass in a pagePath that won't match any defined page
  // so the render result will be 404 page
  const html404 = await renderHTML('/internal-404-page');
  await fs.writeFile(html404Path, html404);
  // move 404 page to `/` if `/` doesn't exists
  if (!pagePaths.includes('/')) {
    await fs.copy(html404Path, path.join(clientOutDir, 'index.html'));
  }
  await fs.copy(clientOutDir, outDir);
  await fs.remove(clientOutDir);
  await fs.remove(ssrOutDir);
  console.log('vite pages ssr build finished successfully.');
  return;
  async function renderHTML(pagePath) {
    const {
      contentText,
      styleText
    } = renderToString(pagePath, ssrPlugins);
    const ssrInfo = {
      routePath: pagePath
    };
    let html = htmlCode.replace(RootElementInjectPoint,
    // let client know the current ssr page
    `<script>window._vitePagesSSR=${JSON.stringify(ssrInfo)};</script>
<div id="root">${contentText}</div>`);
    const cssInject = cssChunks.map(cssChunk => {
      return `<link rel="stylesheet" href="${basePath}${cssChunk.fileName}" />`;
    });
    cssInject.push(styleText);
    html = html.replace(CSSInjectPoint, `${cssInject.join('\n')}
${CSSInjectPoint}`);
    html = html.replace(EntryModuleInjectPoint, `<script type="module" src="${basePath}${entryChunk.fileName}"></script>`);
    const minifyHtml = argv?.minifyHtml ?? ssrConfig?.minifyHtml ?? true;
    if (minifyHtml) {
      const minifiedHtml = await minify(html, minifyOptions);
      return minifiedHtml;
    }
    return html;
  }
}

const argv = minimist(process.argv.slice(2));
console.log(chalk.cyan(`vite-pages v${fs.readJSONSync(path$1.resolve(PKG_ROOT, 'package.json')).version}`));
// console.log(chalk.cyan(`vite v${require('vite/package.json').version}`))

// cli usage: vite-pages ssr [root] [--minifyHtml] [vite options like: --configFile, --base, --logLevel, --mode, --build.outDir, etc.]
const [command, root] = argv._;
if (root) {
  argv.root = root;
}

// make `--minifyHtml=false` to be treated as boolean false instead of string "false"
Object.entries(argv).forEach(([key, value]) => {
  if (value === 'false') argv[key] = false;
})

// console.log('@@argv', argv)
;
(async () => {
  if (!command || command === 'ssr') {
    const toBeResovledConfig = {
      ...argv
    };

    // user can pass in vite config like --outDir or --configFile
    const viteConfig = await resolveConfig(toBeResovledConfig, 'build', 'production', 'production');
    const thisPlugin = viteConfig.plugins.find(plugin => {
      return plugin.name === 'vite-plugin-react-pages';
    });
    //@ts-expect-error
    const ssrConfig = thisPlugin?.vitePagesStaticSiteGeneration;
    await ssrBuild(viteConfig, argv, ssrConfig).catch(err => {
      console.error(chalk.red(`ssr error:\n`), err);
      process.exit(1);
    });
  } else {
    console.error(`[vite-pages] Invalid command. CLI usage: vite-pages ssr [root] [--minifyHtml] [vite options like: --configFile, --base, --logLevel, --mode, --build.outDir, etc.]`);
  }
})();
//# sourceMappingURL=cli.mjs.map
