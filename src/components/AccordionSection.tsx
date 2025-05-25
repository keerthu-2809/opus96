'use client';

import { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  {
    title: 'Innovative Bhungroo Wells',
    image: '/images/acco-img01.png',
    description:
      'Urbanrise introduces Bhungroo Wells at Opus96, capturing and storing excess rainwater to ensure a reliable water source year-round and provide essential water security.',
  },
  {
    title: 'Perpetual Wells For Recharging The Water Table',
    image: '/images/acco-img02.png',
    description:
      'Opus96 introduces soon-to-be-patented Perpetual Well technology. These wells recharge the water table through deep horizontal bores, ensuring a reliable water supply for residents during scarcity.',
  },
  {
    title: '43 Acres Of Lushness',
    image: '/images/acco-img03.jpg',
    description:
      'The plotted development covers 43 of the total 96 acres, surrounded by abundant greenery that creates a verdant, carpet-like environment.',
  },
  {
    title: 'Raised Soil Levels',
    image: '/images/acco-img05.jpg',
    description:
      'To enhance flood protection, soil throughout the township is raised by up to 5 feet, keeping the premises elevated above the rest of Tambaram.',
  },
  {
    title: 'Storm Water Drains To Prevent Floods',
    image: '/images/acco-img06.jpg',
    description:
      'Opus96 features stormwater drains that efficiently manage rainwater, preventing flooding and waterlogging by channeling excess water into reservoirs and recharge wells.',
  },
  {
    title: 'Rainwater Harvesting',
    image: '/images/acco-img07.jpg',
    description:
      'Our rainwater harvesting system maximizes resource efficiency by capturing and storing rainwater. This approach ensures a reliable supply, reduces utility costs, and promotes responsible water management.',
  },
];

export default function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container2">
      <div className="accordion-left">
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
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="accordion-right1">
        {activeIndex !== null && (
          <img
            src={accordionData[activeIndex].image}
            alt="accordion-preview"
            className="accordion-image"
          />
        )}
      </div>
      
    </div>
  );
}
