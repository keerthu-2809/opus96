'use client';

import React from 'react';
import Image from 'next/image';
import './NatureSection.css'; // Link to the CSS file

const NatureSection = () => {
  return (
    <div className="div7">
    <div className="content-container1">
      {/* LEFT SECTION */}
      <div className="left-section">
        <Image
          className="gifstyle"
          src="/images/opus.gif"
          alt="Animated Feature"
          width={600}
          height={350}
        />
      </div>
  
      {/* RIGHT SECTION */}
      <div className="right-section">
      <div className="h2-with-bar">
        <h1 className="nature-heading">NATURE</h1>
  
       
          <h2 className="subheading">DAILY BLISS OF FRESHNESS AND CALMNESS</h2>
          <div className="golden_bar_wrapper">
            <div className="golden_bar"></div>
          </div>
        </div>
  
        <p className="description">
          Experience nature-inspired urban living at Opus96. Surrounded by lush greenery, vibrant bushes, and 4 sprawling parks across 3 acres...
        </p>
  
        <ul className="features-list">
          <li>Captivating Aroma Garden</li>
          <li>Bewitching Butterfly Garden</li>
          <li>Mystical Maze Garden</li>
          <li>Frangipani Courts</li>
          <li>Magnificent Miyawaki Forest</li>
          <li>Magical Pavilion</li>
        </ul>
      </div>
    </div>
  </div>
  

  );
};

export default NatureSection;
