import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateBreadcrumbSchema } from '@/utils/seoConfig';
import { productsCatalogue } from '@/data/productsCatalogue';
import CTASection from '@/components/common/CTASection';
import { ArrowRight, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

export default function Products() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ];

  return (
    <div className="w-full bg-[#FAF0F0] text-[#0C0C0C] select-none">
      <SEO
        title={seoRoutes.products.title}
        description={seoRoutes.products.description}
        canonical={seoRoutes.products.canonical}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* ============================================================== */}
      {/* 1. PRODUCTS PAGE HEADER / HERO                                 */}
      {/* ============================================================== */}
      <section
        aria-label="Products Catalog Header"
        className="relative w-full bg-[#FAF0F0] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-18 border-b border-red-100 overflow-hidden"
      >
        {/* Ambient radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-red-200/35 blur-[150px] pointer-events-none -z-0"
          aria-hidden="true"
        />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-wider text-neutral-500">
              <li>
                <Link to="/" className="hover:text-[#C10A0E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </li>
              <li className="text-[#C10A0E] font-bold">Products</li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E] animate-pulse" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              INDUSTRIAL CATALOGUE • 12 PRODUCTS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-condensed font-extrabold uppercase leading-[0.98] tracking-tight text-[36px] sm:text-[48px] lg:text-[56px] text-[#0C0C0C] mb-3 sm:mb-4">
            OUR PRODUCTS
          </h1>

          {/* Supporting Heading */}
          <p className="text-[17px] sm:text-[20px] font-bold text-[#C10A0E] tracking-tight leading-snug mb-4 max-w-3xl mx-auto">
            Industrial Steel Products &amp; Fabricated Components
          </p>

          {/* Exact Introduction Copy */}
          <p className="text-[15px] sm:text-[16.5px] text-[#4A5568] leading-relaxed max-w-3xl mx-auto font-normal">
            Explore our range of industrial steel products and fabricated components, developed to support a variety of industrial, structural, and engineering requirements. At MF Industrial Solutions, we focus on understanding product specifications and customer applications to provide dependable solutions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. 12-PRODUCT RESPONSIVE CATALOGUE GRID                        */}
      {/* ============================================================== */}
      <section
        aria-label="Product Catalogue Grid"
        className="relative w-full bg-white py-14 sm:py-18 lg:py-22 border-b border-slate-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 xl:gap-8 items-stretch">
            {productsCatalogue.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                aria-label={`View details for ${product.name}`}
                className="group relative bg-[#FAF0F0]/50 hover:bg-white rounded-3xl border border-red-100/90 hover:border-red-300 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-950/10 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E]"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-red-100/80 mb-5 p-3 sm:p-4 flex items-center justify-center shadow-sm">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Category Tag Overlay */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[#C10A0E] text-[10.5px] font-bold uppercase tracking-wider shadow-sm border border-red-100">
                      #{product.id}
                    </span>
                  </div>

                  {/* Product Category Subtitle */}
                  <span className="text-[11.5px] font-bold tracking-wider uppercase text-slate-500 block mb-1">
                    {product.category}
                  </span>

                  {/* Product Name */}
                  <h2 className="text-[22px] sm:text-[24px] font-condensed font-extrabold uppercase tracking-tight text-[#0C0C0C] group-hover:text-[#C10A0E] transition-colors mb-2.5 leading-snug">
                    {product.name}
                  </h2>

                  {/* Short Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#4A5568] leading-relaxed font-normal mb-4">
                    {product.shortDescription}
                  </p>
                </div>

                {/* View Details Button / Link Action */}
                <div className="pt-4 border-t border-red-100 flex items-center justify-between text-[#C10A0E] font-bold text-[13.5px] uppercase tracking-wider group-hover:text-[#A5080C]">
                  <span>View Details</span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#C10A0E] text-[#C10A0E] group-hover:text-white border border-red-200 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. REUSED HOMEPAGE CTA SECTION                                 */}
      {/* ============================================================== */}
      <CTASection />
    </div>
  );
}
