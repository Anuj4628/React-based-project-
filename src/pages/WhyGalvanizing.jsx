import React from 'react';
import SEO from '@/components/common/SEO';
import WhyGalvanizingSection from '@/components/home/WhyGalvanizingSection';

export default function WhyGalvanizing() {
  return (
    <>
      <SEO
        title="Why Galvanizing Is Important | Steel Corrosion Protection | MF Industrial Solutions"
        description="Learn why hot-dip galvanizing is essential for steel protection: superior corrosion resistance, sacrificial cathodic protection, long-term durability, reduced maintenance, and comprehensive coverage."
        canonical="https://mfindustrialsolutions.com/why-galvanizing"
      />
      <div className="pt-2">
        <WhyGalvanizingSection />
      </div>
    </>
  );
}
