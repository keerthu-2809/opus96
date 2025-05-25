// FooterLayout.tsx
import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import "./FooterStyles.css"; // Make sure you import your CSS if using external file

export default function FooterLayout() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <Image
            src="/images/footer_logo.jpg"
            alt="Corner Icon"
            width={320}
            height={320}
            className="transition-image"
          />
        <Footer />
        <div className="footer-links-group">
          <h1>EXPLORE</h1>
          <a href="#about-us">About Us</a>
          <a href="#why-tambaram">Why Tambaram</a>
          <a href="#price-config">Price Configuration</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-address">
          <h1>SITE ADDRESS</h1>
          <p>
            NSPIRE DEVELOPERS LLP (OPUS96) <br />
            Kishkinta Ave, Dharkast Rd,<br />
            Tambaram, Chennai,<br />
            Tamil Nadu 600132
          </p>
        </div>

        <div className="footer-map">
          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.888807629273!2d80.078225!3d12.941608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5e9aeb6a625%3A0xb4a0c65d48f5f560!2sUrbanrise%20Opus%2096!5e0!3m2!1sen!2sin!4v1746099057400!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
