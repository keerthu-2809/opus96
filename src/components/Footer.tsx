import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [isPrivacyVisible, setPrivacyVisible] = useState(false);
  const [isTermsVisible, setTermsVisible] = useState(false);

  const togglePrivacy = () => setPrivacyVisible(!isPrivacyVisible);
  const toggleTerms = () => setTermsVisible(!isTermsVisible);

  return (
    <footer className="footer">

      <div className="footer-social-container">
        <div className="footer-social-icons">
          <a
            href="https://www.instagram.com/urbanrise.offl?igsh=MW5raDd5eTY1azI3ZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a href="mailto:urbanriseopus96@gmail.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              className="social-icon"
            />
          </a>
          <a
            href="https://wa.me/qr/RHF5QPC2J37CA1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565797633036&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <span onClick={togglePrivacy} className="footer-link">Privacy Policy</span>
        <span className="footer-separator">|</span>
        <span onClick={toggleTerms} className="footer-link">Terms of Service</span>
      </div>

      {isPrivacyVisible && (
        <div className="modal-overlay">
          <div className="modal-content1">
            <h2>Privacy Policy</h2>
            <p>At Urbanriseopus96, accessible from urbanriseopus96.site...</p>
            <button onClick={togglePrivacy} className="modal-close-button">Close</button>
          </div>
        </div>
      )}

      {isTermsVisible && (
        <div className="modal-overlay">
          <div className="modal-content1">
            <h2>Terms of Service</h2>
            <p>You can choose to disable cookies...</p>
            <button onClick={toggleTerms} className="modal-close-button">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
