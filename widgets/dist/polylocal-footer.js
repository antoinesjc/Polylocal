/*! polylocal-footer v1.0.0 | polylocal.eu | Map data: Natural Earth (public domain) */
(()=>{var _=Object.defineProperty;var M=(i,t,e)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var f=(i,t,e)=>M(i,typeof t!="symbol"?t+"":t,e);function v(i){var a;let t=i.getAttribute("lang"),e=/(^|\/)zh[_-]?(tw|hant)?(\/|$)/i.test(location.pathname)?"zh-TW":"",o=((a=i.closest("[lang]"))==null?void 0:a.getAttribute("lang"))||document.documentElement.lang||"";return(t||e||o||"en").toLowerCase().startsWith("zh")?"zh-TW":"en"}function w(i,t){return!i||/^(https?:|mailto:|tel:|#)/.test(i)?i:t==="zh-TW"?`/zh_TW${i==="/"?"":i}`:i}function k(i){let t=new MutationObserver(i);return t.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]}),()=>t.disconnect()}function z(){if(document.getElementById("polylocal-fonts"))return;let i=document.createElement("link");i.id="polylocal-fonts",i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Quicksand:wght@700&family=Open+Sans:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@700&display=swap",document.head.appendChild(i)}var y=document.currentScript&&document.currentScript.src;function C(i,t){let e=(t==null?void 0:t.getAttribute("assets-base"))||(y?new URL("../assets/",y).href:"/assets/");return new URL(i,e.endsWith("/")?e:`${e}/`).href}var n=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var $={en:{proof:{featured:"Featured in",partners:"Partners",partnersNote:"Organisations we co-organise events and run projects with"},checks:["No obligation, no sales pitch","In English, French, Mandarin, Polish, Spanish or German","Taiwan, Central & Eastern Europe and the EU"],contact:"Contact us"},"zh-TW":{proof:{featured:"\u5A92\u9AD4\u5831\u5C0E",partners:"\u5408\u4F5C\u5925\u4F34",partnersNote:"\u8207\u6211\u5011\u5171\u540C\u8209\u8FA6\u6D3B\u52D5\u3001\u5408\u4F5C\u5C08\u6848\u7684\u7D44\u7E54"},checks:["\u6C92\u6709\u4EFB\u4F55\u7FA9\u52D9\uFF0C\u4E5F\u4E0D\u63A8\u92B7","\u53EF\u4F7F\u7528\u82F1\u6587\u3001\u6CD5\u6587\u3001\u4E2D\u6587\u3001\u6CE2\u862D\u6587\u3001\u897F\u73ED\u7259\u6587\u6216\u5FB7\u6587","\u6DB5\u84CB\u53F0\u7063\u3001\u4E2D\u6771\u6B50\u8207\u6B50\u76DF"],contact:"\u806F\u7D61\u6211\u5011"}},m={featured:[{file:"logos/the-diplomat.png",alt:"The Diplomat",h:24}],partners:[{file:"logos/mission-grey.png",alt:"Mission Grey",h:30},{file:"logos/formosa-network.png",alt:"Formosa Network",h:54},{file:"logos/founduz.svg",alt:"Founduz",h:26}]},b={arrow:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',diag:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',check:'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'};var S=`
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
`;var d=class extends HTMLElement{static get observedAttributes(){return["lang","contained"]}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.onResize=()=>this.fitWidth(),this.root.addEventListener("click",t=>this.onClick(t))}connectedCallback(){z(),this.render(),this.stopWatching=k(()=>this.render()),window.addEventListener("resize",this.onResize),requestAnimationFrame(()=>this.fitWidth())}disconnectedCallback(){var t;(t=this.stopWatching)==null||t.call(this),window.removeEventListener("resize",this.onResize)}attributeChangedCallback(){this.isConnected&&this.root.childElementCount&&(this.render(),this.fitWidth())}fitWidth(){if(this.style.width="",this.style.marginLeft="",this.hasAttribute("contained")||!this.parentElement)return;let t=this.parentElement.getBoundingClientRect(),e=parseFloat(getComputedStyle(this.parentElement).paddingLeft)||0;this.style.display="block",this.style.width=`${document.documentElement.clientWidth}px`,this.style.maxWidth="none",this.style.marginLeft=`${-(t.left+e)}px`}onClick(t){let e=t.composedPath().find(a=>a.tagName==="A"),o=e==null?void 0:e.getAttribute("href");if(!o||!o.startsWith("#"))return;let r=this.root.getElementById(o.slice(1));r&&(t.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"}))}helpers(t){let e=$[t],o=a=>n(w(a,t)),r=a=>`<img src="${n(C(a.file,this))}" alt="${n(a.alt)}" style="height:${a.h}px" loading="lazy">`;return{lang:t,esc:n,L:o,icons:b,common:e,proof:()=>`
  <section class="proof">
    <div class="wrap proof-row">
      <div class="proof-col featured">
        <p class="label">${n(e.proof.featured)}</p>
        <div class="logos">${m.featured.map(r).join("")}</div>
      </div>
      <div class="proof-col partners">
        <div class="proof-head"><p class="label">${n(e.proof.partners)}</p><p class="note">${n(e.proof.partnersNote)}</p></div>
        <div class="logos">${m.partners.map(r).join("")}</div>
      </div>
    </div>
  </section>`,cta:({kicker:a,title:l,body:p,primary:g,secondary:x,secondaryHref:h})=>`
  <section class="ink cta" id="contact">
    <div class="wrap cta-row">
      <div class="cta-copy">
        <p class="eyebrow light">${n(a)}</p>
        <h2 class="big">${n(l)}</h2>
        <p class="lead">${n(p)}</p>
      </div>
      <div class="cta-box">
        <ul class="checks">${e.checks.map(T=>`<li>${b.check}${n(T)}</li>`).join("")}</ul>
        <a class="btn primary block" href="${o("/contactus")}">${n(g||e.contact)}</a>
        <a class="btn ghost block" href="${h.startsWith("#")?h:o(h)}">${n(x)}</a>
      </div>
    </div>
  </section>`}}render(){let t=v(this);this.setAttribute("data-lang",t),this.root.innerHTML=`<style>${S}${this.constructor.css}</style><div class="page" lang="${t}">${this.page(t,this.helpers(t))}</div>`}page(){return""}};f(d,"css","");var u={en:{tagline:"Think global, act local.",about:"Digital marketing and B2B lead generation between Taiwan, Central and Eastern Europe and the EU.",cols:[{title:"Services",links:[["Digital marketing","/digital-marketing"],["B2B lead generation","/b2b-lead-generation"]]},{title:"Polylocal",links:[["About us","/about-us"],["Insights","/insight"],["Contact","/contactus"]]}],news:{kicker:"Newsletter",title:"Insights from the corridor",text:"Market notes, case studies and events between Taiwan and Europe. Occasional, never spam.",placeholder:"Your email address",button:"Subscribe",done:"Thank you, you are subscribed.",missing:"The newsletter form appears here on the live site."},hubs:"Taipei \xB7 Warsaw \xB7 Brussels",privacy:"Privacy policy"},"zh-TW":{tagline:"\u653E\u773C\u5168\u7403\uFF0C\u5728\u5730\u884C\u52D5\u3002",about:"\u5354\u52A9\u53F0\u7063\u4F01\u696D\u9032\u8ECD\u6B50\u6D32\u7684\u6578\u4F4D\u884C\u92B7\u8207 B2B \u6F5B\u5728\u5BA2\u6236\u958B\u767C\uFF0C\u805A\u7126\u6CE2\u862D\u3001\u4E2D\u6771\u6B50\u8207\u6B50\u76DF\u5E02\u5834\u3002",cols:[{title:"\u670D\u52D9",links:[["\u6578\u4F4D\u884C\u92B7","/digital-marketing"],["B2B \u6F5B\u5728\u5BA2\u6236\u958B\u767C","/b2b-lead-generation"]]},{title:"Polylocal",links:[["\u95DC\u65BC\u6211\u5011","/about-us"],["\u6D1E\u5BDF","/insight"],["\u806F\u7D61\u6211\u5011","/contactus"]]}],news:{kicker:"\u96FB\u5B50\u5831",title:"\u53F0\u6B50\u5E02\u5834\u7B2C\u4E00\u624B\u89C0\u5BDF",text:"\u6B50\u6D32\u5E02\u5834\u52D5\u614B\u3001\u6848\u4F8B\u7814\u7A76\u8207\u6D3B\u52D5\u6D88\u606F\uFF0C\u4E0D\u5B9A\u671F\u5BC4\u9001\uFF0C\u7D55\u4E0D\u6FEB\u767C\u3002",placeholder:"\u4F60\u7684 Email",button:"\u8A02\u95B1",done:"\u611F\u8B1D\u8A02\u95B1\uFF01",missing:"\u96FB\u5B50\u5831\u8A02\u95B1\u8868\u55AE\u6703\u986F\u793A\u5728\u6B63\u5F0F\u7DB2\u7AD9\u4E0A\u3002"},hubs:"\u53F0\u5317 \xB7 \u83EF\u6C99 \xB7 \u5E03\u9B6F\u585E\u723E",privacy:"\u96B1\u79C1\u6B0A\u653F\u7B56"}};var E=`
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
`,s="polylocal-footer > .js_subscribe",A=`
#wrapwrap footer,footer.o_footer{background:#17222A!important;color:rgba(255,255,255,.78)}
footer polylocal-footer{display:block}
${s}{margin:0!important;padding:0!important}
${s} .input-group{display:flex;flex-wrap:nowrap;gap:0}
${s} .form-control{height:52px;border:1px solid rgba(255,255,255,.22)!important;border-right:0!important;border-radius:0!important;background:rgba(255,255,255,.06)!important;color:#fff!important;padding:0 16px;font-family:'Open Sans','Noto Sans TC',sans-serif;font-size:15px;box-shadow:none!important}
${s} .form-control::placeholder{color:rgba(255,255,255,.5);opacity:1}
${s} .form-control:focus{border-color:#A9CADB!important;background:rgba(255,255,255,.1)!important;box-shadow:0 0 0 3px rgba(129,174,196,.3)!important}
${s} .form-control.is-invalid{border-color:#E3867C!important}
${s} .js_subscribe_btn{display:inline-flex;align-items:center;height:52px;padding:0 24px!important;border:0!important;border-radius:0!important;background:#B57A72!important;color:#17222A!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:15px;box-shadow:none!important;white-space:nowrap}
${s} .js_subscribe_btn:hover,${s} .js_subscribe_btn:focus{background:#D9A69E!important}
${s} .js_subscribed_wrap p{margin:0;text-align:left!important;color:#A9CADB!important;font-family:'Manrope','Noto Sans TC',sans-serif;font-weight:800;font-size:16px}
#wrapwrap footer .o_footer_copyright,footer .o_footer_copyright{background:#111A20!important;color:rgba(255,255,255,.55)!important;border-top:1px solid rgba(255,255,255,.08)}
#wrapwrap footer .o_footer_copyright a,#wrapwrap footer .o_footer_copyright .dropdown-toggle,#wrapwrap footer .o_footer_copyright .btn{color:rgba(255,255,255,.72)!important}
#wrapwrap footer .o_footer_copyright .dropdown-menu a{color:#17222A!important}
`;var W='<svg class="f-mark" width="30" height="34" viewBox="0 0 40 46" aria-hidden="true"><defs><linearGradient id="plFootGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#81AEC4"/><stop offset="1" stop-color="#C98B82"/></linearGradient></defs><circle cx="21" cy="6" r="4.6" fill="#C98B82"/><path d="M17 16c-8 3-12 12-7 19 5 7 16 6 18-2 2-7-5-12-11-8" fill="none" stroke="url(#plFootGrad)" stroke-width="5.2" stroke-linecap="round"/><path d="M25 15c7 3 11 11 7 18-4 6-12 7-16 2" fill="none" stroke="url(#plFootGrad)" stroke-width="5.2" stroke-linecap="round"/></svg>',j='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4z"/></svg>',c=class extends d{connectedCallback(){if(!document.getElementById("polylocal-footer-css")){let t=document.createElement("style");t.id="polylocal-footer-css",t.textContent=A,document.head.appendChild(t)}super.connectedCallback()}render(){super.render(),this.adoptNewsletter(),this.relabel(this.getAttribute("data-lang")||"en")}adoptNewsletter(){if(this.querySelector(':scope > [slot="newsletter"]'))return;let e=[...(this.closest("footer")||document).querySelectorAll(".js_subscribe")].find(r=>!this.contains(r));if(!e)return;let o=e.closest("#footer > *, footer section")||null;e.setAttribute("slot","newsletter"),this.appendChild(e),o&&!o.contains(this)&&!o.querySelector(".js_subscribe")&&(o.style.display="none")}relabel(t){let e=u[t].news,o=this.querySelector(":scope > .js_subscribe");if(!o)return;let r=o.querySelector('input[name="email"], .js_subscribe_value');r&&(r.setAttribute("placeholder",e.placeholder),r.setAttribute("aria-label",e.placeholder));let a=o.querySelector(".js_subscribe_btn");a&&(a.textContent=e.button);let l=o.querySelector(".js_subscribed_wrap p");l&&(l.innerHTML=`<i class="fa fa-check-circle-o"></i> ${e.done}`)}page(t,e){let{esc:o,L:r}=e,a=u[t],l=p=>`<nav class="f-col" aria-label="${o(p.title)}"><p class="f-label">${o(p.title)}</p><ul>${p.links.map(([g,x])=>`<li><a href="${r(x)}">${o(g)}</a></li>`).join("")}</ul></nav>`;return`
  <div class="f-wrap">
    <div class="wrap f-top">
      <div class="f-brand">
        <a class="f-logo" href="${r("/")}" aria-label="Polylocal">${W}<span>Polylocal</span></a>
        <p class="f-tag">${o(a.tagline)}</p>
        <p class="f-about">${o(a.about)}</p>
        <div class="f-contact">
          <a class="f-email" href="mailto:contact@polylocal.eu">contact@polylocal.eu</a>
          <a class="f-li" href="https://www.linkedin.com/company/polylocal/" target="_blank" rel="noopener" aria-label="LinkedIn">${j}</a>
        </div>
      </div>
      <div class="f-cols">${a.cols.map(l).join("")}</div>
      <div class="f-news">
        <p class="f-label">${o(a.news.kicker)}</p>
        <h2>${o(a.news.title)}</h2>
        <p class="f-news-text">${o(a.news.text)}</p>
        <div class="f-slot"><slot name="newsletter"><p class="f-missing">${o(a.news.missing)}</p></slot></div>
      </div>
    </div>
    <div class="wrap f-bottom">
      <span>\xA9 ${new Date().getFullYear()} Polylocal</span>
      <span class="f-hubs">${o(a.hubs)}</span>
      <a href="${r("/privacy-policy")}">${o(a.privacy)}</a>
    </div>
  </div>`}};f(c,"css",E);customElements.get("polylocal-footer")||customElements.define("polylocal-footer",c);var J=c;})();
