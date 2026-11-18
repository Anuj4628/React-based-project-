import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateBreadcrumbSchema } from '@/utils/seoConfig';

export default function GetQuote() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Get a Quote', url: '/get-a-quote' },
  ];

  return (
    <>
      <SEO
        title={seoRoutes.getQuote.title}
        description={seoRoutes.getQuote.description}
        canonical={seoRoutes.getQuote.canonical}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />
    </>
  );
}
