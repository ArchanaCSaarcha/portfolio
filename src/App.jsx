import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const page = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase() || 'home';
  const pages = {
    home: <Home />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-slate-100 flex flex-col selection:bg-sage-600 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sage-500 text-charcoal-950 font-bold rounded-lg shadow-lg">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">{pages[page] || <Home />}</main>
      <Footer />
    </div>
  );
}
