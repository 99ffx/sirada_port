import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const starsRef = useRef(null);

  useEffect(() => {
    const el = starsRef.current;
    if (!el || el.children.length) return;
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('i');
      const sz = Math.random() * 2 + 0.5;
      s.style.width = s.style.height = sz + 'px';
      s.style.left = Math.random() * 100 + '%';
      s.style.top  = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 4) + 's';
      el.appendChild(s);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="stars" ref={starsRef} aria-hidden="true" />
      <div className="rings" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="sun" aria-hidden="true" />

      {/* Rotating badge */}
      {/* <div className="hero__badge" aria-hidden="true">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <defs>
            <path
              id="badge-path"
              d="M55,55 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fill="rgba(245,239,222,.65)"
            fontFamily="var(--font-sans)"
            fontSize="9"
            fontWeight="500"
            letterSpacing="3.5"
          >
            <textPath href="#badge-path">
              AVAILABLE FOR WORK · 2025–2026 · OPEN TO COLLAB ·&nbsp;
            </textPath>
          </text>
        </svg>
        <span className="hero__badge-dot" />
      </div> */}

      <div className="hero__head">
        <p className="hero__eyebrow">Engineering &amp; Creative Mindset</p>
        <p className="hero__coords">
          13.7563° N &nbsp; <em>·</em> &nbsp; 100.5018° E<br />
          BANGKOK <em>·</em> 2025–2026
        </p>
      </div>

      <div className="hero__main">
        <h1 className="hero__name">
          <em>Sirada</em> K .
        </h1>
        <p className="hero__sub"></p>
      </div>

      <div className="hero__bottom">
        <p className="hero__bio">
          A Bangkok-based tech enthusiast with a curious mind and a love for learning, designing, and building things that can make a difference
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn">View Work ↓</a>
          <a href="#contact" className="btn btn--fill">Say Hello</a>
        </div>
      </div>
    </section>
  );
}
