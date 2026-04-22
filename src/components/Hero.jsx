import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Rotating badge */}
      <div className="hero__badge" aria-hidden="true">
        <svg viewBox="0 0 110 110" width="110" height="110">
          <defs>
            <path
              id="badge-path"
              d="M55,55 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fill="var(--muted)"
            fontFamily="var(--font-sans)"
            fontSize="9.5"
            fontWeight="500"
            letterSpacing="3.5"
          >
            <textPath href="#badge-path">
              AVAILABLE FOR WORK · 2025–2026 · OPEN TO COLLAB ·&nbsp;
            </textPath>
          </text>
        </svg>
        <span className="hero__badge-dot" />
      </div>

      <p className="hero__eyebrow">UI/UX Designer &amp; Creative</p>

      <h1 className="hero__name">
        <em>Sirada</em>
        <br />
        Wongsri
      </h1>
      <p className="hero__sub">Crafting digital experiences</p>

      <div className="hero__bottom">
        <p className="hero__bio">
          A Bangkok-based UI/UX designer with a passion for thoughtful
          interfaces, meaningful motion, and cross-cultural storytelling
          through design.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn">View Work ↓</a>
          <a href="#contact" className="btn btn--fill">Say Hello</a>
        </div>
      </div>

      <span className="hero__location" aria-hidden="true">
        Bangkok, Thailand · 2025–2026
      </span>
    </section>
  );
}
