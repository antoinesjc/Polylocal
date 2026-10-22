// Shared helpers for every polylocal.eu widget.
// Rule for all widgets: English and Traditional Chinese (Taiwan), switching
// automatically with the language of the Odoo page they sit on.

export const LANGS = ['en', 'zh-TW'];

/**
 * Pick the widget language.
 * Order: the element's own `lang` attribute, then the URL (Odoo serves the
 * Chinese site under /zh_TW/), then <html lang> (Odoo sets "zh-TW").
 * Anything starting with "zh" is Chinese; everything else is English.
 */
export function detectLang(el) {
  const own = el.getAttribute('lang');
  const fromUrl = /(^|\/)zh[_-]?(tw|hant)?(\/|$)/i.test(location.pathname) ? 'zh-TW' : '';
  const inherited = el.closest('[lang]')?.getAttribute('lang') || document.documentElement.lang || '';
  const raw = (own || fromUrl || inherited || 'en').toLowerCase();
  return raw.startsWith('zh') ? 'zh-TW' : 'en';
}

/** Turn a site path into the right one for the language: /about-us -> /zh_TW/about-us */
export function localHref(path, lang) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return lang === 'zh-TW' ? `/zh_TW${path === '/' ? '' : path}` : path;
}

/** Call `cb` whenever the page language changes (Odoo can swap <html lang> without a reload). */
export function watchLang(cb) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  return () => obs.disconnect();
}

/** Load the brand fonts once per page. Fonts must live in the document, not the shadow root. */
export function loadFonts() {
  if (document.getElementById('polylocal-fonts')) return;
  const link = document.createElement('link');
  link.id = 'polylocal-fonts';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@700&display=swap';
  document.head.appendChild(link);
}

// Where the widget script was loaded from, so images can be found next to it
// (…/widgets/dist/x.js -> …/widgets/assets/).
const SCRIPT_SRC = document.currentScript && document.currentScript.src;
export function assetUrl(file, el) {
  const base = el?.getAttribute('assets-base') || (SCRIPT_SRC ? new URL('../assets/', SCRIPT_SRC).href : '/assets/');
  return new URL(file, base.endsWith('/') ? base : `${base}/`).href;
}

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
