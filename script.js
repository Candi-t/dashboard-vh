/* =========================================================
   DASHBOARD MARKETING — script.js
   Navegación + Chart.js con tema dark
   ========================================================= */
 
'use strict';
 
// ── CHART DEFAULTS ──────────────────────────────────────────
const COLORS = {
  green:  '#4ade80',
  coral:  '#fb7185',
  orange: '#fb923c',
  purple: '#a78bfa',
  blue:   '#60a5fa',
  teal:   '#34d399',
  gray:   '#888',
};
 
const CHART_DEFAULTS = {
  gridColor:  'rgba(255,255,255,0.05)',
  tickColor:  '#4a4a65',
  fontFamily: "'Space Mono', monospace",
  fontSize:   10,
};
 
Chart.defaults.color           = CHART_DEFAULTS.tickColor;
Chart.defaults.font.family     = CHART_DEFAULTS.fontFamily;
Chart.defaults.font.size       = CHART_DEFAULTS.fontSize;
Chart.defaults.borderColor     = CHART_DEFAULTS.gridColor;
 
function baseScales(yLabel = '') {
  return {
    x: {
      grid: { color: CHART_DEFAULTS.gridColor },
      ticks: { color: CHART_DEFAULTS.tickColor },
    },
    y: {
      grid: { color: CHART_DEFAULTS.gridColor },
      ticks: { color: CHART_DEFAULTS.tickColor },
      title: yLabel
        ? { display: true, text: yLabel, color: CHART_DEFAULTS.tickColor, font: { size: 10 } }
        : undefined,
    },
  };
}
 
// ── CHART INSTANCES (for lazy init) ─────────────────────────
const charts = {};
 
function initChart(id, config) {
  if (charts[id]) return;
  const canvas = document.getElementById(id);
  if (!canvas) return;
  charts[id] = new Chart(canvas, config);
}
 
// ── DASHBOARD GENERAL ────────────────────────────────────────
function initDashboard() {
  initChart('dashMainChart', {
    type: 'bar',
    data: {
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
      datasets: [
        {
          label: 'Inversión',
          data: [980, 1240, 1100, 1500],
          backgroundColor: 'rgba(74,222,128,0.25)',
          borderColor: COLORS.green,
          borderWidth: 1,
          borderRadius: 4,
          order: 2,
        },
        {
          label: 'Leads ×10',
          data: [620, 890, 780, 1120],
          type: 'line',
          borderColor: COLORS.orange,
          backgroundColor: 'rgba(251,146,60,0.08)',
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: COLORS.orange,
          fill: true,
          order: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: baseScales(),
    },
  });
 
  initChart('canalDonut', {
    type: 'doughnut',
    data: {
      labels: ['Meta Ads', 'Google', 'Orgánico'],
      datasets: [{
        data: [68, 22, 10],
        backgroundColor: [COLORS.green, COLORS.blue, COLORS.gray],
        borderWidth: 0,
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: { legend: { display: false } },
    },
  });
}
 
// ── DAILY TASK ───────────────────────────────────────────────
function initDaily() {
  initChart('dailyChart', {
    type: 'line',
    data: {
      labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      datasets: [
        {
          label: 'Clics',
          data: [520, 560, 610, 480, 620, 590, 460],
          borderColor: COLORS.green,
          backgroundColor: 'rgba(74,222,128,0.06)',
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: COLORS.green,
          fill: true,
        },
        {
          label: 'Leads Meta',
          data: [198, 216, 234, 185, 248, 220, 159],
          borderColor: COLORS.orange,
          backgroundColor: 'rgba(251,146,60,0.06)',
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: COLORS.orange,
          fill: true,
        },
        {
          label: 'Leads GP',
          data: [152, 165, 178, 142, 190, 168, 117],
          borderColor: COLORS.purple,
          backgroundColor: 'rgba(167,139,250,0.06)',
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: COLORS.purple,
          borderDash: [4, 3],
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: baseScales(),
    },
  });
}
 
// ── ADS PERFORMANCE ──────────────────────────────────────────
function initAds() {
  initChart('gastoChart', {
    type: 'line',
    data: {
      labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      datasets: [{
        label: 'Gasto',
        data: [120, 138, 145, 130, 158, 142, 147],
        borderColor: COLORS.blue,
        backgroundColor: 'rgba(96,165,250,0.1)',
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: COLORS.blue,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: baseScales('$'),
    },
  });
 
  initChart('leadsChart', {
    type: 'line',
    data: {
      labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      datasets: [{
        label: 'Leads',
        data: [185, 204, 218, 196, 238, 210, 209],
        borderColor: COLORS.green,
        backgroundColor: 'rgba(74,222,128,0.08)',
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: COLORS.green,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: baseScales(),
    },
  });
}
 
// ── WEBINAR ──────────────────────────────────────────────────
function initWebinar() {
  initChart('retencionChart', {
    type: 'line',
    data: {
      labels: ['Inicio', '15 min', '30 min', '45 min', '60 min', '75 min', 'Cierre'],
      datasets: [{
        label: 'Asistentes',
        data: [634, 580, 490, 412, 318, 240, 180],
        borderColor: COLORS.purple,
        backgroundColor: 'rgba(167,139,250,0.1)',
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: COLORS.purple,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: baseScales(),
    },
  });
}
 
// ── SUB-AVATARES ─────────────────────────────────────────────
function initSubavatar() {
  initChart('subavChart', {
    type: 'bar',
    data: {
      labels: ['Emprendedor digital', 'Freelancer ventas', 'Creador contenido'],
      datasets: [
        {
          label: 'ROAS',
          data: [4.2, 3.1, 2.4],
          backgroundColor: ['rgba(52,211,153,0.6)', 'rgba(52,211,153,0.4)', 'rgba(52,211,153,0.25)'],
          borderColor: [COLORS.teal, COLORS.teal, COLORS.teal],
          borderWidth: 1,
          borderRadius: 4,
          yAxisID: 'y',
        },
        {
          label: 'CPL ($)',
          data: [0.58, 0.74, 1.02],
          backgroundColor: ['rgba(251,113,133,0.6)', 'rgba(251,113,133,0.4)', 'rgba(251,113,133,0.25)'],
          borderColor: [COLORS.coral, COLORS.coral, COLORS.coral],
          borderWidth: 1,
          borderRadius: 4,
          yAxisID: 'y2',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { color: CHART_DEFAULTS.gridColor },
          ticks: { color: CHART_DEFAULTS.tickColor },
        },
        y: {
          position: 'left',
          grid: { color: CHART_DEFAULTS.gridColor },
          ticks: { color: CHART_DEFAULTS.tickColor },
          title: { display: true, text: 'ROAS', color: CHART_DEFAULTS.tickColor, font: { size: 10 } },
        },
        y2: {
          position: 'right',
          grid: { display: false },
          ticks: { color: CHART_DEFAULTS.tickColor },
          title: { display: true, text: 'CPL ($)', color: CHART_DEFAULTS.tickColor, font: { size: 10 } },
        },
      },
    },
  });
}
 
// ── SECTION & CHART MAP ───────────────────────────────────────
const SECTION_MAP = {
  // [sectionId]: { secEl: string, subNavId: string, initFn: fn | null }
  dashboard:   { secEl: 'sec-dashboard', subNavId: 'sub-nav-dashboard',   initFn: initDashboard   },
  lanzamiento: { secEl: 'sec-daily',     subNavId: 'sub-nav-lanzamiento',  initFn: initDaily       },
  avatar:      { secEl: 'sec-demografico', subNavId: 'sub-nav-avatar',     initFn: null            },
};
 
const SUB_MAP = {
  overview:     { secEl: 'sec-dashboard',   initFn: initDashboard   },
  daily:        { secEl: 'sec-daily',       initFn: initDaily       },
  ads:          { secEl: 'sec-ads',         initFn: initAds         },
  webinar:      { secEl: 'sec-webinar',     initFn: initWebinar     },
  demografico:  { secEl: 'sec-demografico', initFn: null            },
  situacion:    { secEl: 'sec-situacion',   initFn: null            },
  psicologia:   { secEl: 'sec-psicologia',  initFn: null            },
  decision:     { secEl: 'sec-decision',    initFn: null            },
  vocabulario:  { secEl: 'sec-vocabulario', initFn: null            },
  subavatar:    { secEl: 'sec-subavatar',   initFn: initSubavatar   },
};
 
// ── NAVIGATION ───────────────────────────────────────────────
function showSection(sectionId) {
  const map = SECTION_MAP[sectionId];
  if (!map) return;
 
  // hide all sections
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });
 
  // hide all sub-navs
  document.querySelectorAll('.sub-nav').forEach(sn => sn.classList.add('hidden'));
 
  // activate nav item
  document.querySelectorAll('.nav-item').forEach(ni => ni.classList.remove('active'));
  const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (activeNavItem) activeNavItem.classList.add('active');
 
  // show correct sub-nav
  const subNav = document.getElementById(map.subNavId);
  if (subNav) subNav.classList.remove('hidden');
 
  // show section
  const secEl = document.getElementById(map.secEl);
  if (secEl) {
    secEl.classList.remove('hidden');
    secEl.classList.add('active');
  }
 
  // init charts if needed
  if (map.initFn) map.initFn();
 
  // activate first sub-item
  const firstSub = subNav ? subNav.querySelector('.sub-item') : null;
  if (firstSub) {
    subNav.querySelectorAll('.sub-item').forEach(si => si.classList.remove('active-sub'));
    firstSub.classList.add('active-sub');
  }
}
 
function showSubSection(subId) {
  const map = SUB_MAP[subId];
  if (!map) return;
 
  // hide all sections
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.classList.add('hidden');
  });
 
  // show target section
  const secEl = document.getElementById(map.secEl);
  if (secEl) {
    secEl.classList.remove('hidden');
    secEl.classList.add('active');
  }
 
  // init charts
  if (map.initFn) map.initFn();
 
  // update active sub-item
  document.querySelectorAll('.sub-item').forEach(si => si.classList.remove('active-sub'));
  const activeSub = document.querySelector(`.sub-item[data-sub="${subId}"]`);
  if (activeSub) activeSub.classList.add('active-sub');
}
 
// ── EVENT LISTENERS ──────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = item.getAttribute('data-section');
    if (sectionId) showSection(sectionId);
  });
});
 
document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const subId = item.getAttribute('data-sub');
    if (subId) showSubSection(subId);
  });
});
 
// ── INIT ─────────────────────────────────────────────────────
(function init() {
  // show dashboard by default
  showSection('dashboard');
})();
 
