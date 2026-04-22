import React, { useState, useEffect } from 'react';
import './Nav.css';

const LINKS = ['About', 'Work', 'Stack', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on scroll & track scroll position for bg
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
        <a href="#home" className="nav__logo">Sirada</a>

        {/* Desktop links */}
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`nav__mobile${open ? ' nav__mobile--open' : ''}`} aria-hidden={!open}>
        <ul className="nav__mobile-links">
          {LINKS.map((l, i) => (
            <li key={l} style={{ '--i': i }}>
              <a href={`#${l.toLowerCase()}`} onClick={handleLink}>{l}</a>
            </li>
          ))}
        </ul>
        <p className="nav__mobile-foot">Bangkok, Thailand · 2025–2026</p>
      </div>
    </>
  );
}
