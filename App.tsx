import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { FloatingUI } from './components/FloatingUI';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { Regions } from './components/sections/Regions';
import { Story } from './components/sections/Story';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: containerRef.current, // null watches viewport, but since we scroll inside 'main', we might need to target elements. 
        // Note: In standard CSS scroll-snap on the 'html' or 'body', root=null is correct.
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('.stage');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <FloatingUI activeSection={activeSection} />
      
      {/* 
        The scroll container is the body itself in standard generic layout, 
        but often frameworks need a wrapper. 
        The class 'stage-container' in CSS implies simple vertical scroll.
      */}
      <main className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth no-scrollbar" ref={containerRef}>
        <Hero />
        <WhyUs />
        <Regions />
        <Story />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}

export default App;