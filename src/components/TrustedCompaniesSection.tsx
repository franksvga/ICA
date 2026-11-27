import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface PartnerLogo {
  id: string;
  name: string;
  sector: string;
  mark: ReactNode;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: 'aquasur',
    name: 'AQUASUR',
    sector: 'Agua y Saneamiento',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <path
          d="M16 4C16 4 7 14.2 7 20.2C7 25.06 11.03 29 16 29C20.97 29 25 25.06 25 20.2C25 14.2 16 4 16 4Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path d="M11.5 21.5C12.8 23.5 15 24.5 17.5 24.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'hidrovalle',
    name: 'HIDROVALLE',
    sector: 'Conducción Hídrica',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M8 14C10.5 12 13.5 12 16 14C18.5 16 21.5 16 24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20C10.5 18 13.5 18 16 20C18.5 22 21.5 22 24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'agroverde',
    name: 'AGROVERDE',
    sector: 'Agroindustria',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <path
          d="M7 25C7 14 14 7 25 7C25 18 18 25 7 25Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M7 25L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'andina',
    name: 'ANDINA CIVIL',
    sector: 'Infraestructura',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <polygon points="16,5 28,26 4,26" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <line x1="10" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'altiplano',
    name: 'MINERA SUR',
    sector: 'Procesos Hídricos',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <polygon
          points="16,4 27,10.5 27,21.5 16,28 5,21.5 5,10.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'energia-fluvial',
    name: 'FLUVIAL SA',
    sector: 'Energía y Presas',
    mark: (
      <svg viewBox="0 0 32 32" className="w-[42px] h-[42px] shrink-0" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17.5 9L11.5 17H16.5L14.5 23L20.5 15H15.5L17.5 9Z" fill="currentColor" />
      </svg>
    ),
  },
];

export function TrustedCompaniesSection() {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B1D2C]">
            EMPRESAS QUE HAN CONFIADO EN NOSOTROS
          </h2>
          <p className="text-sm text-[#475569] mt-2">
            Organizaciones públicas, empresas de saneamiento e industrias que respaldan nuestra
            trayectoria técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_LOGOS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-slate-200 rounded-xl bg-white px-4 py-6 flex flex-col items-center justify-center text-center transition-colors duration-150 hover:border-[#007bc1]/45 hover:bg-[#F6F9FC]"
            >
              <div className="text-[#475569] group-hover:text-[#007bc1] transition-colors duration-150 mb-3.5">
                {partner.mark}
              </div>
              <div className="font-display text-sm font-bold tracking-wide text-[#0B1D2C]">
                {partner.name}
              </div>
              <div className="text-xs text-[#64748B] mt-1">{partner.sector}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
