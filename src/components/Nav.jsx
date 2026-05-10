import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const LINKS = [
  { label: 'About',   href: '/#about' },
  { label: 'Work',    href: '/work' },
  { label: 'Stack',   href: '/#stack' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isWorkPage = pathname.startsWith('/work');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${isWorkPage ? ' nav--solid' : ''}${open ? ' nav--open' : ''}`}>
        <Link to="/" className="nav__logo">Sirada</Link>

        <ul className="nav__links">
          {LINKS.map(l => (
            <li key={l.label}>
              {l.href.startsWith('/#')
                ? <a href={l.href}>{l.label}</a>
                : <Link to={l.href}>{l.label}</Link>}
            </li>
          ))}
        </ul>

        <button
          className="nav__burger"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </button>
      </nav>

      <div className={`nav__mobile${open ? ' nav__mobile--open' : ''}`} aria-hidden={!open}>
        <ul className="nav__mobile-links">
          {LINKS.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              {l.href.startsWith('/#')
                ? <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                : <Link to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>}
            </li>
          ))}
        </ul>
        <p className="nav__mobile-foot">Bangkok, Thailand · 2025–2026</p>
      </div>
    </>
  );
}
