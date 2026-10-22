# Polylocal website widgets

Drop-in widgets for the Odoo site at polylocal.eu.

**Every widget is bilingual.** It shows English or Traditional Chinese (Taiwan) and switches by itself to match the language of the page it sits on, so one embed works on both versions of the site. All links inside a widget also point to the matching language (`/about-us` on the English site, `/zh_TW/about-us` on the Chinese site).

| Widget | Script | What it is |
| --- | --- | --- |
| `<polylocal-home>` | `dist/polylocal-home.js` | The whole homepage: hero, map, press and partners, problem, two directions, services, process, team, insights, call to action |
| `<polylocal-digital-marketing>` | `dist/polylocal-digital-marketing.js` | The Digital Marketing service page |
| `<polylocal-lead-generation>` | `dist/polylocal-lead-generation.js` | The B2B Lead Generation service page |
| `<polylocal-map>` | `dist/polylocal-map.js` | The interactive Europe and Asia map on its own (already included in the homepage) |

![Brussels selected with the Europe zoom (English), and Taipei selected (Traditional Chinese)](demo/preview.png)

## Hosting

The widgets are served by GitHub Pages straight from this repo (`main` branch, root folder), at `https://antoinesjc.github.io/Polylocal/widgets/dist/`. Every push to `main` updates the live site within a few minutes. To enable it once: repo **Settings > Pages > Deploy from a branch > main / (root)**. The empty `.nojekyll` file at the root tells Pages to serve the files as they are.

To freeze a page on a specific version instead, load it from jsDelivr with a commit code: `https://cdn.jsdelivr.net/gh/antoinesjc/polylocal@<commit>/widgets/dist/<file>.js`.

## Add the homepage in Odoo

1. Open the homepage in the website editor and click **Edit**.
2. Remove the existing blocks between the header and the footer.
3. Drag one **Embed Code** block onto the page.
4. In the block options, set its top and bottom padding to 0.
5. Replace the block's content with:

```html
<polylocal-home></polylocal-home>
<script src="https://antoinesjc.github.io/Polylocal/widgets/dist/polylocal-home.js" defer></script>
```

(This address always serves the latest version on `main`, so the embed never needs updating.)

6. Save, then open the published page. Odoo does not run embedded scripts in edit mode, so the block looks empty while editing.
7. Switch the site to 繁體中文 to check the Chinese version. No second embed is needed.

The Odoo header, menu, language switcher and footer stay as they are; the widget is everything in between. It stretches itself to the full width of the window even though Odoo places embed blocks inside a centred container. Add the `contained` attribute (`<polylocal-home contained>`) to keep it inside the container instead.

If the published page stays empty, Odoo has removed the `<script>` line. Put that line in **Website > Configuration > Settings > Custom Code (head)** instead, and keep only the `<polylocal-home></polylocal-home>` tag in the block.

### Links the homepage uses

These must exist on the Odoo site (they do today): `/digital-marketing`, `/b2b-lead-generation`, `/about-us`, `/contactus`, `/blog`, `/blog/taiwan-market-trends-15`, `/blog/b2b-14`, `/blog/case-studies-11`. The "Book a free consultation" button goes to `/contactus`, so Odoo's own contact form keeps handling enquiries.

## Add the Digital Marketing page

Same steps as the homepage, on the `/digital-marketing` page, with:

```html
<polylocal-digital-marketing></polylocal-digital-marketing>
<script src="https://antoinesjc.github.io/Polylocal/widgets/dist/polylocal-digital-marketing.js" defer></script>
```

Its buttons go to `/contactus` and `/b2b-lead-generation` (with `/zh_TW` on the Chinese site).

## Add the B2B Lead Generation page

Same steps as the homepage, on the `/b2b-lead-generation` page, with:

```html
<polylocal-lead-generation></polylocal-lead-generation>
<script src="https://antoinesjc.github.io/Polylocal/widgets/dist/polylocal-lead-generation.js" defer></script>
```

Its buttons go to `/contactus` and `/digital-marketing` (with `/zh_TW` on the Chinese site).

## Add only the map

```html
<polylocal-map></polylocal-map>
<script src="https://antoinesjc.github.io/Polylocal/widgets/dist/polylocal-map.js" defer></script>
```

| Map attribute | Values | Default |
| --- | --- | --- |
| `hub` | `taipei`, `warsaw`, `brussels` | `warsaw` |
| `view` | `corridor`, `europe` | `corridor` |
| `theme` | `dark`, `light` | `dark` |
| `cta-href` / `cta-href-zh` | link for "How we work on the ground" | `/about-us` / `/zh_TW/about-us` |

| Hub | Region highlighted |
| --- | --- |
| Taipei | Taiwan, Mainland China, Singapore |
| Warsaw | Poland, plus Czechia, Slovakia, Hungary, Romania and the Baltic states |
| Brussels | The 27 EU member states |

## How the language is chosen

In this order, for every widget:

1. A `lang` attribute on the widget, e.g. `<polylocal-home lang="zh-TW">`, forces a language.
2. A `/zh_TW/` segment in the page address, which is how Odoo serves the Chinese site.
3. The page's `<html lang>`, which Odoo sets to `zh-TW` on Chinese pages.

Anything starting with `zh` shows Chinese; everything else shows English. The logic lives in [`src/shared/lang.js`](src/shared/lang.js).

## Changing text

All wording lives in one file per widget, with English and Chinese side by side:

- Homepage: [`src/home/i18n.js`](src/home/i18n.js)
- Digital Marketing: [`src/digital-marketing/i18n.js`](src/digital-marketing/i18n.js)
- B2B Lead Generation: [`src/lead-generation/i18n.js`](src/lead-generation/i18n.js)
- Map: [`src/map/i18n.js`](src/map/i18n.js)
- Shared by all pages (logo strip labels, closing checklist, "Contact us"): [`src/shared/common.js`](src/shared/common.js)

Then rebuild:

```bash
cd widgets
npm install      # first time only
npm run build    # writes dist/
```

Commit and push the updated `dist/` files to `main`. The site loads the widgets from GitHub Pages, so it picks up the new version within a few minutes. Nothing needs to change in Odoo.

## Adding a new widget

1. Create `src/<name>/` with the component and an `i18n.js` holding `en` and `zh-TW` text. A full page extends `PolylocalPage` from `src/shared/page.js`, which handles language switching, full-width layout, the press and partner strip (`h.proof()`, used on the homepage only) and the closing call to action (`h.cta()`). A smaller widget uses `detectLang`, `localHref` and `watchLang` from `src/shared/lang.js`.
2. Add it to the list in `scripts/build.mjs`.
3. Add a demo page in `demo/`.

## Changing the map

Regions, cities and framing are set in [`scripts/build-map-data.mjs`](scripts/build-map-data.mjs) (countries use ISO 3166 numeric codes). Run `npm run all` to regenerate the map data and rebuild.

## Preview locally

```bash
cd widgets
python3 -m http.server 8000
# homepage: http://localhost:8000/demo/home.html
# digital marketing: http://localhost:8000/demo/digital-marketing.html
# b2b lead generation: http://localhost:8000/demo/lead-generation.html
# map only: http://localhost:8000/demo/map.html
```

Both demo pages have buttons to switch the page language between English and 繁體中文.

## Files

```
widgets/
├── dist/                    the files the website loads
├── assets/logos/            press and partner logos (single-colour)
├── src/shared/               language detection, page base, shared styles and text
├── src/home/                homepage widget and its text
├── src/digital-marketing/   Digital Marketing page widget, its text and styles
├── src/lead-generation/     B2B Lead Generation page widget, its text and styles
├── src/map/                 map widget, its text and generated map shapes
├── scripts/                 map data and bundle builders
└── demo/                    local preview pages
```

Map data: [Natural Earth](https://www.naturalearthdata.com/) 1:50m, public domain, via [world-atlas](https://github.com/topojson/world-atlas).
