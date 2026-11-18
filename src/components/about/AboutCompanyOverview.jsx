import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * Section 2: Company Overview ("WHO WE ARE")
 */
export default function AboutCompanyOverview() {
  return (
    <section
      aria-label="Who We Are - MF Industrial Solutions"
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
                02 — WHO WE ARE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] text-[#0C0C0C] mb-6 sm:mb-8">
              BUILDING TRUST THROUGH <br className="hidden sm:inline" />
              <span className="text-[#C10A0E]">INDUSTRIAL SOLUTIONS</span>
            </h2>

            {/* Three Structured Paragraphs with Brand-Red Accents */}
            <div className="space-y-5 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed font-normal">
              <p>
                <strong className="text-[#0C0C0C] font-semibold">MF Industrial Solutions Pvt. Ltd.</strong> is focused on serving the evolving requirements of the industrial sector through steel and galvanizing-related solutions. We understand the importance of <span className="text-[#C10A0E] font-semibold">material quality</span>, <span className="text-[#C10A0E] font-semibold">dependable service</span>, and application-specific requirements in demanding industrial environments.
              </p>

              <p>
                Our approach is centered on understanding customer needs, maintaining clear communication, and supporting industrial requirements with a <span className="text-[#C10A0E] font-semibold">practical and quality-conscious mindset</span>.
              </p>

              <p>
                We believe that <span className="text-[#C10A0E] font-semibold">strong business relationships</span> are built through consistency, transparency, and a commitment to delivering solutions that meet customer expectations.
              </p>
            </div>

            {/* Operational Commitment Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF0F0]/60 border border-red-100">
                <CheckCircle2 className="w-5 h-5 text-[#C10A0E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                    Application Understanding
                  </h4>
                  <p className="text-[12.5px] text-slate-600 mt-0.5">
                    Aligning material grades and tolerances precisely to client drawings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF0F0]/60 border border-red-100">
                <ShieldCheck className="w-5 h-5 text-[#C10A0E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                    Consistent Communication
                  </h4>
                  <p className="text-[12.5px] text-slate-600 mt-0.5">
                    Clear project updates and disciplined execution on every order.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Large Photorealistic Inspection & Processing Image (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl shadow-slate-900/10 group">
              <picture>
                <source srcSet="/images/about/about-company-overview.webp" type="image/webp" />
                <img
                  src="/images/about/about-company-overview.jpg"
                  alt="Industrial Quality Inspection & Processing"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/50 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F0] text-[#C10A0E] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] sm:text-[15px] font-bold text-[#0C0C0C] tracking-tight">
                      Dimensional &amp; Coating Inspection
                    </h4>
                    <p className="text-[12px] text-slate-500">
                      Adherence to specifications &amp; protective standards
                    </p>
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
