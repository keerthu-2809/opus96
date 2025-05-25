// components/TambaramSection.tsx
import React from "react";
import Image from "next/image";

const TambaramSection: React.FC = () => {
  return (
    <div className="div3" id="why-tambaram">
      <div className="content-container">
        <div className="text-section">
          <h1>AT THE HEART OF</h1>
          <h2 className="tambaram-heading">TAMBARAM</h2><br />
          <h1>IN THE MIDST OF SERENITY,</h1>
          <h1>CLOSE TO THE PULSE OF THE CITY</h1><br />

          <div style={{ position: "relative", height: "3px", width: "120px", marginBottom: "35px" }}>
            <div className="golden_bar" />
          </div>

          <p>
            Tambaram, Chennai, is a prime location offering a perfect blend of urban convenience and residential tranquility. It provides seamless connectivity to major city hubs and Chennai International Airport, making commuting effortless.
          </p>
          <br /><br />
          <p>
            With prestigious educational institutions, diverse entertainment and shopping options, and top-notch healthcare facilities, Tambaram caters to all lifestyle needs. The area is well-connected through frequent bus services and metro accessibility, ensuring easy access to the Central Business District (CBD) for professionals seeking a balanced and vibrant living experience.
          </p>
        </div>

        <div className="image-section">
          <Image
            src="/images/tambaram-map.jpg"
            alt="Corner Icon"
            width={520}
            height={420}
          />
        </div>
      </div>
    </div>
  );
};

export default TambaramSection;
