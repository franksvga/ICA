const PRODUCTS = [
  {
    id: 'grupos-bombeo',
    code: 'ICA-BP-400',
    category: 'bombeo',
    categoryLabel: 'Bombeo y Presión',
    name: 'Grupos de Bombeo Centrífugo Multietapa',
    summary:
      'Conjuntos motobomba horizontales y verticales de alta eficiencia hidráulica con variadores de frecuencia integrados para operación continua.',
    schematicType: 'pump',
    specs: {
      capacity: '20 – 1,200 L/s',
      pressureOrHead: 'ADT hasta 240 m',
      material: 'Acero Inoxidable AISI 316 / Hierro Dúctil',
      standard: 'ISO 9906 Grado 1 / HI 9.6',
    },
    applications: [
      'Estaciones impulsoras de agua potable municipal',
      'Sistemas de presurización industrial y minera',
      'Estaciones de rebombeo para riego tecnificado',
    ],
  },
  {
    id: 'valvulas-control',
    code: 'ICA-VC-250',
    category: 'valvulas',
    categoryLabel: 'Válvulas y Control',
    name: 'Válvulas Reguladoras y Anticipadoras de Ariete',
    summary:
      'Válvulas hidráulicas de diafragma y émbolo para regulación precisa de presión, control de caudal y protección contra transientes en líneas de impulsión.',
    schematicType: 'valve',
    specs: {
      capacity: 'DN 80 – 1,200 mm',
      pressureOrHead: 'PN 16 / PN 25 / PN 40',
      material: 'Hierro dúctil GGG50 con recubrimiento epóxico',
      standard: 'EN 1074 / AWWA C530',
    },
    applications: [
      'Sectorización y manejo activo de presiones en redes',
      'Protección de tuberías matrices ante paradas súbitas',
      'Control de nivel en reservorios de cabecera',
    ],
  },
  {
    id: 'plantas-compactas',
    code: 'ICA-PT-150',
    category: 'tratamiento',
    categoryLabel: 'Tratamiento y Filtración',
    name: 'Plantas Modulares de Potabilización (PTAP)',
    summary:
      'Sistemas prefabricados en skid de acero al carbono protegido o acero inoxidable con procesos de coagulación, sedimentación laminar y filtración rápida.',
    schematicType: 'plant',
    specs: {
      capacity: '5 – 150 L/s por módulo',
      pressureOrHead: 'Turbiedad de ingreso hasta 1,500 NTU',
      material: 'Acero A36 epóxico / Inox AISI 304L',
      standard: 'Norma OS.020 / OMS Agua Segura',
    },
    applications: [
      'Abastecimiento para localidades y campamentos',
      'Ampliación rápida de capacidad en plantas municipales',
      'Tratamiento de agua de proceso industrial',
    ],
  },
  {
    id: 'filtracion-automatica',
    code: 'ICA-TF-200',
    category: 'tratamiento',
    categoryLabel: 'Tratamiento y Filtración',
    name: 'Filtros Automáticos de Malla y Anillas',
    summary:
      'Equipos autolimpiantes por diferencial de presión que aseguran retención continua de sólidos suspendidos sin interrumpir el caudal de servicio.',
    schematicType: 'filter',
    specs: {
      capacity: '15 – 850 m³/h',
      pressureOrHead: 'Grado 20 – 200 micras · PN 10',
      material: 'Acero Inox 316L / Poliamida reforzada',
      standard: 'ASME Sec. VIII / ISO 9001',
    },
    applications: [
      'Pretratamiento para ósmosis inversa y ultrafiltración',
      'Protección de emisores en sistemas agrícolas',
      'Circuito cerrado de enfriamiento industrial',
    ],
  },
  {
    id: 'caudalimetros-scada',
    code: 'ICA-TM-100',
    category: 'telemetria',
    categoryLabel: 'Medición y Telemetría',
    name: 'Caudalímetros Electromagnéticos y Estaciones SCADA',
    summary:
      'Instrumentación de alta exactitud para macromedición en tiempo real, con transmisión remota vía Modbus, LoRaWAN o red celular.',
    schematicType: 'meter',
    specs: {
      capacity: 'DN 25 – 2,000 mm',
      pressureOrHead: 'Precisión ±0.2 % · IP68 sumergible',
      material: 'Revestimiento PTFE / Ebonita · Electrodos Hastelloy',
      standard: 'OIML R49 / ISO 4064',
    },
    applications: [
      'Macromedición de sectores hidrométricos y balance hídrico',
      'Detección temprana de fugas nocturnas en redes',
      'Control volumétrico en bocatomas y plantas',
    ],
  },
  {
    id: 'compuertas-hidromecanicas',
    code: 'ICA-CH-300',
    category: 'valvulas',
    categoryLabel: 'Válvulas y Control',
    name: 'Compuertas Murales y Vertederos Hidromecánicos',
    summary:
      'Estructuras de regulación y aislamiento fabricadas a medida para canales, cámaras de carga, bocatomas y plantas de tratamiento.',
    schematicType: 'gate',
    specs: {
      capacity: 'Ancho 0.40 – 4.50 m',
      pressureOrHead: 'Carga hidráulica hasta 12 m.c.a.',
      material: 'Acero Inoxidable AISI 304L / 316L · Sellos EPDM',
      standard: 'AWWA C561 / DIN 19569',
    },
    applications: [
      'Obras de captación y bocatomas fluviales',
      'Canales de conducción y aliviaderos regulados',
      'Aislamiento de cámaras de rejas y desarenadores',
    ],
  },
];

const PROJECTS = [
  {
    id: 'estacion-el-mirador',
    title: 'Estación de Bombeo y Conducción El Mirador',
    location: 'Zona Norte',
    year: '2025',
    category: 'Abastecimiento',
    imageSrc: '/assets/images/project_pumping_station_1795692102512.jpg',
    imageAlt:
      'Interior de estación de bombeo municipal con tuberías de acero inoxidable y válvulas hidráulicas azules',
    summary:
      'Renovación hidráulica integral de la estación impulsora principal, optimizando el punto de operación de cinco grupos de bombeo y reduciendo sobrepresiones en la línea de impulsión.',
    specs: {
      designFlow: '1,850 L/s (ADT 84 m)',
      standard: 'HI 9.8 / AWWA C200',
      duration: '14 meses de ingeniería y supervisión',
      sustainability: 'Ahorro anual de 1.9 GWh mediante variadores de frecuencia',
    },
    scopeDetails: [
      'Modelamiento de golpe de ariete con implementación de calderines hidroneumáticos.',
      'Múltiples de descarga en acero inoxidable AISI 316L de bajo coeficiente de pérdida.',
      'Automatización SCADA con ajuste dinámico de presión según demanda horaria.',
    ],
  },
  {
    id: 'drenaje-sector-norte',
    title: 'Sistema de Drenaje Pluvial Sostenible Sector Norte',
    location: 'Valle Central',
    year: '2024',
    category: 'Drenaje',
    imageSrc: '/assets/images/project_urban_drainage_1795692104686.jpg',
    imageAlt:
      'Canal de drenaje pluvial urbano con arquitectura de concreto y áreas verdes de retención sostenible',
    summary:
      'Diseño de una red combinada de canales revestidos y parques inundables de retención que atenúan los picos de tormenta e integran infraestructura verde en el tejido urbano.',
    specs: {
      designFlow: '115 m³/s caudal pico laminado',
      standard: 'Norma OS.060 / SWMM + HEC-RAS 2D',
      duration: '10 meses de estudio y expediente',
      sustainability: 'Recarga estimada de 420,000 m³/año al acuífero superficial',
    },
    scopeDetails: [
      'Calibración hidrológica con series pluviográficas de 40 años.',
      'Vertederos laterales escalonados con disipación hidráulica controlada.',
      'Integración paisajística con vegetación nativa filtrante para sedimentos.',
    ],
  },
  {
    id: 'defensas-valle-sur',
    title: 'Rehabilitación Fluvial y Defensas del Valle Sur',
    location: 'Cuenca Baja',
    year: '2023',
    category: 'Estructuras',
    imageSrc: '/assets/images/project_river_defense_1795692104149.jpg',
    imageAlt:
      'Vista aérea de cauce fluvial estabilizado con terrazas de enrocado y vegetación de bioingeniería',
    summary:
      'Encauzamiento fluvial y protección de riberas mediante banquetas escalonadas de enrocado pesado combinadas con bioingeniería de taludes para preservar el ecosistema ripario.',
    specs: {
      designFlow: '890 m³/s avenida de diseño',
      standard: 'USACE EM 1110-2-1601',
      duration: '11 meses de diseño y asistencia en obra',
      sustainability: 'Recuperación de 18 hectáreas de corredor ribereño nativo',
    },
    scopeDetails: [
      'Análisis geomorfológico multitemporal y modelación de transporte de sedimentos.',
      'Uñas antisocavación cimentadas bajo el nivel de socavación general máxima.',
      'Pasos ecológicos y bermas peatonales integradas al borde del río.',
    ],
  },
  {
    id: 'presa-aliviadero-altos',
    title: 'Presa Reguladora y Aliviadero de Excedencias Los Altos',
    location: 'Cuenca Alta',
    year: '2024',
    category: 'Estructuras',
    imageSrc: '/assets/images/hero_hydraulic_dam_1795692102080.jpg',
    imageAlt:
      'Presa de concreto con vertedero de excedencias y disipador de energía en río de montaña',
    summary:
      'Ingeniería de detalle del aliviadero de perfil Creager y cuenco amortiguador tipo USBR para garantizar la evacuación segura de avenidas máximas probables.',
    specs: {
      designFlow: '1,420 m³/s avenida máxima probable',
      standard: 'USBR Design of Small Dams / ICOLD',
      duration: '18 meses de ingeniería y modelo físico',
      sustainability: 'Caudal ecológico garantizado con válvula de fondo automatizada',
    },
    scopeDetails: [
      'Verificación hidráulica en modelo físico reducido a escala 1:35.',
      'Instrumentación geotécnica y piezométrica automatizada en el cuerpo de presa.',
      'Manual de operación, mantenimiento y plan de respuesta ante emergencias.',
    ],
  },
];

const ICONS = {
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FA22A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;margin-top:2px;"><path d="M20 6 9 17l-5-5"></path></svg>`,
  leaf: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FA22A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;margin-top:2px;"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`,
  droplets: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>`,
};

const SCHEMATICS = {
  pump: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><line x1="20" y1="108" x2="220" y2="108" stroke="#CBD5E1" stroke-width="2" /><rect x="44" y="88" width="152" height="20" rx="3" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" /><circle cx="90" cy="64" r="24" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><circle cx="90" cy="64" r="10" fill="#009ADE" fill-opacity="0.2" stroke="#009ADE" stroke-width="1.8" /><rect x="122" y="42" width="54" height="44" rx="4" fill="#FFFFFF" stroke="#0B1D2C" stroke-width="2" /><line x1="132" y1="52" x2="166" y2="52" stroke="#0072B5" stroke-width="2" /><line x1="132" y1="62" x2="166" y2="62" stroke="#0072B5" stroke-width="2" /><line x1="132" y1="72" x2="166" y2="72" stroke="#0072B5" stroke-width="2" /><path d="M90 40 L90 18 L145 18" fill="none" stroke="#0072B5" stroke-width="3" stroke-linecap="round" /><path d="M30 64 L66 64" fill="none" stroke="#009ADE" stroke-width="3" stroke-linecap="round" /><polygon points="150,18 140,13 140,23" fill="#5FA22A" /></svg>`,
  valve: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><line x1="20" y1="76" x2="220" y2="76" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 4" /><rect x="34" y="64" width="172" height="24" rx="2" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><rect x="34" y="54" width="10" height="44" rx="2" fill="#0B1D2C" /><rect x="196" y="54" width="10" height="44" rx="2" fill="#0B1D2C" /><circle cx="120" cy="76" r="22" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><line x1="120" y1="54" x2="120" y2="28" stroke="#0B1D2C" stroke-width="2.5" /><rect x="96" y="22" width="48" height="8" rx="4" fill="#009ADE" /><path d="M148 56 C158 42, 174 42, 180 56" fill="none" stroke="#5FA22A" stroke-width="2" /><circle cx="164" cy="40" r="8" fill="#FFFFFF" stroke="#5FA22A" stroke-width="2" /></svg>`,
  plant: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><rect x="26" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.2" /><rect x="94" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#009ADE" stroke-width="2.2" /><rect x="162" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#5FA22A" stroke-width="2.2" /><path d="M32 62 Q45 56 58 62 T72 62" fill="none" stroke="#0072B5" stroke-width="2" /><path d="M100 54 Q113 48 126 54 T140 54" fill="none" stroke="#009ADE" stroke-width="2" /><path d="M168 48 Q181 42 194 48 T208 48" fill="none" stroke="#5FA22A" stroke-width="2" /><line x1="78" y1="50" x2="94" y2="50" stroke="#0B1D2C" stroke-width="2" /><line x1="146" y1="50" x2="162" y2="50" stroke="#0B1D2C" stroke-width="2" /><line x1="20" y1="106" x2="220" y2="106" stroke="#94A3B8" stroke-width="2" /></svg>`,
  filter: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><rect x="64" y="26" width="112" height="76" rx="10" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><line x1="84" y1="36" x2="84" y2="92" stroke="#009ADE" stroke-width="1.5" stroke-dasharray="3 3" /><line x1="102" y1="36" x2="102" y2="92" stroke="#009ADE" stroke-width="1.5" stroke-dasharray="3 3" /><line x1="120" y1="36" x2="120" y2="92" stroke="#009ADE" stroke-width="1.5" stroke-dasharray="3 3" /><line x1="138" y1="36" x2="138" y2="92" stroke="#009ADE" stroke-width="1.5" stroke-dasharray="3 3" /><line x1="156" y1="36" x2="156" y2="92" stroke="#009ADE" stroke-width="1.5" stroke-dasharray="3 3" /><path d="M24 64 L64 64" stroke="#0072B5" stroke-width="3" stroke-linecap="round" /><path d="M176 64 L216 64" stroke="#5FA22A" stroke-width="3" stroke-linecap="round" /><polygon points="216,64 206,59 206,69" fill="#5FA22A" /></svg>`,
  meter: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><rect x="30" y="72" width="180" height="22" rx="2" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><rect x="94" y="22" width="52" height="36" rx="4" fill="#FFFFFF" stroke="#0B1D2C" stroke-width="2" /><rect x="102" y="29" width="36" height="16" rx="2" fill="#0072B5" fill-opacity="0.12" stroke="#009ADE" stroke-width="1.2" /><line x1="120" y1="58" x2="120" y2="72" stroke="#0B1D2C" stroke-width="2.5" /><path d="M158 32 C168 24, 178 24, 186 32" fill="none" stroke="#5FA22A" stroke-width="2" stroke-linecap="round" /><path d="M164 39 C170 34, 175 34, 180 39" fill="none" stroke="#5FA22A" stroke-width="2" stroke-linecap="round" /></svg>`,
  gate: `<svg viewBox="0 0 240 130" class="schematic-svg" aria-hidden="true"><rect x="64" y="34" width="12" height="74" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5" /><rect x="164" y="34" width="12" height="74" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5" /><rect x="76" y="48" width="88" height="54" fill="#FFFFFF" stroke="#0072B5" stroke-width="2.5" /><line x1="76" y1="66" x2="164" y2="66" stroke="#0072B5" stroke-width="1.5" /><line x1="76" y1="84" x2="164" y2="84" stroke="#0072B5" stroke-width="1.5" /><line x1="120" y1="16" x2="120" y2="48" stroke="#0B1D2C" stroke-width="2.5" /><circle cx="120" cy="18" r="8" fill="#009ADE" /><path d="M36 96 Q54 90 76 96" fill="none" stroke="#009ADE" stroke-width="2" /><path d="M164 102 Q186 96 206 102" fill="none" stroke="#5FA22A" stroke-width="2" /></svg>`,
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function bindImageFallbacks(container) {
  const images = container.querySelectorAll('img[data-fallback-label]');
  images.forEach((img) => {
    const showFallback = () => {
      const label = img.getAttribute('data-fallback-label') || 'Infraestructura Hidráulica ICA';
      const alt = img.getAttribute('alt') || label;
      const fallback = document.createElement('div');
      fallback.setAttribute('role', 'img');
      fallback.setAttribute('aria-label', alt);
      fallback.className = 'image-fallback';
      fallback.innerHTML = `${ICONS.droplets}<span>${escapeHtml(label)}</span>`;
      img.replaceWith(fallback);
    };

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    } else {
      img.addEventListener('error', showFallback, { once: true });
    }
  });
}

function initMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (!drawer || !toggleBtn) return;

  let mobileOpen = false;
  const setMobileMenu = (open) => {
    mobileOpen = open;
    drawer.hidden = !mobileOpen;
    toggleBtn.setAttribute('aria-expanded', mobileOpen ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', mobileOpen ? 'Cerrar menú' : 'Abrir menú');
    toggleBtn.innerHTML = mobileOpen ? ICONS.close : ICONS.menu;
  };

  toggleBtn.addEventListener('click', () => {
    setMobileMenu(!mobileOpen);
  });

  drawer.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (target && target.closest('a')) {
      setMobileMenu(false);
    }
  });
}

function setupScrollReveals() {
  document.querySelectorAll('.reveal-hero').forEach((el) => {
    window.requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });
  });

  const targets = document.querySelectorAll('.reveal, .reveal-scale');
  if (targets.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initHomeParallax() {
  const heroSection = document.getElementById('home-hero');
  const parallaxEl = document.getElementById('hero-parallax');
  if (!heroSection || !parallaxEl) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
}

function renderProductModal(product) {
  const quoteSubject = `Cotización de producto: ${product.name} (${product.code})`;
  const quoteHref = `contacto.html?asunto=${encodeURIComponent(quoteSubject)}`;
  const appsHtml = product.applications
    .map(
      (app) => `
      <li class="modal-check-item">
        ${ICONS.check}
        <span>${escapeHtml(app)}</span>
      </li>
    `
    )
    .join('');

  return `
    <div id="product-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" class="modal-backdrop">
      <div class="modal-panel">
        <div class="modal-header">
          <div>
            <div class="modal-meta">
              <span class="product-cat">${escapeHtml(product.categoryLabel)}</span>
              <span aria-hidden="true">·</span>
              <span class="font-mono">${escapeHtml(product.code)}</span>
            </div>
            <h3 id="product-modal-title" class="modal-title">${escapeHtml(product.name)}</h3>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Cerrar especificaciones" data-close-modal>
            ${ICONS.close}
          </button>
        </div>

        <div class="schematic-box">${SCHEMATICS[product.schematicType] || ''}</div>

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
          <button type="button" class="btn-modal-close" data-close-modal>Cerrar</button>
          <a href="${escapeHtml(quoteHref)}" class="btn-primary-blue">
            Cotizar este producto
          </a>
        </div>
      </div>
    </div>
  `;
}

function initProductsPage() {
  const gridEl = document.getElementById('products-grid');
  const modalRoot = document.getElementById('product-modal-root');
  if (!gridEl) return;

  const tabButtons = document.querySelectorAll('[data-filter]');
  const productCards = gridEl.querySelectorAll('.product-card[data-category]');

  const closeModal = () => {
    if (modalRoot) modalRoot.innerHTML = '';
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter') || 'todos';
      tabButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      productCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        card.hidden = category !== 'todos' && cardCat !== category;
      });
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const modalTrigger = target.closest('[data-product-modal]');
    if (modalTrigger && modalRoot) {
      const product = PRODUCTS.find(
        (item) => item.id === modalTrigger.getAttribute('data-product-modal')
      );
      if (product) modalRoot.innerHTML = renderProductModal(product);
      return;
    }

    if (target.closest('[data-close-modal]') || target.id === 'product-modal-backdrop') {
      closeModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function renderProjectModal(project) {
  const consultSubject = `Consulta técnica por proyecto similar a: ${project.title}`;
  const consultHref = `contacto.html?asunto=${encodeURIComponent(consultSubject)}`;
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
    <div id="project-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" class="modal-backdrop">
      <div class="modal-panel modal-panel--wide">
        <div class="modal-header">
          <div>
            <div class="modal-meta">
              <span class="product-cat">${escapeHtml(project.category)}</span>
              <span aria-hidden="true">·</span>
              <span>${escapeHtml(project.location)}</span>
              <span aria-hidden="true">·</span>
              <span class="font-mono">${escapeHtml(project.year)}</span>
            </div>
            <h3 id="project-modal-title" class="modal-title">${escapeHtml(project.title)}</h3>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Cerrar ficha técnica" data-close-modal>
            ${ICONS.close}
          </button>
        </div>

        <div class="modal-body">
          <div class="modal-project-media">
            <img
              src="${escapeHtml(project.imageSrc)}"
              alt="${escapeHtml(project.imageAlt)}"
              referrerpolicy="no-referrer"
              data-fallback-label="${escapeHtml(project.title)}"
            />
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
                ${ICONS.leaf}
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
          <button type="button" class="btn-modal-close" data-close-modal>Cerrar</button>
          <a href="${escapeHtml(consultHref)}" class="btn-primary-blue">
            Consultar por proyecto similar
          </a>
        </div>
      </div>
    </div>
  `;
}

function initProjectsPage() {
  const modalRoot = document.getElementById('project-modal-root');
  if (!modalRoot) return;

  const closeModal = () => {
    modalRoot.innerHTML = '';
  };

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const modalTrigger = target.closest('[data-project-modal]');
    if (modalTrigger) {
      const project = PROJECTS.find(
        (item) => item.id === modalTrigger.getAttribute('data-project-modal')
      );
      if (project) {
        modalRoot.innerHTML = renderProjectModal(project);
        bindImageFallbacks(modalRoot);
      }
      return;
    }

    if (target.closest('[data-close-modal]') || target.id === 'project-modal-backdrop') {
      closeModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function initContactPage() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success');
  if (!form || !successBox) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const typeSelect = document.getElementById('contact-type');
  const messageInput = document.getElementById('contact-message');
  const resetBtn = document.getElementById('contact-reset-btn');

  const errorEls = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    inquiryType: document.getElementById('error-inquiryType'),
    message: document.getElementById('error-message'),
  };

  const fieldEls = {
    name: nameInput,
    email: emailInput,
    inquiryType: typeSelect,
    message: messageInput,
  };

  const setFieldError = (key, message) => {
    const fieldEl = fieldEls[key];
    const errorEl = errorEls[key];
    if (fieldEl) fieldEl.classList.toggle('has-error', Boolean(message));
    if (errorEl) {
      errorEl.textContent = message || '';
      errorEl.hidden = !message;
    }
  };

  const clearErrors = () => {
    Object.keys(errorEls).forEach((key) => setFieldError(key, ''));
  };

  const params = new URLSearchParams(window.location.search);
  const subjectParam = params.get('asunto') || '';
  if (subjectParam) {
    if (typeSelect && subjectParam.startsWith('Cotización de producto:')) {
      typeSelect.value = 'Cotización de Productos y Equipos';
    }
    if (messageInput && !messageInput.value.trim()) {
      messageInput.value = `${subjectParam}. `;
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const name = (nameInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();
    const inquiryType = (typeSelect?.value || '').trim();
    const message = (messageInput?.value || '').trim();

    let hasError = false;
    if (name.length < 2) {
      setFieldError('name', 'Ingrese su nombre completo.');
      hasError = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('email', 'Ingrese un correo electrónico válido.');
      hasError = true;
    }
    if (!inquiryType) {
      setFieldError('inquiryType', 'Seleccione el tipo de requerimiento.');
      hasError = true;
    }
    if (message.length < 10) {
      setFieldError(
        'message',
        'Describa brevemente el alcance o requerimiento (mínimo 10 caracteres).'
      );
      hasError = true;
    }

    if (hasError) return;

    const successNameEl = document.getElementById('success-name');
    const successTypeEl = document.getElementById('success-type');
    const successEmailEl = document.getElementById('success-email');
    if (successNameEl) successNameEl.textContent = name;
    if (successTypeEl) successTypeEl.textContent = inquiryType;
    if (successEmailEl) successEmailEl.textContent = email;

    form.hidden = true;
    successBox.hidden = false;
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
      successBox.hidden = true;
      form.hidden = false;
    });
  }
}

function initPage() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  initMobileMenu();
  bindImageFallbacks(document);
  setupScrollReveals();
  initHomeParallax();
  initProductsPage();
  initProjectsPage();
  initContactPage();
}

initPage();
