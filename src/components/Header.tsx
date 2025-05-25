'use client';
import './header.css';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Image from 'next/image';
import { useModal } from '@/app/context/ModalContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  const handleLinkClick = () => setMenuOpen(false); // closes overlay menu on link click

  return (
    <header className="header">
      <div className="hamburger">
        {/* Left: Hamburger */}
        <button
          style={{ fontSize: '45px' }}
          className="text-white"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>

        {/* Center: Logo */}
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={8}
            className="object-contain"
          />
        </div>

        {/* Right: Buttons */}
        <div className="buttons">
          <button className="phone-button" onClick={() => (window.location.href = 'tel:9360612560')}><PhoneIcon className="icon" />9360612560</button>
          <button onClick={openModal} className="phone-button">Enquire now</button>
        </div>
      </div>

      {/* Overlay Navigation */}
      {menuOpen && (
        <div className="overlay-menu">
          <div className='overlay-grid'>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl close-button"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          {/* Navigation Links */}
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about-us" onClick={handleLinkClick}>About the Project</a>
          <a href="#living-experience" onClick={handleLinkClick}>Unveiling Villa Plots</a>
          <a href="#price-config" onClick={handleLinkClick}>Price Configuration</a>
          <a href="#manual-slider" onClick={handleLinkClick}>Clubhouses</a>
          <a href="#genius-block" onClick={handleLinkClick}>Genius Block</a>
          <a href="#amenities" onClick={handleLinkClick}>Amenities</a>
          <a href="#gallery" onClick={handleLinkClick}>Gallery</a>
          <a href="#location" onClick={handleLinkClick}>Location</a>
        </div>
        </div>
      )}
    </header>
  );
}
