// <polylocal-contact>: the Contact page, wrapped around Odoo's own contact form.
//
// In Odoo the page holds this widget (Embed Code block) and, below it, Odoo's
// native Form block. On the live page the widget moves Odoo's form section into
// its form card (through a <slot>), hides what is left of the Form block (its
// default title), restyles the form and relabels its fields in the page
// language. The form element itself is untouched, so Odoo still sends every
// message to the CRM, with its own checks and thank-you message. Odoo does not
// run scripts in the editor, so the form stays editable there as usual.
import { PolylocalPage } from '../shared/page.js';
import I18N from './i18n.js';
import CSS, { FORM_CSS } from './styles.js';

const HALF = ['contact_name', 'partner_name', 'email_from', 'phone'];

class PolylocalContact extends PolylocalPage {
  static css = CSS;

  connectedCallback() {
    if (!document.getElementById('polylocal-contact-form-css')) {
      const style = document.createElement('style');
      style.id = 'polylocal-contact-form-css';
      style.textContent = FORM_CSS;
      document.head.appendChild(style);
    }
    super.connectedCallback();
  }

  render() {
    super.render();
    this.adoptForm();
    this.relabel(this.getAttribute('data-lang') || 'en');
  }

  // Find Odoo's form section on the page and move it into our form card.
  adoptForm() {
    if (this.querySelector(':scope > [slot="form"]')) return;
    const form = [...document.querySelectorAll('form[data-model_name]')].find((f) => !this.contains(f));
    if (!form) return;
    const section = form.closest('.s_website_form') || form;
    const block = section.closest('#wrap > *, main > *') || section;
    section.setAttribute('slot', 'form');
    this.appendChild(section);
    if (block !== section && !block.contains(this) && !block.querySelector('form[data-model_name]')) block.style.display = 'none';
  }

  // Labels, placeholders and the button, in the page language.
  relabel(lang) {
    const t = I18N[lang].form;
    const form = this.querySelector('form[data-model_name]');
    if (!form) return;
    form.querySelectorAll('.s_website_form_field').forEach((field) => {
      const input = field.querySelector('input:not([type="hidden"]), textarea, select');
      const name = input && input.getAttribute('name');
      if (!name) return;
      field.setAttribute('data-pl-field', HALF.includes(name) ? 'half' : name === 'description' ? 'message' : 'full');
      const words = t.fields[name];
      if (!words) return;
      const label = field.querySelector('.s_website_form_label_content');
      if (label) label.textContent = words[0];
      if (input.tagName !== 'SELECT') input.setAttribute('placeholder', words[1]);
    });
    const send = form.querySelector('.s_website_form_send');
    if (send) send.textContent = t.send;
  }

  page(lang, h) {
    const { esc, L, icons } = h;
    const t = I18N[lang];
    const sp = lang === 'zh-TW' ? '' : ' ';
    return `
  <section class="ink c-hero">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap c-hero-in">
      <div class="c-hero-copy">
        <p class="eyebrow light"><span class="rule"></span>${esc(t.hero.eyebrow)}</p>
        <h1>${esc(t.hero.title[0])}${sp}<span class="c-accent">${esc(t.hero.title[1])}</span></h1>
        <p class="c-lead">${esc(t.hero.lead)}</p>
      </div>
      <ol class="c-steps">${t.hero.steps.map(([a, b], i) => `<li><span class="c-n">${String(i + 1).padStart(2, '0')}</span><span><strong>${esc(a)}</strong>${esc(b)}</span></li>`).join('')}</ol>
    </div>
  </section>

  <section class="wrap c-main">
    <div class="c-form-col">
      <div class="c-card">
        <h2>${esc(t.form.title)}</h2>
        <p class="c-req">${esc(t.form.required)}</p>
        <div class="c-slot"><slot name="form"><p class="c-missing">${esc(t.form.missing)}</p></slot></div>
        <p class="c-privacy">${esc(t.form.privacy)}</p>
      </div>
    </div>
    <aside class="c-side">
      <div class="c-box">
        <p class="c-label">${esc(t.side.email)}</p>
        <a class="c-email" href="mailto:contact@polylocal.eu">contact@polylocal.eu</a>
        <a class="c-link" href="https://www.linkedin.com/company/polylocal/" target="_blank" rel="noopener">${esc(t.side.linkedin)}${icons.arrow}</a>
      </div>
      <div class="c-box">
        <p class="c-label">${esc(t.side.langs)}</p>
        <div class="c-chips">${t.side.langList.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
      </div>
      <div class="c-box dark">
        <p class="c-label">${esc(t.side.where)}</p>
        <ul class="c-hubs">${t.side.hubs.map(([a, b]) => `<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join('')}</ul>
      </div>
      <div class="c-box line">
        <p class="c-label">${esc(t.side.include)}</p>
        <ul class="c-include">${t.side.includeList.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </aside>
  </section>

  <section class="c-more">
    <div class="wrap c-more-in">
      ${t.services.cards.map(([tone, href, title, text]) => `
      <a class="c-svc ${tone}" href="${L(href)}">
        <span class="c-label">${esc(t.services.kicker)}</span>
        <strong>${esc(title)}</strong>
        <span class="c-svc-text">${esc(text)}</span>
        <span class="c-svc-go">${icons.arrow}</span>
      </a>`).join('')}
    </div>
  </section>`;
  }
}

if (!customElements.get('polylocal-contact')) customElements.define('polylocal-contact', PolylocalContact);
export default PolylocalContact;
