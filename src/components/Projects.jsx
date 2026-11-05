import React, { useState } from 'react';
import { GithubIcon, ExternalLinkIcon, XIcon, CheckIcon } from './Icons';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: 'Cake Shop Website',
      technologies: ['HTML5', 'CSS'],
      techString: 'HTML5 and CSS',
      description:
        'Designed and developed a multi-page cake shop website using HTML5 and CSS. Created an introduction section and an “Our Cakes” page to showcase cake varieties, descriptions, and prices. Used CSS layout techniques to create a clean and structured user interface.',
      githubUrl: 'https://github.com/ArchanaCSaarcha/project-cakes',
      image: '/images/cake-shop.png',
      imageAlt: 'Screenshot of Cake Shop Website showing Sweet Treats Bakery header and About Us section with assorted cakes',
      highlightBadge: 'Multi-Page Website',
    },
    {
      title: 'Habit Tracker',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      techString: 'HTML, CSS, JavaScript, and localStorage',
      description:
        'Built a habit-tracking web application with Add, Edit, and Delete functionality and a calendar-based interface for tracking habits by date. Used localStorage to save habit data so it remains after a page refresh. Designed a clean, responsive user interface.',
      githubUrl: 'https://github.com/ArchanaCSaarcha/Habit-Tracker',
      image: '/images/habit-tracker.png',
      imageAlt: 'Screenshot of Habit Tracker welcome screen showing Small habits, Big changes with an input field and Start Tracking button',
      highlightBadge: 'Interactive Web App',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-charcoal-900/60 border-y border-charcoal-800/80 relative"
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sage-400 mb-3">
            <span className="w-6 h-[1px] bg-sage-400" aria-hidden="true" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Hands-on projects demonstrating frontend architecture, responsive design techniques, and vanilla JavaScript state persistence.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-charcoal-850/90 rounded-3xl border border-charcoal-750 hover:border-sage-500/40 transition-all duration-300 overflow-hidden shadow-lg group grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              
              {/* Project Image Column */}
              <div
                className={`lg:col-span-6 relative bg-charcoal-950/70 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 ${
                  idx % 2 === 1 ? 'lg:order-2 lg:border-l lg:border-charcoal-800' : 'lg:border-r lg:border-charcoal-800'
                }`}
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden border border-charcoal-800 shadow-md group-hover:border-sage-500/30 transition-all cursor-zoom-in"
                  onClick={() => setSelectedImage(project)}
                  title="Click to view full screenshot"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle click to zoom badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-charcoal-950/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-charcoal-700/80 pointer-events-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                    <span>View screenshot</span>
                  </div>
                </div>
              </div>

              {/* Project Content Column */}
              <div
                className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sage-950 text-sage-300 border border-sage-800/80">
                      {project.highlightBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Project 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-sage-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-charcoal-900 text-slate-300 border border-charcoal-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Description (Exact supplied text) */}
                  <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Links / Buttons */}
                <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-wrap items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-sage-600 hover:bg-sage-500 text-charcoal-950 font-bold text-sm transition-all shadow-sm active:scale-95"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Screenshots */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal-900 border border-charcoal-700 rounded-2xl overflow-hidden p-2 sm:p-4 shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-charcoal-800">
              <span className="font-bold text-white text-base">
                {selectedImage.title} — Screenshot Preview
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-charcoal-800 transition-colors"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 overflow-auto max-h-[75vh] rounded-lg">
              <img
                src={selectedImage.image}
                alt={selectedImage.imageAlt}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-3 pt-2 px-2 flex justify-between items-center text-xs text-slate-400 font-mono">
              <span>Technologies: {selectedImage.techString}</span>
              <a
                href={selectedImage.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-400 hover:underline flex items-center gap-1"
              >
                <span>Open GitHub Repository</span>
                <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
