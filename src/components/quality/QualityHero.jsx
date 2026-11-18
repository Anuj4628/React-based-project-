import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ChevronRight, Award, Ruler, Layers } from 'lucide-react';

/**
 * Section 1: Quality Hero Section
 * Eyebrow: QUALITY AT MF INDUSTRIAL SOLUTIONS
 * Main Heading: Quality Is at the Core of Every Industrial Requirement
 */
export default function QualityHero() {
  return (
    <section
      aria-label="Quality at MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-22 border-b border-red-100 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-red-200/30 blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-wider text-neutral-500">
            <li>
              <Link to="/" className="hover:text-[#C10A0E] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </li>
            <li className="text-[#C10A0E] font-bold">Quality</li>
          </ol>
        </nav>

        {/* Hero 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-4 sm:mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C10A0E] animate-pulse" />
              <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                QUALITY AT MF INDUSTRIAL SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[60px] text-[#0C0C0C] mb-4 sm:mb-5">
              QUALITY IS AT THE CORE OF <br className="hidden sm:inline" />
              <span className="text-[#C10A0E]">EVERY INDUSTRIAL REQUIREMENT</span>
            </h1>

            {/* Supporting Content */}
            <p className="text-[15.5px] sm:text-[17px] text-[#4A5568] leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
              At MF Industrial Solutions, we recognize the importance of quality in industrial applications. Our approach focuses on understanding product requirements, paying attention to material specifications, and supporting customers with dependable industrial solutions.
            </p>

            {/* Value Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-red-200/80">
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <Layers className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Material Alignment
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <Ruler className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Dimensional Accuracy
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Surface Integrity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Inspection Visual (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-red-100 shadow-2xl shadow-red-950/15 group">
              <picture>
                <source srcSet="/images/quality/quality-hero.webp" type="image/webp" />
                <img
                  src="/images/quality/quality-hero.jpg"
                  alt="Quality inspection and verification at MF Industrial Solutions"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to existing quality inspection photo if newly generated image is still copying
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/why-choose-us/quality-inspection-dft.webp';
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Quality Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-red-100 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C10A0E] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                      QUALITY-FOCUSED APPROACH
                    </span>
                    <span className="block text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0C0C0C] tracking-tight">
                      Attention to Specifications &amp; Requirements
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
