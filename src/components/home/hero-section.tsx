'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const typewriterRoles = [
  'Mechanical Engineering Student',
  'Automotive Enthusiast',
  'Aspiring Design Engineer',
  'Homologation Intern @ Tata Motors',
  'CAD & Mechanism Designer',
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting with active drifting pulses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-automotive-blue/15 rounded-full blur-[140px] animate-pulse-subtle" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-sky-600/15 rounded-full blur-[140px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-slate-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-slide-up">
            {/* Status Pill with animated radar ping */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-850/90 border border-white/10 text-xs font-mono text-slate-300 mb-6 shadow-sm hover:border-automotive-blue/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Commercial Vehicle Homologation Intern @ Tata Motors</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Hi, I&apos;m <span className="bg-gradient-to-r from-white via-slate-100 to-automotive-light bg-clip-text text-transparent">Atharva Naikodi.</span>
            </h1>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="min-h-[36px] text-lg sm:text-2xl font-semibold text-automotive-light mb-6 flex items-center gap-1 font-mono">
              <span className="text-slate-400 font-light">&gt;</span>
              <span>{currentText}</span>
              <span className="w-2.5 h-6 bg-automotive-light inline-block animate-pulse ml-0.5" />
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light mb-8">
              I am a final-year Mechanical Engineering student at <strong className="text-white font-medium">MIT ADT University, Pune</strong> (specializing in AI and Robotics), passionate about automotive engineering, mechanical design, manufacturing, and product development.
              <br /><br />
              Through academic projects, hands-on industrial experience, and my internship at <strong className="text-white font-medium">Tata Motors</strong>, I am developing practical engineering knowledge and learning how ideas are transformed into real-world solutions. I enjoy understanding how machines work, exploring vehicle technology, designing mechanical systems, and solving practical engineering problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Button 1: Explore My Projects */}
              <Link
                href="#projects"
                className="shimmer-btn px-6 py-3.5 rounded-lg bg-automotive-blue hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-300 shadow-glow-blue hover:shadow-lg hover:shadow-sky-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore My Projects</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>

              {/* Button 2: Direct Resume Download */}
              <a
                href="/resume.pdf"
                download="Atharva_Naikodi_Resume.pdf"
                className="px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-center group"
              >
                <svg className="w-4 h-4 text-automotive-light group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>

              {/* Button 3: Connect on LinkedIn */}
              <a
                href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.53 7.06c.73-.26 1.23-.69 1.38-1.24L20 11h-5V9.2l4-3.61V11z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Professional Portrait with animated floating badge & rotating tech compass */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Rotating mechanical compass ring in background */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-automotive-blue/25 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border border-dotted border-white/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />

              {/* Floating glow wrapper */}
              <div className="relative animate-float">
                {/* Engineering Blueprint Frame Accents with breathing glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-automotive-blue/30 via-slate-400/20 to-sky-500/30 blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                
                {/* Corner Mechanical Crosshairs */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-automotive-light z-20" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-automotive-light z-20" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-automotive-light z-20" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-automotive-light z-20" />

                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-dark-900 shadow-2xl w-[290px] sm:w-[340px] xl:w-[380px] aspect-[4/5]">
                  <Image
                    src="/images/atharva-profile.jpg"
                    alt="Atharva Sanjay Naikodi - Mechanical Engineering Student"
                    fill
                    priority
                    className="object-cover object-top filter contrast-[1.03] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Lower Gradient & Dynamic Tag */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Class of 2027</div>
                      <div className="text-sm font-bold text-white tracking-wide">MIT ADT University</div>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-automotive-blue/20 border border-automotive-blue/40 text-[10px] font-mono text-automotive-light uppercase font-semibold">
                      AI & Robotics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
