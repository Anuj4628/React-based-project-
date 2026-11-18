import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { productsData } from '@/data/productsData';

export default function ProductsSection() {
  const featuredProduct = productsData[0]; // 01. Hot Dip Galvanizing
  const midProducts = [productsData[1], productsData[2]]; // 02 & 03
  const bottomProducts = [productsData[3], productsData[4], productsData[5]]; // 04, 05, 06

  const handleProductClick = (e, title) => {
    e.preventDefault();
    console.log(`Explore product requested: ${title}`);
  };

  return (
    <section
      id="products"
      className="relative w-full bg-[#BA0A0E] text-[#0C0C0C] py-6 sm:py-8 lg:py-5 xl:py-7 overflow-hidden select-none products-screen-fit"
      aria-label="Our Products - Galvanized Steel & Solutions"
    >
      {/* Subtle industrial texture grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col justify-between h-full">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: Centered Eyebrow, Main Headline, & Subtitle   */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4 lg:mb-3 xl:mb-4 shrink-0">
          {/* Eyebrow with white dashes flanking */}
          <div className="flex items-center justify-center gap-2.5 mb-0.5 sm:mb-1">
            <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-white">
              OUR PRODUCTS
            </span>
            <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
          </div>

          {/* Large Bold Condensed Headline */}
          <h2 className="text-white font-condensed font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[26px] sm:text-[34px] lg:text-[36px] xl:text-[40px]">
            PRECISION PRODUCTS. BUILT FOR INDUSTRY.
          </h2>

          {/* Subtitle Description */}
          <p className="text-white/90 text-[12px] sm:text-[13px] xl:text-[13.5px] leading-relaxed max-w-2xl mx-auto mt-0.5 font-normal">
            Precision-engineered galvanized steel flanges, hollow section pipes, hub plates, industrial gratings, elbows, and mounting brackets manufactured to rigorous industry standards.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PRODUCT CARDS BENTO GRID: 1 Top + 2 Middle + 3 Bottom = 6     */}
        {/* ============================================================== */}
        <div className="flex flex-col gap-2.5 sm:gap-3 flex-1 min-h-0 justify-between">
          
          {/* ------------------------------------------------------------ */}
          {/* ROW 1: Large Featured Card (01. Hot Dip Galvanizing)         */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-3.5 sm:gap-4 lg:gap-5 border border-white/20 shrink-0">
            {/* Image (Left) */}
            <div className="w-full md:w-[40%] lg:w-[36%] xl:w-[34%] h-[150px] sm:h-[170px] lg:h-[180px] xl:h-[190px] rounded-xl overflow-hidden shrink-0 bg-neutral-100 shadow-inner relative flex items-center justify-center">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.imageAlt}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Content (Right) */}
            <div className="flex-1 flex flex-col justify-between py-0.5 w-full">
              <div>
                {/* Featured Badge & Category */}
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C10A0E] text-white text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider shadow-sm">
                    FEATURED PRODUCT
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-neutral-400">
                    {featuredProduct.category} —
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[19px] sm:text-[22px] lg:text-[23px] font-bold text-[#0C0C0C] tracking-tight leading-tight">
                  {featuredProduct.title}
                </h3>
                {featuredProduct.subtitle && (
                  <span className="text-[11.5px] sm:text-[12px] text-neutral-500 font-medium block mb-1">
                    {featuredProduct.subtitle}
                  </span>
                )}

                {/* Description */}
                <p className="text-[#444444] text-[12px] sm:text-[12.5px] leading-relaxed max-w-2xl mb-2 sm:mb-2.5">
                  {featuredProduct.description}
                </p>

                {/* Feature Checkmarks (Matching Reference) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2.5 sm:mb-3">
                  {featuredProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C10A0E] shrink-0" />
                      <span className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red Pill CTA Button */}
              <div>
                <a
                  href={`#${featuredProduct.id}`}
                  onClick={(e) => handleProductClick(e, featuredProduct.title)}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[11.5px] sm:text-[12px] uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 2: Two Medium Cards (02 & 03)                            */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 shrink-0">
            {midProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-2.5 sm:p-3 lg:p-3.5 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                {/* Image */}
                <div className="w-full sm:w-[150px] lg:w-[165px] xl:w-[175px] h-[120px] sm:h-[130px] lg:h-[135px] rounded-xl overflow-hidden shrink-0 bg-neutral-100 shadow-inner relative flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.imageAlt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5 w-full">
                  <div>
                    <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {prod.category} —
                    </span>
                    <h3 className="text-[15.5px] sm:text-[17px] font-bold text-[#0C0C0C] tracking-tight leading-snug">
                      {prod.title}
                    </h3>
                    {prod.subtitle && (
                      <span className="text-[11px] text-neutral-500 block mb-0.5">
                        {prod.subtitle}
                      </span>
                    )}
                    <p className="text-[#555555] text-[11px] sm:text-[11.5px] leading-snug line-clamp-2 mb-2">
                      {prod.description}
                    </p>
                  </div>

                  {/* Red Pill CTA */}
                  <div>
                    <a
                      href={`#${prod.id}`}
                      onClick={(e) => handleProductClick(e, prod.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[11px] uppercase tracking-wider shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ROW 3: Three Cards (04, 05, 06)                              */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 shrink-0">
            {bottomProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 h-full"
              >
                {/* Image */}
                <div className="w-full sm:w-[110px] lg:w-[118px] xl:w-[126px] h-[105px] sm:h-[110px] lg:h-[115px] rounded-xl overflow-hidden shrink-0 bg-neutral-100 shadow-inner relative flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.imageAlt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5 w-full">
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {prod.category} —
                    </span>
                    <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#0C0C0C] tracking-tight leading-snug">
                      {prod.title}
                    </h3>
                    {prod.subtitle && (
                      <span className="text-[10px] sm:text-[10.5px] text-neutral-500 font-semibold block leading-tight">
                        {prod.subtitle}
                      </span>
                    )}
                    <p className="text-[#555555] text-[10.5px] sm:text-[11px] leading-snug line-clamp-2 mt-0.5 mb-1.5">
                      {prod.description}
                    </p>
                  </div>

                  {/* Red Pill CTA */}
                  <div>
                    <a
                      href={`#${prod.id}`}
                      onClick={(e) => handleProductClick(e, prod.title)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[10.5px] uppercase tracking-wider shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
