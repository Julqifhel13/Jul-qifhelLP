import Intro from './components/Intro.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal.js';
import useScrollSpy from './hooks/useScrollSpy.js';

export default function App() {
  useScrollReveal();
  useScrollSpy();

  /**
   * Hold the page at the top on a refresh.
   *
   * index.html already turns off the browser's scroll restoration before
   * first paint, but the card scroller sets its own height once it has
   * measured, and the page growing underneath can shift the position again.
   * This runs after that first layout. An anchor link is left alone.
   */
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    // once more after the layout settles, for the same reason
    const id = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Intro wordmark="Jul-qifhel" />

      <a href="#main" className="skip-link">Skip to content</a>

      <Header />

      <main id="main" className="page-frame">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
