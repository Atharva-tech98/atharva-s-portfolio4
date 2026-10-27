'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-dark-850 border border-automotive-blue/40 flex items-center justify-center font-mono font-bold text-sm text-automotive-light group-hover:border-automotive-blue group-hover:scale-105 transition-all">
            AN
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm md:text-base tracking-wider text-white uppercase group-hover:text-automotive-light transition-colors">
              Atharva Naikodi
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              Mechanical & Automotive
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Links */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Atharva_Naikodi_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-automotive-blue/15 hover:bg-automotive-blue/25 border border-automotive-blue/30 text-xs font-semibold text-automotive-light hover:text-white transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.53 7.06c.73-.26 1.23-.69 1.38-1.24L20 11h-5V9.2l4-3.61V11z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/98 border-b border-white/10 backdrop-blur-xl px-6 py-6 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Atharva_Naikodi_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-automotive-blue text-white text-xs font-semibold shadow-glow-blue"
              >
                Download Resume (PDF) ↓
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-slate-200 text-xs font-semibold border border-white/10"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
