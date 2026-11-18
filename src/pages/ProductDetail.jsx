import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import { productsCatalogue, getProductBySlug } from '@/data/productsCatalogue';
import CTASection from '@/components/common/CTASection';
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Settings,
  PhoneCall,
  FileText,
  HelpCircle,
  Package,
} from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  return (
    <div className="w-full bg-[#FAF0F0] text-[#0C0C0C] select-none">
      <SEO
        title={product.seo.title}
        description={product.seo.description}
        canonical={`https://mfindustrialsolutions.com/products/${product.slug}`}
      />

      {/* ============================================================== */}
      {/* 1. PRODUCT DETAIL HERO AREA                                    */}
      {/* ============================================================== */}
      <section
        aria-label={`${product.name} Introduction`}
        className="relative w-full bg-[#FAF0F0] pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-14 lg:pb-20 border-b border-red-100 overflow-hidden"
      >
        {/* Ambient radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-red-200/30 blur-[140px] pointer-events-none -z-0"
          aria-hidden="true"
        />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-wider text-neutral-500 flex-wrap">
              <li>
                <Link to="/" className="hover:text-[#C10A0E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C10A0E] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </li>
              <li className="text-[#C10A0E] font-bold">{product.name}</li>
            </ol>
          </nav>

          {/* Hero 2-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Product Information & CTAs (Span 7) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                  OUR PRODUCTS • {product.category}
                </span>
              </div>

              {/* Large Product Name */}
              <h1 className="font-condensed font-extrabold uppercase leading-[0.98] tracking-tight text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[62px] text-[#0C0C0C] mb-4 sm:mb-5">
                {product.name}
              </h1>

              {/* Hero Introduction */}
              <p className="text-[16px] sm:text-[17.5px] text-[#4A5568] leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
                {product.heroIntro}
              </p>

              {/* Quick Assurance Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8 pt-6 border-t border-red-200/80">
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-red-100 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#C10A0E] shrink-0" />
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C]">
                    Corrosion Resistant
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-red-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C10A0E] shrink-0" />
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C]">
                    Drawing Accurate
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-red-100 shadow-sm">
                  <Package className="w-4 h-4 text-[#C10A0E] shrink-0" />
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C]">
                    Industrial Grade
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[14.5px] sm:text-[15.5px] uppercase tracking-wider shadow-lg shadow-red-900/25 hover:shadow-xl hover:shadow-red-900/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E]"
                >
                  <span>Contact for Enquiry</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>

                <a
                  href="tel:+918446265332"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white hover:bg-neutral-50 text-[#0C0C0C] hover:text-[#C10A0E] font-bold text-[14.5px] sm:text-[15.5px] border border-red-200/90 shadow-sm transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-[#C10A0E]" />
                  <span>+91 84462 65332</span>
                </a>
              </div>
            </div>

            {/* Right Column: Large Photorealistic Product Image (Span 5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-red-100 shadow-2xl shadow-red-950/15 group">
                <div className="aspect-[4/3] w-full relative flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white via-[#FAF0F0] to-white">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="p-4 sm:p-5 bg-white border-t border-red-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#C10A0E] block">
                      OFFICIAL PRODUCT ASSET
                    </span>
                    <h4 className="text-[14px] sm:text-[15px] font-bold text-[#0C0C0C]">
                      MF Industrial Solutions — {product.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF0F0] text-[#C10A0E] text-[11px] font-bold border border-red-200">
                    Product #{product.id}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PRODUCT OVERVIEW SECTION                                    */}
      {/* ============================================================== */}
      <section
        aria-label="Product Overview"
        className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-22 border-b border-slate-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                DETAILED INSIGHTS
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[46px] text-[#0C0C0C] mb-6 sm:mb-8">
              PRODUCT OVERVIEW
            </h2>

            {/* 3 Structured Descriptive Paragraphs */}
            <div className="space-y-5 text-[15.5px] sm:text-[16.5px] text-[#4A5568] leading-relaxed font-normal">
              {product.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. KEY FEATURES SECTION                                        */}
      {/* ============================================================== */}
      <section
        aria-label="Key Features"
        className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-16 sm:py-20 lg:py-22 border-b border-red-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                TECHNICAL HIGHLIGHTS
              </span>
            </div>

            <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[40px] lg:text-[46px] mb-3">
              KEY FEATURES
            </h2>

            <p className="text-[#4A5568] text-[15px] sm:text-[16.5px] leading-relaxed">
              Engineered characteristics and operational advantages tailored for {product.name.toLowerCase()} applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {product.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-200 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FAF0F0] text-[#C10A0E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Feature {String(idx + 1).padStart(2, '0')}
                  </h3>
                  <p className="text-[15px] sm:text-[15.5px] font-semibold text-[#0C0C0C] leading-snug">
                    {feat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. INDUSTRIAL APPLICATIONS SECTION                             */}
      {/* ============================================================== */}
      <section
        aria-label="Industrial Applications"
        className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-22 border-b border-slate-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                SECTOR APPLICATION
              </span>
            </div>

            <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[40px] lg:text-[46px] mb-3">
              INDUSTRIAL APPLICATIONS
            </h2>

            <p className="text-[#4A5568] text-[15px] sm:text-[16.5px] leading-relaxed">
              Targeted sectors and installation scenarios where {product.name.toLowerCase()} components are actively deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {product.applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] rounded-2xl p-6 sm:p-7 border border-red-100 hover:border-red-300 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#C10A0E] border border-red-200/80 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#C10A0E] group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0C0C0C] leading-snug mb-1">
                    {app}
                  </h3>
                  <span className="text-[12px] font-semibold text-[#C10A0E] uppercase tracking-wider">
                    Application Focus
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PRODUCT SPECIFICATIONS SECTION                              */}
      {/* ============================================================== */}
      <section
        aria-label="Product Specifications"
        className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-16 sm:py-20 lg:py-22 border-b border-red-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                TECHNICAL DATA
              </span>
            </div>

            <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[40px] lg:text-[46px] text-[#0C0C0C] mb-3">
              PRODUCT SPECIFICATIONS
            </h2>

            <p className="text-[#4A5568] text-[15px] sm:text-[16.5px] leading-relaxed mb-8">
              Standard parameters and dimensional guidelines. All products can be custom-fabricated to project drawings and client specifications.
            </p>

            {/* Structured Specifications Table */}
            <div className="bg-white rounded-3xl border border-red-100 shadow-md overflow-hidden">
              <div className="divide-y divide-red-100">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 sm:grid sm:grid-cols-3 sm:gap-4 items-center ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF0F0]/40'
                    }`}
                  >
                    <dt className="text-[13.5px] sm:text-[14px] font-bold text-[#0C0C0C] uppercase tracking-wider">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-[14.5px] sm:text-[15.5px] text-[#4A5568] font-medium">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* Note on Custom Fabrication */}
              <div className="p-4 sm:p-5 bg-[#FFF5F5] border-t border-red-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C10A0E] shrink-0 mt-0.5" />
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                  <strong className="text-[#0C0C0C] font-semibold">Note on Project Specifications:</strong> Dimensions and parameters listed above include sample reference dimensions. Final thickness, drill patterns, coating micron requirements, and dimensions are manufactured to approved client drawings and project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. PRODUCT-SPECIFIC ENQUIRY CALLOUT BANNER                     */}
      {/* ============================================================== */}
      <section
        aria-label="Product Enquiry Callout"
        className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-100"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-[#BA0A0E] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl shadow-red-950/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background Texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-3xl"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-white/80 block mb-2">
                DIRECT INQUIRY
              </span>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-condensed font-extrabold uppercase tracking-tight text-white leading-tight mb-3">
                LOOKING FOR THIS PRODUCT?
              </h2>
              <p className="text-[15px] sm:text-[17px] text-white/90 leading-relaxed font-normal">
                Contact our team to discuss your product requirements and specifications for <strong className="text-white underline decoration-white/40">{product.name}</strong>.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-white hover:bg-neutral-100 text-[#C10A0E] font-bold text-[15px] sm:text-[16px] uppercase tracking-wider shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://wa.me/917030000160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[15px] sm:text-[16px] shadow-lg transition-all duration-200"
              >
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. REUSED HOMEPAGE CTA SECTION                                 */}
      {/* ============================================================== */}
      <CTASection />
    </div>
  );
}

function Info({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
