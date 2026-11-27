const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Productos' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

const VALID_PAGES = new Set(NAV_ITEMS.map((item) => item.id));

const PRODUCT_CATEGORIES = [
  {
    id: 'tanques-vitrificados',
    title: 'Tanques Vitrificados',
    description:
      'Sistemas modulares de almacenamiento en acero fusionado con vidrio, diseñados para ofrecer máxima hermeticidad, rápida instalación y resistencia frente a la corrosión.',
    imageSrc: '/assets/images/cat_tanques_vitrificados_1795720364348.jpg',
    imageAlt: 'Tanques vitrificados azules de acero empernado para almacenamiento de agua',
  },
  {
    id: 'domos-geodesicos',
    title: 'Domos Geodésicos',
    description:
      'Cubiertas estructurales autoportantes en aluminio diseñadas para proteger reservorios y tanques contra contaminación externa, evaporación y radiación solar.',
    imageSrc: '/assets/images/cat_domos_geodesicos_1795720365001.jpg',
    imageAlt: 'Domo geodésico metálico instalado sobre reservorio circular de agua',
  },
  {
    id: 'productos-prfv',
    title: 'Productos en PRFV',
    description:
      'Componentes fabricados en poliéster reforzado con fibra de vidrio, ideales para ambientes altamente corrosivos por su ligereza y durabilidad estructural.',
    imageSrc: '/assets/images/cat_productos_prfv_1795720365588.jpg',
    imageAlt: 'Rejillas, perfiles y tuberías industriales en material compuesto PRFV',
  },
  {
    id: 'plantas-tratamiento-residuales',
    title: 'Plantas de Tratamiento de Aguas Residuales',
    description:
      'Soluciones integrales para depuración biológica y físico-química de efluentes municipales e industriales, orientadas al reúso responsable del agua.',
    imageSrc: '/assets/images/cat_plantas_tratamiento_1795720365590.jpg',
    imageAlt:
      'Vista aérea de planta de tratamiento de aguas residuales con clarificadores circulares',
  },
  {
    id: 'productos-grp',
    title: 'Productos en GRP',
    description:
      'Sistemas de conducción y accesorios especiales en plástico reforzado con vidrio, pensados para proyectos hidráulicos exigentes y libre mantenimiento.',
    imageSrc: '/assets/images/cat_productos_grp_1795720366637.jpg',
    imageAlt: 'Tuberías y piezas especiales en material GRP para conducción hidráulica',
  },
];

const PRODUCT_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'bombeo', label: 'Bombeo y Presión' },
  { id: 'valvulas', label: 'Válvulas y Control' },
  { id: 'tratamiento', label: 'Tratamiento y Filtración' },
  { id: 'telemetria', label: 'Medición y Telemetría' },
];

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

const SERVICES = [
  'Redes de Abastecimiento y Distribución',
  'Drenaje Pluvial y Control de Inundaciones',
  'Estaciones de Bombeo y Plantas de Tratamiento',
  'Obras Fluviales, Presas y Defensas Ribereñas',
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
    highlightMetric: '-28 % consumo energético',
    highlightContext: '1,850 L/s continuos para 240,000 habitantes',
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
    highlightMetric: '14.5 km² protegidos',
    highlightContext: 'Laminación efectiva ante crecidas de T = 100 años',
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
    highlightMetric: '6.2 km estabilizados',
    highlightContext: 'Cero desbordamientos en las temporadas 2024–2025',
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
    highlightMetric: '22 Mm³ regulados',
    highlightContext: 'Seguridad hídrica agrícola y urbana todo el año',
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

const SECTORS = [
  {
    sector: 'Municipalidades y EPS',
    focus: 'Redes de agua potable, sectorización hidrométrica y estaciones de bombeo.',
  },
  {
    sector: 'Agroindustria y Riego',
    focus: 'Bocatomas, reservorios reguladores, filtración automática y conducción presurizada.',
  },
  {
    sector: 'Energía y Minería',
    focus: 'Manejo de aguas de contacto, presas de regulación y líneas de impulsión de alta presión.',
  },
  {
    sector: 'Infraestructura Vial y Urbana',
    focus: 'Estudios de socavación, drenaje longitudinal, alcantarillas y defensas ribereñas.',
  },
];

const PARTNER_LOGOS = [
  {
    name: 'AQUASUR',
    sector: 'Agua y Saneamiento',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4C16 4 7 14.2 7 20.2C7 25.06 11.03 29 16 29C20.97 29 25 25.06 25 20.2C25 14.2 16 4 16 4Z" stroke="currentColor" stroke-width="2.2"></path><path d="M11.5 21.5C12.8 23.5 15 24.5 17.5 24.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`,
  },
  {
    name: 'HIDROVALLE',
    sector: 'Conducción Hídrica',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" stroke-width="2.2"></rect><path d="M8 14C10.5 12 13.5 12 16 14C18.5 16 21.5 16 24 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M8 20C10.5 18 13.5 18 16 20C18.5 22 21.5 22 24 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`,
  },
  {
    name: 'AGROVERDE',
    sector: 'Agroindustria',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C7 14 14 7 25 7C25 18 18 25 7 25Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"></path><path d="M7 25L18 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`,
  },
  {
    name: 'ANDINA CIVIL',
    sector: 'Infraestructura',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><polygon points="16,5 28,26 4,26" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"></polygon><line x1="10" y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="2"></line></svg>`,
  },
  {
    name: 'MINERA SUR',
    sector: 'Procesos Hídricos',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><polygon points="16,4 27,10.5 27,21.5 16,28 5,21.5 5,10.5" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"></polygon><circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="2"></circle></svg>`,
  },
  {
    name: 'FLUVIAL SA',
    sector: 'Energía y Presas',
    mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="2.2"></circle><path d="M17.5 9L11.5 17H16.5L14.5 23L20.5 15H15.5L17.5 9Z" fill="currentColor"></path></svg>`,
  },
];

const ICONS = {
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FA22A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;margin-top:2px;"><path d="M20 6 9 17l-5-5"></path></svg>`,
  checkCircle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
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

let activePage = getPageFromHash();
let preselectedSubject = '';
let mobileOpen = false;
let cleanupPage = () => {};
let revealObserver = null;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderImage(src, alt, className = '', fallbackLabel = 'Infraestructura Hidráulica ICA') {
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" referrerpolicy="no-referrer" class="${escapeHtml(className)}" data-fallback-label="${escapeHtml(fallbackLabel)}" />`;
}

function bindImageFallbacks(container) {
  const images = container.querySelectorAll('img[data-fallback-label]');
  images.forEach((img) => {
    img.addEventListener(
      'error',
      () => {
        const label = img.getAttribute('data-fallback-label') || 'Infraestructura Hidráulica ICA';
        const alt = img.getAttribute('alt') || label;
        const fallback = document.createElement('div');
        fallback.setAttribute('role', 'img');
        fallback.setAttribute('aria-label', alt);
        fallback.className = 'image-fallback';
        fallback.innerHTML = `${ICONS.droplets}<span>${escapeHtml(label)}</span>`;
        img.replaceWith(fallback);
      },
      { once: true }
    );
  });
}

function getPageFromHash() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  return VALID_PAGES.has(rawHash) ? rawHash : 'inicio';
}

/* ---------------- HOME PAGE ---------------- */
function renderHomePage() {
  const categoriesHtml = PRODUCT_CATEGORIES.map((category, index) => {
    const spanClass = index < 2 ? 'span-3' : 'span-2';
    return `
      <article class="category-card ${spanClass} reveal" style="--reveal-delay: ${index * 120}ms;">
        <div>
          <div class="category-media">
            ${renderImage(category.imageSrc, category.imageAlt, '', category.title)}
          </div>
          <div class="category-body">
            <h3 class="card-title-md">${escapeHtml(category.title)}</h3>
            <p class="card-summary">${escapeHtml(category.description)}</p>
          </div>
        </div>
        <div class="category-footer">
          <button type="button" class="text-link-btn" data-nav="productos">
            Explorar categoría ${ICONS.arrowRight}
          </button>
        </div>
      </article>
    `;
  }).join('');

  const partnersHtml = PARTNER_LOGOS.map(
    (partner, index) => `
      <div class="partner-card reveal-scale" style="--reveal-delay: ${index * 100}ms;">
        <div class="partner-mark">${partner.mark}</div>
        <div class="partner-name">${escapeHtml(partner.name)}</div>
        <div class="partner-sector">${escapeHtml(partner.sector)}</div>
      </div>
    `
  ).join('');

  return `
    <div>
      <section id="home-hero" class="home-hero">
        <div class="cover-backdrop">
          <div id="hero-parallax" class="parallax-wrap">
            ${renderImage(
              '/assets/images/hero_hydraulic_dam_1795692102080.jpg',
              'Presa de concreto moderno y aliviadero hidráulico operando en entorno natural',
              'cover-img',
              'Infraestructura hidráulica y control de caudales'
            )}
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
                Solicitar Evaluación Técnica ${ICONS.arrowRight}
              </button>
              <button type="button" class="btn-secondary-light" data-nav="proyectos">
                Explorar Proyectos <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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
              Ver catálogo completo ${ICONS.arrowRight}
            </button>
          </div>

          <div class="categories-grid">${categoriesHtml}</div>
        </div>
      </section>

      <section class="trusted-section">
        <div class="container">
          <div class="trusted-header reveal">
            <h2 class="trusted-title">EMPRESAS QUE HAN CONFIADO EN NOSOTROS</h2>
            <p class="trusted-subtitle">
              Organizaciones públicas, empresas de saneamiento e industrias que respaldan nuestra
              trayectoria técnica.
            </p>
          </div>

          <div class="partners-grid">${partnersHtml}</div>
        </div>
      </section>

      <section class="quick-nav-section">
        <div class="cover-backdrop">
          ${renderImage(
            '/assets/images/bg_water_engineering_cover_1795721527413.jpg',
            'Acueducto de concreto blanco y canal hidráulico rodeado de áreas verdes',
            'cover-img',
            'Infraestructura hídrica ICA'
          )}
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
                Solicitar evaluación ${ICONS.arrowRight}
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
                Explorar catálogo ${ICONS.arrowRight}
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
                Ver portafolio ${ICONS.arrowRight}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function initHomePage(mainEl) {
  const heroSection = mainEl.querySelector('#home-hero');
  const parallaxEl = mainEl.querySelector('#hero-parallax');
  if (!heroSection || !parallaxEl) return () => {};

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

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

/* ---------------- PRODUCTS PAGE ---------------- */
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
          <div class="schematic-box">${SCHEMATICS[product.schematicType] || ''}</div>
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
          <button type="button" class="btn-ghost-dark" data-product-modal="${escapeHtml(product.id)}">
            Especificaciones
          </button>
          <button
            type="button"
            class="text-link-btn"
            data-nav="contacto"
            data-subject="Cotización de producto: ${escapeHtml(product.name)} (${escapeHtml(product.code)})"
          >
            Cotizar ${ICONS.arrowRight}
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

function renderProductsPage() {
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
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage(
            '/assets/images/products_equipment_cover_1795737285623.jpg',
            'Estación de bombeo hidráulico con tuberías de acero inoxidable y válvulas de control',
            'cover-img',
            'Catálogo Técnico de Equipos Hidráulicos'
          )}
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

      <section class="products-section">
        <div class="container">
          <div role="tablist" aria-label="Filtrar productos por categoría" class="filter-tablist">
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

function initProductsPage(mainEl) {
  const gridEl = mainEl.querySelector('#products-grid');
  const modalRoot = mainEl.querySelector('#product-modal-root');
  const tabButtons = mainEl.querySelectorAll('[data-filter]');

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
      if (gridEl) {
        gridEl.innerHTML = renderProductCards(category);
      }
    });
  });

  const handleClick = (event) => {
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
      return;
    }

    const quoteBtn = target.closest('[data-modal-quote]');
    if (quoteBtn) {
      const subject = quoteBtn.getAttribute('data-modal-quote') || '';
      closeModal();
      navigate('contacto', subject);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') closeModal();
  };

  mainEl.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    mainEl.removeEventListener('click', handleClick);
    window.removeEventListener('keydown', handleKeyDown);
  };
}

/* ---------------- PROJECTS PAGE ---------------- */
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
            ${renderImage(project.imageSrc, project.imageAlt, '', project.title)}
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

function renderProjectsPage() {
  const projectsHtml = PROJECTS.map(
    (project, index) => `
      <article class="project-card reveal" style="--reveal-delay: ${(index % 2) * 140}ms;">
        <div>
          <div class="project-media">
            ${renderImage(project.imageSrc, project.imageAlt, '', project.title)}
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

          <button type="button" class="text-link-btn" data-project-modal="${escapeHtml(project.id)}">
            Ver ficha técnica ${ICONS.arrowRight}
          </button>
        </div>
      </article>
    `
  ).join('');

  const sectorsHtml = SECTORS.map(
    (item, index) => `
      <div class="sector-card reveal" style="--reveal-delay: ${index * 100}ms;">
        <h3 class="sector-title">${escapeHtml(item.sector)}</h3>
        <p class="card-summary">${escapeHtml(item.focus)}</p>
      </div>
    `
  ).join('');

  return `
    <div>
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage(
            '/assets/images/projects_infrastructure_cover_1795737285887.jpg',
            'Infraestructura hidráulica de compuertas de regulación, aliviadero y canal de conducción',
            'cover-img',
            'Portafolio de Obra e Ingeniería'
          )}
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

      <section class="projects-section">
        <div class="container">
          <div class="projects-grid">${projectsHtml}</div>
        </div>
      </section>

      <section class="sectors-section">
        <div class="container">
          <div class="sectors-header reveal">
            <p class="section-eyebrow">Cobertura Sectorial</p>
            <h2 class="sectors-heading">Sectores que confían en nuestra ingeniería</h2>
          </div>

          <div class="sectors-grid">${sectorsHtml}</div>
        </div>
      </section>

      <div id="project-modal-root"></div>
    </div>
  `;
}

function initProjectsPage(mainEl) {
  const modalRoot = mainEl.querySelector('#project-modal-root');

  const closeModal = () => {
    if (modalRoot) modalRoot.innerHTML = '';
  };

  const handleClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const modalTrigger = target.closest('[data-project-modal]');
    if (modalTrigger && modalRoot) {
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
      return;
    }

    const consultBtn = target.closest('[data-modal-consult]');
    if (consultBtn) {
      const subject = consultBtn.getAttribute('data-modal-consult') || '';
      closeModal();
      navigate('contacto', subject);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') closeModal();
  };

  mainEl.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    mainEl.removeEventListener('click', handleClick);
    window.removeEventListener('keydown', handleKeyDown);
  };
}

/* ---------------- CONTACT PAGE ---------------- */
function getInitialInquiryType(subject) {
  if (!subject) return 'Consultoría e Ingeniería Hidráulica';
  if (subject.startsWith('Cotización de producto:')) {
    return 'Cotización de Productos y Equipos';
  }
  return 'Consultoría e Ingeniería Hidráulica';
}

function renderInquiryForm(state) {
  if (state.submitted) {
    return `
      <div role="status" aria-live="polite" class="success-box">
        <div class="success-row">
          <div class="success-icon">${ICONS.checkCircle}</div>
          <div>
            <h3 class="success-title">Solicitud registrada correctamente</h3>
            <p class="success-msg">
              Gracias, <strong style="color:var(--ica-ink);font-weight:500;">${escapeHtml(state.name)}</strong>.
              Hemos recibido su solicitud sobre
              <strong style="color:var(--ica-blue);font-weight:500;">${escapeHtml(state.inquiryType)}</strong>
              y responderemos a
              <strong style="color:var(--ica-ink);font-weight:500;">${escapeHtml(state.email)}</strong>
              en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
        <button type="button" id="contact-reset-btn" class="btn-reset">
          Enviar otra consulta
        </button>
      </div>
    `;
  }

  const serviceOptions = SERVICES.map(
    (title) =>
      `<option value="${escapeHtml(title)}"${
        state.inquiryType === title ? ' selected' : ''
      }>Servicio: ${escapeHtml(title)}</option>`
  ).join('');

  const productOptions = PRODUCTS.map(
    (item) =>
      `<option value="${escapeHtml(item.name)}"${
        state.inquiryType === item.name ? ' selected' : ''
      }>Producto: ${escapeHtml(item.name)}</option>`
  ).join('');

  return `
    <form id="contact-form" novalidate class="contact-form">
      <div class="form-row-2">
        <div>
          <label for="contact-name" class="form-label">
            Nombre y apellido <span class="req-star">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value="${escapeHtml(state.name)}"
            placeholder="Ej. Ing. Carlos Mendoza"
            class="form-control${state.errors.name ? ' has-error' : ''}"
          />
          ${state.errors.name ? `<p class="field-error">${escapeHtml(state.errors.name)}</p>` : ''}
        </div>

        <div>
          <label for="contact-org" class="form-label">Empresa o entidad</label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value="${escapeHtml(state.organization)}"
            placeholder="Municipalidad, constructora o industria"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-row-2">
        <div>
          <label for="contact-email" class="form-label">
            Correo electrónico <span class="req-star">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value="${escapeHtml(state.email)}"
            placeholder="nombre@empresa.com"
            class="form-control${state.errors.email ? ' has-error' : ''}"
          />
          ${state.errors.email ? `<p class="field-error">${escapeHtml(state.errors.email)}</p>` : ''}
        </div>

        <div>
          <label for="contact-phone" class="form-label">Teléfono de contacto</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value="${escapeHtml(state.phone)}"
            placeholder="+51 999 000 000"
            class="form-control"
          />
        </div>
      </div>

      <div>
        <label for="contact-type" class="form-label">
          Área o motivo de consulta <span class="req-star">*</span>
        </label>
        <select
          id="contact-type"
          name="inquiryType"
          class="form-control${state.errors.inquiryType ? ' has-error' : ''}"
        >
          <option value="Consultoría e Ingeniería Hidráulica"${
            state.inquiryType === 'Consultoría e Ingeniería Hidráulica' ? ' selected' : ''
          }>
            Consultoría e Ingeniería Hidráulica
          </option>
          <option value="Cotización de Productos y Equipos"${
            state.inquiryType === 'Cotización de Productos y Equipos' ? ' selected' : ''
          }>
            Cotización de Productos y Equipos
          </option>
          ${serviceOptions}
          ${productOptions}
        </select>
        ${
          state.errors.inquiryType
            ? `<p class="field-error">${escapeHtml(state.errors.inquiryType)}</p>`
            : ''
        }
      </div>

      <div>
        <label for="contact-message" class="form-label">
          Descripción y parámetros del proyecto <span class="req-star">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Indique ubicación, caudal aproximado, equipo de interés o alcance requerido."
          class="form-control${state.errors.message ? ' has-error' : ''}"
        >${escapeHtml(state.message)}</textarea>
        ${
          state.errors.message
            ? `<p class="field-error">${escapeHtml(state.errors.message)}</p>`
            : ''
        }
      </div>

      <div class="form-footer-row">
        <span class="form-required-note">
          Los campos marcados con <span class="req-star">*</span> son obligatorios.
        </span>
        <button type="submit" class="btn-primary-blue">Enviar Solicitud Técnica</button>
      </div>
    </form>
  `;
}

function renderContactPage(subject = '') {
  const initialState = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: getInitialInquiryType(subject),
    message: subject ? `${subject}. ` : '',
    errors: {},
    submitted: false,
  };

  return `
    <div>
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage(
            '/assets/images/contact_engineering_cover_1795737173146.jpg',
            'Centro de ingeniería hidráulica junto a embalse y obras de captación de agua',
            'cover-img',
            'Contacto Técnico y Comercial'
          )}
          <div aria-hidden="true" class="page-hero-scrim"></div>
        </div>

        <div class="container page-hero-content">
          <div class="reveal-hero">
            <p class="page-hero-eyebrow">Contacto Técnico y Comercial</p>
            <h1 class="page-hero-title page-hero-title--contact text-balance">
              Converse con nuestro equipo de ingeniería
            </h1>
            <p class="page-hero-subtitle page-hero-subtitle--contact">
              Atendemos consultas sobre estudios hidrológicos, diseño de obras, cotización de equipos
              y supervisión técnica con respuesta inicial en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-left">
              <div class="contact-card reveal">
                <h2 class="contact-card-title">Canales Directos</h2>

                <div class="contact-channels">
                  <div class="channel-row">
                    <div class="channel-icon">${ICONS.mail}</div>
                    <div>
                      <div class="channel-label">Correos Electrónicos</div>
                      <div class="email-groups">
                        <div>
                          <span class="email-dept">Administración</span>
                          <a href="mailto:administracion@ica-hidraulica.com" class="email-link">
                            administracion@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span class="email-dept">Ventas</span>
                          <a href="mailto:ventas@ica-hidraulica.com" class="email-link">
                            ventas@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span class="email-dept">Ingeniería</span>
                          <a href="mailto:ingenieria@ica-hidraulica.com" class="email-link">
                            ingenieria@ica-hidraulica.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICONS.phone}</div>
                    <div>
                      <div class="channel-label">Central Telefónica</div>
                      <div class="channel-value font-mono">+51 (01) 482 3900</div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICONS.mapPin}</div>
                    <div>
                      <div class="channel-label">Oficina Central</div>
                      <div class="channel-value">
                        Av. República de Panamá 3418, Of. 602, San Isidro
                      </div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICONS.clock}</div>
                    <div>
                      <div class="channel-label">Horario de Atención</div>
                      <div class="channel-value">Lunes a Viernes · 08:30 a 18:00 hrs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="invite-card reveal" style="--reveal-delay: 140ms;">
                <h3 class="invite-title">¿Tiene un proyecto en mente?</h3>
                <p class="invite-copy">
                  Nuestro equipo técnico y comercial está listo para asesorarlo. Escríbanos o envíe
                  el formulario y le responderemos a la brevedad.
                </p>
              </div>
            </div>

            <div class="form-card reveal" style="--reveal-delay: 180ms;">
              <div class="form-header">
                <p class="form-eyebrow">Formulario de Solicitud</p>
                <h2 class="form-title">Envíenos los detalles de su requerimiento</h2>
              </div>

              <div id="contact-form-container">
                ${renderInquiryForm(initialState)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function initContactPage(mainEl, subject = '') {
  const formContainer = mainEl.querySelector('#contact-form-container');
  if (!formContainer) return () => {};

  const state = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: getInitialInquiryType(subject),
    message: subject ? `${subject}. ` : '',
    errors: {},
    submitted: false,
  };

  const validate = () => {
    const errors = {};
    if (!state.name.trim() || state.name.trim().length < 2) {
      errors.name = 'Ingrese su nombre completo.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
      errors.email = 'Ingrese un correo electrónico válido.';
    }
    if (!state.inquiryType.trim()) {
      errors.inquiryType = 'Seleccione el tipo de requerimiento.';
    }
    if (!state.message.trim() || state.message.trim().length < 10) {
      errors.message =
        'Describa brevemente el alcance o requerimiento (mínimo 10 caracteres).';
    }
    return errors;
  };

  const syncFromDom = () => {
    const form = formContainer.querySelector('#contact-form');
    if (!form) return;
    const data = new FormData(form);
    state.name = String(data.get('name') || '');
    state.organization = String(data.get('organization') || '');
    state.email = String(data.get('email') || '');
    state.phone = String(data.get('phone') || '');
    state.inquiryType = String(data.get('inquiryType') || 'Consultoría e Ingeniería Hidráulica');
    state.message = String(data.get('message') || '');
  };

  const renderFormView = () => {
    formContainer.innerHTML = renderInquiryForm(state);
    bindFormEvents();
  };

  const bindFormEvents = () => {
    const form = formContainer.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        syncFromDom();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
          state.errors = errors;
          renderFormView();
          return;
        }
        state.errors = {};
        state.submitted = true;
        renderFormView();
      });
    }

    const resetBtn = formContainer.querySelector('#contact-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.name = '';
        state.organization = '';
        state.email = '';
        state.phone = '';
        state.message = '';
        state.errors = {};
        state.submitted = false;
        renderFormView();
      });
    }
  };

  bindFormEvents();
  return () => {};
}

/* ---------------- ROUTER & SHELL ---------------- */
function updateNavActiveStates() {
  document.querySelectorAll('.nav-link-btn, .mobile-nav-btn').forEach((btn) => {
    const isActive = btn.getAttribute('data-nav') === activePage;
    btn.classList.toggle('is-active', isActive);
    if (isActive) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
}

function setMobileMenu(open) {
  mobileOpen = open;
  const drawer = document.getElementById('mobile-drawer');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (drawer) drawer.hidden = !mobileOpen;
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', mobileOpen ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', mobileOpen ? 'Cerrar menú' : 'Abrir menú');
    toggleBtn.innerHTML = mobileOpen ? ICONS.close : ICONS.menu;
  }
}

function setupScrollReveals(scopeEl) {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  scopeEl.querySelectorAll('.reveal-hero').forEach((el) => {
    window.requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });
  });

  const targets = scopeEl.querySelectorAll('.reveal, .reveal-scale');
  if (targets.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || typeof IntersectionObserver === 'undefined') {
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

function renderActivePage() {
  cleanupPage();
  cleanupPage = () => {};

  const currentNav = NAV_ITEMS.find((item) => item.id === activePage);
  document.title = currentNav
    ? `${currentNav.label} | ICA Ingeniería Hidráulica`
    : 'ICA Ingeniería Hidráulica';

  updateNavActiveStates();

  const mainEl = document.getElementById('app-main');
  if (!mainEl) return;

  if (activePage === 'productos') {
    mainEl.innerHTML = renderProductsPage();
    cleanupPage = initProductsPage(mainEl);
  } else if (activePage === 'proyectos') {
    mainEl.innerHTML = renderProjectsPage();
    cleanupPage = initProjectsPage(mainEl);
  } else if (activePage === 'contacto') {
    mainEl.innerHTML = renderContactPage(preselectedSubject);
    cleanupPage = initContactPage(mainEl, preselectedSubject);
  } else {
    mainEl.innerHTML = renderHomePage();
    cleanupPage = initHomePage(mainEl);
  }

  bindImageFallbacks(mainEl);
  setupScrollReveals(document);
}

function navigate(page, subject = '') {
  if (!VALID_PAGES.has(page)) return;
  if (subject) preselectedSubject = subject;
  setMobileMenu(false);
  activePage = page;
  window.location.hash = `#/${page}`;
  renderActivePage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initApp() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggleBtn = document.getElementById('mobile-menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setMobileMenu(!mobileOpen);
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const navBtn = target.closest('[data-nav]');
    if (!navBtn) return;

    const page = navBtn.getAttribute('data-nav');
    const subject = navBtn.getAttribute('data-subject') || '';
    if (page) navigate(page, subject);
  });

  window.addEventListener('hashchange', () => {
    const nextPage = getPageFromHash();
    if (nextPage !== activePage) {
      activePage = nextPage;
      setMobileMenu(false);
      renderActivePage();
    }
  });

  renderActivePage();
}

initApp();
