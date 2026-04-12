/* ============================================================
   DASHBOARD VH — script.js
   Vendedores Humanos
   ============================================================ */
 
'use strict';
 
/* ---- NAV CONFIG ---- */
const NAV_CONFIG = {
  ads: {
    section: 'Rendimiento Ads',
    sub: 'Performance · Tiempo real',
  },
  conversiones: {
    section: 'Datos & Conversiones',
    sub: 'UTMs · Funnel de conversión',
  },
  webinar: {
    section: 'Webinar Performance',
    sub: 'Live Funnels · Comparativa de lanzamientos',
  },
  avatar: {
    section: 'Avatar & Insights',
    sub: 'Perfil demográfico · Psicología del avatar',
  },
  content: {
    section: 'Content Performance',
    sub: 'Instagram · Análisis manual · Trial Reels',
  },
  tasks: {
    section: 'Daily Tasks',
    sub: 'Embudo de captación · Alertas · Split de presupuesto',
  },
};
 
let currentSection = 'ads';
 
/* ---- NAVIGATION ---- */
function navigate(sectionId, linkEl) {
  // Guard: same section
  if (sectionId === currentSection) return;
 
  // Deactivate all nav items
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
 
  // Activate clicked nav item
  if (linkEl) linkEl.classList.add('active');
 
  // Hide current section, show new one
  const prevSection = document.getElementById('section-' + currentSection);
  const nextSection = document.getElementById('section-' + sectionId);
 
  if (prevSection) prevSection.classList.remove('active');
  if (nextSection) {
    // Force reflow for animation
    nextSection.classList.remove('active');
    void nextSection.offsetWidth;
    nextSection.classList.add('active');
  }
 
  // Update breadcrumb
  const config = NAV_CONFIG[sectionId];
  if (config) {
    document.getElementById('breadcrumb-section').textContent = config.section;
    document.getElementById('breadcrumb-sub').textContent = config.sub;
  }
 
  currentSection = sectionId;
 
  // Scroll content to top
  const content = document.getElementById('content');
  if (content) content.scrollTop = 0;
}
 
/* ---- SEGMENT BUTTONS ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Handle segment button groups (toggle active within group)
  document.querySelectorAll('.seg-buttons').forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('.seg-btn');
      if (!btn) return;
      group.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
 
  // Init: mark first nav group item active
  const firstNavItem = document.querySelector('.nav-item[data-section="ads"]');
  if (firstNavItem) firstNavItem.classList.add('active');
});
 
/* ---- EXPORT ---- */
function exportSection() {
  const config = NAV_CONFIG[currentSection];
  const name   = config ? config.section : currentSection;
  const stamp  = new Date().toISOString().split('T')[0];
 
  // Build minimal CSV of visible metric values
  const values = [];
  const activeSection = document.getElementById('section-' + currentSection);
 
  if (activeSection) {
    activeSection.querySelectorAll('.metric-value').forEach((el, i) => {
      const label = el.closest('.metric-card')?.querySelector('.metric-label')?.textContent?.trim() || ('Métrica ' + (i + 1));
      values.push(`"${label}","${el.textContent.trim()}"`);
    });
  }
 
  if (values.length === 0) {
    showNotification('No hay métricas para exportar en esta sección.', 'warning');
    return;
  }
 
  const csv = 'Métrica,Valor\n' + values.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `dashboard-vh_${name.replace(/\s+/g, '-').toLowerCase()}_${stamp}.csv`;
  a.click();
  URL.revokeObjectURL(url);
 
  showNotification('Reporte exportado correctamente.', 'success');
}
 
/* ---- SEARCH (stub) ---- */
function toggleSearch() {
  showNotification('Función de búsqueda disponible próximamente.', 'info');
}
 
/* ---- NOTIFICATION TOAST ---- */
function showNotification(message, type = 'info') {
  // Remove existing toast
  const existing = document.getElementById('vh-toast');
  if (existing) existing.remove();
 
  const colors = {
    success: { bg: 'rgba(29,184,122,0.15)', border: 'rgba(29,184,122,0.4)', text: '#1db87a' },
    warning: { bg: 'rgba(232,168,48,0.15)',  border: 'rgba(232,168,48,0.4)',  text: '#e8a830' },
    info:    { bg: 'rgba(124,111,224,0.15)', border: 'rgba(124,111,224,0.4)', text: '#7c6fe0' },
    error:   { bg: 'rgba(232,85,85,0.15)',   border: 'rgba(232,85,85,0.4)',   text: '#e85555' },
  };
 
  const c = colors[type] || colors.info;
 
  const toast = document.createElement('div');
  toast.id = 'vh-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${c.bg};
    border: 1px solid ${c.border};
    color: ${c.text};
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    z-index: 9999;
    pointer-events: none;
    animation: toastIn 0.25s ease forwards;
    max-width: 340px;
    backdrop-filter: blur(8px);
  `;
  toast.textContent = message;
 
  // Inject animation keyframes once
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes toastIn  { from { opacity:0; transform:translateY(8px);  } to { opacity:1; transform:translateY(0); } }
      @keyframes toastOut { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(8px); } }
    `;
    document.head.appendChild(style);
  }
 
  document.body.appendChild(toast);
 
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 280);
  }, 2800);
}
 
/* ---- KEYBOARD SHORTCUTS ---- */
document.addEventListener('keydown', e => {
  // Cmd/Ctrl + K → search
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }
  // Cmd/Ctrl + E → export
  if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
    e.preventDefault();
    exportSection();
  }
  // Number keys 1–6 → navigate sections
  const sections = ['ads', 'conversiones', 'webinar', 'avatar', 'content', 'tasks'];
  const idx = parseInt(e.key) - 1;
  if (!e.metaKey && !e.ctrlKey && !e.altKey && idx >= 0 && idx < sections.length) {
    const targetId = sections[idx];
    const navEl    = document.querySelector(`.nav-item[data-section="${targetId}"]`);
    navigate(targetId, navEl);
  }
});
 
/* ---- ACTIVE NAV HIGHLIGHT on click ---- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
    });
  });
});
 