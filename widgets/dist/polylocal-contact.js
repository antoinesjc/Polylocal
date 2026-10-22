/*! polylocal-contact v1.0.0 | polylocal.eu | Map data: Natural Earth (public domain) */
(()=>{var A=Object.defineProperty;var W=(a,e,i)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var x=(a,e,i)=>W(a,typeof e!="symbol"?e+"":e,i);function v(a){var r;let e=a.getAttribute("lang"),i=/(^|\/)zh[_-]?(tw|hant)?(\/|$)/i.test(location.pathname)?"zh-TW":"",t=((r=a.closest("[lang]"))==null?void 0:r.getAttribute("lang"))||document.documentElement.lang||"";return(e||i||t||"en").toLowerCase().startsWith("zh")?"zh-TW":"en"}function k(a,e){return!a||/^(https?:|mailto:|tel:|#)/.test(a)?a:e==="zh-TW"?`/zh_TW${a==="/"?"":a}`:a}function _(a){let e=new MutationObserver(a);return e.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]}),()=>e.disconnect()}function z(){if(document.getElementById("polylocal-fonts"))return;let a=document.createElement("link");a.id="polylocal-fonts",a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Quicksand:wght@700&family=Open+Sans:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@700&display=swap",document.head.appendChild(a)}var w=document.currentScript&&document.currentScript.src;function $(a,e){let i=(e==null?void 0:e.getAttribute("assets-base"))||(w?new URL("../assets/",w).href:"/assets/");return new URL(a,i.endsWith("/")?i:`${i}/`).href}var l=a=>String(a).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var C={en:{proof:{featured:"Featured in",partners:"Partners",partnersNote:"Organisations we co-organise events and run projects with"},checks:["No obligation, no sales pitch","In English, French, Mandarin, Polish, Spanish or German","Taiwan, Central & Eastern Europe and the EU"],contact:"Contact us"},"zh-TW":{proof:{featured:"\u5A92\u9AD4\u5831\u5C0E",partners:"\u5408\u4F5C\u5925\u4F34",partnersNote:"\u8207\u6211\u5011\u5171\u540C\u8209\u8FA6\u6D3B\u52D5\u3001\u5408\u4F5C\u5C08\u6848\u7684\u7D44\u7E54"},checks:["\u6C92\u6709\u4EFB\u4F55\u7FA9\u52D9\uFF0C\u4E5F\u4E0D\u63A8\u92B7","\u53EF\u4F7F\u7528\u82F1\u6587\u3001\u6CD5\u6587\u3001\u4E2D\u6587\u3001\u6CE2\u862D\u6587\u3001\u897F\u73ED\u7259\u6587\u6216\u5FB7\u6587","\u6DB5\u84CB\u53F0\u7063\u3001\u4E2D\u6771\u6B50\u8207\u6B50\u76DF"],contact:"\u806F\u7D61\u6211\u5011"}},b={featured:[{file:"logos/the-diplomat.png",alt:"The Diplomat",h:24}],partners:[{file:"logos/mission-grey.png",alt:"Mission Grey",h:30},{file:"logos/formosa-network.png",alt:"Formosa Network",h:54},{file:"logos/founduz.svg",alt:"Founduz",h:26}]},u={arrow:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',diag:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',check:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'};var E=`
:host{
  --ink:#17222A; --ink-2:#111A20; --ivory:#F6F3EF; --sand:#ECE6DF; --line:#DCD5CD; --line-2:#E2DBD3;
  --text:#1E2A30; --text-2:#3C4A50; --muted:#56656C;
  --clay:#B57A72; --clay-dk:#9A5C54; --clay-lt:#D9A69E;
  --sky:#81AEC4; --sky-dk:#3E6C82; --sky-lt:#A9CADB;
  --display:'Manrope','Open Sans',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,sans-serif;
  --zh:'Noto Sans TC','PingFang TC','Microsoft JhengHei',system-ui,sans-serif;
  --zh-serif:'Noto Serif TC','Noto Sans TC',serif;
  display:block; background:var(--ivory); color:var(--text);
}
*,*::before,*::after{box-sizing:border-box}
.page{font-family:var(--sans);font-size:16px;line-height:1.6;text-align:left;-webkit-font-smoothing:antialiased;overflow:hidden}
:host([data-lang="zh-TW"]) .page{--display:'Manrope','Noto Sans TC','PingFang TC','Microsoft JhengHei',sans-serif;--sans:var(--zh)}
h1,h2,h3,p,ul,ol{margin:0}
h1,h2,h3{text-wrap:balance}
a{color:inherit}
.wrap{max-width:1280px;margin:0 auto;padding-left:32px;padding-right:32px}
.ico{width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}

/* type */
.eyebrow{font-family:var(--display);font-size:13px;font-weight:800;letter-spacing:2.4px;text-transform:uppercase;color:var(--clay-dk);display:flex;align-items:center;gap:14px}
.eyebrow.light{color:var(--sky-lt);font-weight:700}
:host([data-lang="zh-TW"]) .eyebrow{letter-spacing:1.2px;font-size:14px}
.rule{display:inline-block;width:36px;height:1px;background:currentColor}
h1{font-family:var(--display);font-weight:800;font-size:clamp(52px,8.4vw,124px);line-height:.94;letter-spacing:-.045em;margin-top:28px}
:host([data-lang="zh-TW"]) h1{letter-spacing:-.02em;line-height:1.08;font-size:clamp(46px,7.4vw,108px)}
h2{font-family:var(--display);font-weight:800;font-size:clamp(34px,4.4vw,58px);line-height:1.04;letter-spacing:-.035em;color:var(--ink);margin-top:22px}
:host([data-lang="zh-TW"]) h2{letter-spacing:-.01em;line-height:1.2}
h2.wide{max-width:780px;margin-bottom:56px}
h2.mid{font-size:clamp(30px,3.4vw,44px)}
h2.big{font-size:clamp(40px,4.8vw,66px);line-height:1;letter-spacing:-.04em;color:#fff}
:host([data-lang="zh-TW"]) h2.big{line-height:1.15}
h3{font-family:var(--display);font-weight:800}
.body{font-size:18px;line-height:1.7;color:var(--text-2);margin-top:26px;max-width:470px}
.body.narrow{font-size:16px;max-width:400px;margin-top:0}
.lead{font-size:19px;line-height:1.6;color:rgba(255,255,255,.86)}
.accent{color:var(--clay-lt)}

/* buttons */
.btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.btn{font-family:var(--display);font-weight:800;font-size:15px;padding:17px 26px;border-radius:2px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;min-height:52px;transition:transform .2s,background .2s}
.btn:hover{transform:translateY(-1px)}
.btn.primary{background:var(--clay);color:var(--ink)}
.btn.primary:hover{background:#C08A82}
.btn.ghost{border:1px solid rgba(255,255,255,.32);color:#fff}
.btn.ghost:hover{background:rgba(255,255,255,.06)}
.btn.block{width:100%}
a:focus-visible{outline:2px solid var(--sky);outline-offset:3px}

/* hero */
.ink{background:var(--ink);color:#fff;position:relative}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(129,174,196,.10) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
.hero-top{position:relative;padding-top:88px;padding-bottom:40px;display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;justify-content:space-between}
.hero-copy{flex:1 1 640px;min-width:0}
.hero-side{flex:1 1 380px;max-width:460px;min-width:0}
.hero-map{position:relative;padding-top:24px;padding-bottom:96px}

/* proof strip */
.proof{background:#fff;border-bottom:1px solid var(--sand)}
.proof-row{display:flex;flex-wrap:wrap;padding-top:36px;padding-bottom:36px}
.proof-col{display:flex;flex-direction:column;gap:18px;min-width:0;padding:4px 0}
.proof-col.featured{flex:1 1 300px;padding-right:40px}
.proof-col.partners{flex:2 1 560px;padding-left:40px;border-left:1px solid var(--sand)}
.proof-head{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 20px}
.label{font-family:var(--display);font-size:12px;font-weight:800;letter-spacing:2.2px;text-transform:uppercase;color:var(--muted)}
:host([data-lang="zh-TW"]) .label{letter-spacing:1px;font-size:13px}
.note{font-size:13px;color:var(--muted)}
.logos{display:flex;flex-wrap:wrap;align-items:center;gap:20px 48px;min-height:56px}
.logos img{display:block;width:auto;max-width:100%}

/* split sections */
.split{display:flex;flex-wrap:wrap;gap:64px;padding-top:128px;padding-bottom:112px}
.split-a{flex:1 1 420px;min-width:0}
.split-b{flex:1 1 520px;min-width:0}
.ground{align-items:center}
.numbered{list-style:none;padding:0;border-top:1px solid var(--text)}
.numbered li{display:flex;gap:28px;padding:28px 0;border-bottom:1px solid var(--line)}
.num{font-family:var(--display);font-weight:800;font-size:15px;color:var(--clay-dk);width:30px;flex:0 0 auto;line-height:1.9}
.numbered h3{font-size:21px;color:var(--ink);line-height:1.3}
.numbered p{margin-top:8px;font-size:15px;line-height:1.6;color:var(--muted)}

/* sand sections */
.sand{background:var(--sand)}
.sand > .wrap{padding-top:112px;padding-bottom:112px}
.head-row{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:56px}
.head-row.tight{margin-bottom:40px;align-items:center}
.head-row.tight h2{margin-top:0}
.head-main{max-width:700px}
.directions{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:2px;background:#CFC8C0}
.direction{background:var(--ivory);padding:48px;display:flex;flex-direction:column;gap:22px}
.direction-top{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 16px}
.dir-label{font-family:var(--display);font-weight:800;font-size:14px;letter-spacing:1.6px;text-transform:uppercase}
.dir-alt{font-family:var(--zh-serif);font-size:26px;font-weight:700}
:host([data-lang="zh-TW"]) .dir-alt{font-family:var(--display);font-size:18px;letter-spacing:.3px}
.direction.sky .dir-label{color:var(--sky-dk)} .direction.sky .dir-alt{color:var(--sky)}
.direction.clay .dir-label{color:var(--clay-dk)} .direction.clay .dir-alt{color:var(--clay)}
.direction h3{font-size:32px;line-height:1.12;letter-spacing:-.02em;color:var(--ink)}
.dash{list-style:none;padding:0;display:flex;flex-direction:column;gap:14px;font-size:16px;line-height:1.55;color:var(--text-2)}
.dash li{display:flex;gap:14px}
.dash li::before{content:"";flex:0 0 18px;height:1px;margin-top:12px;background:currentColor}
.direction.sky .dash li::before{background:var(--sky-dk)}
.direction.clay .dash li::before{background:var(--clay-dk)}

/* services */
.services{padding-top:128px;padding-bottom:112px}
.service-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr));gap:24px}
.service{padding:48px;text-decoration:none;display:flex;flex-direction:column;gap:24px;min-height:440px;transition:transform .25s,box-shadow .25s}
.service:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.12)}
.service.light{background:#fff;border:1px solid var(--line-2);color:var(--text)}
.service.dark{background:var(--ink);color:#fff}
.service-top{display:flex;justify-content:space-between;align-items:center}
.service-tag{font-family:var(--display);font-weight:800;font-size:15px}
.service.light .service-tag{color:var(--sky-dk)} .service.dark .service-tag{color:var(--clay-lt)}
.round{width:48px;height:48px;border-radius:50%;border:1px solid currentColor;display:flex;align-items:center;justify-content:center;opacity:.8}
.round .ico{width:18px;height:18px}
.service h3{font-size:40px;line-height:1.02;letter-spacing:-.03em}
.service.light h3{color:var(--ink)}
.service p{font-size:16px;line-height:1.65}
.service.light p{color:var(--text-2)} .service.dark p{color:rgba(255,255,255,.82)}
.chips{margin-top:auto;display:flex;flex-wrap:wrap;gap:8px}
.chips span{font-size:13px;font-weight:600;padding:8px 12px}
.service.light .chips span{background:#EEF4F7;color:#2F5A6E}
.service.dark .chips span{background:rgba(255,255,255,.08);color:#F1DDD9}

/* method */
.white-band{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.white-band > .wrap{padding-top:96px;padding-bottom:96px}
.white-band h2{margin-bottom:48px}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));border-left:1px solid var(--line)}
.step{padding:8px 28px;border-right:1px solid var(--line)}
.step-num{font-family:var(--display);font-weight:800;font-size:64px;letter-spacing:-.04em;color:var(--sand);line-height:1}
.step h3{margin-top:18px;font-size:20px;color:var(--ink)}
.step p{margin-top:10px;font-size:15px;line-height:1.6;color:var(--muted)}

/* on the ground */
.underline{display:inline-flex;align-items:center;gap:10px;margin-top:30px;font-family:var(--display);font-weight:800;font-size:15px;color:var(--ink);text-decoration:none;border-bottom:2px solid var(--clay);padding-bottom:4px}
.head-row .underline{margin-top:0}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px}
.tile{padding:30px;display:flex;flex-direction:column;gap:10px;background:#fff;border:1px solid var(--line-2)}
.tile.t0{background:var(--ink);border-color:var(--ink);color:#fff}
.tile.t3{background:var(--sand);border-color:var(--sand)}
.tile-big{font-family:var(--display);font-size:30px;font-weight:800;letter-spacing:-.02em;line-height:1.2}
.tile-big.zh{font-family:var(--zh-serif);color:var(--clay-lt)}
.tile.t1 .tile-big{color:var(--clay-dk)} .tile.t2 .tile-big{color:var(--sky-dk)} .tile.t3 .tile-big{color:var(--ink)}
.tile.t3 .tile-big{font-size:20px;letter-spacing:0;white-space:nowrap;line-height:1.8}
.tile h3{font-size:19px;color:var(--ink)} .tile.t0 h3{color:#fff}
.tile p{font-size:14px;line-height:1.55;color:var(--muted)} .tile.t0 p{color:rgba(255,255,255,.75)}

/* insights */
.insights{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:24px}
.insight{background:var(--ivory);padding:32px;min-height:240px;display:flex;flex-direction:column;gap:16px;text-decoration:none;border-top:4px solid var(--clay);transition:transform .25s,box-shadow .25s}
.insight.i0{border-top-color:var(--sky)} .insight.i2{border-top-color:#718891}
.insight:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.10)}
.insight-tag{font-family:var(--display);font-size:22px;font-weight:800;letter-spacing:-.01em;color:var(--ink)}
.insight p{font-size:15px;line-height:1.65;color:var(--text-2)}
.insight-more{margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:800;font-size:14px;color:var(--ink)}

/* final call to action */
.cta-row{display:flex;flex-wrap:wrap;gap:64px;align-items:center;padding-top:120px;padding-bottom:120px}
.cta-copy{flex:1 1 480px;min-width:0}
.cta-copy .lead{margin-top:26px;max-width:480px;font-size:18px;line-height:1.7;color:rgba(255,255,255,.82)}
.cta-box{flex:1 1 360px;max-width:460px;min-width:0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);padding:36px;display:flex;flex-direction:column;gap:14px}
.checks{list-style:none;padding:0 0 10px;display:flex;flex-direction:column;gap:14px;font-size:15px;color:rgba(255,255,255,.86)}
.checks li{display:flex;gap:12px;align-items:center}
.checks .ico{color:var(--clay-lt);width:18px;height:18px}

/* phones */
@media (max-width:640px){
  .wrap{padding-left:16px;padding-right:16px}
  .hero-top{padding-top:56px;gap:28px}
  .hero-map{padding-bottom:64px}
  .split{padding-top:80px;padding-bottom:72px;gap:40px}
  .sand > .wrap,.services{padding-top:80px;padding-bottom:80px}
  .white-band > .wrap{padding-top:72px;padding-bottom:72px}
  .proof-col.featured{padding-right:0;padding-bottom:24px}
  .proof-col.partners{padding-left:0;padding-top:24px;border-left:0;border-top:1px solid var(--sand)}
  .logos{gap:20px 32px}
  .direction,.service{padding:28px}
  .service{min-height:0}
  .service h3{font-size:32px}
  .step{padding:8px 20px 24px}
  .cta-row{padding-top:80px;padding-bottom:80px;gap:40px}
  .cta-box{padding:24px}
}
@media (prefers-reduced-motion:reduce){
  .btn,.service,.insight{transition:none}
}
`;var m=class extends HTMLElement{static get observedAttributes(){return["lang","contained"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.onResize=()=>this.fitWidth(),this.root.addEventListener("click",e=>this.onClick(e))}connectedCallback(){z(),this.render(),this.stopWatching=_(()=>this.render()),window.addEventListener("resize",this.onResize),requestAnimationFrame(()=>this.fitWidth())}disconnectedCallback(){var e;(e=this.stopWatching)==null||e.call(this),window.removeEventListener("resize",this.onResize)}attributeChangedCallback(){this.isConnected&&this.root.childElementCount&&(this.render(),this.fitWidth())}fitWidth(){if(this.style.width="",this.style.marginLeft="",this.hasAttribute("contained")||!this.parentElement)return;let e=this.parentElement.getBoundingClientRect(),i=parseFloat(getComputedStyle(this.parentElement).paddingLeft)||0;this.style.display="block",this.style.width=`${document.documentElement.clientWidth}px`,this.style.maxWidth="none",this.style.marginLeft=`${-(e.left+i)}px`}onClick(e){let i=e.composedPath().find(r=>r.tagName==="A"),t=i==null?void 0:i.getAttribute("href");if(!t||!t.startsWith("#"))return;let p=this.root.getElementById(t.slice(1));p&&(e.preventDefault(),p.scrollIntoView({behavior:"smooth",block:"start"}))}helpers(e){let i=C[e],t=r=>l(k(r,e)),p=r=>`<img src="${l($(r.file,this))}" alt="${l(r.alt)}" style="height:${r.h}px" loading="lazy">`;return{lang:e,esc:l,L:t,icons:u,common:i,proof:()=>`
  <section class="proof">
    <div class="wrap proof-row">
      <div class="proof-col featured">
        <p class="label">${l(i.proof.featured)}</p>
        <div class="logos">${b.featured.map(p).join("")}</div>
      </div>
      <div class="proof-col partners">
        <div class="proof-head"><p class="label">${l(i.proof.partners)}</p><p class="note">${l(i.proof.partnersNote)}</p></div>
        <div class="logos">${b.partners.map(p).join("")}</div>
      </div>
    </div>
  </section>`,cta:({kicker:r,title:n,body:c,primary:s,secondary:d,secondaryHref:f})=>`
  <section class="ink cta" id="contact">
    <div class="wrap cta-row">
      <div class="cta-copy">
        <p class="eyebrow light">${l(r)}</p>
        <h2 class="big">${l(n)}</h2>
        <p class="lead">${l(c)}</p>
      </div>
      <div class="cta-box">
        <ul class="checks">${i.checks.map(h=>`<li>${u.check}${l(h)}</li>`).join("")}</ul>
        <a class="btn primary block" href="${t("/contactus")}">${l(s||i.contact)}</a>
        <a class="btn ghost block" href="${f.startsWith("#")?f:t(f)}">${l(d)}</a>
      </div>
    </div>
  </section>`}}render(){let e=v(this);this.setAttribute("data-lang",e),this.root.innerHTML=`<style>${E}${this.constructor.css}</style><div class="page" lang="${e}">${this.page(e,this.helpers(e))}</div>`}page(){return""}};x(m,"css","");var y={en:{hero:{eyebrow:"Contact",title:["Tell us where you","want to grow."],lead:"Taiwan, Central and Eastern Europe or the EU: share a few lines about your company and your goals. We read every message ourselves and reply in the language you write in.",steps:[["You send the form","Two minutes, no obligation."],["We reply personally","With first thoughts and a few questions."],["A free 30-minute call","If it makes sense for both of us."]]},form:{title:"Start the conversation",required:"Fields marked * are required.",privacy:"We only use your details to reply to you.",missing:"The contact form will appear here. Add Odoo\u2019s Form block to this page, below this one.",send:"Send message",fields:{contact_name:["Your name","Full name"],partner_name:["Company","Company name"],email_from:["Work email","name@company.com"],phone:["Phone (optional)","+886 / +48 / +32 \u2026"],name:["What is it about?","For example: entering the Polish market, LinkedIn for our sales team"],description:["Your message","Your product, the markets you are looking at, and where you are today."]}},side:{email:"Prefer email?",linkedin:"Follow us on LinkedIn",langs:"Write to us in",langList:["English","Fran\xE7ais","\u4E2D\u6587","Polski","Espa\xF1ol","Deutsch"],where:"Where we work",hubs:[["Taipei","Taiwan, with reach into Mainland China and Singapore"],["Warsaw","Poland and Central and Eastern Europe"],["Brussels","The EU institutions and all 27 member states"]],include:"Helpful to include",includeList:["What you sell, and to whom","The countries you are looking at","What you have tried so far"]},services:{kicker:"Not sure yet?",cards:[["sky","/digital-marketing","Digital marketing","Be found and trusted where your buyers search."],["clay","/b2b-lead-generation","B2B lead generation","Qualified conversations with buyers and partners."]]}},"zh-TW":{hero:{eyebrow:"\u806F\u7D61\u6211\u5011",title:["\u544A\u8A34\u6211\u5011\uFF0C","\u4F60\u60F3\u5728\u6B50\u6D32\u54EA\u88E1\u6210\u9577\u3002"],lead:"\u6CE2\u862D\u3001\u4E2D\u6771\u6B50\u6216\u6574\u500B\u6B50\u76DF\u5E02\u5834\uFF1A\u7C21\u55AE\u4ECB\u7D39\u4F60\u7684\u516C\u53F8\u8207\u76EE\u6A19\u3002\u6BCF\u4E00\u5247\u8A0A\u606F\u90FD\u7531\u6211\u5011\u89AA\u81EA\u95B1\u8B80\uFF0C\u4F60\u53EF\u4EE5\u7528\u4E2D\u6587\u5BEB\u7D66\u6211\u5011\uFF0C\u6211\u5011\u4E5F\u6703\u7528\u4E2D\u6587\u56DE\u8986\u3002",steps:[["\u586B\u5BEB\u8868\u55AE","\u53EA\u8981\u5169\u5206\u9418\uFF0C\u6C92\u6709\u4EFB\u4F55\u7FA9\u52D9\u3002"],["\u6211\u5011\u89AA\u81EA\u56DE\u8986","\u9644\u4E0A\u521D\u6B65\u60F3\u6CD5\u8207\u5E7E\u500B\u554F\u984C\u3002"],["30 \u5206\u9418\u514D\u8CBB\u8AEE\u8A62","\u5982\u679C\u96D9\u65B9\u90FD\u89BA\u5F97\u5408\u9069\u3002"]]},form:{title:"\u958B\u59CB\u5C0D\u8A71",required:"\u6A19\u793A * \u70BA\u5FC5\u586B\u6B04\u4F4D\u3002",privacy:"\u4F60\u7684\u8CC7\u6599\u53EA\u6703\u7528\u65BC\u56DE\u8986\u4F60\u3002",missing:"\u806F\u7D61\u8868\u55AE\u6703\u986F\u793A\u5728\u9019\u88E1\u3002\u8ACB\u5728\u9019\u500B\u5340\u584A\u4E0B\u65B9\u52A0\u5165 Odoo \u7684\u8868\u55AE\u5340\u584A\u3002",send:"\u9001\u51FA\u8A0A\u606F",fields:{contact_name:["\u59D3\u540D","\u4F60\u7684\u59D3\u540D"],partner_name:["\u516C\u53F8\u540D\u7A31","\u516C\u53F8\u540D\u7A31"],email_from:["\u516C\u53F8 Email","name@company.com.tw"],phone:["\u96FB\u8A71\uFF08\u9078\u586B\uFF09","+886 \u2026"],name:["\u60F3\u804A\u4EC0\u9EBC\uFF1F","\u4F8B\u5982\uFF1A\u9032\u8ECD\u6CE2\u862D\u5E02\u5834\u3001\u70BA\u696D\u52D9\u5718\u968A\u7D93\u71DF LinkedIn"],description:["\u8A0A\u606F\u5167\u5BB9","\u7C21\u55AE\u4ECB\u7D39\u4F60\u7684\u7522\u54C1\u3001\u60F3\u9032\u5165\u7684\u6B50\u6D32\u570B\u5BB6\uFF0C\u4EE5\u53CA\u76EE\u524D\u7684\u9032\u5EA6\u3002"]}},side:{email:"\u60F3\u76F4\u63A5\u5BEB\u4FE1\uFF1F",linkedin:"\u5728 LinkedIn \u8FFD\u8E64\u6211\u5011",langs:"\u53EF\u4F7F\u7528\u7684\u8A9E\u8A00",langList:["\u4E2D\u6587","\u82F1\u6587","\u6CD5\u6587","\u6CE2\u862D\u6587","\u897F\u73ED\u7259\u6587","\u5FB7\u6587"],where:"\u6211\u5011\u7684\u64DA\u9EDE",hubs:[["\u83EF\u6C99","\u6CE2\u862D\u8207\u4E2D\u6771\u6B50"],["\u5E03\u9B6F\u585E\u723E","\u6B50\u76DF\u6A5F\u69CB\u8207\u5168\u90E8 27 \u500B\u6703\u54E1\u570B"],["\u53F0\u5317","\u53F0\u7063\uFF0C\u4E26\u5EF6\u4F38\u81F3\u4E2D\u570B\u5927\u9678\u8207\u65B0\u52A0\u5761"]],include:"\u53EF\u4EE5\u5148\u544A\u8A34\u6211\u5011",includeList:["\u4F60\u7684\u7522\u54C1\u8207\u76EE\u6A19\u5BA2\u6236","\u4F60\u5728\u8003\u616E\u7684\u6B50\u6D32\u570B\u5BB6","\u76EE\u524D\u5DF2\u7D93\u505A\u904E\u54EA\u4E9B\u5617\u8A66"]},services:{kicker:"\u9084\u5728\u8003\u616E\uFF1F",cards:[["sky","/digital-marketing","\u6578\u4F4D\u884C\u92B7","\u8B93\u6B50\u6D32\u8CB7\u4E3B\u627E\u5F97\u5230\u4F60\u3001\u4FE1\u4EFB\u4F60\u3002"],["clay","/b2b-lead-generation","B2B \u6F5B\u5728\u5BA2\u6236\u958B\u767C","\u8207\u6B50\u6D32\u8CB7\u4E3B\u53CA\u5408\u4F5C\u5925\u4F34\u5C55\u958B\u6709\u54C1\u8CEA\u7684\u5C0D\u8A71\u3002"]]}}};var S=`
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
`,o="polylocal-contact > .s_website_form",T=`
${o}{padding:0!important;margin:0!important;background:none!important;text-align:left}
${o} > .container,${o} > .container-fluid,${o} > div{padding:0!important;margin:0!important;max-width:none!important;width:auto!important}
${o} form{margin:0}
${o} .s_website_form_rows{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 24px;margin:0!important}
${o} .s_website_form_rows > *{grid-column:1 / -1;width:auto!important;max-width:none!important;flex:none!important;padding:0!important;margin:0!important}
${o} .s_website_form_rows > [data-pl-field="half"]{grid-column:auto}
${o} .s_website_form_rows > [data-pl-field="half"]:has([name="contact_name"]){order:1}
${o} .s_website_form_rows > [data-pl-field="half"]:has([name="partner_name"]){order:2}
${o} .s_website_form_rows > [data-pl-field="half"]:has([name="email_from"]){order:3}
${o} .s_website_form_rows > [data-pl-field="half"]:has([name="phone"]){order:4}
${o} .s_website_form_rows > [data-pl-field="full"]{order:5}
${o} .s_website_form_rows > [data-pl-field="message"]{order:6}
${o} .s_website_form_rows > .s_website_form_submit{order:7}
${o} .s_website_form_rows > .s_website_form_dnone,${o} .s_website_form_field_hidden{display:none!important}
${o} .s_website_form_field > .row{display:flex!important;flex-direction:column;gap:8px;margin:0!important}
${o} .s_website_form_field > .row > *{width:auto!important;max-width:none!important;flex:none!important;padding:0!important}
${o} .s_website_form_label{width:auto!important;padding:0!important;margin:0!important;text-align:left!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-size:14px;font-weight:700;line-height:1.4;color:#17222A}
${o} .s_website_form_mark{color:#9A5C54;margin-left:3px}
${o} .form-control,${o} .form-select{height:52px;box-sizing:border-box;border:1px solid #DCD5CD!important;border-radius:0!important;background:#F6F3EF!important;padding:0 16px;font-family:'Open Sans','Noto Sans TC',sans-serif;font-size:16px;color:#1E2A30!important;box-shadow:none!important;transition:border-color .15s,background .15s,box-shadow .15s}
${o} textarea.form-control{height:auto;min-height:170px;padding:14px 16px;line-height:1.5;resize:vertical}
${o} .form-control::placeholder{color:#8A969B;opacity:1}
${o} .form-control:focus,${o} .form-select:focus{border-color:#3E6C82!important;background:#fff!important;box-shadow:0 0 0 3px rgba(129,174,196,.35)!important;outline:0}
${o} .form-control.is-invalid,${o} .is-invalid .form-control{border-color:#B3261E!important}
${o} .form-check-input:checked{background-color:#3E6C82;border-color:#3E6C82}
${o} .s_website_form_submit{display:flex!important;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:16px;padding-top:6px!important;text-align:left!important}
${o} .s_website_form_submit > .s_website_form_label{display:none!important}
${o} .s_website_form_send{display:inline-flex;align-items:center;justify-content:center;min-height:56px;background:#B57A72!important;border:0!important;border-radius:0!important;color:#17222A!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:16px;padding:16px 34px!important;box-shadow:none!important;transition:background .2s,color .2s}
${o} .s_website_form_send:hover,${o} .s_website_form_send:focus{background:#9A5C54!important;color:#fff!important}
${o} #s_website_form_result,${o} .s_website_form_result{flex-basis:100%;font-size:14px}
${o} .s_website_form_end_message,${o} + .s_website_form_end_message{padding:24px;background:#EEF4F7;border-left:4px solid #81AEC4;font-size:16px;color:#17222A}
@media (max-width:760px){
  ${o} .s_website_form_rows{grid-template-columns:1fr}
  ${o} .s_website_form_send{width:100%}
}
`;var F=["contact_name","partner_name","email_from","phone"],g=class extends m{connectedCallback(){if(!document.getElementById("polylocal-contact-form-css")){let e=document.createElement("style");e.id="polylocal-contact-form-css",e.textContent=T,document.head.appendChild(e)}super.connectedCallback()}render(){super.render(),this.adoptForm(),this.relabel(this.getAttribute("data-lang")||"en")}adoptForm(){if(this.querySelector(':scope > [slot="form"]'))return;let e=[...document.querySelectorAll("form[data-model_name]")].find(p=>!this.contains(p));if(!e)return;let i=e.closest(".s_website_form")||e,t=i.closest("#wrap > *, main > *")||i;i.setAttribute("slot","form"),this.appendChild(i),t!==i&&!t.contains(this)&&!t.querySelector("form[data-model_name]")&&(t.style.display="none")}relabel(e){let i=y[e].form,t=this.querySelector("form[data-model_name]");if(!t)return;t.querySelectorAll(".s_website_form_field").forEach(r=>{let n=r.querySelector('input:not([type="hidden"]), textarea, select'),c=n&&n.getAttribute("name");if(!c)return;r.setAttribute("data-pl-field",F.includes(c)?"half":c==="description"?"message":"full");let s=i.fields[c];if(!s)return;let d=r.querySelector(".s_website_form_label_content");d&&(d.textContent=s[0]),n.tagName!=="SELECT"&&n.setAttribute("placeholder",s[1])});let p=t.querySelector(".s_website_form_send");p&&(p.textContent=i.send)}page(e,i){let{esc:t,L:p,icons:r}=i,n=y[e],c=e==="zh-TW"?"":" ";return`
  <section class="ink c-hero">
    <div class="dots" aria-hidden="true"></div>
    <div class="wrap c-hero-in">
      <div class="c-hero-copy">
        <p class="eyebrow light"><span class="rule"></span>${t(n.hero.eyebrow)}</p>
        <h1>${t(n.hero.title[0])}${c}<span class="c-accent">${t(n.hero.title[1])}</span></h1>
        <p class="c-lead">${t(n.hero.lead)}</p>
      </div>
      <ol class="c-steps">${n.hero.steps.map(([s,d],f)=>`<li><span class="c-n">${String(f+1).padStart(2,"0")}</span><span><strong>${t(s)}</strong>${t(d)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="wrap c-main">
    <div class="c-form-col">
      <div class="c-card">
        <h2>${t(n.form.title)}</h2>
        <p class="c-req">${t(n.form.required)}</p>
        <div class="c-slot"><slot name="form"><p class="c-missing">${t(n.form.missing)}</p></slot></div>
        <p class="c-privacy">${t(n.form.privacy)}</p>
      </div>
    </div>
    <aside class="c-side">
      <div class="c-box">
        <p class="c-label">${t(n.side.email)}</p>
        <a class="c-email" href="mailto:contact@polylocal.eu">contact@polylocal.eu</a>
        <a class="c-link" href="https://www.linkedin.com/company/polylocal/" target="_blank" rel="noopener">${t(n.side.linkedin)}${r.arrow}</a>
      </div>
      <div class="c-box">
        <p class="c-label">${t(n.side.langs)}</p>
        <div class="c-chips">${n.side.langList.map(s=>`<span>${t(s)}</span>`).join("")}</div>
      </div>
      <div class="c-box dark">
        <p class="c-label">${t(n.side.where)}</p>
        <ul class="c-hubs">${n.side.hubs.map(([s,d])=>`<li><strong>${t(s)}</strong><span>${t(d)}</span></li>`).join("")}</ul>
      </div>
      <div class="c-box line">
        <p class="c-label">${t(n.side.include)}</p>
        <ul class="c-include">${n.side.includeList.map(s=>`<li>${t(s)}</li>`).join("")}</ul>
      </div>
    </aside>
  </section>

  <section class="c-more">
    <div class="wrap c-more-in">
      ${n.services.cards.map(([s,d,f,h])=>`
      <a class="c-svc ${s}" href="${p(d)}">
        <span class="c-label">${t(n.services.kicker)}</span>
        <strong>${t(f)}</strong>
        <span class="c-svc-text">${t(h)}</span>
        <span class="c-svc-go">${r.arrow}</span>
      </a>`).join("")}
    </div>
  </section>`}};x(g,"css",S);customElements.get("polylocal-contact")||customElements.define("polylocal-contact",g);var G=g;})();
