// src/app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import { ModalProvider } from './context/ModalContext'; // ✅ Import the provider 
import { useModal } from './context/ModalContext'; // Optional for auto-render
import FormModal from '@/components/FormModal';
import FacebookPixel from '@/components/FacebookPixel';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Urbanrise Opus 96 - Premium Apartments & Villas in Chennai & Hyderabad</title>
        <link rel="icon" href="images/favicon1.ico" />
        <meta name="description" content="Urbanrise Opus 96 is a 96-acre township..." />
        <meta name="keywords" content="Urbanrise Opus96, Urbanrise Opus96 for Sale, Urbanrise Opus96 Price, Urbanrise Opus96 Review, Urbanrise Opus96 Features, Urbanrise Opus96 Amenities, Urbanrise Opus96 Tambaram, Urbanrise Opus96 Plots, Urbanrise Opus96 Location, Urbanrise Opus96 Master Plan, Urbanrise Opus96 Floor Plan, Urbanrise Opus96 Launch Date, Urbanrise Opus96 Brochure, Urbanrise Opus96 Site Visit, Urbanrise Opus96 Booking, Buy Plots in Tambaram, Plots for Sale in Tambaram, Urbanrise Tambaram Projects, Urbanrise Residential Plots, CMDA Approved Plots Tambaram, Gated Community Plots Chennai, Real Estate Projects Tambaram, Urbanrise Chennai Projects, Investment Plots Tambaram, Tambaram Real Estate Investment"/>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Urbanrise Opus 96 - South India’s Leading Real Estate Developer" />
        <meta property="og:title" content="Urbanrise Opus 96 - Premium Township Living in South India" />
        <meta property="og:description" content="Explore Urbanrise Opus 96 – South India’s largest integrated township..." />
        <meta property="og:url" content="https://www.urbanriseopus96.site" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.urbanriseopus96.site/logo.png" />
      </head>
      <body className="relative min-h-screen w-screen bg-black overflow-hidden">
      <FacebookPixel />
        <ModalProvider>
          {/* ✅ Sticky Header */}
          <Header />

          {/* ✅ Page Content with Slider Behind */}
          <main className="relative z-10 pt-[80px] p-6">
            {children}
          </main>

          {/* ✅ Global Modal once per app */}
          <FormModalWrapper />
        </ModalProvider>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

// ✅ Helper to separate modal logic cleanly
function FormModalWrapper() {
  const { isOpen, closeModal } = useModal();
  return <FormModal isOpen={isOpen} onClose={closeModal} />;
}
