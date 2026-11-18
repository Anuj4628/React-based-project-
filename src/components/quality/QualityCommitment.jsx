import React from 'react';
import { ShieldCheck, CheckCircle2, Ruler, Sliders } from 'lucide-react';

/**
 * Section 2: Our Quality Commitment ("OUR COMMITMENT")
 * Heading: Focused on Quality. Committed to Reliability.
 */
export default function QualityCommitment() {
  return (
    <section
      aria-label="Our Quality Commitment - MF Industrial Solutions"
      className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* LEFT SIDE: Editorial Content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                02 — OUR COMMITMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] text-[#0C0C0C] mb-6 sm:mb-8">
              FOCUSED ON QUALITY. <br className="hidden sm:inline" />
              <span className="text-[#C10A0E]">COMMITTED TO RELIABILITY.</span>
            </h2>

            {/* Two Structured Paragraphs with Brand-Red Accents */}
            <div className="space-y-5 text-[15px] sm:text-[16.5px] text-[#4A5568] leading-relaxed font-normal">
              <p>
                <strong className="text-[#0C0C0C] font-semibold">Quality plays an important role</strong> in meeting industrial requirements. At MF Industrial Solutions, we believe that <span className="text-[#C10A0E] font-semibold">understanding specifications</span>, maintaining <span className="text-[#C10A0E] font-semibold">clear communication</span>, and paying attention to product requirements are essential parts of dependable customer service.
              </p>

              <p>
                We aim to approach every requirement with care, focusing on <span className="text-[#C10A0E] font-semibold">relevant material details</span>, application needs, and customer expectations.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF0F0]/70 border border-red-100">
                <CheckCircle2 className="w-5 h-5 text-[#C10A0E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                    Specification Focus
                  </h4>
                  <p className="text-[12.5px] text-slate-600 mt-0.5">
                    Rigorous alignment with drawing tolerances, wall thicknesses, and dimensions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF0F0]/70 border border-red-100">
                <ShieldCheck className="w-5 h-5 text-[#C10A0E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                    Transparent Communication
                  </h4>
                  <p className="text-[12.5px] text-slate-600 mt-0.5">
                    Clear technical discussions and proactive status updates at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Photorealistic Precision Inspection Image (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl shadow-slate-900/10 group">
              <picture>
                <source srcSet="/images/quality/quality-commitment.webp" type="image/webp" />
                <img
                  src="/images/quality/quality-commitment.jpg"
                  alt="Precision measurement and inspection of industrial galvanized components"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Floating Quality Callout Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BA0A0E] text-white flex items-center justify-center shrink-0">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#BA0A0E]">
                      PRECISION VERIFICATION
                    </span>
                    <span className="block text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0C0C0C] tracking-tight">
                      Dimensional Checks &amp; Specification Adherence
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
