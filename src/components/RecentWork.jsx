import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecentWork.css';

const PROJECTS = [
  {
    id: 'hr',
    num: '01',
    tag: 'Power Platform',
    titleEm: 'Screening System',
    titleLead: 'AI-Powered Candidate ',
    sub: 'Data Extraction and Workflow Automation for Recruiter',
    body: [
      'Power Automate workflow that integrate with company\'s recruitment system to do CV extraction, grouping, and ranking. The system uses a combination of keyword matching, machine learning algorithms, and custom rules to analyze candidate information and automate the screening process.',
      'This project help decrease the time spent on manual CV screening by 90% and improve the quality of shortlisted candidates, allowing recruiters to focus more on engaging with top talent and less on administrative tasks.',
    ],
    meta: { Role: 'Power Platform Developer', Year: '2026', Client: 'SEC - Thailand' },
    pills: ['Power Automate', 'SharePoint', 'GenAI'],
    flip: false, dark: false, alt: false,
    phase: '●',
  },
  {
    id: 'bills',
    num: '02',
    tag: 'Power Platform',
    titleLead: 'Hospital Bill OCR ',
    titleEm: 'Verification System',
    sub: 'GenAI OCR and Validation Workflow for Healthcare Billing Verification',
    body: [
      'Power Automate and Power Apps solution that automate the verification of hospital bills by extracting data from bill images using GenAI OCR, validating the extracted data against predefined rules and databases, and providing an interface for manual review and approval.',
      'The system helps support internal and external audits, reduces errors, and improves accuracy.'
    ],
    meta: { Role: 'Power Platform Developer', Year: '2026', Client: 'SEC - Thailand' },
    pills: ['Power Automate', 'Power Apps', 'SharePoint', 'GenAI', 'OCR'],
    flip: true, dark: false, alt: true,
    phase: '◕',
  },
  {
    id: 'dress',
    num: '03',
    tag: 'AI',
    titleLead: 'Automated Detection of ',
    titleEm: 'DRESS Syndrome',
    sub: 'Deep learning for histopathology-based diagnosis for Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)',
    body: [
      'Developed an AI-assisted diagnostic pipeline for detecting Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS) from whole-slide histopathology images. The project evaluated Multiple Instance Learning (MIL) architectures with state-of-the-art pathology foundation models to classify tissue samples without requiring pixel-level annotations.',
      'The best-performing model achieved 83% AUC, while attention-based heatmaps provided visual explanations by highlighting tissue regions that contributed most to each prediction, improving the interpretability of the diagnostic process.',
    ],
    meta: { Role: 'Developer', Year: '2025', Client: 'MAIA Master' },
    pills: ['Medical Image Analysis', 'MIL', 'ABMIL', 'WSI'],
    flip: false, dark: true, alt: false,
    phase: '◐'
  },
  {
    id: 'colorectal',
    num: '04',
    tag: 'AI',
    titleLead: 'Colorectal Cancer ',
    titleEm: 'Detection',
    sub: 'Computer-aided diagnosis from histopathology images.',
    body: [
      'Developed and compared three AI pipelines for colorectal cancer analysis using digital histopathology images. The project explored classical image processing, machine learning, and deep learning techniques for tissue segmentation and disease classification.',
      'Experimental results showed that a U-Net model with an EfficientNet-B2 backbone achieved the best segmentation performance (93% Dice score), while the machine learning pipeline reached 83% classification accuracy across six colorectal tissue categories.',
    ],
    meta: { Role: 'Developer', Year: '2025', Client: 'MAIA Master' },
    pills: ['Medical Image Analysis', 'DL', 'Image Processing', 'WSI', 'Colorectal Cancer'],
    flip: true, dark: false, alt: false,
    phase: '○'
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
      s.style.top = Math.random() * 100 + '%';
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
          <h1 className="page-head__title">A glance to my <em>recent projects.</em></h1>
          <p className="page-head__intro">
            Explore a collection of projects in AI, healthcare, and software engineering, from intelligent automation platforms to deep learning models for medical image
            analysis.
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
            {/* <div className="project__inner">
              <div className="project__body"> */}
            <div className="project__glow" aria-hidden="true" />
            <div className="project__inner">
              <div className="project__rail">
                <div className="project__numwrap">
                  <span className="project__num">{p.num}</span>
                  <span className="project__phase" aria-hidden="true">{p.phase}</span>
                </div>
                <hr className="project__rule" />
                <dl className="project__meta">
                  {Object.entries(p.meta).map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <hr className="project__rule" />
                <div className="project__pills">
                  {p.pills.map(pill => <span key={pill} className="pill">{pill}</span>)}
                </div>
              </div>
              <div className="project__body">
                <span className="project__tag">{p.tag}</span>
                <h2 className="project__title">{p.titleLead}<em>{p.titleEm}</em></h2>
                <p className="project__sub">{p.sub}</p>
                {p.body.map((b, i) => <p key={i} className="project__desc">{b}</p>)}
                {/* <dl className="project__meta">
                  {Object.entries(p.meta).map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <div className="project__pills">
                  {p.pills.map(pill => <span key={pill} className="pill">{pill}</span>)}
                </div> */}
              </div>
            </div>
          </section>
          {/* {p.divider && (
            <div className="div-star" aria-hidden="true">
              <span>{p.divider}</span>
            </div>
          )} */}
        </React.Fragment>
      ))}

      <section className="endstrip">
        <div className="endstrip__sun" aria-hidden="true" />
        <div className="endstrip__inner">
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
