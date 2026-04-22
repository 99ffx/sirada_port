import React from 'react';
import './Stack.css';

const COLS = [
  {
    title: 'Design',
    items: ['Figma','Adobe Illustrator','Adobe Photoshop','Framer','Principle'],
  },
  {
    title: 'Development',
    items: ['HTML / CSS / JS','React','Webflow','Tailwind CSS','GSAP'],
  },
  {
    title: 'Research & PM',
    items: ['Notion','Maze','Hotjar','Linear','Miro'],
  },
];

export default function Stack() {
  return (
    <section className="section section--dark" id="stack">
      <p className="sec-label">My Stack</p>
      <div className="sec-num stack__num" aria-hidden="true">03</div>
      <h2 className="stack__title reveal">
        Tools &amp; technologies<br />I <em>trust daily</em>
      </h2>
      <div className="stack__cols">
        {COLS.map((col, i) => (
          <div key={col.title} className={`reveal reveal--d${i}`}>
            <p className="stack__col-title">{col.title}</p>
            <ul className="stack__items">
              {col.items.map((item) => (
                <li key={item} className="stack__item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
