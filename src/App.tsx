import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NAV_ITEMS, type PageId } from './types/navigation';

const VALID_PAGES = new Set<PageId>(NAV_ITEMS.map((item) => item.id));

function getPageFromHash(): PageId {
  const rawHash = window.location.hash.replace(/^#\/?/, '') as PageId;
  return VALID_PAGES.has(rawHash) ? rawHash : 'inicio';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => getPageFromHash());
  const [preselectedSubject, setPreselectedSubject] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const currentNav = NAV_ITEMS.find((item) => item.id === activePage);
    document.title = currentNav
      ? `${currentNav.label} | ICA Ingeniería Hidráulica`
      : 'ICA Ingeniería Hidráulica';
  }, [activePage]);

  const handleNavigate = (page: PageId, subject?: string) => {
    if (subject) {
      setPreselectedSubject(subject);
    }
    setActivePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#0B1D2C]">
        <Navbar activePage={activePage} onNavigate={(page) => handleNavigate(page)} />
        <main className="flex-1">
          {activePage === 'inicio' && <HomePage onNavigate={handleNavigate} />}
          {activePage === 'productos' && <ProductsPage onNavigate={handleNavigate} />}
          {activePage === 'proyectos' && <ProjectsPage onNavigate={handleNavigate} />}
          {activePage === 'contacto' && <ContactPage preselectedSubject={preselectedSubject} />}
        </main>
        <Footer onNavigate={(page) => handleNavigate(page)} />
      </div>
    </MotionConfig>
  );
}
