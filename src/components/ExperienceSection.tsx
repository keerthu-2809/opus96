// components/ExperienceSection.tsx
import React from "react";
import Image from "next/image";
import './ExperienceSection.css';

const ExperienceSection: React.FC = () => {
  return (
    <div className="div1" id="about-us">
      <div className="top-left-head">
        <h1>EXPERIENCE THE GRANDEUR OF</h1>
        <div className="gradient_header">
          <h1>URBANRISE</h1>
          <h1>Opus96</h1>
        </div>
        <h1>WHERE LUXURY MEETS</h1>
        <h1>GREEN HARMONY</h1>
        <div className="golden_bar"></div>
      </div>

      <div className="top-right-text">
        <h2 className="experience-text">
          Urbanrise Opus96: The 96-acre luxury township that brings together elegance and serenity. With over 10,000 apartments for sale, 900 villa plots in Tambaram, 8 sprawling green parks, and 4 exclusive clubhouses, every element is designed to offer a refined, pleasurable living experience within this prestigious gated community.
          <br /><br />
          Set apart from the hustle of city life, Urbanrise Opus96 provides a peaceful retreat, where nature takes center stage. The township is meticulously planned to blend convenience with tranquility, ensuring a seamless living experience. Here, you can enjoy a close-knit community that values great taste and a life of grandeur.
          <br /><br />
          At Urbanrise Opus96, the only sound you'll hear is the chirping of birds, making it the perfect balance of luxury, serenity, and scenic beauty.
        </h2>
      </div>

      <div className="image-wrapper image-bottom">
        <Image
          src="/images/experience-img-sm.jpg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
