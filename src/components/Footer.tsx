import { motion } from 'motion/react';
import { NAV_ITEMS, type PageId } from '../types/navigation';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-100">
          <div className="space-y-3 max-w-sm">
            <button
              type="button"
              onClick={() => onNavigate('inicio')}
              aria-label="Ir al inicio — ICA Ingeniería Hidráulica"
              className="inline-flex items-center bg-[#007bc1] px-2.5 py-1.5 rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bc1]"
            >
              <img
                src="/assets/aistudio/logo_a69eadc6.png"
                alt="Logo ICA Ingeniería Hidráulica"
                referrerPolicy="no-referrer"
                className="h-7 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-[#475569] leading-relaxed">
              Consultoría, suministro técnico e ingeniería hidráulica orientada a la seguridad
              hídrica y la sostenibilidad de infraestructuras.
            </p>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#475569]"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="hover:text-[#0072B5] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            © {new Date().getFullYear()} ICA Ingeniería Hidráulica S.A.C. Todos los derechos
            reservados.
          </p>
          <p>Gestión de Calidad ISO 9001 · Ingeniería Civil e Hidráulica</p>
        </div>
      </motion.div>
    </footer>
  );
}
