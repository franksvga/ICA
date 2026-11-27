import { PROJECTS, SECTORS } from '../data.js';
import { ICON_ARROW_RIGHT, ICON_CLOSE, ICON_LEAF } from '../icons.js';
import { bindImageFallbacks, escapeHtml, renderImage } from '../utils.js';

function renderProjectModal(project) {
  const scopeHtml = project.scopeDetails
    .map(
      (detail) => `
      <li class="modal-check-item">
        <span aria-hidden="true" class="modal-dot"></span>
        <span>${escapeHtml(detail)}</span>
      </li>
    `
    )
    .join('');

  return `
    <div
      id="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      class="modal-backdrop"
    >
      <div class="modal-panel modal-panel--wide" data-modal-panel>
        <div class="modal-header">
          <div>
            <div class="modal-meta">
              <span class="product-cat">${escapeHtml(project.category)}</span>
              <span aria-hidden="true">·</span>
              <span>${escapeHtml(project.location)}</span>
              <span aria-hidden="true">·</span>
              <span class="font-mono">${escapeHtml(project.year)}</span>
            </div>
            <h3 id="project-modal-title" class="modal-title">
              ${escapeHtml(project.title)}
            </h3>
          </div>
          <button
            type="button"
            class="modal-close-btn"
            aria-label="Cerrar ficha técnica"
            data-close-modal
          >
            ${ICON_CLOSE}
          </button>
        </div>

        <div class="modal-body">
          <div class="modal-project-media">
            ${renderImage({
              src: project.imageSrc,
              alt: project.imageAlt,
              fallbackLabel: project.title,
            })}
          </div>

          <p class="card-summary">${escapeHtml(project.summary)}</p>

          <div class="modal-specs-box">
            <div>
              <div class="modal-spec-label">Caudal / Parámetro de Diseño</div>
              <div class="modal-spec-value font-mono">${escapeHtml(project.specs.designFlow)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Normativa y Software</div>
              <div class="modal-spec-value font-mono">${escapeHtml(project.specs.standard)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Plazo de Ejecución</div>
              <div class="modal-spec-value">${escapeHtml(project.specs.duration)}</div>
            </div>
            <div>
              <div class="modal-spec-label">Sostenibilidad Hídrica</div>
              <div class="modal-spec-value modal-spec-value--green">
                ${ICON_LEAF}
                <span>${escapeHtml(project.specs.sustainability)}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 class="modal-list-heading">Alcance de Ingeniería Ejecutado</h4>
            <ul class="modal-check-list">${scopeHtml}</ul>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn-modal-close" data-close-modal>
            Cerrar
          </button>
          <button
            type="button"
            class="btn-primary-blue"
            data-modal-consult="Consulta técnica por proyecto similar a: ${escapeHtml(project.title)}"
          >
            Consultar por proyecto similar
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderProjectsPage() {
  const projectsHtml = PROJECTS.map((project, index) => {
    const delayMs = (index % 2) * 140;
    return `
      <article class="project-card reveal" style="--reveal-delay: ${delayMs}ms;">
        <div>
          <div class="project-media">
            ${renderImage({
              src: project.imageSrc,
              alt: project.imageAlt,
              fallbackLabel: project.title,
            })}
          </div>

          <div class="project-body">
            <div class="project-meta">
              <span class="product-cat">${escapeHtml(project.category)}</span>
              <span aria-hidden="true">·</span>
              <span>${escapeHtml(project.location)}</span>
              <span aria-hidden="true">·</span>
              <span class="font-mono">${escapeHtml(project.year)}</span>
            </div>
            <h2 class="project-title">${escapeHtml(project.title)}</h2>
            <p class="card-summary">${escapeHtml(project.summary)}</p>
          </div>
        </div>

        <div class="project-footer">
          <div>
            <div class="project-metric">${escapeHtml(project.highlightMetric)}</div>
            <div class="project-context">${escapeHtml(project.highlightContext)}</div>
          </div>

          <button
            type="button"
            class="text-link-btn"
            data-project-modal="${escapeHtml(project.id)}"
          >
            Ver ficha técnica ${ICON_ARROW_RIGHT}
          </button>
        </div>
      </article>
    `;
  }).join('');

  const sectorsHtml = SECTORS.map((item, index) => {
    const delayMs = index * 100;
    return `
      <div class="sector-card reveal" style="--reveal-delay: ${delayMs}ms;">
        <h3 class="sector-title">${escapeHtml(item.sector)}</h3>
        <p class="card-summary">${escapeHtml(item.focus)}</p>
      </div>
    `;
  }).join('');

  return `
    <div>
      <!-- Header band -->
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage({
            src: '/src/assets/images/projects_infrastructure_cover_1795737285887.jpg',
            alt: 'Infraestructura hidráulica de compuertas de regulación, aliviadero y canal de conducción',
            fallbackLabel: 'Portafolio de Obra e Ingeniería',
            className: 'cover-img',
          })}
          <div aria-hidden="true" class="page-hero-scrim"></div>
        </div>

        <div class="container page-hero-content">
          <div class="page-hero-inner reveal-hero">
            <p class="page-hero-eyebrow">Portafolio de Obra e Ingeniería</p>
            <h1 class="page-hero-title text-balance">
              Proyectos ejecutados con desempeño hidráulico comprobado
            </h1>
            <p class="page-hero-subtitle">
              Cada intervención documenta parámetros de caudal, normativa aplicada y mejoras
              verificadas en eficiencia energética y seguridad hídrica.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects grid -->
      <section class="projects-section">
        <div class="container">
          <div class="projects-grid">
            ${projectsHtml}
          </div>
        </div>
      </section>

      <!-- Sectors served -->
      <section class="sectors-section">
        <div class="container">
          <div class="sectors-header reveal">
            <p class="section-eyebrow">Cobertura Sectorial</p>
            <h2 class="sectors-heading">Sectores que confían en nuestra ingeniería</h2>
          </div>

          <div class="sectors-grid">
            ${sectorsHtml}
          </div>
        </div>
      </section>

      <div id="project-modal-root"></div>
    </div>
  `;
}

export function initProjectsPage(rootEl, onNavigate) {
  const modalRoot = rootEl.querySelector('#project-modal-root');

  const closeModal = () => {
    if (modalRoot) modalRoot.innerHTML = '';
  };

  const openModal = (projectId) => {
    const project = PROJECTS.find((item) => item.id === projectId);
    if (!project || !modalRoot) return;
    modalRoot.innerHTML = renderProjectModal(project);
    bindImageFallbacks(modalRoot);
  };

  const handleRootClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const modalTrigger = target.closest('[data-project-modal]');
    if (modalTrigger) {
      openModal(modalTrigger.getAttribute('data-project-modal'));
      return;
    }

    if (target.closest('[data-close-modal]') || target.id === 'project-modal-backdrop') {
      closeModal();
      return;
    }

    const consultBtn = target.closest('[data-modal-consult]');
    if (consultBtn) {
      const subject = consultBtn.getAttribute('data-modal-consult') || '';
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
