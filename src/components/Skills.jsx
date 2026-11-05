import React from 'react';
import { LayersIcon, SparklesIcon, CheckIcon } from './Icons';

export default function Skills() {
  const coreSkills = [
    {
      name: 'HTML5',
      category: 'Markup & Structure',
      description: 'Semantic markup, accessible page structure, form elements, and modern web standards.',
      tag: 'Core Skill',
    },
    {
      name: 'CSS3',
      category: 'Styling & Layouts',
      description: 'Responsive design, Flexbox, Grid, custom styling, layout structuring, and animations.',
      tag: 'Core Skill',
    },
    {
      name: 'JavaScript',
      category: 'Interactivity & Logic',
      description: 'Vanilla ES6+ JavaScript, DOM manipulation, state handling, event listeners, and localStorage integration.',
      tag: 'Core Skill',
    },
    {
      name: 'React',
      category: 'UI Library',
      description: 'Component architecture, JSX, props, state hooks, and building single-page modular interfaces.',
      tag: 'Core Skill',
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      aria-label="Technical Skills and Current Learning"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sage-400 mb-3">
            <span className="w-6 h-[1px] bg-sage-400" aria-hidden="true" />
            <span>Technologies & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Learning Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A solid foundation in modern frontend web technologies, complemented by continuous hands-on training in full-stack JavaScript.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-400" aria-hidden="true" />
              <span>Frontend Foundation</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">4 Technologies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-charcoal-900/90 rounded-2xl p-6 border border-charcoal-800 hover:border-sage-500/40 hover:bg-charcoal-850 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sage-950 text-sage-300 border border-sage-800/80">
                      {skill.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {skill.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white group-hover:text-sage-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-800/80 flex items-center gap-2 text-xs text-sage-400 font-mono">
                  <CheckIcon className="w-4 h-4 text-sage-400" />
                  <span>Proficient</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning Highlight Box */}
        <div className="mt-12 bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-500/30 shadow-glow-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-950 border border-sage-500/40 text-sage-300 text-xs font-mono font-medium mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-limeacc-400" />
                <span>Currently Learning • HACA Techschool</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                MERN Stack Development
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                Currently undergoing training in the MERN Stack (MongoDB, Express.js, React, Node.js) at HACA Techschool. While frontend principles and React are in active use, backend technologies (MongoDB, Express, Node.js) are actively in progress as learning coursework and not presented as already mastered skills.
              </p>
            </div>

            {/* MERN Components List */}
            <div className="flex flex-wrap gap-2.5 lg:max-w-xs justify-start lg:justify-end">
              <span className="px-3.5 py-2 rounded-xl bg-charcoal-950/80 border border-charcoal-700 text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                MongoDB (Learning)
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-charcoal-950/80 border border-charcoal-700 text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                Express.js (Learning)
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-charcoal-950/80 border border-sage-600/50 text-sage-300 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-limeacc-500" />
                React (Frontend)
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-charcoal-950/80 border border-charcoal-700 text-slate-300 text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                Node.js (Learning)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
