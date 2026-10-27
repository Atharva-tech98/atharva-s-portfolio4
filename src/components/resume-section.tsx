'use client';

import React, { useState } from 'react';

export function ResumeSection() {
  const [downloadCount, setDownloadCount] = useState(false);

  return (
    <section id="resume" className="relative py-28 px-6 border-t border-white/5 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-automotive-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="technical-badge mb-3 inline-block">09 // PROFESSIONAL CV</div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            My Resume
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Want to know more about my education, technical skills, projects, and industrial experience? Download my latest resume to explore my engineering background and professional journey.
          </p>
        </div>

        {/* Interactive Resume Card & Preview */}
        <div className="engineering-card rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto border border-white/15 bg-dark-900/90 shadow-2xl transition-all duration-300 hover:border-automotive-blue/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            {/* Document icon & specs */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-16 rounded-xl bg-automotive-blue/15 border border-automotive-blue/30 flex flex-col items-center justify-center text-automotive-light flex-shrink-0 shadow-glow-blue group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15z" />
                </svg>
                <span className="text-[9px] font-mono font-bold mt-0.5 uppercase tracking-wider">PDF</span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Atharva_Naikodi_Resume.pdf
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-semibold">
                    ✓ Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  134 KB • B.Tech Mechanical Engineering (AI & Robotics) • Updated 2026/2027
                </p>
              </div>
            </div>

            {/* Quick in-browser preview pill */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-automotive-light hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span>Preview in Browser</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Key Resume Highlights Snippets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-left border-b border-white/10 text-xs">
            <div>
              <div className="font-mono text-slate-500 uppercase">Degree</div>
              <div className="font-semibold text-slate-200 mt-0.5">B.Tech Mechanical</div>
            </div>
            <div>
              <div className="font-mono text-slate-500 uppercase">Specialization</div>
              <div className="font-semibold text-slate-200 mt-0.5">AI & Robotics</div>
            </div>
            <div>
              <div className="font-mono text-slate-500 uppercase">Current Org</div>
              <div className="font-semibold text-slate-200 mt-0.5">Tata Motors</div>
            </div>
            <div>
              <div className="font-mono text-slate-500 uppercase">Primary CAD</div>
              <div className="font-semibold text-slate-200 mt-0.5">Fusion 360 / Solid Edge</div>
            </div>
          </div>

          {/* Action Download Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              download="Atharva_Naikodi_Resume.pdf"
              onClick={() => setDownloadCount(true)}
              className="shimmer-btn w-full sm:w-auto px-8 py-4 rounded-xl bg-automotive-blue hover:bg-sky-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-glow-blue hover:shadow-lg hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download My Resume (PDF)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5 fill-current text-sky-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.53 7.06c.73-.26 1.23-.69 1.38-1.24L20 11h-5V9.2l4-3.61V11z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {downloadCount && (
            <div className="mt-4 text-xs font-mono text-emerald-400 animate-fade-in">
              ✓ Downloading Atharva_Naikodi_Resume.pdf to your system...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
