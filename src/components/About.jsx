import React from 'react';
import { BookOpenIcon, CodeIcon, BriefcaseIcon, CheckIcon } from './Icons';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-charcoal-900/60 border-y border-charcoal-800/80 relative"
      aria-label="About Archana CS"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sage-400 mb-3">
            <span className="w-6 h-[1px] bg-sage-400" aria-hidden="true" />
            <span>Background & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am Archana CS, an Aspiring MERN Stack Developer. With a background completing +2 in Science, I am currently undergoing focused web development training at HACA Techschool to master modern full-stack development.
          </p>
        </div>
        {/* Factual Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Education */}
          <div className="bg-charcoal-850/90 rounded-2xl p-6 sm:p-7 border border-charcoal-750 hover:border-sage-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-sage-400 mb-5 group-hover:bg-sage-600/10 group-hover:border-sage-400/40 transition-colors">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium text-sage-400 uppercase tracking-wider">
                Academic Background
              </span>
              <h3 className="text-xl font-bold text-white mt-1.5 mb-3">
                +2 in Science
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Completed higher secondary education in Science, establishing analytical discipline, methodical reasoning, and systematic problem solving.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <CheckIcon className="w-4 h-4 text-sage-400" />
              <span>Completed</span>
            </div>
          </div>

          {/* Card 2: Training */}
          <div className="bg-charcoal-850/90 rounded-2xl p-6 sm:p-7 border border-charcoal-750 hover:border-sage-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden">
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 bg-sage-500/15 border-b border-l border-sage-500/30 text-sage-300 font-mono text-[11px] px-3 py-1 rounded-bl-xl font-semibold">
              In Progress
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-sage-400 mb-5 group-hover:bg-sage-600/10 group-hover:border-sage-400/40 transition-colors">
                <CodeIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium text-sage-400 uppercase tracking-wider">
                Technical Training
              </span>
              <h3 className="text-xl font-bold text-white mt-1.5 mb-3">
                MERN Stack Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently learning the MERN Stack at <strong className="text-white font-semibold">HACA Techschool</strong>, expanding frontend proficiencies into full-stack JavaScript architecture.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-limeacc-500 animate-pulse" aria-hidden="true" />
              <span>HACA Techschool</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

