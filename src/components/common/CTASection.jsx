import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Clock, Globe } from 'lucide-react';

/**
 * Enhanced Industrial CTA Section
 * Placed immediately before the footer on the homepage.
 */
export default function CTASection() {
  return (
    <section
      aria-label="Partner with MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] py-16 sm:py-20 lg:py-24 border-t border-red-200/70 overflow-hidden select-none"
    >
      {/* Subtle ambient light red radial illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-red-200/40 blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="bg-white rounded-3xl border border-red-100 shadow-2xl shadow-red-950/10 px-6 py-12 sm:px-12 sm:py-16 lg:px-18 lg:py-20 text-center max-w-5xl mx-auto transition-all">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFF5F5] border border-red-200 shadow-sm mb-5 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C10A0E] animate-pulse" />
            <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.22em] uppercase text-[#C10A0E]">
              START AN INDUSTRIAL PARTNERSHIP
            </span>
          </div>

          {/* Large Main Heading */}
          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[44px] lg:text-[52px] xl:text-[56px] mb-4 sm:mb-5">
            LET'S BUILD STRONGER INDUSTRIAL PARTNERSHIPS
          </h2>

          {/* Supporting Copy */}
          <p className="text-[#4A5568] text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed max-w-3xl mx-auto font-normal mb-9 sm:mb-11">
            Looking for reliable industrial steel and galvanizing solutions? Connect with our team to discuss your requirements. We are here to understand your needs and assist you with the right solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 sm:px-10 sm:py-4.5 rounded-xl bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[15px] sm:text-[16px] uppercase tracking-wider shadow-lg shadow-red-900/25 hover:shadow-xl hover:shadow-red-900/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+918446265332"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-9 sm:py-4.5 rounded-xl bg-white hover:bg-[#FFF5F5] text-[#0C0C0C] hover:text-[#C10A0E] font-bold text-[15px] sm:text-[16px] border-2 border-red-200/90 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E]"
            >
              <PhoneCall className="w-5 h-5 text-[#C10A0E]" />
              <span>+91 84462 65332</span>
            </a>
          </div>

          {/* Three Key Trust Badges */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 text-[#C10A0E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                  Certified Standards
                </h4>
                <p className="text-[12.5px] text-slate-500">Rigorous quality control</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 text-[#C10A0E]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                  Prompt Consultation
                </h4>
                <p className="text-[12.5px] text-slate-500">Quick project estimations</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 text-[#C10A0E]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-[#0C0C0C] uppercase tracking-wide">
                  Global Reach
                </h4>
                <p className="text-[12.5px] text-slate-500">Delivering steel solutions worldwide</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
