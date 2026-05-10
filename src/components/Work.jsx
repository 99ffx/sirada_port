import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

const ALL_PROJECTS = [
  {
    id: 1, slug: 'HR',
    tag: 'Power Automate - 2026',
    title: 'Automated Candidate Screening System',
    category: 'powerplatform', art: 'art--1', size: 'large',
  },
  {
    id: 2, slug: 'bills',
    tag: 'Power Automate and Power Apps - 2026',
    title: 'Hospital Bill OCR Verification System',
    category: 'powerplatform', art: 'art--2', size: 'small',
  },
  {
    id: 3, slug: 'dress',
    tag: 'Medical Image Analysis - 2025',
    title: 'Automated Detection of DRESS Syndrome',
    category: 'ai', art: 'art--3', size: 'small',
  },
  {
    id: 4, slug: 'colorectal',
    tag: 'Medical Image Analysis - 2024',
    title: 'Multiclass Classification and Semantic Segmentation of Colorectal Cancer Cells from Histopathology Images',
    category: 'ai', art: 'art--4', size: 'wide',
  },
];

const FILTERS = [
  { label: 'All',      value: 'all' },
  { label: 'Power Platform',    value: 'powerplatform' },
  { label: 'AI', value: 'ai' },
];

export default function Work() {
  const [active, setActive] = useState('all');
  const projects = active === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category.includes(active));

console.log('active:', active);
console.log('matches:', ALL_PROJECTS.filter(p => p.category === active).map(p => p.title));
console.log('all categories in data:', [...new Set(ALL_PROJECTS.map(p => p.category))]);

  return (
    <section className="section section--cream" id="work">
      <p className="sec-label">Selected Work · 02</p>
      <div className="work__header reveal">
        <h2 className="work__title">Recent <em>Projects</em></h2>
        <div className="work__filter" role="group" aria-label="Filter projects">
          {FILTERS.map(f => (
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
          <Link
            key={p.id}
            to={`/work#${p.slug}`}
            className={`work__card work__card--${p.size}`}
          >
            <div className={`work__art ${p.art}`} aria-hidden="true">
              <span className="work__art-num">0{p.id}</span>
            </div>
            <div className="work__meta">
              <div>
                <p className="work__tag">{p.tag}</p>
                <p className="work__name">{p.title}</p>
              </div>
              <span className="work__arrow">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
