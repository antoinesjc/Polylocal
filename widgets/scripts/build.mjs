// Bundles each widget into one file in dist/ for the website.
// Run with: npm run build
import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const path = (p) => new URL(p, import.meta.url).pathname;

const WIDGETS = [
  { entry: '../src/map/polylocal-map.js', out: '../dist/polylocal-map.js', name: 'polylocal-map' },
  { entry: '../src/home/polylocal-home.js', out: '../dist/polylocal-home.js', name: 'polylocal-home' },
  { entry: '../src/digital-marketing/polylocal-digital-marketing.js', out: '../dist/polylocal-digital-marketing.js', name: 'polylocal-digital-marketing' },
  { entry: '../src/lead-generation/polylocal-lead-generation.js', out: '../dist/polylocal-lead-generation.js', name: 'polylocal-lead-generation' },
  { entry: '../src/about/polylocal-about.js', out: '../dist/polylocal-about.js', name: 'polylocal-about' },
  { entry: '../src/insights/polylocal-insights.js', out: '../dist/polylocal-insights.js', name: 'polylocal-insights' },
  { entry: '../src/articles/polylocal-article.js', out: '../dist/polylocal-article.js', name: 'polylocal-article' },
];

for (const w of WIDGETS) {
  await build({
    entryPoints: [path(w.entry)],
    outfile: path(w.out),
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2019', 'chrome90', 'safari14', 'firefox90'],
    legalComments: 'inline',
    banner: { js: `/*! ${w.name} v${pkg.version} | polylocal.eu | Map data: Natural Earth (public domain) */` },
  });
  console.log(`Built ${w.out.replace('../', '')}`);
}
