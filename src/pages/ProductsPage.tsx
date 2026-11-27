import { useEffect, useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { PRODUCTS, type HydraulicProduct, type ProductCategory } from '../data/engineeringData';
import { ProductSchematic } from '../components/ProductSchematic';
import { ResilientImage } from '../components/ResilientImage';
import type { PageId } from '../types/navigation';

interface ProductsPageProps {
  onNavigate: (page: PageId, preselectedSubject?: string) => void;
}

const PRODUCT_FILTERS: { id: ProductCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'bombeo', label: 'Bombeo y Presión' },
  { id: 'valvulas', label: 'Válvulas y Control' },
  { id: 'tratamiento', label: 'Tratamiento y Filtración' },
  { id: 'telemetria', label: 'Medición y Telemetría' },
];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');
  const [selectedProduct, setSelectedProduct] = useState<HydraulicProduct | null>(null);

  useEffect(() => {
    if (!selectedProduct) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProduct]);

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <div>
      {/* Header band */}
      <section className="relative overflow-hidden bg-white pt-14 pb-12 border-b border-slate-200/80">
        <div className="absolute inset-0">
          <ResilientImage
            src="/src/assets/images/products_equipment_cover_1795737285623.jpg"
            alt="Estación de bombeo hidráulico con tuberías de acero inoxidable y válvulas de control"
            fallbackLabel="Catálogo Técnico de Equipos Hidráulicos"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,0.68)_72%,rgba(255,255,255,0.22)_100%)]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0072B5] mb-3">
              Catálogo Técnico · Equipamiento y Sistemas Hidráulicos
            </p>
            <h1 className="text-[clamp(2rem,3.4vw,2.9rem)] font-bold tracking-tight leading-[1.12] text-[#0B1D2C] text-balance mb-4">
              Equipos y soluciones modulares para conducción, control y tratamiento
            </h1>
            <p className="text-base text-[#334155] leading-relaxed">
              Suministramos equipamiento hidráulico dimensionado a la medida de cada proyecto, con
              respaldo de ingeniería, curvas certificadas y puesta en marcha.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid with integrated category filters */}
      <section className="bg-[#F6F9FC] py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div
            role="tablist"
            aria-label="Filtrar productos por categoría"
            className="w-full flex flex-wrap md:flex-nowrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-lg mb-8"
          >
            {PRODUCT_FILTERS.map((filter) => {
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`flex-1 px-4 py-2.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072B5] ${
                    isActive
                      ? 'bg-[#0072B5] text-white'
                      : 'text-[#475569] hover:text-[#0B1D2C] hover:bg-[#F6F9FC]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#0072B5]/50"
              >
                <div>
                  <ProductSchematic type={product.schematicType} />

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#475569] mb-2.5">
                      <span className="font-medium text-[#0072B5]">{product.categoryLabel}</span>
                      <span className="font-mono tabular-nums text-slate-400">{product.code}</span>
                    </div>

                    <h2 className="text-lg font-semibold tracking-tight text-[#0B1D2C] mb-2.5 leading-snug">
                      {product.name}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#475569] mb-5">
                      {product.summary}
                    </p>

                    <dl className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#475569]">Capacidad / Rango</dt>
                        <dd className="font-mono tabular-nums font-medium text-[#0B1D2C] text-right">
                          {product.specs.capacity}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#475569]">Presión / Carga</dt>
                        <dd className="font-mono tabular-nums font-medium text-[#0B1D2C] text-right">
                          {product.specs.pressureOrHead}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#475569]">Normativa</dt>
                        <dd className="font-mono font-medium text-[#0B1D2C] text-right">
                          {product.specs.standard}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-sm font-medium text-[#0B1D2C] hover:text-[#0072B5] transition-colors cursor-pointer"
                  >
                    Especificaciones
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contacto', `Cotización de producto: ${product.name} (${product.code})`)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0072B5] hover:text-[#00588E] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cotizar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product specification modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1D2C]/50 backdrop-blur-[2px]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#475569] mb-1">
                  <span className="font-medium text-[#0072B5]">{selectedProduct.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{selectedProduct.code}</span>
                </div>
                <h3
                  id="product-modal-title"
                  className="text-xl font-bold tracking-tight text-[#0B1D2C]"
                >
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Cerrar especificaciones"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#475569] hover:text-[#0B1D2C] hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ProductSchematic type={selectedProduct.schematicType} />

            <div className="p-6 space-y-5">
              <p className="text-sm leading-relaxed text-[#475569]">{selectedProduct.summary}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F6F9FC] border border-slate-200 text-sm">
                <div>
                  <div className="text-xs text-[#475569]">Capacidad / Rango</div>
                  <div className="font-mono tabular-nums font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProduct.specs.capacity}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Presión / Carga de Trabajo</div>
                  <div className="font-mono tabular-nums font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProduct.specs.pressureOrHead}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Materiales Constructivos</div>
                  <div className="font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProduct.specs.material}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Normativa Aplicable</div>
                  <div className="font-mono font-medium text-[#0B1D2C] mt-0.5">
                    {selectedProduct.specs.standard}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0B1D2C] mb-2.5">
                  Aplicaciones Principales
                </h4>
                <ul className="space-y-2 text-sm text-[#475569]">
                  {selectedProduct.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5FA22A] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#F6F9FC] border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0B1D2C] cursor-pointer"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  const subject = `Cotización de producto: ${selectedProduct.name} (${selectedProduct.code})`;
                  setSelectedProduct(null);
                  onNavigate('contacto', subject);
                }}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#0072B5] hover:bg-[#00588E] rounded-lg transition-colors cursor-pointer"
              >
                Solicitar cotización técnica
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
