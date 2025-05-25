'use client';

import './globals.css';
import ClientSlider from '@/components/ClientSlider';
import AccordianSection from '@/components/AccordionSection';
import '../components/header.css';
import Image from 'next/image'; // ✅ Import Image here
import React, { useState } from "react";
import ManualSlider from '@/components/Slider';
import SixDivLayout from '@/components/SixDivLayout';
import ParkSelector from '@/components/ParkSelector';
import HalfSlider from '@/components/HalfSlider';
import MapAccordionSection from '@/components/MapAccordionSection';
import FeatureLayout from '@/components/FeatureLayout';
import ConnectPage from '@/components/ConnectPage';
import FooterLayout from '@/components/FooterLayout';
import PriceConfiguration from '@/components/PriceConfiguration';
import TambaramSection from '@/components/TambaramSection';
import ExperienceSection from '@/components/ExperienceSection';
import FloatingButton from '@/components/FloatingButton';
import FooterForm from '@/components/FooterForm';
import LivingExperienceSection from '@/components/LivingExperienceSection';
import StandoutsPage from '@/components/standouts';
import NatureSection from '@/components/NatureSection';
import SchoolInhousePage from '@/components/SchoolInhousePage';
import ChildFriendlyTownshipPage from '@/components/ChildFriendlyTownshipPage';
import LifestylePage from '@/components/LifestylePage';
import BlendPage from '@/components/BlendPage';

const outerWords = [
  "Sprawling Opus96", "Future Home Awaits", "Exclusive Community", "Luxurious Leisure",
  "Nature's Haven", "Unmatched Lifestyle Over", "Learning Hub", "Holistic Education"
];

const overlayWords = [
  "96 acres of Blissful Living", "3200+ apartments", "900 Luxury villa plots", "4 elegant clubhouses",
  "8 Lush Green parks", "Over 125+ World-Class Amenities", "Urbanrise Genius for Children", "CBSE School Within the Community"
];

const overlayColors = [
  "#ff4c4c",   // Bold - red
  "#4caf50",   // Fresh - green
  "#00bcd4",   // Zen - teal
  "#ff9800",   // Wander - orange
  "#9c27b0",   // Build - purple
  "#2196f3",   // Win - blue
  "#e91e63",   // Vision - pink
  "#ffc107"    // Glow - amber
];





export default function Home() {
  
  return (
    <>
      <ClientSlider />

     
      <div className="image-below-slider">
      <Image
  src="/images/banner-below-top-bg-Photoroom.png"
  alt="Corner Icon"
  width={100}
  height={60}
  className="transition-image1"
/>
</div>
<ExperienceSection />
<div className="card-section-wrapper">
<div className="card-container">
  {outerWords.map((outerWord, index) => (
    <div className="card" key={index}>
      {/* ➤ Word outside the image */}
      <div className="card-text">{outerWord}</div>

      <div className="card-image-wrapper">
        <img
          src={`/images/card${index + 1}.jpg`}
          alt={`Card ${index + 1}`}
          className="card-image"
        />

        {/* ➤ Overlay word + golden bar inside the image */}
        <div className="overlay-content1">
          <div className="overlay-word" style={{ color: overlayColors[index] }}
          >{overlayWords[index]}</div>
          <div className="golden_bar" />
        </div>
      </div>
    </div>
  ))}
   {/* 🔽 Single image at bottom-right of the whole card container */}
   <div className="image-right-slider">
    <Image
      src="/images/banner-below-bottombg-Photoroom.png"
      alt="Corner Icon"
      width={270}
      height={130}
      className="transition-image  hide-on-mobile"
    />
  </div>
  </div>
</div>
<StandoutsPage/>
<TambaramSection />
<LivingExperienceSection />
<PriceConfiguration />

  <div className='div6'>
  <h1 style={{ fontSize: 15, fontWeight: 550 }}>Building The Community That Harmonizes</h1>
  <h1 className="gradient_header2">NATURE AND INNOVATION</h1>
  <div className="golden_bar_wrapper">
    <div className="golden_bar"></div>
    <br /><br />
    <div className="image-right">
    <Image
      src="/images/innovation-bg-Photoroom.png"
      alt="Corner Icon"
      width={310}
      height={100}
      className="transition-image hide-on-mobile"
    />
  </div>
  </div>
  
  <AccordianSection/>
  
</div>
<NatureSection/>
<ManualSlider />
<SixDivLayout/>
 <SchoolInhousePage/>
  
    <ChildFriendlyTownshipPage/>
    <div className="park-section">
        <br />
        <h1 className="gradient_header2">PARK AMENITIES</h1>
        <h1 style={{ fontWeight: 680 , marginLeft : "120px" , marginTop : "20px" }}>RECREATION AND RELAXATION</h1>

        <div className="golden_bar_wrapper">
          <div className="golden_bar"></div>
          <br />
        </div>
      </div>
  <ParkSelector />
  
  
  <LifestylePage/> 
     <HalfSlider/>
  <BlendPage/>
  <MapAccordionSection/>
  <FeatureLayout/>
  <div id="contact">
  <ConnectPage/>
  </div>
  <FooterLayout/>
    {/* Floating Button opens the modal */}
    <FloatingButton />

      <FooterForm />
    </>
  );
}
