import React from 'react';
import './Marquee.css';

const ITEMS = [
  'UI Design', 'UX Research', 'Figma', 'Prototyping',
  'Design Systems', 'Motion Design', 'Brand Identity', 'Front-End',
];

export default function Marquee() {
  // Duplicate so the infinite loop looks seamless
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {all.map((item, i) => (
          <React.Fragment key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
