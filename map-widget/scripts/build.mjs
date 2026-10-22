// Bundles the widget into a single file for the website: dist/polylocal-map.js
// Run with: npm run build
import { build } from 'esbuild';

const pkg = JSON.parse(await (await import('node:fs/promises')).readFile(new URL('../package.json', import.meta.url), 'utf8'));
const banner = { js: `/*! polylocal-map v${pkg.version} | Map data: Natural Earth (public domain) */` };

await build({
  entryPoints: [new URL('../src/polylocal-map.js', import.meta.url).pathname],
  outfile: new URL('../dist/polylocal-map.js', import.meta.url).pathname,
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2019', 'chrome90', 'safari14', 'firefox90'],
  legalComments: 'inline',
  banner,
});
console.log('Built dist/polylocal-map.js');
