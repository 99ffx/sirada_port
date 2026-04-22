import React, { useState } from 'react';
import './Work.css';

const ALL_PROJECTS = [
  {
    id: 1,
    tag: 'UI/UX · Mobile App',
    title: 'Bloom — Wellness App',
    desc: 'End-to-end product design for a mindfulness platform serving 20k+ users across SEA.',
    category: 'uiux',
    art: 'art--1',
    size: 'large',
  },
  {
    id: 2,
    tag: 'Branding',
    title: 'Kura — Brand Identity',
    desc: 'Visual identity for a Japanese–Thai fusion restaurant in Bangkok.',
    category: 'branding',
    art: 'art--2',
    size: 'small',
  },
  {
    id: 3,
    tag: 'Web Design',
    title: 'Soi Studio',
    desc: 'Portfolio site for a Bangkok creative studio, built in Webflow.',
    category: 'uiux',
    art: 'art--3',
    size: 'small',
  },
  {
    id: 4,
    tag: 'Design System',
    title: 'Pacer — Component Library',
    desc: '200+ component design system built for a fintech startup\'s product team.',
    category: 'uiux',
    art: 'art--4',
    size: 'wide',
  },
];

const FILTERS = [
  { label: 'All',      value: 'all' },
  { label: 'UI/UX',   value: 'uiux' },
  { label: 'Branding', value: 'branding' },
];

export default function Work() {
  const [active, setActive] = useState('all');

  const projects = active === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <section className="section" id="work">
      <div className="work__header reveal">
        <div>
          <p className="sec-label">Selected Work</p>
          <h2 className="work__title">
            Recent <em>Projects</em>
          </h2>
        </div>
        <div className="work__filter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`work__filter-btn${active === f.value ? ' active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work__grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`work__card work__card--${p.size} reveal reveal--d${Math.min(i, 3)}`}
          >
            <div className={`work__art ${p.art}`} aria-hidden="true">
              <span className="work__art-num">0{p.id}</span>
            </div>
            <div className="work__overlay">
              <p className="work__overlay-tag">{p.tag}</p>
              <h3 className="work__overlay-title">{p.title}</h3>
              <p className="work__overlay-desc">{p.desc}</p>
              <span className="work__overlay-link">View Project →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
