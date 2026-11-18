import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { whyChooseUsData } from '@/data/whyChooseUsData';

export default function WhyChooseUs() {
  const {
    eyebrow,
    mainHeading,
    supportingHeadline,
    introduction,
    footerValues,
    strengths,
  } = whyChooseUsData;

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#FDF2F2] py-10 sm:py-14 lg:py-16 xl:py-20 overflow-hidden select-none"
      aria-label="Why Choose MF Industrial Solutions"
    >
      {/* Subtle ambient light red background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-200/30 blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ============================================================== */}
        {/* MASTER CONTAINER CARD: Recreating the reference screenshot     */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl lg:rounded-[32px] shadow-2xl shadow-red-950/10 border border-red-100/80 overflow-hidden flex flex-col lg:flex-row transition-all duration-300">
          
          {/* ------------------------------------------------------------ */}
          {/* LEFT COLUMN: Dark Navy / Charcoal Brand Identity Panel       */}
          {/* ------------------------------------------------------------ */}
          <div className="relative w-full lg:w-[44%] xl:w-[42%] bg-[#0B1320] text-white p-7 sm:p-9 lg:p-10 xl:p-12 flex flex-col justify-between shrink-0 overflow-hidden">
            
            {/* Atmospheric Background Image: Quality inspection with dark overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none scale-105"
              style={{
                backgroundImage: 'url(/images/why-choose-us/quality-inspection-dft.webp)',
              }}
              aria-hidden="true"
            />
            {/* Dark gradient mask for 100% text legibility */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/95 via-[#0B1320]/90 to-[#0B1320]/98 pointer-events-none"
              aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Eyebrow with red dash matching reference */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="w-5 sm:w-6 h-[2px] bg-[#C10A0E] inline-block" />
                  <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-white/80">
                    {eyebrow}
                  </span>
                </div>

                {/* Main Large Headline with Colored "US?" */}
                <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-extrabold uppercase tracking-tight leading-[1.02] text-white">
                  {mainHeading.line1}
                  <br />
                  {mainHeading.line2}
                  <br />
                  <span className="text-[#C10A0E] drop-shadow-sm">
                    {mainHeading.highlight}
                  </span>
                </h2>

                {/* Supporting Tagline */}
                <p className="text-white/95 text-[14px] sm:text-[15px] font-semibold mt-4 mb-2.5 leading-snug">
                  {supportingHeadline}
                </p>

                {/* Introduction Paragraph */}
                <p className="text-white/75 text-[12.5px] sm:text-[13px] leading-relaxed font-normal max-w-md">
                  {introduction}
                </p>

                {/* Decorative horizontal line with red accent dot (from reference screenshot) */}
                <div className="flex items-center gap-2 my-5 sm:my-6">
                  <div className="w-10 h-[1.5px] bg-white/20" />
                  <div className="w-1.5 h-1.5 bg-[#C10A0E] rounded-full" />
                </div>
              </div>

              {/* Bottom Visual Trust Card & Core Values */}
              <div className="pt-2">
                {/* Inspection highlight badge */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-800 shadow-inner">
                    <img
                      src="/images/why-choose-us/quality-inspection-dft.webp"
                      alt="Quality Inspection with Coating Thickness Gauge"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                      ISO 1461 Coating Verification
                    </span>
                    <span className="text-[10px] text-white/60 block">
                      Dry Film Thickness (DFT) & adhesion testing
                    </span>
                  </div>
                </div>

                {/* Values footer */}
                <div className="flex items-center gap-2 sm:gap-2.5 text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/45">
                  {footerValues.map((val, idx) => (
                    <React.Fragment key={val}>
                      <span>{val}</span>
                      {idx < footerValues.length - 1 && <span>•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RIGHT COLUMN: Clean White Panel with Numbered Strengths      */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full lg:w-[56%] xl:w-[58%] bg-white p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
            
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-5 xl:gap-5.5">
              {strengths.map((item) => {
                const isRed = item.badgeTheme === 'red';

                return (
                  <div
                    key={item.number}
                    className="group flex items-start gap-3.5 sm:gap-4 p-2 sm:p-2.5 -mx-2 sm:-mx-2.5 rounded-xl hover:bg-red-50/40 transition-colors duration-200"
                  >
                    {/* Number Badge (Alternating Dark Charcoal and Brand Red matching reference) */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-[13px] sm:text-[14px] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105 ${
                        isRed
                          ? 'bg-[#C10A0E] text-white shadow-red-600/25'
                          : 'bg-[#0B1320] text-white shadow-slate-900/20'
                      }`}
                    >
                      {item.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0F172A] tracking-tight uppercase leading-snug group-hover:text-[#C10A0E] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-[12px] sm:text-[12.5px] text-[#555E6D] leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
