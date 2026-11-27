import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '../types/navigation';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    label: 'Instagram de ICA Ingeniería Hidráulica',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/',
    label: 'X de ICA Ingeniería Hidráulica',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    label: 'Facebook de ICA Ingeniería Hidráulica',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    label: 'YouTube de ICA Ingeniería Hidráulica',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelectPage = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#007bc1] border-b border-[#0068a3]">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark integrated directly onto #007bc1 header */}
        <button
          type="button"
          onClick={() => handleSelectPage('inicio')}
          aria-label="Ir al inicio — ICA Ingeniería Hidráulica"
          className="inline-flex items-center shrink-0 rounded cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <img
            src="/assets/aistudio/logo_a69eadc6.png"
            alt="Logo ICA Ingeniería Hidráulica"
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain"
          />
        </button>

        {/* Zone 2: 5 concise single-line page links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-150 after:origin-left ${
                  isActive
                    ? 'text-white font-semibold after:scale-x-100'
                    : 'text-white/85 hover:text-white after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Social icons on the right + mobile menu trigger */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="hidden md:flex items-center gap-1" aria-label="Redes sociales">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.name}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#007bc1] border-t border-white/15 px-6 py-4 space-y-3">
          <nav aria-label="Menú móvil" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPage(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-2.5 text-left text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'font-semibold text-white underline underline-offset-4'
                      : 'font-medium text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div
            className="pt-3 border-t border-white/15 flex items-center gap-2"
            aria-label="Redes sociales"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
