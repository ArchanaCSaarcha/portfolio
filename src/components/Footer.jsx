import React from 'react';
import { GithubIcon, LinkedinIcon, ArrowDownIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800/80 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-sage-500/30 flex items-center justify-center text-sage-400 font-mono font-bold text-sm">
              A
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm tracking-tight block">
                Archana CS
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Aspiring MERN Stack Developer
              </span>
            </div>
          </div>

          {/* Quick Nav Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400" aria-label="Footer Navigation">
            <a href="/" className="hover:text-sage-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-sage-300 transition-colors">About</a>
            <a href="/skills" className="hover:text-sage-300 transition-colors">Skills</a>
            <a href="/projects" className="hover:text-sage-300 transition-colors">Projects</a>
            <a href="/contact" className="hover:text-sage-300 transition-colors">Contact</a>
          </nav>

          {/* Social Links & Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ArchanaCSaarcha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-400 hover:text-white hover:border-charcoal-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/archana-cs-803884438"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-400 hover:text-white hover:border-charcoal-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-400 font-mono border-l border-charcoal-800 pl-4">
              © {currentYear}
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
