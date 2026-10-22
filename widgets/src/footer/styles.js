// Footer styles. CSS is the widget (shadow DOM); DOC_CSS restyles the parts
// that stay in the page: Odoo's subscribe form and Odoo's copyright bar.
export default `
.page{background:var(--ink);color:rgba(255,255,255,.78)}
.f-top{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr) minmax(0,1.25fr);gap:56px;padding-top:80px;padding-bottom:64px}
.f-logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none}
.f-logo span{font-family:'Quicksand','Manrope',sans-serif;font-weight:700;font-size:24px;color:#fff}
.f-tag{margin-top:18px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--clay-lt)}
.f-about{margin-top:10px;max-width:340px;font-size:15px;line-height:1.6;color:rgba(255,255,255,.66)}
.f-contact{margin-top:24px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.f-email{font-family:var(--display);font-weight:800;font-size:17px;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.25);padding-bottom:2px}
.f-email:hover{border-color:var(--clay-lt)}
.f-li{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.22);color:#fff;transition:background .2s,border-color .2s}
.f-li:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.5)}
.f-li svg{width:18px;height:18px}
.f-cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}
.f-label{margin:0;font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--sky-lt)}
:host([data-lang="zh-TW"]) .f-label{letter-spacing:.6px;font-size:13px}
.f-col ul{margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
.f-col a{color:rgba(255,255,255,.82);text-decoration:none;font-size:15px}
.f-col a:hover{color:#fff;text-decoration:underline;text-underline-offset:4px}
.f-news{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);padding:32px}
.f-news h2{margin:12px 0 0;font-size:26px;line-height:1.2;letter-spacing:-.02em;color:#fff}
.f-news-text{margin-top:10px;font-size:15px;line-height:1.6;color:rgba(255,255,255,.66)}
.f-slot{margin-top:22px}
.f-missing{padding:14px;border:1px dashed rgba(255,255,255,.25);font-size:14px;color:rgba(255,255,255,.6)}
.f-bottom{display:flex;flex-wrap:wrap;gap:12px 28px;align-items:center;justify-content:space-between;padding-top:22px;padding-bottom:22px;border-top:1px solid rgba(255,255,255,.1);font-size:13px;color:rgba(255,255,255,.55)}
.f-bottom a{color:rgba(255,255,255,.72);text-decoration:none}
.f-bottom a:hover{color:#fff;text-decoration:underline}
.f-hubs{font-family:var(--display);font-weight:700;letter-spacing:.5px}
@media (max-width:1000px){
  .f-top{grid-template-columns:repeat(2,minmax(0,1fr))}
  .f-news{grid-column:1 / -1}
}
@media (max-width:640px){
  .f-top{grid-template-columns:1fr;gap:40px;padding-top:56px}
  .f-news{padding:24px 20px}
  .f-bottom{flex-direction:column;align-items:flex-start}
}
`;

const N = 'polylocal-footer > .js_subscribe';
export const DOC_CSS = `
#wrapwrap footer,footer.o_footer{background:#17222A!important;color:rgba(255,255,255,.78)}
footer polylocal-footer{display:block}
${N}{margin:0!important;padding:0!important}
${N} .input-group{display:flex;flex-wrap:nowrap;gap:0}
${N} .form-control{height:52px;border:1px solid rgba(255,255,255,.22)!important;border-right:0!important;border-radius:0!important;background:rgba(255,255,255,.06)!important;color:#fff!important;padding:0 16px;font-family:'Open Sans','Noto Sans TC',sans-serif;font-size:15px;box-shadow:none!important}
${N} .form-control::placeholder{color:rgba(255,255,255,.5);opacity:1}
${N} .form-control:focus{border-color:#A9CADB!important;background:rgba(255,255,255,.1)!important;box-shadow:0 0 0 3px rgba(129,174,196,.3)!important}
${N} .form-control.is-invalid{border-color:#E3867C!important}
${N} .js_subscribe_btn{display:inline-flex;align-items:center;height:52px;padding:0 24px!important;border:0!important;border-radius:0!important;background:#B57A72!important;color:#17222A!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:15px;box-shadow:none!important;white-space:nowrap}
${N} .js_subscribe_btn:hover,${N} .js_subscribe_btn:focus{background:#D9A69E!important}
${N} .js_subscribed_wrap p{margin:0;text-align:left!important;color:#A9CADB!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:16px}
#wrapwrap footer .o_footer_copyright,footer .o_footer_copyright{background:#111A20!important;color:rgba(255,255,255,.55)!important;border-top:1px solid rgba(255,255,255,.08)}
#wrapwrap footer .o_footer_copyright a,#wrapwrap footer .o_footer_copyright .dropdown-toggle,#wrapwrap footer .o_footer_copyright .btn{color:rgba(255,255,255,.72)!important}
#wrapwrap footer .o_footer_copyright .dropdown-menu a{color:#17222A!important}
`;
