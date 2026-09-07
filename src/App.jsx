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
import useScrollReveal from './hooks/useScrollReveal.js';
import useScrollSpy from './hooks/useScrollSpy.js';

export default function App() {
  useScrollReveal();
  useScrollSpy();

  return (
    <>
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
