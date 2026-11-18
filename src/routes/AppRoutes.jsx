import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Quality from '@/pages/Quality';
import Contact from '@/pages/Contact';
import GetQuote from '@/pages/GetQuote';
import WhyGalvanizing from '@/pages/WhyGalvanizing';
import NotFound from '@/pages/NotFound';

/**
 * Centralized Application Route Configuration
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/why-galvanizing" element={<WhyGalvanizing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
