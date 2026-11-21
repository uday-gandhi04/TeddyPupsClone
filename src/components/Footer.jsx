import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/siteData';
import { LogoBadge, MascotSleeping } from './MascotSvgs';

export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="footer-stars" viewBox="0 0 1200 380" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1080 56 A26 26 0 1 0 1110 92 A20 20 0 1 1 1080 56 Z" fill="#F2B95E" />
        <text x="110" y="60" fill="#F2B95E" fontSize="18">✦</text>
        <text x="340" y="42" fill="#F2B95E" fontSize="13">✦</text>
        <text x="640" y="75" fill="#F2B95E" fontSize="16">✦</text>
        <text x="920" y="48" fill="#F2B95E" fontSize="14">✦</text>
        <text x="1030" y="150" fill="#F2B95E" fontSize="12">✦</text>
        <text x="230" y="210" fill="#F2B95E" fontSize="12">✦</text>
      </svg>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Home, at last.</h2>
            <p>
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering
              premium services and worldwide shipping.
            </p>
            <MascotSleeping />
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><Link to="/puppies">Available puppies</Link></li>
              <li><Link to="/gone-home">Gone home</Link></li>
              <li><Link to="/happy-families">Happy families</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/how-it-works#delivery">Delivery &amp; collection</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Visit &amp; contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Say hello</h3>
            <ul className="footer-contact-list">
              <li>
                <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
            </ul>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-pill">TikTok</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-pill">Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <LogoBadge className="" />
            <span>&copy; 2026 TeddyPups U.A.E.</span>
          </div>
          <div className="footer-tagline">every puppy is family</div>
        </div>
      </div>
    </footer>
  );
}
