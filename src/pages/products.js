import { PRODUCT_FILTERS, PRODUCTS } from '../data.js';
import { ICON_ARROW_RIGHT, ICON_CHECK, ICON_CLOSE } from '../icons.js';
import { renderSchematic } from '../schematics.js';
import { escapeHtml, renderImage } from '../utils.js';

function renderProductCards(activeCategory) {
  const filtered =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  return filtered
    .map(
      (product) => `
      <article class="product-card">
        <div>
          ${renderSchematic(product.schematicType)}
          <div class="product-body">
            <div class="product-meta">
              <span class="product-cat">${escapeHtml(product.categoryLabel)}</span>
              <span class="product-code">${escapeHtml(product.code)}</span>
            </div>
            <h2 class="product-name">${escapeHtml(product.name)}</h2>
            <p class="product-summary">${escapeHtml(product.summary)}</p>
            <dl class="product-specs-dl">
              <div class="spec-row">
                <dt>Capacidad / Rango</dt>
                <dd>${escapeHtml(product.specs.capacity)}</dd>
              </div>
              <div class="spec-row">
                <dt>Presión / Carga</dt>
                <dd>${escapeHtml(product.specs.pressureOrHead)}</dd>
              </div>
              <div class="spec-row">
                <dt>Normativa</dt>
                <dd>${escapeHtml(product.specs.standard)}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="product-footer">
          <button
            type="button"
            class="btn-ghost-dark"
            data-product-modal="${escapeHtml(product.id)}"
          >
            Especificaciones
          </button>
          <button
            type="button"
            class="text-link-btn"
            data-nav="contacto"
            data-subject="Cotización de producto: ${escapeHtml(product.name)} (${escapeHtml(product.code)})"
          >
            Cotizar ${ICON_ARROW_RIGHT}
          </button>
        </div>
      </article>
    `
    )
    .join('');
}

function renderProductModal(product) {
  const appsHtml = product.applications
    .map(
      (app) => `
      <li class="modal-check-item">
        ${ICON_CHECK}
        <span>${escapeHtml(app)}</span>
      </li>
    `
    )
    .join('');

  return `
    <div
      id="product-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      class="modal-backdrop"
    >
      <div class="modal-panel" data-modal-panel>
        <div class="modal-header">
          <div>
            <div class="modal-meta">
              <span class="product-cat">${escapeHtml(product.categoryLabel)}</span>
              <span aria-hidden="true">·</span>
              <span class="font-mono">${escapeHtml(product.code)}</span>
            </div>
            <h3 id="product-modal-title" class="modal-title">
              ${escapeHtml(product.name)}
            </h3>
          </div>
          <button
            type="button"
            class="modal-close-btn"
            aria-label="Cerrar especificaciones"
            data-close-modal
          >
            ${ICON_CLOSE}
          </button>
        </div>

        ${renderSchematic(product.schematicType)}

        <div class="modal-body">
          <p class="card-summary">${escapeHtml(product.summary)}</p>

          <div class="modal-specs-box">
            <div>
              <div class="modal-spec-label">Capacidad / Rango</div>
              <div class="modal-spec-value font-mono">${escapeHtml(product.specs.capacity)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Presión / Carga de Trabajo</div>
              <div class="modal-spec-value font-mono">${escapeHtml(product.specs.pressureOrHead)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Materiales Constructivos</div>
              <div class="modal-spec-value">${escapeHtml(product.specs.material)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Normativa Aplicable</div>
              <div class="modal-spec-value font-mono">${escapeHtml(product.specs.standard)}</div>
            </div>
          </div>

          <div>
            <h4 class="modal-list-heading">Aplicaciones Principales</h4>
            <ul class="modal-check-list">${appsHtml}</ul>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn-modal-close" data-close-modal>
            Cerrar
          </button>
          <button
            type="button"
            class="btn-primary-blue"
            data-modal-quote="Cotización de producto: ${escapeHtml(product.name)} (${escapeHtml(product.code)})"
          >
            Cotizar este producto
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderProductsPage() {
  const filtersHtml = PRODUCT_FILTERS.map((filter) => {
    const isActive = filter.id === 'todos';
    return `
      <button
        role="tab"
        type="button"
        aria-selected="${isActive ? 'true' : 'false'}"
        class="filter-tab${isActive ? ' is-active' : ''}"
        data-filter="${escapeHtml(filter.id)}"
      >
        ${escapeHtml(filter.label)}
      </button>
    `;
  }).join('');

  return `
    <div>
      <!-- Header band (static, no animations per user preference) -->
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage({
            src: '/src/assets/images/products_equipment_cover_1795737285623.jpg',
            alt: 'Estación de bombeo hidráulico con tuberías de acero inoxidable y válvulas de control',
            fallbackLabel: 'Catálogo Técnico de Equipos Hidráulicos',
            className: 'cover-img',
          })}
          <div aria-hidden="true" class="page-hero-scrim"></div>
        </div>

        <div class="container page-hero-content">
          <div class="page-hero-inner">
            <p class="page-hero-eyebrow">
              Catálogo Técnico · Equipamiento y Sistemas Hidráulicos
            </p>
            <h1 class="page-hero-title text-balance">
              Equipos y soluciones modulares para conducción, control y tratamiento
            </h1>
            <p class="page-hero-subtitle">
              Suministramos equipamiento hidráulico dimensionado a la medida de cada proyecto, con
              respaldo de ingeniería, curvas certificadas y puesta en marcha.
            </p>
          </div>
        </div>
      </section>

      <!-- Products grid with integrated category filters -->
      <section class="products-section">
        <div class="container">
          <div
            role="tablist"
            aria-label="Filtrar productos por categoría"
            class="filter-tablist"
          >
            ${filtersHtml}
          </div>

          <div id="products-grid" class="products-grid">
            ${renderProductCards('todos')}
          </div>
        </div>
      </section>

      <div id="product-modal-root"></div>
    </div>
  `;
}

export function initProductsPage(rootEl, onNavigate) {
  const gridEl = rootEl.querySelector('#products-grid');
  const modalRoot = rootEl.querySelector('#product-modal-root');
  const tabButtons = rootEl.querySelectorAll('[data-filter]');

  const closeModal = () => {
    if (modalRoot) modalRoot.innerHTML = '';
  };

  const openModal = (productId) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product || !modalRoot) return;
    modalRoot.innerHTML = renderProductModal(product);
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter') || 'todos';
      tabButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      if (gridEl) {
        gridEl.innerHTML = renderProductCards(category);
      }
    });
  });

  const handleRootClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const modalTrigger = target.closest('[data-product-modal]');
    if (modalTrigger) {
      openModal(modalTrigger.getAttribute('data-product-modal'));
      return;
    }

    if (target.closest('[data-close-modal]') || target.id === 'product-modal-backdrop') {
      closeModal();
      return;
    }

    const quoteBtn = target.closest('[data-modal-quote]');
    if (quoteBtn) {
      const subject = quoteBtn.getAttribute('data-modal-quote') || '';
      closeModal();
      onNavigate('contacto', subject);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  rootEl.addEventListener('click', handleRootClick);
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    rootEl.removeEventListener('click', handleRootClick);
    window.removeEventListener('keydown', handleKeyDown);
  };
}
