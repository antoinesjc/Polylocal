// Contact page styles. CSS is for the widget itself (shadow DOM);
// FORM_CSS restyles Odoo's form, which stays in the page (light DOM).
export default `
.c-hero-in{position:relative;display:flex;flex-wrap:wrap;gap:56px;align-items:flex-end;justify-content:space-between;padding-top:88px;padding-bottom:160px}
.c-hero-copy{flex:1 1 620px;min-width:0}
.c-hero h1{font-size:clamp(46px,6.4vw,92px);color:#fff}
:host([data-lang="zh-TW"]) .c-hero h1{font-size:clamp(40px,5.4vw,78px);line-height:1.15;letter-spacing:-.01em}
.c-accent{color:var(--sky-lt)}
:host([data-lang="zh-TW"]) .c-accent{display:block}
.c-lead{margin-top:28px;max-width:620px;font-size:20px;line-height:1.6;color:rgba(255,255,255,.82)}
.c-steps{flex:0 1 400px;margin:0;padding:0;list-style:none;border-top:1px solid rgba(255,255,255,.16)}
.c-steps li{display:flex;gap:18px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.16);font-size:14px;color:rgba(255,255,255,.7)}
.c-steps strong{display:block;font-family:var(--display);font-size:16px;color:#fff}
.c-n{font-family:var(--display);font-weight:800;color:var(--sky-lt)}

.c-main{position:relative;margin-top:-104px;padding-bottom:120px;display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start}
.c-form-col{flex:1 1 680px;min-width:0}
.c-card{background:#fff;box-shadow:0 24px 60px rgba(23,34,42,.14);padding:48px}
.c-card h2{margin:0;font-size:32px;line-height:1.15;letter-spacing:-.02em}
.c-req{margin-top:8px;font-size:15px;color:var(--muted)}
.c-slot{margin-top:28px}
.c-missing{padding:28px;border:1px dashed var(--line);color:var(--muted);font-size:15px}
.c-privacy{margin-top:4px;font-size:13px;color:var(--muted)}

.c-side{flex:1 1 320px;min-width:0;display:flex;flex-direction:column;gap:16px}
.c-box{background:#fff;border:1px solid var(--line-2);padding:28px}
.c-box.dark{background:var(--ink);border-color:var(--ink);color:#fff}
.c-box.line{background:transparent;border-color:var(--line)}
.c-label{margin:0;font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted)}
:host([data-lang="zh-TW"]) .c-label{letter-spacing:.5px;font-size:13px}
.c-box.dark .c-label{color:var(--sky-lt)}
.c-email{display:block;margin-top:10px;font-family:var(--display);font-weight:800;font-size:22px;color:var(--ink);text-decoration:none;word-break:break-all}
.c-email:hover{color:var(--clay-dk)}
.c-link{margin-top:14px;display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:15px;color:var(--clay-dk);text-decoration:none}
.c-link svg,.c-svc-go svg{width:16px;height:16px}
.c-chips{margin-top:14px;display:flex;flex-wrap:wrap;gap:8px}
.c-chips span{border:1px solid var(--line);padding:6px 12px;font-family:var(--display);font-weight:700;font-size:14px;color:var(--ink)}
.c-hubs{margin:14px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;font-size:15px}
.c-hubs strong{display:block;font-family:var(--display)}
.c-hubs span{color:rgba(255,255,255,.7)}
.c-include{margin:12px 0 0;padding-left:18px;font-size:15px;line-height:1.7;color:var(--text-2)}

.c-more{background:var(--sand)}
.c-more-in{padding-top:72px;padding-bottom:72px;display:flex;flex-wrap:wrap;gap:24px}
.c-svc{flex:1 1 360px;position:relative;background:#fff;padding:32px 64px 32px 32px;text-decoration:none;color:var(--text);border-top:4px solid var(--sky);transition:box-shadow .25s,transform .25s}
.c-svc.clay{border-top-color:var(--clay)}
.c-svc:hover{box-shadow:0 20px 50px rgba(23,34,42,.12);transform:translateY(-2px)}
.c-svc .c-label{color:var(--sky-dk)}
.c-svc.clay .c-label{color:var(--clay-dk)}
.c-svc strong{display:block;margin-top:10px;font-family:var(--display);font-size:22px;color:var(--ink)}
.c-svc-text{display:block;margin-top:6px;font-size:15px;color:var(--text-2)}
.c-svc-go{position:absolute;right:28px;top:50%;transform:translateY(-50%);color:var(--ink)}

@media (max-width:760px){
  .c-hero-in{padding-top:56px;padding-bottom:128px;gap:36px}
  .c-lead{font-size:18px}
  .c-card{padding:28px 20px}
  .c-card h2{font-size:26px}
  .c-main{padding-bottom:72px}
}
@media (prefers-reduced-motion:reduce){ .c-svc{transition:none} }
`;

// Odoo's form, inside the widget. Odoo's own (Bootstrap) styles still load,
// so these rules are specific and some use !important to win over them.
const F = 'polylocal-contact > .s_website_form';
export const FORM_CSS = `
${F}{padding:0!important;margin:0!important;background:none!important;text-align:left}
${F} > .container,${F} > .container-fluid,${F} > div{padding:0!important;margin:0!important;max-width:none!important;width:auto!important}
${F} form{margin:0}
${F} .s_website_form_rows{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 24px;margin:0!important}
${F} .s_website_form_rows > *{grid-column:1 / -1;width:auto!important;max-width:none!important;flex:none!important;padding:0!important;margin:0!important}
${F} .s_website_form_rows > [data-pl-field="half"]{grid-column:auto}
${F} .s_website_form_rows > [data-pl-field="half"]:has([name="contact_name"]){order:1}
${F} .s_website_form_rows > [data-pl-field="half"]:has([name="partner_name"]){order:2}
${F} .s_website_form_rows > [data-pl-field="half"]:has([name="email_from"]){order:3}
${F} .s_website_form_rows > [data-pl-field="half"]:has([name="phone"]){order:4}
${F} .s_website_form_rows > [data-pl-field="full"]{order:5}
${F} .s_website_form_rows > [data-pl-field="message"]{order:6}
${F} .s_website_form_rows > .s_website_form_submit{order:7}
${F} .s_website_form_rows > .s_website_form_dnone,${F} .s_website_form_field_hidden{display:none!important}
${F} .s_website_form_field > .row{display:flex!important;flex-direction:column;gap:8px;margin:0!important}
${F} .s_website_form_field > .row > *{width:auto!important;max-width:none!important;flex:none!important;padding:0!important}
${F} .s_website_form_label{width:auto!important;padding:0!important;margin:0!important;text-align:left!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-size:14px;font-weight:700;line-height:1.4;color:#17222A}
${F} .s_website_form_mark{color:#9A5C54;margin-left:3px}
${F} .form-control,${F} .form-select{height:52px;box-sizing:border-box;border:1px solid #DCD5CD!important;border-radius:0!important;background:#F6F3EF!important;padding:0 16px;font-family:'Open Sans','Noto Sans TC',sans-serif;font-size:16px;color:#1E2A30!important;box-shadow:none!important;transition:border-color .15s,background .15s,box-shadow .15s}
${F} textarea.form-control{height:auto;min-height:170px;padding:14px 16px;line-height:1.5;resize:vertical}
${F} .form-control::placeholder{color:#8A969B;opacity:1}
${F} .form-control:focus,${F} .form-select:focus{border-color:#3E6C82!important;background:#fff!important;box-shadow:0 0 0 3px rgba(129,174,196,.35)!important;outline:0}
${F} .form-control.is-invalid,${F} .is-invalid .form-control{border-color:#B3261E!important}
${F} .form-check-input:checked{background-color:#3E6C82;border-color:#3E6C82}
${F} .s_website_form_submit{display:flex!important;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:16px;padding-top:6px!important;text-align:left!important}
${F} .s_website_form_submit > .s_website_form_label{display:none!important}
${F} .s_website_form_send{display:inline-flex;align-items:center;justify-content:center;min-height:56px;background:#B57A72!important;border:0!important;border-radius:0!important;color:#17222A!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:16px;padding:16px 34px!important;box-shadow:none!important;transition:background .2s,color .2s}
${F} .s_website_form_send:hover,${F} .s_website_form_send:focus{background:#9A5C54!important;color:#fff!important}
${F} #s_website_form_result,${F} .s_website_form_result{flex-basis:100%;font-size:14px}
${F} .s_website_form_end_message,${F} + .s_website_form_end_message{padding:24px;background:#EEF4F7;border-left:4px solid #81AEC4;font-size:16px;color:#17222A}
@media (max-width:760px){
  ${F} .s_website_form_rows{grid-template-columns:1fr}
  ${F} .s_website_form_send{width:100%}
}
`;
