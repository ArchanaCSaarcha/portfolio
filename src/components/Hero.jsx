import React from 'react';
import DeveloperAvatar from './DeveloperAvatar';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon, ExternalLinkIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sage-500/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">


            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-200 via-sage-300 to-limeacc-400">Archana</span>.
            </h1>

            {/* Title / Role */}
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-300 font-mono tracking-normal">
              Aspiring MERN Stack Developer
            </h2>

            {/* Short Introduction */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I focus on building clean, user-friendly web experiences while learning the MERN stack. Committed to accessible code, structured layouts, and practical web solutions.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-500 text-charcoal-950 font-bold text-sm sm:text-base transition-all shadow-glow-sage hover:shadow-lg active:scale-95"
              >
                <span>Explore my work</span>
                <ArrowDownIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:aarcha238@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-slate-200 hover:text-white border border-charcoal-700 hover:border-sage-500/50 font-semibold text-sm sm:text-base transition-all active:scale-95"
              >
                <MailIcon className="w-4 h-4 text-sage-400" />
                <span>Email me</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="mt-10 pt-6 border-t border-charcoal-800/80 flex flex-wrap items-center gap-6 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ArchanaCSaarcha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-300 hover:text-white hover:border-sage-500/40 text-xs transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                  <ExternalLinkIcon className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href="https://www.linkedin.com/in/archana-cs-803884438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-slate-300 hover:text-white hover:border-sage-500/40 text-xs transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-300" />
                  <span>LinkedIn</span>
                  <ExternalLinkIcon className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DeveloperAvatar />
          </div>

        </div>
      </div>
    </section>
  );
}
