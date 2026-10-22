// <polylocal-footer>: the site footer, wrapped around Odoo's own newsletter form.
//
// In Odoo the footer holds this widget (Embed Code block) and keeps the
// existing footer block with the native "Newsletter" subscribe form. On the
// live site the widget moves that subscribe form into its newsletter card
// (through a <slot>), hides what is left of the old footer block, restyles the
// form and translates its placeholder and button. The subscribe element
// itself is untouched, so Odoo still adds every address to the mailing list.
// Odoo's copyright bar (with the language switcher) stays below, restyled.
import { PolylocalPage } from '../shared/page.js';
import I18N from './i18n.js';
import CSS, { DOC_CSS } from './styles.js';

const MARK = `<svg class="f-mark" width="30" height="34" viewBox="0 0 40 46" aria-hidden="true"><defs><linearGradient id="plFootGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#81AEC4"/><stop offset="1" stop-color="#C98B82"/></linearGradient></defs><circle cx="21" cy="6" r="4.6" fill="#C98B82"/><path d="M17 16c-8 3-12 12-7 19 5 7 16 6 18-2 2-7-5-12-11-8" fill="none" stroke="url(#plFootGrad)" stroke-width="5.2" stroke-linecap="round"/><path d="M25 15c7 3 11 11 7 18-4 6-12 7-16 2" fill="none" stroke="url(#plFootGrad)" stroke-width="5.2" stroke-linecap="round"/></svg>`;
const LINKEDIN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4z"/></svg>`;

class PolylocalFooter extends PolylocalPage {
  static css = CSS;

  connectedCallback() {
    if (!document.getElementById('polylocal-footer-css')) {
      const style = document.createElement('style');
      style.id = 'polylocal-footer-css';
      style.textContent = DOC_CSS;
      document.head.appendChild(style);
    }
    super.connectedCallback();
  }

  render() {
    super.render();
    this.adoptNewsletter();
    this.relabel(this.getAttribute('data-lang') || 'en');
  }

  // Find Odoo's subscribe form (in the footer first, else anywhere) and move it in.
  adoptNewsletter() {
    if (this.querySelector(':scope > [slot="newsletter"]')) return;
    const scope = this.closest('footer') || document;
    const form = [...scope.querySelectorAll('.js_subscribe')].find((f) => !this.contains(f));
    if (!form) return;
    const block = form.closest('#footer > *, footer section') || null;
    form.setAttribute('slot', 'newsletter');
    this.appendChild(form);
    if (block && !block.contains(this) && !block.querySelector('.js_subscribe')) block.style.display = 'none';
  }

  relabel(lang) {
    const t = I18N[lang].news;
    const form = this.querySelector(':scope > .js_subscribe');
    if (!form) return;
    const input = form.querySelector('input[name="email"], .js_subscribe_value');
    if (input) { input.setAttribute('placeholder', t.placeholder); input.setAttribute('aria-label', t.placeholder); }
    const btn = form.querySelector('.js_subscribe_btn');
    if (btn) btn.textContent = t.button;
    const done = form.querySelector('.js_subscribed_wrap p');
    if (done) done.innerHTML = `<i class="fa fa-check-circle-o"></i> ${t.done}`;
  }

  page(lang, h) {
    const { esc, L } = h;
    const t = I18N[lang];
    const col = (c) => `<nav class="f-col" aria-label="${esc(c.title)}"><p class="f-label">${esc(c.title)}</p><ul>${c.links.map(([label, href]) => `<li><a href="${L(href)}">${esc(label)}</a></li>`).join('')}</ul></nav>`;
    return `
  <div class="f-wrap">
    <div class="wrap f-top">
      <div class="f-brand">
        <a class="f-logo" href="${L('/')}" aria-label="Polylocal">${MARK}<span>Polylocal</span></a>
        <p class="f-tag">${esc(t.tagline)}</p>
        <p class="f-about">${esc(t.about)}</p>
        <div class="f-contact">
          <a class="f-email" href="mailto:contact@polylocal.eu">contact@polylocal.eu</a>
          <a class="f-li" href="https://www.linkedin.com/company/polylocal/" target="_blank" rel="noopener" aria-label="LinkedIn">${LINKEDIN}</a>
        </div>
      </div>
      <div class="f-cols">${t.cols.map(col).join('')}</div>
      <div class="f-news">
        <p class="f-label">${esc(t.news.kicker)}</p>
        <h2>${esc(t.news.title)}</h2>
        <p class="f-news-text">${esc(t.news.text)}</p>
        <div class="f-slot"><slot name="newsletter"><p class="f-missing">${esc(t.news.missing)}</p></slot></div>
      </div>
    </div>
    <div class="wrap f-bottom">
      <span>© ${new Date().getFullYear()} Polylocal</span>
      <span class="f-hubs">${esc(t.hubs)}</span>
      <a href="${L('/privacy-policy')}">${esc(t.privacy)}</a>
    </div>
  </div>`;
  }
}

if (!customElements.get('polylocal-footer')) customElements.define('polylocal-footer', PolylocalFooter);
export default PolylocalFooter;
