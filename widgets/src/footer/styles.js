// Footer styles. CSS is the widget (shadow DOM); DOC_CSS restyles the parts
// that stay in the page: Odoo's subscribe form and Odoo's copyright bar.
export default `
.page{background:var(--ivory);color:var(--text-2)}
.f-top{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr) minmax(0,1.25fr);gap:56px;padding-top:80px;padding-bottom:64px}
.f-logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none}
.f-logo img{display:block;height:44px;width:auto}
.f-tag{margin-top:18px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--clay-dk)}
.f-about{margin-top:10px;max-width:340px;font-size:15px;line-height:1.6;color:var(--text-2)}
.f-contact{margin-top:24px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.f-email{font-family:var(--display);font-weight:800;font-size:17px;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:2px}
.f-email:hover{border-color:var(--clay)}
.f-li{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--line);color:var(--ink);transition:background .2s,border-color .2s,color .2s}
.f-li:hover{background:var(--ink);border-color:var(--ink);color:#fff}
.f-li svg{width:18px;height:18px}
.f-cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}
.f-label{margin:0;font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--sky-dk)}
:host([data-lang="zh-TW"]) .f-label{letter-spacing:.6px;font-size:13px}
.f-col ul{margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
.f-col a{color:var(--text);text-decoration:none;font-size:15px}
.f-col a:hover{color:var(--clay-dk);text-decoration:underline;text-underline-offset:4px}
.f-news{background:#fff;border:1px solid var(--line-2);border-top:4px solid var(--clay);padding:32px}
.f-news h2{margin:12px 0 0;font-size:26px;line-height:1.2;letter-spacing:-.02em;color:var(--ink)}
.f-news-text{margin-top:10px;font-size:15px;line-height:1.6;color:var(--text-2)}
.f-slot{margin-top:22px}
.f-missing{padding:14px;border:1px dashed var(--line);font-size:14px;color:var(--muted)}
.f-bottom{display:flex;flex-wrap:wrap;gap:12px 28px;align-items:center;justify-content:space-between;padding-top:22px;padding-bottom:22px;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}
.f-bottom a{color:var(--text-2);text-decoration:none}
.f-bottom a:hover{color:var(--ink);text-decoration:underline}
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
#wrapwrap footer,footer.o_footer{background:#F6F3EF!important;color:#3C4A50;border-top:0!important}
footer polylocal-footer{display:block}
${N}{margin:0!important;padding:0!important}
${N} .input-group{display:flex;flex-wrap:nowrap;gap:0}
${N} .form-control{height:52px;border:1px solid #DCD5CD!important;border-right:0!important;border-radius:0!important;background:#F6F3EF!important;color:#1E2A30!important;padding:0 16px;font-family:'Open Sans','Noto Sans TC',sans-serif;font-size:15px;box-shadow:none!important}
${N} .form-control::placeholder{color:#8A969B;opacity:1}
${N} .form-control:focus{border-color:#3E6C82!important;background:#fff!important;box-shadow:0 0 0 3px rgba(129,174,196,.3)!important}
${N} .form-control.is-invalid{border-color:#B3261E!important}
${N} .js_subscribe_btn{display:inline-flex;align-items:center;height:52px;padding:0 24px!important;border:0!important;border-radius:0!important;background:#B57A72!important;color:#17222A!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:15px;box-shadow:none!important;white-space:nowrap}
${N} .js_subscribe_btn:hover,${N} .js_subscribe_btn:focus{background:#9A5C54!important;color:#fff!important}
${N} .js_subscribed_wrap p{margin:0;text-align:left!important;color:#3E6C82!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:16px}
#wrapwrap footer .o_footer_copyright,footer .o_footer_copyright{background:#ECE6DF!important;color:#56656C!important;border-top:0}
#wrapwrap footer .o_footer_copyright a,#wrapwrap footer .o_footer_copyright .dropdown-toggle,#wrapwrap footer .o_footer_copyright .btn{color:#3C4A50!important}
#wrapwrap footer .o_footer_copyright .dropdown-menu a{color:#17222A!important}
`;
