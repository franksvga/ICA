import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PRODUCT_CATEGORIES } from '../data/engineeringData';
import { ResilientImage } from '../components/ResilientImage';
import { TrustedCompaniesSection } from '../components/TrustedCompaniesSection';
import type { PageId } from '../types/navigation';

interface HomePageProps {
  onNavigate: (page: PageId, preselectedSubject?: string) => void;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <div>
      {/* Hero section with full-bleed cover image background and bright white fade */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white min-h-[480px] lg:min-h-[560px] flex items-center border-b border-slate-200/80"
      >
        {/* Background cover image with subtle scroll parallax */}
        <div className="absolute inset-0">
          <motion.div style={{ y: heroImageY }} className="w-full h-[112%] -top-[6%] relative">
            <ResilientImage
              src="/src/assets/images/hero_hydraulic_dam_1795692102080.jpg"
              alt="Presa de concreto moderno y aliviadero hidráulico operando en entorno natural"
              fallbackLabel="Infraestructura hidráulica y control de caudales"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Subtle #eaf3dd left-edge accent (0-10%) blending into bright white directional fade */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,243,221,0.95)_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.1)_100%)]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold text-[#007bc1] mb-4 tracking-normal">
              Ingeniería Hidráulica · Gestión del Agua · Infraestructura Sostenible
            </p>

            <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-[#0B1D2C] text-balance mb-6">
              Infraestructura hídrica diseñada con precisión técnica y equilibrio ambiental.
            </h1>

            <p className="text-base sm:text-[17px] leading-[1.65] text-[#334155] max-w-xl mb-8">
              En ICA combinamos consultoría hidráulica, modelación numérica y equipamiento
              especializado para garantizar sistemas de agua seguros, eficientes y duraderos.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#007bc1] hover:bg-[#0066a1] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bc1]"
              >
                Solicitar Evaluación Técnica
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('proyectos')}
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-[#0B1D2C] bg-white/90 hover:bg-white border border-slate-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bc1]"
              >
                Explorar Proyectos
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos section */}
      <section className="bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: EASE_OUT }}
              className="lg:col-span-4"
            >
              <p className="text-sm font-medium text-[#007bc1] mb-2">Nuestra Empresa</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1D2C]">
                Quiénes Somos
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.14, ease: EASE_OUT }}
              className="lg:col-span-8 space-y-4 text-[15px] sm:text-base leading-[1.7] text-[#334155]"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product categories section (5 unnumbered cards with photography, zero units) */}
      <section className="bg-[#F6F9FC] py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: EASE_OUT }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0072B5] mb-2">Categorías de Productos</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1D2C] text-balance">
                Soluciones especializadas en equipamiento y materiales compuestos
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('productos')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const spanClass = index < 2 ? 'md:col-span-3' : 'md:col-span-2';
              return (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.12,
                    ease: EASE_OUT,
                  }}
                  className={`${spanClass} group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#0072B5]/50`}
                >
                  <div>
                    <div className="aspect-[4/3] bg-[#F6F9FC] overflow-hidden border-b border-slate-200">
                      <ResilientImage
                        src={category.imageSrc}
                        alt={category.imageAlt}
                        fallbackLabel={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold tracking-tight text-[#0B1D2C] mb-2 leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#475569]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onNavigate('productos')}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Explorar categoría
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <TrustedCompaniesSection />

      {/* Quick navigation cards to the other sections with cover background image */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute inset-0">
          <ResilientImage
            src="/src/assets/images/bg_water_engineering_cover_1795721527413.jpg"
            alt="Acueducto de concreto blanco y canal hidráulico rodeado de áreas verdes"
            fallbackLabel="Infraestructura hídrica ICA"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-white/65"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0, ease: EASE_OUT }}
              className="p-6 rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm shadow-sm flex flex-col justify-between transition-colors hover:bg-white"
            >
              <div>
                <p className="text-xs font-medium text-[#0072B5] mb-2">Asesoría Especializada</p>
                <h3 className="text-lg font-semibold text-[#0B1D2C] mb-2">Contacto Directo</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  Comuníquese con nuestro equipo de ingeniería para evaluaciones técnicas,
                  fichas y cotizaciones a medida.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contacto')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] cursor-pointer"
              >
                Solicitar evaluación <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.14, ease: EASE_OUT }}
              className="p-6 rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm shadow-sm flex flex-col justify-between transition-colors hover:bg-white"
            >
              <div>
                <p className="text-xs font-medium text-[#0072B5] mb-2">Equipamiento Técnico</p>
                <h3 className="text-lg font-semibold text-[#0B1D2C] mb-2">Productos Hidráulicos</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  Estaciones de bombeo, válvulas de control, plantas modulares PTAP y sistemas de
                  telemetría SCADA.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('productos')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] cursor-pointer"
              >
                Explorar catálogo <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.28, ease: EASE_OUT }}
              className="p-6 rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm shadow-sm flex flex-col justify-between transition-colors hover:bg-white"
            >
              <div>
                <p className="text-xs font-medium text-[#0072B5] mb-2">Casos de Éxito</p>
                <h3 className="text-lg font-semibold text-[#0B1D2C] mb-2">Obras y Proyectos</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  Revise fichas técnicas, caudales de diseño y resultados medidos en infraestructura
                  municipal e industrial.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('proyectos')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] cursor-pointer"
              >
                Ver portafolio <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
