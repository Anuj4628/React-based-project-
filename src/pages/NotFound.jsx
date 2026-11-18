import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes } from '@/utils/seoConfig';

export default function NotFound() {
  return (
    <>
      <SEO
        title={seoRoutes.notFound.title}
        description={seoRoutes.notFound.description}
        canonical={seoRoutes.notFound.canonical}
        noIndex={true}
      />
    </>
  );
}
