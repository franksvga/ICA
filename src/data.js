export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Productos' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'tanques-vitrificados',
    title: 'Tanques Vitrificados',
    description:
      'Sistemas modulares de almacenamiento en acero fusionado con vidrio, diseñados para ofrecer máxima hermeticidad, rápida instalación y resistencia frente a la corrosión.',
    imageSrc: '/src/assets/images/cat_tanques_vitrificados_1795720364348.jpg',
    imageAlt: 'Tanques vitrificados azules de acero empernado para almacenamiento de agua',
  },
  {
    id: 'domos-geodesicos',
    title: 'Domos Geodésicos',
    description:
      'Cubiertas estructurales autoportantes en aluminio diseñadas para proteger reservorios y tanques contra contaminación externa, evaporación y radiación solar.',
    imageSrc: '/src/assets/images/cat_domos_geodesicos_1795720365001.jpg',
    imageAlt: 'Domo geodésico metálico instalado sobre reservorio circular de agua',
  },
  {
    id: 'productos-prfv',
    title: 'Productos en PRFV',
    description:
      'Componentes fabricados en poliéster reforzado con fibra de vidrio, ideales para ambientes altamente corrosivos por su ligereza y durabilidad estructural.',
    imageSrc: '/src/assets/images/cat_productos_prfv_1795720365588.jpg',
    imageAlt: 'Rejillas, perfiles y tuberías industriales en material compuesto PRFV',
  },
  {
    id: 'plantas-tratamiento-residuales',
    title: 'Plantas de Tratamiento de Aguas Residuales',
    description:
      'Soluciones integrales para depuración biológica y físico-química de efluentes municipales e industriales, orientadas al reúso responsable del agua.',
    imageSrc: '/src/assets/images/cat_plantas_tratamiento_1795720365590.jpg',
    imageAlt:
      'Vista aérea de planta de tratamiento de aguas residuales con clarificadores circulares',
  },
  {
    id: 'productos-grp',
    title: 'Productos en GRP',
    description:
      'Sistemas de conducción y accesorios especiales en plástico reforzado con vidrio, pensados para proyectos hidráulicos exigentes y libre mantenimiento.',
    imageSrc: '/src/assets/images/cat_productos_grp_1795720366637.jpg',
    imageAlt: 'Tuberías y piezas especiales en material GRP para conducción hidráulica',
  },
];

export const PRODUCT_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'bombeo', label: 'Bombeo y Presión' },
  { id: 'valvulas', label: 'Válvulas y Control' },
  { id: 'tratamiento', label: 'Tratamiento y Filtración' },
  { id: 'telemetria', label: 'Medición y Telemetría' },
];

export const PRODUCTS = [
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

export const SERVICES = [
  { id: 'redes-abastecimiento', title: 'Redes de Abastecimiento y Distribución' },
  { id: 'drenaje-pluvial', title: 'Drenaje Pluvial y Control de Inundaciones' },
  { id: 'estaciones-bombeo', title: 'Estaciones de Bombeo y Plantas de Tratamiento' },
  { id: 'obras-fluviales', title: 'Obras Fluviales, Presas y Defensas Ribereñas' },
];

export const PROJECTS = [
  {
    id: 'estacion-el-mirador',
    title: 'Estación de Bombeo y Conducción El Mirador',
    location: 'Zona Norte',
    year: '2025',
    category: 'Abastecimiento',
    imageSrc: '/src/assets/images/project_pumping_station_1795692102512.jpg',
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
    imageSrc: '/src/assets/images/project_urban_drainage_1795692104686.jpg',
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
    imageSrc: '/src/assets/images/project_river_defense_1795692104149.jpg',
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
    imageSrc: '/src/assets/images/hero_hydraulic_dam_1795692102080.jpg',
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

export const SECTORS = [
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
