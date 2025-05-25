
import Image from 'next/image';
import './LifestylePage.css'; // Replace with your actual CSS file path

export default function LifestylePage() {
  return (
    <div className="image-below-slider">
      <Image
        src="/images/lifestylebg-Photoroom.png"
        alt="Corner Icon"
        width={150}
        height={70}
        className="transition-image hide-on-mobile"
      />
      <div style={{ marginBottom: 10, marginRight: -300  , textAlign : 'left'}}>
       
        <h1 className="gradient_header2">EXPERIENCE A LIFESTYLE</h1>
        <h1 className="hea">
          CONNECTED TO NATURE'S GRACE AND CHARM
        </h1>

        <div className="golden_bar_wrapper">
          <div className="golden_bar"></div>
          <br />
        </div>

        <br /><br />

        <p className="para">
          Welcome to a Residence That Combines Your Present Comfort with the Promise of an
        </p>
        <p className="para">
          Inspiring Future, Featuring 125+ World-Class Amenities
        </p>
        <br /><br />
      </div>
    </div>
  );
}
