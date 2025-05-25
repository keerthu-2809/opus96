'use client';
import Image from 'next/image';
import { useModal } from "@/app/context/ModalContext";
import "./LivingExperienceSection.css";

export default function LivingExperienceSection() {
  const { openModal } = useModal();

  return (
    <>
      {/* First Section - World Class */}
      <section id="living-experience" className="image-text-wrapper">
        <Image
          src="/images/world-class.jpg"
          alt="Corner Icon"
          width={540}
          height={480}
          className="transition-image"
        />

        <div className="div4">
          <h1 className="gradient_header2">
            DISCOVER AN EXTRAORDINARY LIVING EXPERIENCE
          </h1>
          <h1 style={{ fontWeight: 600 }}>WITH OUR PHASE 2 APARTMENTS</h1>
          <div className="golden_bar_wrapper">
            <div className="golden_bar"></div>
            <br />
          </div>
          <ul>
            <li>Over 3,200 apartments designed for modern comfort.</li>
            <li>Configurations include 2BHK + S + 14 floors.</li>
            <li>12 magnificent residential towers with spectacular views.</li>
            <li>Enjoy rooftop amenities and two lush green parks.</li>
            <li>Access to a grand clubhouse for socializing and relaxation.</li>
            <br />
            <p>
              Experience a lifestyle enriched with premium amenities and serene green spaces.
            </p>
          </ul>
        </div>
      </section>

      {/* Second Section - Villa Plots */}
      <section id="villa-plots" className="image-text-wrapper">
        <div className="div4">
          <h1 className="gradient_header2">900 PREMIUM VILLA PLOTS</h1>
          <h1 style={{ fontWeight: 680 }}>OF ALL SIZES OF CLASS</h1>

          <div className="golden_bar_wrapper">
            <div className="golden_bar"></div>
            <br />
          </div>
<br></br>
          <p style={{ fontWeight: 400 }}>
            Owning a plot in Opus96 is a matter of prestige, and we’ve made it accessible to all
            by offering a range of plot sizes. From 600 to 2400 sq. ft., each plot reflects our
            commitment to sustainability, luxury, and comfort. With 4 beautifully landscaped
            parks, 2 state-of-the-art clubhouses, and over 125 amenities, the community is
            designed to enhance leisure and provide a vibrant living experience, offering a
            peaceful escape from the urban hustle.
          </p>

          <button onClick={openModal} className="custom-button">
            Schedule a site visit
          </button>
        </div>

        <Image
          src="/images/villa.jpg"
          alt="Right Image"
          width={560}
          height={300}
          className="transition-image"
        />
      </section>
    </>
  );
}
