import React from 'react';
import { ShieldCheck, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Steel Fabrication & Custom Manufacturing',
    description: 'Custom components, gratings, cable trays, and structural brackets built to project specifications.',
  },
  {
    title: 'Steel Plate Cutting & Precision Drilling',
    description: 'Accurate CNC cutting, flange hole patterns, and plate preparation ready for assembly.',
  },
  {
    title: 'Industrial Fabricated Components',
    description: 'Heavy-duty structural mounting brackets, MS puddle flanges, and tailored industrial assemblies.',
  },
  {
    title: 'Partner-Coordinated Hot-Dip Galvanizing',
    description: 'Corrosion protection finishing coordinated end-to-end through certified, approved partner facilities.',
  },
];

export default function CompanyIntro() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFF5F5] text-[#0C0C0C] py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden border-b border-[#FEE2E2]"
      aria-label="About MetalForge Industrial Solutions"
    >
      {/* Subtle architectural ambient texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C10A0E 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-16">
          
          {/* ========================================================== */}
          {/* LEFT COLUMN: Factual Company Story & Capabilities (52–55%) */}
          {/* ========================================================== */}
          <div className="w-full lg:w-[53%] xl:w-[52%] flex flex-col justify-center">
            
            {/* Small Red Eyebrow Label */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-7 h-[2.5px] bg-[#C10A0E] rounded-full shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#C10A0E]">
                WHO WE ARE
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[42px] xl:text-[48px] font-condensed font-extrabold uppercase leading-[1.04] tracking-tight text-[#0C0C0C] mb-6">
              ABOUT <span className="text-[#C10A0E]">METALFORGE</span> INDUSTRIAL SOLUTIONS
            </h2>

            {/* Professional, Factual Company Paragraphs */}
            <div className="space-y-4 text-[15px] sm:text-[16px] xl:text-[16.5px] leading-relaxed text-[#374151] mb-8 sm:mb-10">
              <p>
                <strong className="font-semibold text-[#0C0C0C]">MetalForge Industrial Solutions</strong> is focused on delivering practical steel fabrication and industrial manufacturing solutions to meet diverse project requirements.
              </p>
              <p>
                From custom steel fabrication and precision plate cutting to drilling and fabricated industrial components, our approach is centered on understanding project needs and delivering solutions with attention to accuracy, quality, and reliability.
              </p>
              <p>
                For projects requiring hot-dip galvanizing, we coordinate with approved galvanizing partners to support protective finishing requirements—maintaining disciplined inspection and quality oversight from preparation to dispatch.
              </p>
            </div>

            {/* Core Capabilities Section with Red Capability Boxes */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#A5080C] flex items-center gap-2">
                  <span>Core Capabilities & Coordination</span>
                </h3>
                <span className="flex-1 h-[1px] bg-[#FECACA]" />
              </div>

              {/* Four Red Capability Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#C10A0E] hover:bg-[#A5080C] text-white rounded-xl p-4 sm:p-4.5 transition-all duration-300 shadow-md shadow-red-950/15 hover:shadow-xl hover:shadow-red-950/25 hover:-translate-y-1 flex flex-col justify-between border border-red-700/30"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="mt-0.5 w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#C10A0E] transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-white group-hover:text-[#C10A0E] transition-colors" />
                        </div>
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-white leading-snug tracking-tight">
                          {cap.title}
                        </h4>
                      </div>
                      {/* Description */}
                      <p className="text-[12.5px] sm:text-[13px] text-white/90 leading-relaxed pl-8.5">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Photorealistic Branded Worker Image (45–48%) */}
          {/* ========================================================== */}
          <div className="w-full lg:w-[47%] xl:w-[46%] flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Subtle Red Architectural Accent Borders */}
              <div
                className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#C10A0E] rounded-tr-2xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#C10A0E] rounded-bl-2xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-950/10 border border-[#FEE2E2] bg-white aspect-[4/3]">
                <img
                  src="/images/about/company-worker-galvanizing.webp?v=2"
                  alt="MetalForge Industrial Solutions quality technician in galvanizing facility inspecting structural steel components"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Subtle natural vignette for depth */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Authentic Quality & Coordination Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-red-100/80 flex items-center gap-3.5 max-w-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF1F1] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#C10A0E]" />
                  </div>
                  <div>
                    <span className="block text-[13px] font-bold text-[#0C0C0C] uppercase tracking-wide leading-tight">
                      Quality Oversight
                    </span>
                    <span className="text-[11.5px] text-[#555555] leading-tight block mt-0.5">
                      Coordinated finishing through approved partner facilities
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
