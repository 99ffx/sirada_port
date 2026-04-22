import React from 'react';
import './Contact.css';

const LINKS = [
  { label: 'sirada@email.com', href: 'mailto:sirada@email.com', primary: true },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact__inner">
        <p className="contact__small reveal">Let's work together</p>
        <h2 className="contact__heading reveal reveal--d1">
          Got a project<br /><em>in mind?</em>
        </h2>
        <p className="contact__body reveal reveal--d2">
          I'm currently available for freelance projects, full-time roles, and
          creative collaborations. Reach out — I'd love to hear what you're building.
        </p>
        <div className="contact__links reveal reveal--d3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`contact__link${l.primary ? ' contact__link--primary' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
