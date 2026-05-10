import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecentWork.css';

const PROJECTS = [
  {
    id: 'bloom',
    num: '01',
    tag: 'UI/UX · Mobile App',
    title: 'Bloom — Wellness App',
    titleEm: 'Wellness App',
    titleLead: 'Bloom — ',
    sub: 'A mindfulness platform for slow mornings.',
    art: 'art-bloom',
    body: [
      'End-to-end product design for a mindfulness platform serving 20k+ users across SEA. Sessions are guided by the moon\'s phase and the user\'s sleep rhythm — a slow, seasonal take on a category usually defined by streaks and notifications.',
      'Led the redesign from research through component library. Doubled 7-day retention and reduced session abandonment by 38%.',
    ],
    meta: { Role: 'Lead Product Designer', Year: '2025', Client: 'Bloom Co.' },
    pills: ['Research', 'UI Design', 'Prototype', 'iOS · Android'],
    flip: false, dark: false, alt: false,
    divider: '✦ ◯ ✦',
  },
  {
    id: 'kura',
    num: '02',
    tag: 'Branding',
    titleLead: 'Kura — ',
    titleEm: 'Brand Identity',
    sub: 'Japanese–Thai fusion, told through type.',
    art: 'art-kura',
    body: [
      'Visual identity for a Japanese–Thai fusion restaurant in Bangkok\'s Ekkamai district. The mark is a stylised full moon over a rice paddy — one symbol, two cultures, sitting comfortably side by side.',
      'Delivered logo system, custom typography, packaging, menu, and wayfinding. Featured in Brand New 2024.',
    ],
    meta: { Role: 'Brand Designer', Year: '2024', Client: 'Kura Restaurant' },
    pills: ['Identity', 'Type Design', 'Packaging', 'Wayfinding'],
    flip: true, dark: false, alt: true,
    divider: '✦ ◐ ✦',
  },
  {
    id: 'soi',
    num: '03',
    tag: 'Web Design',
    titleLead: 'Soi ',
    titleEm: 'Studio',
    sub: 'A portfolio for a Bangkok creative studio.',
    art: 'art-soi',
    body: [
      'A portfolio site for a Bangkok creative studio working in motion and installation art. Built in Webflow with custom GSAP scenes — every section is a small stage with its own light and pace.',
      'Site received an Awwwards Honorable Mention and a CSS Design Awards Special Kudos in 2024.',
    ],
    meta: { Role: 'Designer · Developer', Year: '2024', Client: 'Soi Studio' },
    pills: ['UI Design', 'Webflow', 'GSAP', 'CMS'],
    flip: false, dark: true, alt: false,
    divider: '✦ ☾ ✦',
  },
  {
    id: 'pacer',
    num: '04',
    tag: 'Design System',
    titleLead: 'Pacer — ',
    titleEm: 'Component Library',
    sub: '200+ components, one shared sun.',
    art: 'art-pacer',
    body: [
      'A 200+ component design system built for a fintech startup\'s product team. Tokens, primitives, patterns, and documentation — all orbiting a single source of truth that survived two product pivots.',
      'Onboarded six designers and reduced average screen-design time by 60%. Now the foundation for three internal products.',
    ],
    meta: { Role: 'Design Systems Lead', Year: '2025', Client: 'Pacer (in-house)' },
    pills: ['Design Tokens', 'Figma Library', 'Documentation', 'Governance'],
    flip: true, dark: false, alt: false,
    divider: null,
  },
];

export default function RecentWork() {
  const starsRef = useRef(null);
  useEffect(() => {
    const el = starsRef.current;
    if (!el || el.children.length) return;
    for (let i = 0; i < 40; i++) {
      const s = document.createElement('i');
      const sz = Math.random() * 1.5 + 0.5;
      s.style.width = s.style.height = sz + 'px';
      s.style.left = Math.random() * 100 + '%';
      s.style.top  = Math.random() * 100 + '%';
      el.appendChild(s);
    }
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="page-head__rings"><span /><span /></div>
        <div className="page-head__moon" aria-hidden="true" />
        <div className="page-head__inner">
          <p className="page-head__crumb">
            <Link to="/">Sirada</Link>
            <span className="sep">/</span>
            <span>Recent Work</span>
          </p>
          <h1 className="page-head__title">A field guide to <em>recent orbits.</em></h1>
          <p className="page-head__intro">
            Four projects across UI/UX, branding, and systems work — each with its own
            gravity, its own seasons. Scroll through, or jump to one below.
          </p>
        </div>
      </header>

      <nav className="toc" aria-label="Project list">
        <div className="toc__stars" ref={starsRef} aria-hidden="true" />
        <div className="toc__inner">
          <p className="toc__label">Jump to a project</p>
          <div className="toc__list">
            {PROJECTS.map(p => (
              <a key={p.id} className="toc__item" href={`#${p.id}`}>
                <span>{p.num}</span> {p.titleLead.replace(/—\s*$/, '').trim() || p.titleEm}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {PROJECTS.map(p => (
        <React.Fragment key={p.id}>
          <section
            id={p.id}
            className={`project${p.alt ? ' project--alt' : ''}${p.dark ? ' project--dark' : ''}${p.flip ? ' project--flip' : ''}`}
          >
            <div className="project__inner">
              <div className="project__art">
                <div className={p.art} aria-hidden="true" />
                <span className="project__art-num">
                  {p.num}<small>{p.tag}</small>
                </span>
                <span className="project__art-strip">
                  <span>img · {p.id}-cover-01.png</span>
                  <span>{p.meta.Year} · 4:5</span>
                </span>
              </div>
              <div className="project__body">
                <span className="project__tag">{p.tag}</span>
                <h2 className="project__title">{p.titleLead}<em>{p.titleEm}</em></h2>
                <p className="project__sub">{p.sub}</p>
                {p.body.map((b, i) => <p key={i} className="project__desc">{b}</p>)}
                <dl className="project__meta">
                  {Object.entries(p.meta).map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <div className="project__pills">
                  {p.pills.map(pill => <span key={pill} className="pill">{pill}</span>)}
                </div>
                <div className="project__cta">
                  <a href="#" className="btn btn--fill">View case study →</a>
                  <a href="#" className="btn">Live preview ↗</a>
                </div>
              </div>
            </div>
          </section>
          {p.divider && (
            <div className="div-star" aria-hidden="true">
              <span>{p.divider}</span>
            </div>
          )}
        </React.Fragment>
      ))}

      <section className="endstrip">
        <div className="endstrip__sun" aria-hidden="true" />
        <div className="endstrip__inner">
          <p className="endstrip__small">end of the orbit</p>
          <h2 className="endstrip__h">Want to see what's <em>next?</em></h2>
          <div className="endstrip__row">
            <a href="/#contact" className="btn btn--fill">Say hello →</a>
            <Link to="/" className="btn">← Back to home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
