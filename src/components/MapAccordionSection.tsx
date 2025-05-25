'use client';

import { useState } from 'react';
import './MapAccordionSection.css';

const accordionData = [
  {
    title: 'Health care ',
    description: ["Kasthuri Hospital -4.5 kms","Hindu Mission Hospital -5.0 kms","Dr.Agarwals Eye Hospital - 5.0 kms","Annai Arul Hospital - 5.2 kms"],
  },
  {
    title: 'Schools & colleges',
    description: ["RCM High School - 1.5 kms","Shraddha Children's Academy - 2.1 kms","SANS Academy - 2.3 kms","The Lords' International School - 2.5 kms","Sri Chaitanya Techno School - 5.3 kms","Good Earth School - 6.7 kms","Narayana E-Techno School - 6.1 kms","Sri Sairam Engineering College - 4.1 kms","TMG College of Arts and Science - 6.1 kms","Madras Christian College - 6.6 kms","Madha Engineering College - 7.7 kms","Peri Institute of Engineering College - 7.7 kms","Dhanalakshmi Engineering College - 7.8 kms","Madha Medical College & Hospital - 10.3 kms"],
  },
  {
    title: 'Shopping Malls',
    description: ["Aerohub Mall - 13.3 kms","Grand Square Mall - 20.2 kms","Grand Galada Mall - 12.2 kms"],
  }
];

export default function MapAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container" id = "location">
      
      {/* Left Side: Accordion Buttons */}
      <div className="accordion-left1">
      <br /><br /><br /><br />
    <h1 className="gradient_header2">  NEARBY LOCATIONS </h1>
    

    <div className="golden_bar_wrapper">
      <div className="golden_bar"></div>
      <br />
    </div>

    <br /><br />
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header">
              <button
                className={`accordion-button ${activeIndex === index ? 'open' : ''}`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
            </h3>
            {activeIndex === index && (
              <div className="accordion-body">
                <ul>
             {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
                        ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Static Google Map */}
      <div className="accordion-right">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.888807629273!2d80.078225!3d12.941608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5e9aeb6a625%3A0xb4a0c65d48f5f560!2sUrbanrise%20Opus%2096!5e0!3m2!1sen!2sin!4v1746099057400!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
