import type { HydraulicProduct } from '../data/engineeringData';

interface ProductSchematicProps {
  type: HydraulicProduct['schematicType'];
}

export function ProductSchematic({ type }: ProductSchematicProps) {
  return (
    <div className="w-full aspect-[16/10] bg-[#F6F9FC] border-b border-slate-200 flex items-center justify-center p-6">
      {type === 'pump' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <line x1="20" y1="108" x2="220" y2="108" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="44" y="88" width="152" height="20" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="90" cy="64" r="24" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <circle cx="90" cy="64" r="10" fill="#009ADE" fillOpacity="0.2" stroke="#009ADE" strokeWidth="1.8" />
          <rect x="122" y="42" width="54" height="44" rx="4" fill="#FFFFFF" stroke="#0B1D2C" strokeWidth="2" />
          <line x1="132" y1="52" x2="166" y2="52" stroke="#0072B5" strokeWidth="2" />
          <line x1="132" y1="62" x2="166" y2="62" stroke="#0072B5" strokeWidth="2" />
          <line x1="132" y1="72" x2="166" y2="72" stroke="#0072B5" strokeWidth="2" />
          <path d="M90 40 L90 18 L145 18" fill="none" stroke="#0072B5" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 64 L66 64" fill="none" stroke="#009ADE" strokeWidth="3" strokeLinecap="round" />
          <polygon points="150,18 140,13 140,23" fill="#5FA22A" />
        </svg>
      )}

      {type === 'valve' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <line x1="20" y1="76" x2="220" y2="76" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="34" y="64" width="172" height="24" rx="2" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <rect x="34" y="54" width="10" height="44" rx="2" fill="#0B1D2C" />
          <rect x="196" y="54" width="10" height="44" rx="2" fill="#0B1D2C" />
          <circle cx="120" cy="76" r="22" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <line x1="120" y1="54" x2="120" y2="28" stroke="#0B1D2C" strokeWidth="2.5" />
          <rect x="96" y="22" width="48" height="8" rx="4" fill="#009ADE" />
          <path d="M148 56 C158 42, 174 42, 180 56" fill="none" stroke="#5FA22A" strokeWidth="2" />
          <circle cx="164" cy="40" r="8" fill="#FFFFFF" stroke="#5FA22A" strokeWidth="2" />
        </svg>
      )}

      {type === 'plant' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <rect x="26" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.2" />
          <rect x="94" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#009ADE" strokeWidth="2.2" />
          <rect x="162" y="34" width="52" height="72" rx="4" fill="#FFFFFF" stroke="#5FA22A" strokeWidth="2.2" />
          <path d="M32 62 Q45 56 58 62 T72 62" fill="none" stroke="#0072B5" strokeWidth="2" />
          <path d="M100 54 Q113 48 126 54 T140 54" fill="none" stroke="#009ADE" strokeWidth="2" />
          <path d="M168 48 Q181 42 194 48 T208 48" fill="none" stroke="#5FA22A" strokeWidth="2" />
          <line x1="78" y1="50" x2="94" y2="50" stroke="#0B1D2C" strokeWidth="2" />
          <line x1="146" y1="50" x2="162" y2="50" stroke="#0B1D2C" strokeWidth="2" />
          <line x1="20" y1="106" x2="220" y2="106" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      )}

      {type === 'filter' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <rect x="64" y="26" width="112" height="76" rx="10" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <line x1="84" y1="36" x2="84" y2="92" stroke="#009ADE" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="102" y1="36" x2="102" y2="92" stroke="#009ADE" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="120" y1="36" x2="120" y2="92" stroke="#009ADE" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="138" y1="36" x2="138" y2="92" stroke="#009ADE" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="156" y1="36" x2="156" y2="92" stroke="#009ADE" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M24 64 L64 64" stroke="#0072B5" strokeWidth="3" strokeLinecap="round" />
          <path d="M176 64 L216 64" stroke="#5FA22A" strokeWidth="3" strokeLinecap="round" />
          <polygon points="216,64 206,59 206,69" fill="#5FA22A" />
        </svg>
      )}

      {type === 'meter' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <rect x="30" y="72" width="180" height="22" rx="2" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <rect x="94" y="22" width="52" height="36" rx="4" fill="#FFFFFF" stroke="#0B1D2C" strokeWidth="2" />
          <rect x="102" y="29" width="36" height="16" rx="2" fill="#0072B5" fillOpacity="0.12" stroke="#009ADE" strokeWidth="1.2" />
          <line x1="120" y1="58" x2="120" y2="72" stroke="#0B1D2C" strokeWidth="2.5" />
          <path d="M158 32 C168 24, 178 24, 186 32" fill="none" stroke="#5FA22A" strokeWidth="2" strokeLinecap="round" />
          <path d="M164 39 C170 34, 175 34, 180 39" fill="none" stroke="#5FA22A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'gate' && (
        <svg viewBox="0 0 240 130" className="w-full h-full max-w-[220px]" aria-hidden="true">
          <rect x="64" y="34" width="12" height="74" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
          <rect x="164" y="34" width="12" height="74" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
          <rect x="76" y="48" width="88" height="54" fill="#FFFFFF" stroke="#0072B5" strokeWidth="2.5" />
          <line x1="76" y1="66" x2="164" y2="66" stroke="#0072B5" strokeWidth="1.5" />
          <line x1="76" y1="84" x2="164" y2="84" stroke="#0072B5" strokeWidth="1.5" />
          <line x1="120" y1="16" x2="120" y2="48" stroke="#0B1D2C" strokeWidth="2.5" />
          <circle cx="120" cy="18" r="8" fill="#009ADE" />
          <path d="M36 96 Q54 90 76 96" fill="none" stroke="#009ADE" strokeWidth="2" />
          <path d="M164 102 Q186 96 206 102" fill="none" stroke="#5FA22A" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}
