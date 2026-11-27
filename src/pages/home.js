import { PRODUCT_CATEGORIES } from '../data.js';
import { ICON_ARROW_RIGHT, PARTNER_LOGOS } from '../icons.js';
import { escapeHtml, renderImage } from '../utils.js';

export function renderHomePage() {
  const categoryCardsHtml = PRODUCT_CATEGORIES.map((category, index) => {
    const spanClass = index < 2 ? 'span-3' : 'span-2';
    const delayMs = index * 120;
    return `
      <article
        class="category-card ${spanClass} reveal"
        style="--reveal-delay: ${delayMs}ms;"
      >
        <div>
          <div class="category-media">
            ${renderImage({
              src: category.imageSrc,
              alt: category.imageAlt,
              fallbackLabel: category.title,
            })}
          </div>
          <div class="category-body">
            <h3 class="card-title-md">${escapeHtml(category.title)}</h3>
            <p class="card-summary">${escapeHtml(category.description)}</p>
          </div>
        </div>
        <div class="category-footer">
          <button type="button" class="text-link-btn" data-nav="productos">
            Explorar categoría ${ICON_ARROW_RIGHT}
          </button>
        </div>
      </article>
    `;
  }).join('');

  const partnerCardsHtml = PARTNER_LOGOS.map((partner, index) => {
    const delayMs = index * 100;
    return `
      <div class="partner-card reveal-scale" style="--reveal-delay: ${delayMs}ms;">
        <div class="partner-mark">${partner.mark}</div>
        <div class="partner-name">${escapeHtml(partner.name)}</div>
        <div class="partner-sector">${escapeHtml(partner.sector)}</div>
      </div>
    `;
  }).join('');

  return `
    <div>
      <!-- Hero section with full-bleed cover image background and bright white fade -->
      <section id="home-hero" class="home-hero">
        <div class="cover-backdrop">
          <div id="hero-parallax" class="parallax-wrap">
            ${renderImage({
              src: '/src/assets/images/hero_hydraulic_dam_1795692102080.jpg',
              alt: 'Presa de concreto moderno y aliviadero hidráulico operando en entorno natural',
              fallbackLabel: 'Infraestructura hidráulica y control de caudales',
              className: 'cover-img',
            })}
          </div>
          <div aria-hidden="true" class="home-hero-scrim"></div>
        </div>

        <div class="container home-hero-content">
          <div class="home-hero-inner reveal-hero">
            <p class="home-hero-eyebrow">
              Ingeniería Hidráulica · Gestión del Agua · Infraestructura Sostenible
            </p>
            <h1 class="home-hero-title text-balance">
              Infraestructura hídrica diseñada con precisión técnica y equilibrio ambiental.
            </h1>
            <p class="home-hero-subtitle">
              En ICA combinamos consultoría hidráulica, modelación numérica y equipamiento
              especializado para garantizar sistemas de agua seguros, eficientes y duraderos.
            </p>
            <div class="hero-actions">
              <button type="button" class="btn-primary-brand" data-nav="contacto">
                Solicitar Evaluación Técnica ${ICON_ARROW_RIGHT}
              </button>
              <button type="button" class="btn-secondary-light" data-nav="proyectos">
                Explorar Proyectos <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Quiénes Somos section -->
      <section class="about-section">
        <div class="container">
          <div class="about-grid">
            <div class="about-left reveal">
              <p class="section-eyebrow-brand">Nuestra Empresa</p>
              <h2 class="section-heading">Quiénes Somos</h2>
            </div>

            <div class="about-copy reveal" style="--reveal-delay: 140ms;">
              <p>
                Somos una empresa que se destaca por su enfoque integral y sostenible, respaldado
                por conocimientos técnicos en ingeniería. Ofrecemos soluciones de bajo mantenimiento
                y rentables que cumplen con las normativas internacionales.
              </p>
              <p>
                Nuestros productos son respetuosos con el medio ambiente, fáciles de ensamblar y
                duraderos, respaldados por garantías locales e internacionales. Nos enfocamos en la
                atención meticulosa a los detalles, lo que ha resultado en la satisfacción de los
                clientes debido a su alta calidad, eficiencia y entrega rápida.
              </p>
              <p>
                Representamos exclusivamente productos de compañías internacionales con una larga
                trayectoria y reconocimiento en la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Product categories section -->
      <section class="categories-section">
        <div class="container">
          <div class="section-header-row reveal">
            <div class="section-header-copy">
              <p class="section-eyebrow">Categorías de Productos</p>
              <h2 class="section-heading text-balance">
                Soluciones especializadas en equipamiento y materiales compuestos
              </h2>
            </div>
            <button type="button" class="text-link-btn" data-nav="productos">
              Ver catálogo completo ${ICON_ARROW_RIGHT}
            </button>
          </div>

          <div class="categories-grid">
            ${categoryCardsHtml}
          </div>
        </div>
      </section>

      <!-- Trusted Companies section -->
      <section class="trusted-section">
        <div class="container">
          <div class="trusted-header reveal">
            <h2 class="trusted-title">EMPRESAS QUE HAN CONFIADO EN NOSOTROS</h2>
            <p class="trusted-subtitle">
              Organizaciones públicas, empresas de saneamiento e industrias que respaldan nuestra
              trayectoria técnica.
            </p>
          </div>

          <div class="partners-grid">
            ${partnerCardsHtml}
          </div>
        </div>
      </section>

      <!-- Quick navigation cards over cover background -->
      <section class="quick-nav-section">
        <div class="cover-backdrop">
          ${renderImage({
            src: '/src/assets/images/bg_water_engineering_cover_1795721527413.jpg',
            alt: 'Acueducto de concreto blanco y canal hidráulico rodeado de áreas verdes',
            fallbackLabel: 'Infraestructura hídrica ICA',
            className: 'cover-img',
          })}
          <div aria-hidden="true" class="quick-nav-scrim"></div>
        </div>

        <div class="container quick-nav-inner">
          <div class="quick-nav-grid">
            <div class="quick-nav-card reveal" style="--reveal-delay: 0ms;">
              <div>
                <p class="quick-card-eyebrow">Asesoría Especializada</p>
                <h3 class="card-title-md">Contacto Directo</h3>
                <p class="quick-card-desc">
                  Comuníquese con nuestro equipo de ingeniería para evaluaciones técnicas,
                  fichas y cotizaciones a medida.
                </p>
              </div>
              <button type="button" class="text-link-btn" data-nav="contacto">
                Solicitar evaluación ${ICON_ARROW_RIGHT}
              </button>
            </div>

            <div class="quick-nav-card reveal" style="--reveal-delay: 140ms;">
              <div>
                <p class="quick-card-eyebrow">Equipamiento Técnico</p>
                <h3 class="card-title-md">Productos Hidráulicos</h3>
                <p class="quick-card-desc">
                  Estaciones de bombeo, válvulas de control, plantas modulares PTAP y sistemas de
                  telemetría SCADA.
                </p>
              </div>
              <button type="button" class="text-link-btn" data-nav="productos">
                Explorar catálogo ${ICON_ARROW_RIGHT}
              </button>
            </div>

            <div class="quick-nav-card reveal" style="--reveal-delay: 280ms;">
              <div>
                <p class="quick-card-eyebrow">Casos de Éxito</p>
                <h3 class="card-title-md">Obras y Proyectos</h3>
                <p class="quick-card-desc">
                  Revise fichas técnicas, caudales de diseño y resultados medidos en infraestructura
                  municipal e industrial.
                </p>
              </div>
              <button type="button" class="text-link-btn" data-nav="proyectos">
                Ver portafolio ${ICON_ARROW_RIGHT}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initHomePage(rootEl) {
  const heroSection = rootEl.querySelector('#home-hero');
  const parallaxEl = rootEl.querySelector('#hero-parallax');
  if (!heroSection || !parallaxEl) return () => {};

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotionQuery.matches) return () => {};

  let rafId = 0;

  const updateParallax = () => {
    rafId = 0;
    const rect = heroSection.getBoundingClientRect();
    const height = heroSection.offsetHeight || 1;
    const progress = Math.min(Math.max(-rect.top / height, 0), 1);
    parallaxEl.style.transform = `translate3d(0, ${progress * 14}%, 0)`;
  };

  const onScroll = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(updateParallax);
    }
  };

  updateParallax();
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (rafId) window.cancelAnimationFrame(rafId);
  };
}
