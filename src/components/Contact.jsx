import React from 'react';
import './Contact.css';

const LINKS = [
  { label: 'p.siradakit@gmail.com', href: 'mailto:p.siradakit@gmail.com', primary: true },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/sirada-kittipaisarnkul-068854224/' },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__moon" aria-hidden="true" />
      <div className="contact__inner">
        <h2 className="contact__heading reveal reveal--d1">
          Let's<br /><em>Connect</em>
        </h2>
        <p className="contact__body reveal reveal--d2">
          I'm always happy to connect with fellow researchers, developers, and anyone
  interested in technology. Feel free to reach out through any of the channels
  below.
          </p>
        <div className="contact__links reveal reveal--d3">
          {LINKS.map(l => (
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
