import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import FloatingContactButtons from '@/components/common/FloatingContactButtons';

/**
 * Main Layout Shell
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-carbon">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
