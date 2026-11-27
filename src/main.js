import { NAV_ITEMS } from './data.js';
import { ICON_CLOSE, ICON_MENU, SOCIAL_LINKS } from './icons.js';
import { initContactPage, renderContactPage } from './pages/contact.js';
import { initHomePage, renderHomePage } from './pages/home.js';
import { initProductsPage, renderProductsPage } from './pages/products.js';
import { initProjectsPage, renderProjectsPage } from './pages/projects.js';
import { bindImageFallbacks, escapeHtml } from './utils.js';

const VALID_PAGES = new Set(NAV_ITEMS.map((item) => item.id));

let activePage = getPageFromHash();
let preselectedSubject = '';
let mobileOpen = false;
let cleanupCurrentPage = () => {};
let revealObserver = null;

function getPageFromHash() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  return VALID_PAGES.has(rawHash) ? rawHash : 'inicio';
}

function renderNavbar() {
  const navButtonsHtml = NAV_ITEMS.map((item) => {
    const isActive = activePage === item.id;
    return `
      <button
        type="button"
        class="nav-link-btn${isActive ? ' is-active' : ''}"
        aria-current="${isActive ? 'page' : 'false'}"
        data-nav="${escapeHtml(item.id)}"
      >
        ${escapeHtml(item.label)}
      </button>
    `;
  }).join('');

  const mobileNavButtonsHtml = NAV_ITEMS.map((item) => {
    const isActive = activePage === item.id;
    return `
      <button
        type="button"
        class="mobile-nav-btn${isActive ? ' is-active' : ''}"
        aria-current="${isActive ? 'page' : 'false'}"
        data-nav="${escapeHtml(item.id)}"
      >
        ${escapeHtml(item.label)}
      </button>
    `;
  }).join('');

  const socialIconsHtml = SOCIAL_LINKS.map(
    (social) => `
      <a
        href="${escapeHtml(social.href)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${escapeHtml(social.label)}"
        title="${escapeHtml(social.name)}"
        class="social-link"
      >
        ${social.icon}
      </a>
    `
  ).join('');

  return `
    <header class="site-header">
      <div class="container navbar-inner">
        <button
          type="button"
          class="brand-btn"
          aria-label="Ir al inicio — ICA Ingeniería Hidráulica"
          data-nav="inicio"
        >
          <img
            src="/assets/aistudio/logo_a69eadc6.png"
            alt="Logo ICA Ingeniería Hidráulica"
            referrerpolicy="no-referrer"
            class="brand-logo"
          />
        </button>

        <nav aria-label="Navegación principal" class="nav-links">
          ${navButtonsHtml}
        </nav>

        <div class="navbar-actions">
          <div class="social-links-desktop" aria-label="Redes sociales">
            ${socialIconsHtml}
          </div>

          <button
            type="button"
            id="mobile-menu-toggle"
            class="mobile-menu-btn"
            aria-expanded="${mobileOpen ? 'true' : 'false'}"
            aria-label="${mobileOpen ? 'Cerrar menú' : 'Abrir menú'}"
          >
            ${mobileOpen ? ICON_CLOSE : ICON_MENU}
          </button>
        </div>
      </div>

      <div id="mobile-drawer" class="mobile-drawer"${mobileOpen ? '' : ' hidden'}>
        <nav aria-label="Menú móvil" class="mobile-nav">
          ${mobileNavButtonsHtml}
        </nav>
        <div class="mobile-socials" aria-label="Redes sociales">
          ${socialIconsHtml}
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const footerLinksHtml = NAV_ITEMS.map(
    (item) => `
      <button
        type="button"
        class="footer-nav-btn"
        data-nav="${escapeHtml(item.id)}"
      >
        ${escapeHtml(item.label)}
      </button>
    `
  ).join('');

  return `
    <footer class="site-footer">
      <div class="container reveal">
        <div class="footer-top">
          <div class="footer-brand">
            <button
              type="button"
              class="footer-logo-btn"
              aria-label="Ir al inicio — ICA Ingeniería Hidráulica"
              data-nav="inicio"
            >
              <img
                src="/assets/aistudio/logo_a69eadc6.png"
                alt="Logo ICA Ingeniería Hidráulica"
                referrerpolicy="no-referrer"
                class="footer-logo-img"
              />
            </button>
            <p class="footer-desc">
              Consultoría, suministro técnico e ingeniería hidráulica orientada a la seguridad
              hídrica y la sostenibilidad de infraestructuras.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página" class="footer-nav">
            ${footerLinksHtml}
          </nav>
        </div>

        <div class="footer-bottom">
          <p>© ${year} ICA Ingeniería Hidráulica S.A.C. Todos los derechos reservados.</p>
          <p>Gestión de Calidad ISO 9001 · Ingeniería Civil e Hidráulica</p>
        </div>
      </div>
    </footer>
  `;
}

function setupScrollReveals(rootEl) {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  const heroElements = rootEl.querySelectorAll('.reveal-hero');
  heroElements.forEach((el) => {
    window.requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });
  });

  const targets = rootEl.querySelectorAll('.reveal, .reveal-scale');
  if (targets.length === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => revealObserver.observe(el));
}

function renderActivePageHtml() {
  switch (activePage) {
    case 'productos':
      return renderProductsPage();
    case 'proyectos':
      return renderProjectsPage();
    case 'contacto':
      return renderContactPage(preselectedSubject);
    case 'inicio':
    default:
      return renderHomePage();
  }
}

function renderApp() {
  cleanupCurrentPage();
  cleanupCurrentPage = () => {};

  const root = document.getElementById('root');
  if (!root) return;

  const currentNav = NAV_ITEMS.find((item) => item.id === activePage);
  document.title = currentNav
    ? `${currentNav.label} | ICA Ingeniería Hidráulica`
    : 'ICA Ingeniería Hidráulica';

  root.innerHTML = `
    <div class="app-shell">
      ${renderNavbar()}
      <main id="app-main" class="app-main">
        ${renderActivePageHtml()}
      </main>
      ${renderFooter()}
    </div>
  `;

  bindImageFallbacks(root);

  const mainEl = root.querySelector('#app-main');
  if (mainEl) {
    if (activePage === 'inicio') {
      cleanupCurrentPage = initHomePage(mainEl);
    } else if (activePage === 'productos') {
      cleanupCurrentPage = initProductsPage(mainEl, navigate);
    } else if (activePage === 'proyectos') {
      cleanupCurrentPage = initProjectsPage(mainEl, navigate);
    } else if (activePage === 'contacto') {
      cleanupCurrentPage = initContactPage(mainEl, preselectedSubject);
    }
  }

  const mobileToggleBtn = root.querySelector('#mobile-menu-toggle');
  const mobileDrawer = root.querySelector('#mobile-drawer');
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      mobileDrawer.hidden = !mobileOpen;
      mobileToggleBtn.setAttribute('aria-expanded', mobileOpen ? 'true' : 'false');
      mobileToggleBtn.setAttribute('aria-label', mobileOpen ? 'Cerrar menú' : 'Abrir menú');
      mobileToggleBtn.innerHTML = mobileOpen ? ICON_CLOSE : ICON_MENU;
    });
  }

  setupScrollReveals(root);
}

function navigate(page, subject = '') {
  if (!VALID_PAGES.has(page)) return;
  if (subject) {
    preselectedSubject = subject;
  }
  mobileOpen = false;
  activePage = page;
  window.location.hash = `#/${page}`;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const navBtn = target.closest('[data-nav]');
  if (!navBtn) return;

  const page = navBtn.getAttribute('data-nav');
  const subject = navBtn.getAttribute('data-subject') || '';
  if (page) {
    navigate(page, subject);
  }
});

window.addEventListener('hashchange', () => {
  const nextPage = getPageFromHash();
  if (nextPage !== activePage) {
    activePage = nextPage;
    mobileOpen = false;
    renderApp();
  }
});

renderApp();
