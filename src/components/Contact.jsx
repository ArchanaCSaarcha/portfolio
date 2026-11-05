import React, { useState } from 'react';
import { MailIcon, CopyIcon, CheckIcon, GithubIcon, LinkedinIcon, ExternalLinkIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'aarcha238@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      aria-label="Contact Archana CS"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sage-500/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sage-400 mb-3">
            <span className="w-6 h-[1px] bg-sage-400" aria-hidden="true" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build Something Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am currently looking for web development work. Whether you need a responsive multi-page website, a clean frontend interface, or help structuring web pages, I would love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Action Box */}
          <div className="lg:col-span-7 bg-charcoal-900/90 rounded-3xl p-8 sm:p-10 border border-charcoal-750 hover:border-sage-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-950 border border-sage-500/30 text-sage-300 text-xs font-mono font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-limeacc-500" />
                <span>Freelance Inquiries Open</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Send a direct email
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Reach out directly via email to discuss project requirements, timelines, or potential collaboration.
              </p>

              {/* Email Address Display Box with Copy */}
              <div className="mt-8 p-4 rounded-2xl bg-charcoal-950 border border-charcoal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-sage-400">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-sage-300 transition-colors font-mono"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-limeacc-400" />
                      <span className="text-limeacc-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Mailto Button */}
            <div className="mt-8 pt-6 border-t border-charcoal-800/80 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-500 text-charcoal-950 font-bold text-sm sm:text-base transition-all shadow-glow-sage active:scale-95 w-full sm:w-auto"
              >
                <MailIcon className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>
              <span className="text-xs text-slate-400 font-mono">
                Typically responds within 24–48 hours
              </span>
            </div>
          </div>

          {/* Social Profiles Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* GitHub Card */}
            <a
              href="https://github.com/ArchanaCSaarcha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-900/90 rounded-3xl p-6 sm:p-7 border border-charcoal-750 hover:border-sage-500/40 hover:bg-charcoal-850 transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-slate-200 group-hover:text-sage-300 group-hover:border-sage-500/40 transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Code Repositories
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-sage-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <span className="text-xs font-mono text-sage-400 mt-0.5 block">
                    @ArchanaCSaarcha
                  </span>
                </div>
              </div>
              <div className="p-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                <ExternalLinkIcon className="w-5 h-5" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/archana-cs-803884438"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-900/90 rounded-3xl p-6 sm:p-7 border border-charcoal-750 hover:border-sage-500/40 hover:bg-charcoal-850 transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-slate-200 group-hover:text-sage-300 group-hover:border-sage-500/40 transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Professional Network
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-sage-300 transition-colors">
                    LinkedIn Profile
                  </h4>
                  <span className="text-xs font-mono text-sage-400 mt-0.5 block">
                    Archana CS
                  </span>
                </div>
              </div>
              <div className="p-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                <ExternalLinkIcon className="w-5 h-5" />
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
