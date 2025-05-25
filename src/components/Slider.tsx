'use client';

import { useState } from 'react';
import './manualslider.css';

const slides = [
  {
    image: '/images/realm.jpg',
    mainTitle : "A HAVEN",
    title: 'OF JOYFUL MOMENTS AND ENDURING MEMORIES',
    subtitle: 'A LUXURY CLUBHOUSE FOR THE YOUNG AND LIVELY',
    description: "This Clubhouse has a state-of-the-art-gym to go from fat to fit. Stretch your muscles in the yoga room. Play TT or just unwind with a book in the library. There's a banquet hall to organise family events as well.",
    points: ['Multi-Purpose Court for Multiple Sports', 'Pump It Up at Our Premium Gym', 'Banquet Hall','Selfie Zone','Little Hall for Little Functions','Sit, Relax, Enjoy at Our Coffee Shop','Snack Out Fast at the Pantry'],
  },
  {
    image: '/images/a-realm-02.jpg',
    mainTitle : "A REALM",
    title: 'of Cherished Moments & Enriching Experiences',
    subtitle: "ELDER-FRIENDLY TOWNSHIP WITH A SENIORS' CLUBHOUSE",
    description: 'Unlike other properties where all that a villa plot holder gets is a plot. Opus96 comes attached with 2 clubhouses for our residents. One for the younger folks. And the other for senior citizens.',
    points: ["Senior Citizens Park", "Lobby", "Yoga Room" , "Walkers' Path", "Library" , "Board Games Room"],
  }
];

export default function ManualSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const isEven = currentIndex % 2 === 0;

  return (
    <div className="slider-container" id="manual-slider">
      <div className={`slide ${isEven ? 'image-left' : 'image-right'}`}>
        <div className="slide-image">
          <img src={slides[currentIndex].image} alt="slide" />
        </div>
        <div className="slide-content">
            <h1 className='gradient_header'>{slides[currentIndex].mainTitle}</h1>
          <h2>{slides[currentIndex].title}</h2>
          <h1>{slides[currentIndex].subtitle}</h1>
          <p>{slides[currentIndex].description}</p>
          <ul>
            {slides[currentIndex].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="slider-buttons">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}
