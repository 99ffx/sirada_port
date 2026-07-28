import React from 'react';
import './About.css';

const STATS = [
  { num: 'Master\'s',  label: 'Computer Science, 2025' },
  { num: 'EN/TH', label: 'Bilingual' },
  { num: '3', label: 'Years of Experience' },
];

const COMPETENCIES = [
  { num: 'i.',   icon: '◈', name: 'Microsoft Power Platform',          desc: 'Automated workflow and business apps that can enhance productivity.' },
  { num: 'ii.',  icon: '◎', name: 'Medical Image Analysis',        desc: 'Image processing for medical images such as MRI, CT, X-ray, and WSIs' },
  { num: 'iii.', icon: '⬡', name: 'Deep Learning',     desc: 'Use deep learning for classification, segmentation, and registration across 2D–4D imaging data.' },
  { num: 'iv.',  icon: '◑', name: 'Frontend Development', desc: 'Designing and implementing user interfaces with modern web technologies.' },
];

export default function About() {
  return (
    <section className="section section--cream about" id="about">
      <div className="about__moon" aria-hidden="true" />
      <p className="sec-label">About Me</p>

      <div className="about__grid">
        <div className="about__left reveal">
          <div className="sec-num">01</div>
          <div className="about__stats">
            {STATS.map(s => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-num"><em>{s.num}</em></span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__right reveal reveal--d1">
          {/* <h2 className="about__heading">
            Designing with<br /><em>intention,</em><br />building with care.
          </h2> */}
          <h2 className="about__heading">
            <em>Thoughtful </em> technology,<br />shaped by  <em>curiosity.</em>
          </h2>
          <p className="about__body">
            I’m Sirada, a PhD student in Federated Learning at Linköping University, where my research focuses on deep learning for medical images. My background includes work in medical image analysis and experience as a Power Platform Engineer, and I enjoy building solutions that sit at the intersection of technology, research, and creativity. I’m naturally curious, detail-oriented, and motivated by learning, collaboration, and meaningful impact.
          </p>
          <p className="about__body">
            Outside of work. you usually fidn me exploring creative hobbies like macramé. embroidery, and 35mm film photography.
            I also love cooking and sharing food with friends and family. If you ever looking for a Thai recipe, I'd be happy to share one!</p>
        </div>
      </div>

      <div className="comp__grid reveal reveal--d2">
        {COMPETENCIES.map(c => (
          <div className="comp__card" key={c.name}>
            <span className="comp__num">{c.num}</span>
            <span className="comp__icon" aria-hidden="true">{c.icon}</span>
            <h3 className="comp__name">{c.name}</h3>
            <p className="comp__desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
