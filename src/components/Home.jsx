import React from 'react';
import Hero from './Hero';

const previews = [
  {
    title: 'About Me',
    href: '/about',
    text: 'I am Archana CS, an aspiring MERN Stack Developer currently training at HACA Techschool. My science background shaped my analytical approach to problem solving.',
    details: ['+2 in Science', 'MERN Stack Training', 'HACA Techschool'],
  },
  {
    title: 'Skills',
    href: '/skills',
    text: 'I build responsive, accessible interfaces and continue developing my full-stack JavaScript skills.',
    details: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    title: 'Projects',
    href: '/projects',
    text: 'A selection of practical web projects, from a multi-page cake shop website to an interactive habit tracker.',
    details: ['Cake Shop Website', 'Habit Tracker'],
  },
  {
    title: 'Contact',
    href: '/contact',
    text: 'Looking for web development opportunities and collaborations. Get in touch to discuss an idea or project.',
    details: ['Email', 'GitHub', 'LinkedIn'],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20 sm:py-24 bg-charcoal-900/60 border-y border-charcoal-800/80" aria-label="Portfolio overview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-sage-400 mb-3">Explore my portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">A little more about my work</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">Scroll through a quick introduction to my background, skills, projects, and ways to connect.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {previews.map((item) => (
              <article key={item.title} className="rounded-2xl p-6 sm:p-8 bg-charcoal-850/90 border border-charcoal-750 hover:border-sage-500/40 transition-colors flex flex-col">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">{item.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} highlights`}>
                  {item.details.map((detail) => <li key={detail} className="px-3 py-1 rounded-full text-xs font-mono text-sage-300 bg-charcoal-900 border border-charcoal-700">{detail}</li>)}
                </ul>
                <a href={item.href} className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sage-600 hover:bg-sage-500 text-charcoal-950 font-bold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-300">
                  Read more <span aria-hidden="true">→</span>
                  <span className="sr-only"> about {item.title}</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
