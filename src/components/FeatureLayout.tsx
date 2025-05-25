import "./feature.css";
import Image from 'next/image';
import { useModal } from "@/app/context/ModalContext";

export default function FeatureLayout() {
  const { openModal } = useModal();
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 50 }}>
      <br /><br />
      <button onClick={openModal} className="six-div-button">About Urbanrise</button>
      <br />
      <h1 className="gradient_header2">LARGEST REAL ESTATE DEVELOPER</h1>
      <h1 style={{ fontWeight: 680 }}>IN SOUTH INDIA</h1>

      <div className="content-wrapper">
  <div className="text-block">
    <div className="golden_bar"></div>
    <p>
      Urbanrise is South India’s largest real estate developer, recognized for its pathbreaking and quality residential projects across South India. Backed by the renowned Alliance Group, Urbanrise has delivered over 22,000+ homes and has 72 million square feet under development. Driven by a passion for growth and sustainability, our projects are not just about creating homes but building communities that foster a sense of belonging. With a commitment to integrity and reliability, Urbanrise ensures timely delivery, meeting and exceeding home buyer expectations.
    </p>
  </div>

  <div className="image-block">
    <Image
      src="/images/pioneers-bg-Photoroom.png"
      alt="Right Image"
      width={400}
      height={400}
    />
  </div>
</div>
      {/* Features Section */}
      <div className="features-section">
        <div className="feature-box">
          <img src="/images/pioneers-icon1.png" alt="Years Icon" />
          <div className="feature-title"><span style={{ color: 'purple' }}>21 Years</span> of Excellence</div>
          <div className="feature-subtext">in the Real Estate Industry</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon2.png" alt="Developer Icon" />
          <div className="feature-title"><span style={{ color: 'olive' }}>South India's Largest</span></div>
          <div className="feature-subtext">Real Estate Developer</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon3.png" alt="Development Icon" />
          <div className="feature-title" style={{ color: 'teal' }}>72 Million sq. ft.</div>
          <div className="feature-subtext">Under Development</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon4.png" alt="Customers Icon" />
          <div className="feature-title" style={{ color: 'seagreen' }}>22,000+</div>
          <div className="feature-subtext">Happy Customers</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon5.png" alt="Cities Icon" />
          <div className="feature-title" style={{ color: 'purple' }}>Presence in</div>
          <div className="feature-subtext">3 Major Cities</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon6.png" alt="Portfolio Icon" />
          <div className="feature-title" style={{ color: 'deeppink' }}>51,000cr</div>
          <div className="feature-subtext">Real Estate Portfolio</div>
        </div>

        <div className="feature-box">
          <img src="/images/pioneers-icon7.png" alt="Funding Icon" />
          <div className="feature-title" style={{ color: 'goldenrod' }}>Projects Funded</div>
          <div className="feature-subtext">By World Leading Financial Institutions</div>
        </div>
      </div>
    </div>
    
  );
}
