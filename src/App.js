import React, { useEffect, useRef } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const cursorRef = useRef(null);
  useScrollReveal();

  useEffect(() => {
    // Only run custom cursor on pointer (non-touch) devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cur = cursorRef.current;
    if (!cur) return;

    const onMove = (e) => {
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
    };

    const onEnter = () => cur.classList.add('big');
    const onLeave = () => cur.classList.remove('big');

    document.addEventListener('mousemove', onMove);

    // Attach hover targets after mount
    const targets = document.querySelectorAll('a, button, .work__card, .comp__card');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <div className="divider" />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}