import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import useScrollReveal from './hooks/useScrollReveal';

import Nav from './components/Nav';
import Hero from './components/Hero';
// import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';

/* ─── celestial cursor (rust dot + gold ring, dark-aware) ─── */
function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const cur = ref.current;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my, raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const onEnter = () => cur.classList.add('big');
    const onLeave = () => cur.classList.remove('big');
    const targets = document.querySelectorAll('a, button, .work__card, .comp__card, .node, .toc__item');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const darkSel = '.section--dark, .hero, .marquee, .footer, .toc, .project--dark, .endstrip, .nav';
    const checkDark = () => {
      const els = document.querySelectorAll(darkSel);
      let inDark = false;
      els.forEach(s => {
        const r = s.getBoundingClientRect();
        if (cy >= r.top && cy <= r.bottom) inDark = true;
      });
      cur.classList.toggle('dark', inDark);
    };
    const tId = setInterval(checkDark, 80);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(tId);
      document.removeEventListener('mousemove', onMove);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
  return <div className="cursor" ref={ref} aria-hidden="true" />;
}

/* scroll-to-anchor when navigating with hash (e.g. /work#kura) */
function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);
  return null;
}

function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      {/* <Marquee /> */}
      <About />
      <div className="divider" />
      <Work />
      <Stack />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Nav />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<RecentWork />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
