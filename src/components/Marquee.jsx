import React from 'react';
import './Marquee.css';

const ITEMS = [
  'Deep Learning', 'Machine Learning', 'Medical Image Analysis', 'Front-End Development',
  'Microsoft Power Platform', 'Designing', 'UX/UI'
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {all.map((item, i) => (
          <React.Fragment key={i}>
            <span className="marquee__item">{item}</span>
            <span className="marquee__star">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
