
import React, { useState } from 'react';
import './standouts.css';

const images = [
  { src: "/images/brochure-sld2.jpg", heading: "CCTV Cameras for 24/7 Monitoring", description: "Keep an eye on your land anytime with strategically placed CCTV cameras.", color: "#ff4c4c" },
  { src: "/images/new-slider-bro-1.jpg", heading: "Rains & Water Logging Resistant", description: "Ground level raised by 5 ft to prevent waterlogging, with stormwater drains for rainwater management. 6 ft RCC compound wall provides protection.", color: "#FF5722" },
  { src: "/images/new-slider-bro-2.jpg", heading: "Plug & Play  Plots With EB & Water Connections ", description: "Every plot includes underground water, EB, and communication connections, ensuring readiness for living post-construction", color: "#2196F3" },
  { src: "/images/new-slider-bro-3.jpg", heading: "Concrete Cement Roads", description: "60 ft wide concrete roads connect apartments, with subsidiary roads of 32 and 23 ft. Roads are lined with mature trees and solar-powered streetlights for safety.", color: "#9C27B0" },
  { src: "/images/brochure-sld3.jpg", heading: "Securing Your Investment", description: "Urbanrise guarantees your property’s exclusivity, protecting it from any", color: "#e91e63" },
  { src: "/images/brochure-sld1.jpg", heading: "Clear Titles, Hassle-Free  Ownership", description: "All land titles are legally vetted by top law firms, ensuring secure and stress-free ownership.", color: "#FFC107" },
  { src: "/images/brochure-sld7.jpg", heading: "Comprehensive Utilities", description: "Electricity and water provisions for all residents.", color: "#00bcd4" }
];

const StandoutsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    
    
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };
    
    const handleNext = () => {
      setCurrentIndex((prev) =>
        prev + 3 < images.length ? prev + 1 : prev
      );
    };

  return (
    <div className="div2">
      <h1>THE DEFINING STANDOUTS OF</h1>
      <div className="gradient_header_with_bar">
        <div className="gradient_header">
          <h1>Opus96</h1>
        </div>
        <div className="golden_bar"></div>
      </div>

      <div className="slider-section">
        <button onClick={handlePrev} className="slider-button">‹‹</button>

        <div className="card-slider-wrapper">
          {images.slice(currentIndex, currentIndex + 4).map((img, i) => (
            <div className="card-slide" key={i}>
              <div className="card-image-container">
                <img src={img.src} alt={img.heading} className="card-slide-image" />
                <div className="card-overlay">
                  <h2 style={{ color: img.color }}>{img.heading}</h2>
                  <p>{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="slider-button">›</button>
      </div>
    </div>
  );
};

export default StandoutsPage;
