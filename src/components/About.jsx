import React from 'react';
import './About.css';

const STATS = [
  { num: '4+',  label: 'Years Experience' },
  { num: '30+', label: 'Projects Done' },
  { num: '12+', label: 'Happy Clients' },
];

const COMPETENCIES = [
  {
    icon: '◈',
    name: 'UI Design',
    desc: 'Pixel-perfect interfaces built with a systematic eye and editorial flair.',
  },
  {
    icon: '◎',
    name: 'UX Research',
    desc: 'User interviews, usability tests, and data synthesis that inform every decision.',
  },
  {
    icon: '⬡',
    name: 'Design Systems',
    desc: 'Scalable component libraries that keep teams aligned and products consistent.',
  },
  {
    icon: '◑',
    name: 'Motion & Interaction',
    desc: 'Purposeful animation that communicates state, hierarchy, and delight.',
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <p className="sec-label">About Me</p>

      <div className="about__grid">
        {/* Left column */}
        <div className="about__left reveal">
          <div className="sec-num">01</div>
          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="about__right reveal reveal--d1">
          <h2 className="about__heading">
            Designing with<br /><em>intention,</em><br />building with care.
          </h2>
          <p className="about__body">
            I'm Sirada — a UI/UX designer based in Bangkok with a deep love for
            the intersection of cultural identity and digital craft. My work blends
            editorial clarity with warm, human-centred details. I believe great
            design feels inevitable: as if it couldn't have been done any other way.
          </p>
          <p className="about__body">
            When I'm not crafting interfaces I'm exploring typography, collecting
            ceramics, and hunting for the city's best coffee. I'm currently open
            to freelance projects and full-time opportunities.
          </p>
        </div>
      </div>

      {/* Competency cards */}
      <div className="comp__grid reveal reveal--d2">
        {COMPETENCIES.map((c) => (
          <div className="comp__card" key={c.name}>
            <span className="comp__icon" aria-hidden="true">{c.icon}</span>
            <h3 className="comp__name">{c.name}</h3>
            <p className="comp__desc">{c.desc}</p>
            <span className="comp__line" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
