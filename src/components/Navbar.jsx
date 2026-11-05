import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, MailIcon, GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activePage = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase() || 'home';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800/80 shadow-lg shadow-black/20 py-3.5'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded-lg p-1"
            aria-label="Archana CS - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-800 border border-sage-500/30 flex items-center justify-center text-sage-400 font-mono font-bold text-lg group-hover:border-sage-400 group-hover:bg-charcoal-750 transition-all shadow-sm">
              &lt;A/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-100 tracking-tight group-hover:text-sage-300 transition-colors">
                Archana CS
              </span>
              <span className="text-xs text-sage-400/90 font-mono">
                Aspiring MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal-900/60 p-1.5 rounded-full border border-charcoal-800 backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === (link.href === '/' ? 'home' : link.href.slice(1));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isActive
                    ? 'bg-sage-600/30 text-sage-300 border border-sage-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-charcoal-800/60'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Header Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/ArchanaCSaarcha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-charcoal-800 rounded-lg transition-colors border border-charcoal-800 hover:border-charcoal-700"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/archana-cs-803884438"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-charcoal-800 rounded-lg transition-colors border border-charcoal-800 hover:border-charcoal-700"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 hover:bg-sage-500/30 hover:text-white border border-sage-500/40 rounded-lg transition-all"
            >
              <MailIcon className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-charcoal-900 border border-charcoal-800 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-charcoal-800 bg-charcoal-950/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === (link.href === '/' ? 'home' : link.href.slice(1));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                    ? 'bg-sage-600/20 text-sage-300 border border-sage-500/30'
                    : 'text-slate-300 hover:bg-charcoal-900 hover:text-white'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-5 border-t border-charcoal-850 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/ArchanaCSaarcha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-300 hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/archana-cs-803884438"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-300 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-sage-500/20 text-sage-300 border border-sage-500/40 rounded-lg"
            >
              <MailIcon className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
