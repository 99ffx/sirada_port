import React, { useEffect, useRef } from 'react';
import './Stack.css';

/* Each tool is placed by polar position on its orbit ring.
   left/top % are computed from the orbit container box. */
const NODES = [
  // Inner ring — DESIGN
  { name: 'Figma',    sub: 'design', ring: 'gold', left: 50, top: 29 },
  { name: 'Illustr.', sub: 'design', ring: 'gold', left: 71, top: 50 },
  { name: 'Photoshop',sub: 'design', ring: 'gold', left: 50, top: 71 },
  { name: 'Framer',   sub: 'proto',  ring: 'gold', left: 29, top: 50 },
  // Middle ring — DEV
  { name: 'React',    sub: 'dev',    ring: '',     left: 79, top: 25 },
  { name: 'HTML/CSS', sub: 'dev',    ring: '',     left: 82, top: 70 },
  { name: 'Webflow',  sub: 'dev',    ring: '',     left: 50, top: 88 },
  { name: 'Tailwind', sub: 'dev',    ring: '',     left: 18, top: 70 },
  { name: 'GSAP',     sub: 'motion', ring: '',     left: 21, top: 25 },
  // Outer ring — PM
  { name: 'Notion',   sub: 'plan',     ring: '', left: 50, top: 6  },
  { name: 'Maze',     sub: 'research', ring: '', left: 94, top: 50 },
  { name: 'Linear',   sub: 'plan',     ring: '', left: 50, top: 96 },
  { name: 'Miro',     sub: 'research', ring: '', left: 6,  top: 50 },
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
          Tools &amp; technologies<br />I <em>trust daily</em>
        </h2>
        <p className="stack__intro reveal reveal--d1">
          Each tool orbits its purpose. Closer to the sun: the daily craft.
          Further out: the supporting cast — research, planning, and the
          seasonal experiments.
        </p>
      </div>

      <div className="orbit reveal reveal--d2">
        <div className="orbit__ring orbit__ring--1" />
        <div className="orbit__ring orbit__ring--2" />
        <div className="orbit__ring orbit__ring--3" />
        <div className="orbit__ring orbit__ring--4" />

        <div className="orbit__core"><span>craft</span></div>

        {NODES.map(n => (
          <div
            key={n.name}
            className={`node ${n.ring === 'gold' ? 'node--gold' : ''}`}
            style={{ left: `${n.left}%`, top: `${n.top}%` }}
          >
            <span className="node__icon">
              {n.name}
              <small>{n.sub}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="stack__legend reveal reveal--d3">
        <div className="stack__legend-item">
          <span className="glyph solid" />
          <h4>Inner orbit — <em>design</em></h4>
          <p>The everyday tools. Where ideas first take shape — sketching, systems work, the bones of every screen.</p>
        </div>
        <div className="stack__legend-item">
          <span className="glyph" />
          <h4>Middle orbit — <em>development</em></h4>
          <p>The bridge between design and product. Comfortable in code, fluent in motion, allergic to broken handoffs.</p>
        </div>
        <div className="stack__legend-item">
          <span className="glyph dashed" />
          <h4>Outer orbit — <em>research &amp; pm</em></h4>
          <p>Slower, longer arcs. Tools for thinking before doing — interviews, synthesis, roadmaps that hold up.</p>
        </div>
      </div>
    </section>
  );
}
