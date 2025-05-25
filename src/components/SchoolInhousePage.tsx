
import Image from 'next/image';
import './SchoolInhousePage.css'; // Adjust if your CSS is located elsewhere

export default function SchoolInhousePage() {
  return (
    <div className="content-container">
      <div className="div4">
        <br /><br /><br /><br />
        <h1 className="gradient_header2">A CBSC SCHOOL INHOUSE</h1>
        <h1 style={{ fontWeight: 680 }}>FOR QUALITY EDUCATION</h1>

        <div className="golden_bar_wrapper">
          <div className="golden_bar"></div>
          <br />
        </div>

        <br /><br />

        <p style={{ fontWeight: 400 }}>
          A distinguished CBSE school is coming up within the confines of Opus96
        </p>
        <br />
        <p style={{ fontWeight: 400 }}>
          which means students can quality education without stepping out.
        </p>
      </div>
      <div>
        <Image
          src="/images/card8.jpg"
          alt="Right Image"
          width={500}
          height={150}
          className="transition-image"
        />
      </div>
    </div>
  );
}
