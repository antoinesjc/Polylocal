// Extra styles for the B2B Lead Generation page (on top of shared/styles.js).
// This page leads with terracotta.
export default `
.clay-dots{background-image:radial-gradient(rgba(181,122,114,.13) 1px,transparent 1px)}
.eyebrow.clay-light{color:var(--clay-lt)}

/* hero */
.lg-hero{position:relative;padding-top:88px;padding-bottom:56px}
.lg-hero-row{display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;justify-content:space-between;margin-top:28px}
.lg-h1{flex:1 1 640px;margin:0;font-size:clamp(50px,7vw,104px);line-height:.95}
:host([data-lang="zh-TW"]) .lg-h1{line-height:1.12}
.lg-hero-side{flex:1 1 360px;max-width:450px;min-width:0}
.pipeline-wrap{position:relative;padding-bottom:104px}
.pipeline{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:2px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
.stage{background:var(--ink);padding:28px;display:flex;flex-direction:column;gap:10px}
.stage.s3{background:#22323A}
.stage-no{font-family:var(--display);font-weight:800;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;color:rgba(255,255,255,.55)}
:host([data-lang="zh-TW"]) .stage-no{letter-spacing:.5px}
.stage.s3 .stage-no{color:var(--clay-lt)}
.stage-name{font-family:var(--display);font-weight:800;font-size:26px}
.stage-text{font-size:14px;line-height:1.5;color:rgba(255,255,255,.75)}
.stage-bar{margin-top:auto;height:6px;display:block}
.stage-text{margin-bottom:12px}
.stage.s0 .stage-bar{width:100%;background-color:rgba(181,122,114,.35)}
.stage.s1 .stage-bar{width:78%;background-color:rgba(181,122,114,.55)}
.stage.s2 .stage-bar{width:54%;background-color:rgba(181,122,114,.8)}
.stage.s3 .stage-bar{width:32%;background-color:var(--clay-lt)}

/* two directions */
.bridges{display:flex;flex-direction:column;gap:16px}
.bridge{background:var(--ivory);display:flex;flex-wrap:wrap;align-items:center;gap:20px 40px;padding:36px 40px}
.bridge-route{flex:0 0 auto;display:flex;align-items:center;gap:14px;font-family:var(--display);font-weight:800;font-size:22px;color:var(--ink)}
.long-arrow{width:64px;height:14px;fill:none;stroke-width:2}
.bridge.sky .long-arrow{stroke:var(--sky-dk)} .bridge.clay .long-arrow{stroke:var(--clay-dk)}
.bridge p{flex:1 1 420px;font-size:16px;line-height:1.65;color:var(--text-2)}
.bridge-alt{font-family:var(--zh-serif);font-size:26px;font-weight:700}
:host([data-lang="zh-TW"]) .bridge-alt{font-family:var(--display);font-size:18px}
.bridge.sky .bridge-alt{color:var(--sky)} .bridge.clay .bridge-alt{color:var(--clay)}

/* services */
.lg-services{padding-top:128px;padding-bottom:112px}
.lg-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:24px}
.lg-card{background:#fff;border:1px solid var(--line-2);padding:40px;display:flex;flex-direction:column;gap:18px;transition:transform .25s,box-shadow .25s}
.lg-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(23,34,42,.10)}
.lg-card.dark{background:var(--ink);border-color:var(--ink);color:#fff}
.lg-icon svg{width:40px;height:40px;fill:none;stroke:var(--clay-dk);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.lg-card.dark .lg-icon svg{stroke:var(--clay-lt)}
.lg-card h3{font-size:28px;line-height:1.15;letter-spacing:-.02em;color:var(--ink)}
.lg-card.dark h3{color:#fff}
.lg-card p{font-size:16px;line-height:1.65;color:var(--text-2)}
.lg-card.dark p{color:rgba(255,255,255,.82)}

/* engagement models */
.plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:24px;margin-top:48px}
.plan{position:relative;border:1px solid var(--text);padding:44px;display:flex;flex-direction:column;gap:20px}
.plan.dark{background:var(--ink);border-color:var(--ink);color:#fff}
.plan-badge{position:absolute;top:-13px;left:44px;background:var(--clay);color:var(--ink);font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;padding:6px 10px}
:host([data-lang="zh-TW"]) .plan-badge{letter-spacing:.5px}
.plan-top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:8px 16px}
.plan h3{font-size:30px;letter-spacing:-.02em;color:var(--ink)}
.plan.dark h3{color:#fff}
.plan-tag{font-family:var(--display);font-weight:700;font-size:14px;color:var(--muted)}
.plan.dark .plan-tag{color:rgba(255,255,255,.65)}
.plan-text{font-size:16px;line-height:1.65;color:var(--text-2)}
.plan.dark .plan-text{color:rgba(255,255,255,.82)}
.plan-list{list-style:none;padding:18px 0 0;display:flex;flex-direction:column;gap:12px;font-size:15px;border-top:1px solid var(--line)}
.plan.dark .plan-list{border-top-color:rgba(255,255,255,.14);color:rgba(255,255,255,.9)}
.plan-list li{display:flex;gap:12px;align-items:flex-start}
.plan-list .ico{width:18px;height:18px;margin-top:3px;color:var(--clay-dk)}
.plan.dark .plan-list .ico{color:var(--clay-lt)}
.plan-btn{margin-top:auto;align-self:flex-start}
.btn.outline{border:1px solid var(--ink);color:var(--ink)}
.btn.outline:hover{background:var(--ink);color:#fff}

/* comparison table */
.compare{align-items:flex-start}
.table-box{overflow-x:auto}
table{width:100%;min-width:480px;border-collapse:collapse;font-size:15px}
thead th{text-align:left;padding:16px 12px;border-bottom:1px solid var(--text);font-family:var(--display);font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--muted)}
thead th.us{color:var(--clay-dk)}
tbody th{text-align:left;padding:18px 12px;border-bottom:1px solid var(--line);font-family:var(--display);font-weight:800;color:var(--ink);white-space:nowrap}
tbody td{padding:18px 12px;border-bottom:1px solid var(--line);color:var(--muted)}
tbody td.us{color:var(--ink);font-weight:600}

@media (max-width:900px){
  .pipeline{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:640px){
  .lg-hero{padding-top:56px;padding-bottom:40px}
  .lg-hero-row{gap:28px}
  .pipeline-wrap{padding-bottom:64px}
  .pipeline{grid-template-columns:1fr}
  .stage{padding:22px}
  .bridge{padding:28px}
  .lg-services{padding-top:80px;padding-bottom:72px}
  .lg-card,.plan{padding:28px}
  .plan-badge{left:28px}
}
@media (prefers-reduced-motion:reduce){ .lg-card{transition:none} }
`;
