/* =========================================================
   DASHBOARD MARKETING — style.css
   Tema: Dark industrial con tipografía Syne + Space Mono
   ========================================================= */
 
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
:root {
  --bg:          #0a0a0f;
  --bg-card:     #0f0f18;
  --bg-hover:    #141420;
  --bg-active:   #191928;
  --border:      rgba(255,255,255,0.07);
  --border-med:  rgba(255,255,255,0.12);
 
  --green:       #4ade80;
  --green-dim:   rgba(74,222,128,0.12);
  --green-glow:  rgba(74,222,128,0.25);
  --coral:       #fb7185;
  --coral-dim:   rgba(251,113,133,0.12);
  --orange:      #fb923c;
  --orange-dim:  rgba(251,146,60,0.12);
  --purple:      #a78bfa;
  --purple-dim:  rgba(167,139,250,0.12);
  --blue:        #60a5fa;
  --teal:        #34d399;
  --teal-dim:    rgba(52,211,153,0.10);
 
  --text-primary:   #f0f0f8;
  --text-secondary: #8b8ba8;
  --text-muted:     #4a4a65;
 
  --sidebar-w: 240px;
  --font-display: 'Syne', sans-serif;
  --font-mono:    'Space Mono', monospace;
}
 
html, body {
  height: 100%;
  overflow: hidden;
}
 
body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-display);
  display: flex;
}
 
/* ── SCROLLBAR ──────────────────────────────────── */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
 
/* =========================================================
   SIDEBAR
   ========================================================= */
.sidebar {
  width: var(--sidebar-w);
  min-width: var(--sidebar-w);
  height: 100vh;
  background: var(--bg-card);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 10;
}
 
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 22px 20px 20px;
  border-bottom: 1px solid var(--border);
}
 
.brand-icon {
  width: 32px;
  height: 32px;
  background: var(--green-dim);
  border: 1px solid rgba(74,222,128,0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
  flex-shrink: 0;
}
 
.brand-name {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
 
.sidebar-divider {
  height: 1px;
  background: var(--border);
  margin: 8px 0;
}
 
.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 4px 10px;
  gap: 2px;
}
 
.nav-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  padding: 10px 10px 4px;
}
 
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  position: relative;
  transition: background 0.15s, color 0.15s;
}
 
.nav-item:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}
 
.nav-item.active {
  background: var(--green-dim);
  color: var(--green);
  border: 1px solid rgba(74,222,128,0.15);
}
 
.nav-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
 
.nav-dot {
  width: 5px;
  height: 5px;
  background: var(--green);
  border-radius: 50%;
  margin-left: auto;
  box-shadow: 0 0 6px var(--green);
}
 
.sub-nav {
  display: flex;
  flex-direction: column;
  padding: 0 10px 6px;
  gap: 1px;
}
 
.sub-nav.hidden { display: none; }
 
.sub-item {
  display: block;
  padding: 7px 12px 7px 22px;
  font-size: 12px;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 6px;
  border-left: 1px solid var(--border);
  margin-left: 10px;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
  cursor: pointer;
}
 
.sub-item:hover {
  color: var(--text-secondary);
  background: var(--bg-hover);
}
 
.sub-item.active-sub {
  color: var(--purple);
  border-left-color: var(--purple);
  background: var(--purple-dim);
}
 
.sidebar-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
  font-size: 11px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
 
.status-dot {
  width: 6px;
  height: 6px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--green);
  animation: pulse 2s ease-in-out infinite;
}
 
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
 
/* =========================================================
   CONTENT AREA
   ========================================================= */
.content {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 32px 36px;
}
 
.section { display: none; animation: fadeIn 0.25s ease; }
.section.active { display: block; }
.section.hidden { display: none; }
 
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
 
/* ── PAGE HEADER ──────────────────────────────────── */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 16px;
}
 
.page-eyebrow {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 4px;
}
 
.page-title {
  font-size: 26px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
}
 
.page-badge {
  background: var(--bg-card);
  border: 1px solid var(--border-med);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 11px;
  font-family: var(--font-mono);
  color: var(--text-secondary);
  white-space: nowrap;
  margin-top: 4px;
}
 
/* =========================================================
   KPI CARDS
   ========================================================= */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}
 
.kpi-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 18px;
  transition: border-color 0.2s;
}
 
.kpi-card:hover { border-color: var(--border-med); }
 
.kpi-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 8px;
}
 
.kpi-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  font-family: var(--font-display);
  line-height: 1;
}
 
.kpi-value.accent { color: var(--green); }
 
.kpi-delta {
  font-size: 11px;
  font-family: var(--font-mono);
  margin-top: 6px;
}
 
.kpi-delta.up { color: var(--green); }
.kpi-delta.down { color: var(--coral); }
.kpi-delta.neutral { color: var(--text-muted); }
 
/* =========================================================
   CHART CARDS
   ========================================================= */
.charts-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
 
.charts-row .wide { grid-column: span 1; }
 
@media (max-width: 900px) {
  .charts-row { grid-template-columns: 1fr; }
}
 
.chart-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  margin-bottom: 16px;
}
 
.chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 12px;
  flex-wrap: wrap;
}
 
.chart-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
}
 
.chart-wrap { position: relative; width: 100%; }
 
.legend-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
 
.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}
 
.dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}
 
.dot.dashed {
  background: repeating-linear-gradient(90deg, var(--purple) 0 4px, transparent 4px 6px) !important;
}
 
/* =========================================================
   TABLES
   ========================================================= */
.table-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  margin-bottom: 16px;
}
 
.table-header {
  margin-bottom: 16px;
}
 
.table-scroll {
  overflow-x: auto;
}
 
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
 
.data-table thead tr {
  border-bottom: 1px solid var(--border-med);
}
 
.data-table th {
  text-align: left;
  padding: 8px 12px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  white-space: nowrap;
}
 
.data-table td {
  padding: 10px 12px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
 
.data-table tbody tr:last-child td { border-bottom: none; }
 
.data-table tbody tr:hover td {
  background: var(--bg-hover);
  color: var(--text-primary);
}
 
.row-highlight td { background: rgba(74,222,128,0.03); }
.row-highlight:hover td { background: rgba(74,222,128,0.06) !important; }
 
.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
 
.badge.green  { background: var(--green-dim);  color: var(--green); }
.badge.orange { background: var(--orange-dim); color: var(--orange); }
.badge.coral  { background: var(--coral-dim);  color: var(--coral); }
.badge.purple { background: var(--purple-dim); color: var(--purple); }
 
/* =========================================================
   TWO-COL LAYOUT
   ========================================================= */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
 
@media (max-width: 800px) {
  .two-col { grid-template-columns: 1fr; }
}
 
/* =========================================================
   FUNNEL (Daily Task)
   ========================================================= */
.funnel-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 16px;
  margin-bottom: 16px;
}
 
@media (max-width: 800px) {
  .funnel-grid { grid-template-columns: 1fr; }
}
 
.funnel-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
 
.funnel-step {
  display: flex;
  align-items: center;
  gap: 12px;
}
 
.funnel-label {
  font-size: 12px;
  color: var(--text-secondary);
  width: 140px;
  flex-shrink: 0;
}
 
.funnel-bar-wrap {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
  overflow: hidden;
}
 
.funnel-bar {
  height: 6px;
  border-radius: 3px;
  transition: width 0.6s ease;
}
 
.funnel-val {
  font-size: 13px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
  width: 55px;
  text-align: right;
  flex-shrink: 0;
}
 
.funnel-arrow {
  text-align: center;
  color: var(--text-muted);
  font-size: 12px;
  padding: 0 0 0 150px;
}
 
/* ── RATES BLOCK ── */
.rates-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 22px;
}
 
.rates-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 14px;
}
 
.rate-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
 
.rate-row:last-of-type { border-bottom: none; }
 
.rate-name {
  font-size: 12px;
  color: var(--text-secondary);
  flex: 1;
}
 
.rate-val {
  font-size: 16px;
  font-weight: 800;
  font-family: var(--font-mono);
}
 
.rate-val.green  { color: var(--green); }
.rate-val.orange { color: var(--orange); }
.rate-val.purple { color: var(--purple); }
.rate-val.red    { color: var(--coral); }
 
.rate-desc {
  font-size: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-align: right;
  width: 100px;
  flex-shrink: 0;
}
 
.divider-h {
  height: 1px;
  background: var(--border);
  margin: 14px 0;
}
 
.cpx-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
 
.cpx-item {
  background: var(--bg-active);
  border-radius: 8px;
  padding: 10px 12px;
}
 
.cpx-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}
 
.cpx-val {
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
}
 
/* =========================================================
   WEBINAR HERO
   ========================================================= */
.webinar-hero {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  align-items: start;
}
 
@media (max-width: 800px) {
  .webinar-hero { grid-template-columns: 1fr; }
}
 
.webinar-badge-best {
  display: inline-block;
  background: var(--green-dim);
  color: var(--green);
  border: 1px solid rgba(74,222,128,0.2);
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
}
 
.webinar-title-big {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 8px;
}
 
.webinar-date {
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-muted);
}
 
.webinar-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
 
@media (max-width: 700px) {
  .webinar-stats-grid { grid-template-columns: repeat(2, 1fr); }
}
 
.wstat {
  background: var(--bg-active);
  border-radius: 10px;
  padding: 12px;
}
 
.wstat-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-bottom: 6px;
}
 
.wstat-val {
  font-size: 20px;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--text-primary);
}
 
.wstat-val.accent { color: var(--green); }
 
/* =========================================================
   HORIZONTAL BARS
   ========================================================= */
.bar-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
 
.hbar-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
 
.hbar-label {
  font-size: 12px;
  color: var(--text-secondary);
  width: 130px;
  flex-shrink: 0;
}
 
.hbar-track {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
  overflow: hidden;
}
 
.hbar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s ease;
}
 
.hbar-fill.purple { background: var(--purple); }
.hbar-fill.coral  { background: var(--coral); }
.hbar-fill.green  { background: var(--green); }
.hbar-fill.teal   { background: var(--teal); }
 
.hbar-pct {
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
  width: 36px;
  text-align: right;
  flex-shrink: 0;
}
 
/* =========================================================
   DOT LISTS (Situación)
   ========================================================= */
.col-header-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 20px;
  padding: 4px 14px;
  margin-bottom: 16px;
}
 
.col-header-pill.purple { background: var(--purple-dim); color: var(--purple); }
.col-header-pill.coral  { background: var(--coral-dim);  color: var(--coral);  }
 
.dot-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
 
.dot-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}
 
.dot-item::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}
 
.dot-item.purple::before { background: var(--purple); }
.dot-item.coral::before  { background: var(--coral); }
 
/* =========================================================
   METER (consciencia)
   ========================================================= */
.meter-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
 
.meter-label-left,
.meter-label-right {
  font-size: 10px;
  font-family: var(--font-mono);
  color: var(--text-muted);
  flex-shrink: 0;
  width: 90px;
  line-height: 1.4;
}
 
.meter-label-right { text-align: right; }
 
.meter-outer {
  flex: 1;
  height: 14px;
  background: rgba(255,255,255,0.05);
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}
 
.meter-fill-bar {
  height: 100%;
  background: linear-gradient(90deg, #534AB7, #a78bfa);
  border-radius: 7px;
  transition: width 1s ease;
}
 
.meter-badge {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-family: var(--font-mono);
  font-weight: 700;
  color: #fff;
}
 
/* =========================================================
   INSIGHT BOX
   ========================================================= */
.insight-box {
  border-radius: 10px;
  padding: 14px 16px;
}
 
.insight-box.purple {
  background: var(--purple-dim);
  border-left: 3px solid var(--purple);
}
 
.insight-box.coral {
  background: var(--coral-dim);
  border-left: 3px solid var(--coral);
}
 
.insight-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
}
 
.insight-box.purple .insight-title { color: var(--purple); }
.insight-box.coral .insight-title  { color: var(--coral); }
 
.insight-text {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}
 
.insight-text strong { color: var(--text-primary); }
 
/* =========================================================
   MIEDOS
   ========================================================= */
.miedo-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
 
.miedo-item {
  padding: 14px 16px;
  background: var(--bg-active);
  border-radius: 10px;
}
 
.miedo-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
 
.miedo-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
}
 
.miedo-pct {
  font-size: 14px;
  font-weight: 800;
  font-family: var(--font-mono);
}
 
.miedo-pct.coral  { color: var(--coral); }
.miedo-pct.orange { color: var(--orange); }
 
.miedo-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
}
 
/* =========================================================
   PILLS
   ========================================================= */
.pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
 
.pill {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: default;
}
 
.pill.purple {
  background: var(--purple-dim);
  color: var(--purple);
  border: 1px solid rgba(167,139,250,0.2);
}
 
/* =========================================================
   MIRROR GRID (Decisión)
   ========================================================= */
.mirror-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
 
@media (max-width: 700px) {
  .mirror-grid { grid-template-columns: 1fr; }
}
 
.mirror-col {
  border-radius: 14px;
  padding: 18px 20px;
}
 
.coral-bg { background: rgba(251,113,133,0.06); border: 1px solid rgba(251,113,133,0.12); }
.teal-bg  { background: rgba(52,211,153,0.06);  border: 1px solid rgba(52,211,153,0.12);  }
 
.mirror-hdr {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
 
.mirror-hdr.coral { color: var(--coral); }
.mirror-hdr.teal  { color: var(--teal);  }
 
.mirror-item {
  font-size: 13px;
  color: var(--text-secondary);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  line-height: 1.5;
}
 
.mirror-item:last-child { border-bottom: none; }
 
/* =========================================================
   VOCABULARIO
   ========================================================= */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}
 
.vocab-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--purple);
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.2s, background 0.2s;
}
 
.vocab-card:hover {
  background: var(--bg-hover);
  border-color: var(--border-med);
  border-left-color: var(--purple);
}
 
.vocab-quote {
  font-size: 13px;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.6;
}
 
.vocab-tag {
  display: inline-block;
  background: var(--purple-dim);
  color: var(--purple);
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  align-self: flex-start;
}
 
/* =========================================================
   SUB-AVATARES
   ========================================================= */
.subav-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}
 
.subav-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: border-color 0.2s;
}
 
.subav-card:hover { border-color: var(--border-med); }
.subav-card.best  { border-color: rgba(52,211,153,0.3); }
 
.subav-rank {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  font-family: var(--font-mono);
  flex-shrink: 0;
  background: var(--teal-dim);
  color: var(--teal);
  border: 1px solid rgba(52,211,153,0.2);
}
 
.subav-rank.rank2 {
  background: var(--purple-dim);
  color: var(--purple);
  border-color: rgba(167,139,250,0.2);
}
 
.subav-rank.rank3 {
  background: var(--bg-active);
  color: var(--text-muted);
  border-color: var(--border);
}
 
.subav-body { flex: 1; }
 
.subav-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}
 
.subav-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
}
 
.subav-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 12px;
}
 
.subav-metrics {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
 
.subav-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
 
.subav-stat-val {
  font-size: 16px;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--text-primary);
}
 
.subav-stat-val.accent { color: var(--green); }
 
.subav-stat-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
 
