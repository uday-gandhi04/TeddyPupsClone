import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT } from '../data/siteData';
import { PawNavIcon } from './MascotSvgs';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/puppies', label: 'Puppies' },
  { to: '/happy-families', label: 'Happy families' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Visit & contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`site-header${isHome ? ' site-header--home' : ' site-header--sub'}`}>
        <div className="container header-inner">
          <Link to="/" className="brand-link" aria-label="TeddyPups U.A.E. Home">
            <img src="/brand/logo.png" alt="TeddyPups logo" className="brand-logo-img" />
            <span className="brand-wordmark">TeddyPups</span>
          </Link>

          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.to} className="nav-item">
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                  >
                    <span>{item.label}</span>
                    <span className="nav-link__paw" aria-hidden="true">
                      <PawNavIcon />
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              WhatsApp us
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer${drawerOpen ? ' is-open' : ''}`}
        aria-hidden={!drawerOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div className="mobile-drawer__panel">
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            &times;
          </button>
          <ul className="mobile-drawer__nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </>
  );
}
