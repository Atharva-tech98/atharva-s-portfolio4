'use client';

import React from 'react';
import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-dark-950 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded bg-white/5 border border-automotive-blue/40 flex items-center justify-center font-mono font-bold text-xs text-automotive-light">
                AN
              </div>
              <span className="font-extrabold text-base tracking-wider text-white uppercase">
                Atharva Sanjay Naikodi
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-md">
              Mechanical Engineering B.Tech Student • MIT ADT University, Pune (Class of 2027) • Commercial Vehicle Homologation Intern @ Tata Motors
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#education" className="hover:text-white transition-colors">Education</Link>
            <Link href="#certifications" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Atharva Naikodi. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-automotive-light transition-colors"
            >
              LinkedIn Profile
            </a>
            <a
              href="mailto:atharvanaikodi1@gmail.com"
              className="hover:text-automotive-light transition-colors"
            >
              atharvanaikodi1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
