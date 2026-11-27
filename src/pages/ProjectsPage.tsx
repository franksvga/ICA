import { useEffect, useState } from 'react';
import { ArrowRight, Leaf, X } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS, type HydraulicProject } from '../data/engineeringData';
import { ResilientImage } from '../components/ResilientImage';
import type { PageId } from '../types/navigation';

interface ProjectsPageProps {
  onNavigate: (page: PageId, preselectedSubject?: string) => void;
}

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

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<HydraulicProject | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = PROJECTS;

  return (
    <div>
      {/* Header band */}
      <section className="relative overflow-hidden bg-white pt-14 pb-12 border-b border-slate-200/80">
        <div className="absolute inset-0">
          <ResilientImage
            src="/src/assets/images/projects_infrastructure_cover_1795737285887.jpg"
            alt="Infraestructura hidráulica de compuertas de regulación, aliviadero y canal de conducción"
            fallbackLabel="Portafolio de Obra e Ingeniería"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,0.68)_72%,rgba(255,255,255,0.22)_100%)]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-[#0072B5] mb-3">
              Portafolio de Obra e Ingeniería
            </p>
            <h1 className="text-[clamp(2rem,3.4vw,2.9rem)] font-bold tracking-tight leading-[1.12] text-[#0B1D2C] text-balance mb-4">
              Proyectos ejecutados con desempeño hidráulico comprobado
            </h1>
            <p className="text-base text-[#334155] leading-relaxed">
              Cada intervención documenta parámetros de caudal, normativa aplicada y mejoras
              verificadas en eficiencia energética y seguridad hídrica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-[#F6F9FC] py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.85,
                  delay: (index % 2) * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#0072B5]/50"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#F6F9FC] overflow-hidden border-b border-slate-200">
                    <ResilientImage
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fallbackLabel={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-[#475569] mb-3">
                      <span className="font-medium text-[#0072B5]">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                    </div>

                    <h2 className="text-xl font-semibold tracking-tight text-[#0B1D2C] mb-2.5 leading-snug">
                      {project.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#475569]">{project.summary}</p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono tabular-nums text-base font-semibold text-[#0B1D2C]">
                      {project.highlightMetric}
                    </div>
                    <div className="text-xs text-[#475569] mt-0.5">{project.highlightContext}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Ver ficha técnica
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-[#0072B5] mb-2">Cobertura Sectorial</p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0B1D2C]">
              Sectores que confían en nuestra ingeniería
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((item, index) => (
              <motion.div
                key={item.sector}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-5 rounded-xl border border-slate-200 bg-[#F6F9FC]"
              >
                <h3 className="text-base font-semibold text-[#0B1D2C] mb-1.5">{item.sector}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project specification modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1D2C]/50 backdrop-blur-[2px]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#475569] mb-1.5">
                  <span className="font-medium text-[#0072B5]">{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{selectedProject.year}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold tracking-tight text-[#0B1D2C]"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar ficha técnica"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#475569] hover:text-[#0B1D2C] hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-[#F6F9FC]">
                <ResilientImage
                  src={selectedProject.imageSrc}
                  alt={selectedProject.imageAlt}
                  fallbackLabel={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[15px] leading-relaxed text-[#475569]">
                {selectedProject.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F6F9FC] border border-slate-200">
                <div>
                  <div className="text-xs text-[#475569]">Caudal / Parámetro de Diseño</div>
                  <div className="font-mono tabular-nums text-sm font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProject.specs.designFlow}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Normativa y Software</div>
                  <div className="font-mono text-sm font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProject.specs.standard}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Plazo de Ejecución</div>
                  <div className="text-sm font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProject.specs.duration}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Sostenibilidad Hídrica</div>
                  <div className="flex items-start gap-1.5 text-sm font-medium text-[#4A831E] mt-0.5">
                    <Leaf className="w-4 h-4 text-[#5FA22A] shrink-0 mt-0.5" />
                    <span>{selectedProject.specs.sustainability}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0B1D2C] mb-3">
                  Alcance de Ingeniería Ejecutado
                </h4>
                <ul className="space-y-2 text-sm text-[#475569]">
                  {selectedProject.scopeDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#0072B5] mt-2 shrink-0"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#F6F9FC] border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0B1D2C] transition-colors cursor-pointer"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onNavigate('contacto', `Consulta técnica por proyecto similar a: ${title}`);
                }}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#0072B5] hover:bg-[#00588E] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Consultar por proyecto similar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
