
import Image from 'next/image';
import './BlendPage.css'; // adjust path as needed

export default function BlendPage() {
  return (
    <div className='div8'>
      <div className="text-section">
        <br /><br />
        <h2 className="tambaram-heading">A PERFECT BLEND</h2><br />
        <h1>OF CONVENIENCE AND TRANQUILITY</h1>
        <div style={{ position: "relative", height: "3px", width: "120px", marginBottom: "35px" }}>
          <div className="golden_bar" />
        </div>
        <p>
          Urbanrise Opus96, in Tambaram, offers unparalleled convenience and connectivity to major hubs in Chennai.
        </p>
        <div className="image-container">
  <Image
    src="/images/blend-img.png"
    alt="Right Image"
    width={500}
    height={180}
    className="blend-image"
  />
</div>
      </div>
    </div>
  );
}
