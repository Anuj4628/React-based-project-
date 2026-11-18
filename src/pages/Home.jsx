import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateOrganizationSchema } from '@/utils/seoConfig';
import HomeHero from '@/components/home/HomeHero';
import CompanyIntro from '@/components/home/CompanyIntro';
import ProductsSection from '@/components/home/ProductsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WhyGalvanizingSection from '@/components/home/WhyGalvanizingSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ClientsSection from '@/components/home/ClientsSection';
import CountriesExportSection from '@/components/home/CountriesExportSection';
import CTASection from '@/components/common/CTASection';

export default function Home() {
  return (
    <>
      <SEO
        title={seoRoutes.home.title}
        description={seoRoutes.home.description}
        canonical={seoRoutes.home.canonical}
        schema={generateOrganizationSchema()}
      />
      <HomeHero />
      <CompanyIntro />
      <ProductsSection />
      <WhyChooseUs />
      <WhyGalvanizingSection />
      <IndustriesSection />
      <ClientsSection />
      <CountriesExportSection />
      <CTASection />
    </>
  );
}
