import React, { useEffect, useRef } from 'react';
import './Stack.css';

/* Each tool is placed by polar position on its orbit ring.
   left/top % are computed from the orbit container box. */
const NODES = [
  // Inner ring — Programming Language
  { name: 'Python',    sub: 'dev', ring: 'gold', left: 50, top: 29 },
  { name: 'TypeScript', sub: 'dev', ring: 'gold', left: 71, top: 50 },
  { name: 'JavaScript', sub: 'dev', ring: 'gold', left: 50, top: 71 },
  { name: 'HTML/CSS',   sub: 'dev',  ring: 'gold', left: 29, top: 50 },
  // Middle ring — DEV
  { name: 'React',    sub: 'dev',    ring: '',     left: 79, top: 25 },
  { name: 'Angular', sub: 'dev',    ring: '',     left: 82, top: 70 },
  { name: 'Git',  sub: 'dev',    ring: '',     left: 50, top: 88 },
  { name: 'Bash', sub: 'dev',    ring: '',     left: 18, top: 70 },
  { name: 'scikit-learn',     sub: 'dev', ring: '',     left: 21, top: 25 },
  // Outer ring — PM
  { name: 'OpenCV',   sub: 'dev',     ring: '', left: 50, top: 6  },
  { name: 'CNNs',     sub: 'ml', ring: '', left: 94, top: 50 },
  { name: 'nnUNet',   sub: 'plan',     ring: '', left: 50, top: 96 },
  { name: 'NumPy',     sub: 'research', ring: '', left: 6,  top: 50 },
];

export default function Stack() {
  const starsRef = useRef(null);
  useEffect(() => {
    const el = starsRef.current;
    if (!el || el.children.length) return;
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('i');
      const sz = Math.random() * 1.5 + 0.5;
      s.style.width = s.style.height = sz + 'px';
      s.style.left = Math.random() * 100 + '%';
      s.style.top  = Math.random() * 100 + '%';
      el.appendChild(s);
    }
  }, []);

  return (
    <section className="section section--dark stack" id="stack">
      <div className="stack__bg-stars" ref={starsRef} aria-hidden="true" />
      <p className="sec-label">My Stack</p>
      <span className="stack__num" aria-hidden="true">03</span>

      <div className="stack__head">
        <h2 className="stack__title reveal">
          Tools &amp; Technologies<br />I <em>work with</em>
        </h2>
        <p className="stack__intro reveal reveal--d1">
          That powered the projects you just saw, and the ones I’m working on now. My stack is a mix of programming languages, frameworks, and libraries that I use to build web applications, ML/DL projects, and machine learning models.
        </p>
      </div>

      <div className="orbit reveal reveal--d2">
        <div className="orbit__ring orbit__ring--1" />
        <div className="orbit__ring orbit__ring--2" />
        <div className="orbit__ring orbit__ring--3" />
        <div className="orbit__ring orbit__ring--4" />

        <div className="orbit__core"></div>

        {NODES.map(n => (
          <div
            key={n.name}
            className={`node ${n.ring === 'gold' ? 'node--gold' : ''}`}
            style={{ left: `${n.left}%`, top: `${n.top}%` }}
          >
            <span className="node__icon">
              {n.name}
              {/* <small>{n.sub}</small> */}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
