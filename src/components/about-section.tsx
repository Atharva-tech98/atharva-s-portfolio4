'use client';

import React from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';

const drivesMeItems = [
  {
    title: 'Vehicular & Mechanical Systems',
    desc: 'Understanding how complex machines, automotive subsystems, and powertrains function under real operating conditions.',
    icon: '⚙️',
  },
  {
    title: 'Practical Engineering Execution',
    desc: 'Turning theoretical mechanics and conceptual designs into tangible, functional engineering solutions.',
    icon: '📐',
  },
  {
    title: 'Real-World Industrial Learning',
    desc: 'Gaining hands-on knowledge on factory floors, automotive workshops, and homologation compliance centers.',
    icon: '🏭',
  },
  {
    title: 'CAD & Design Mastery',
    desc: 'Continuously refining 3D CAD modeling, geometric assemblies, and mechanism kinematics in modern software.',
    icon: '💻',
  },
  {
    title: 'Future Automotive Tech',
    desc: 'Exploring emerging trends in commercial vehicle architecture, regulatory standards, and sustainable mobility.',
    icon: '🚗',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          {/* Section Tag */}
          <div className="flex flex-col items-start mb-12">
            <div className="technical-badge mb-3">01 // PROFILE OVERVIEW</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed font-light text-base sm:text-lg">
            <ScrollReveal delay={100}>
              <p>
                I am <strong className="text-white font-semibold">Atharva Naikodi</strong>, a final-year B.Tech Mechanical Engineering student at <strong className="text-white font-medium">MIT ADT University, Pune</strong> (with specialization in AI and Robotics, expected graduation 2027), with a growing interest in automotive engineering, mechanical design, manufacturing processes, and product development.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                My engineering journey has allowed me to explore both the design and practical sides of mechanical engineering. From developing mechanical projects and working with CAD tools to gaining exposure to vehicle servicing, CNC machining, and automotive industry practices, I enjoy understanding how engineering works in the real world.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                I am currently gaining industrial experience as an intern at <strong className="text-automotive-light font-medium">Tata Motors</strong>, where I am learning about automotive homologation, vehicle regulations, standards, and compliance processes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p>
                My previous experiences at <strong className="text-slate-200 font-medium">Mercedes-Benz Silver Star Workshop</strong> and <strong className="text-slate-200 font-medium">Ankur Enterprises Ltd.</strong> have also helped me understand vehicle maintenance, manufacturing operations, and practical engineering workflows.
              </p>
              <p className="border-l-2 border-automotive-blue/50 pl-4 text-slate-400 italic text-sm sm:text-base mt-4">
                &ldquo;I believe in learning by doing, staying curious, and continuously improving my technical skills. My long-term goal is to build a career in the automotive industry, particularly in automotive design, product development, and mechanical engineering.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          {/* Key Facts / Highlights Card with Hover Elevation */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={250}>
              <div className="engineering-card rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-automotive-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-automotive-blue animate-pulse" />
                  Engineering Snapshot
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 hover:border-automotive-blue/30 transition-all hover:-translate-y-0.5">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Education</div>
                    <div className="font-bold text-white text-sm sm:text-base">B.Tech Mech</div>
                    <div className="text-xs text-slate-500">MIT ADT University</div>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 hover:border-automotive-blue/30 transition-all hover:-translate-y-0.5">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Current Role</div>
                    <div className="font-bold text-white text-sm sm:text-base">Intern</div>
                    <div className="text-xs text-slate-500">Tata Motors</div>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 hover:border-automotive-blue/30 transition-all hover:-translate-y-0.5">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Graduation</div>
                    <div className="font-bold text-white text-sm sm:text-base">2027</div>
                    <div className="text-xs text-slate-500">Class of 2027</div>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 hover:border-automotive-blue/30 transition-all hover:-translate-y-0.5">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Specialization</div>
                    <div className="font-bold text-white text-sm sm:text-base">AI & Robotics</div>
                    <div className="text-xs text-slate-500">B.Tech Honors</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-mono">Core Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="technical-badge">Automotive Systems</span>
                    <span className="technical-badge">CAD Modelling</span>
                    <span className="technical-badge">Vehicle Homologation</span>
                    <span className="technical-badge-silver">Manufacturing</span>
                    <span className="technical-badge-silver">Mechanisms</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Subsection: What Drives Me with Staggered Scroll Animation */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <ScrollReveal>
            <div className="mb-10 text-left">
              <span className="technical-badge-silver mb-2 inline-block">MOTIVATION & CORE PRINCIPLES</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                What Drives Me
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivesMeItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="engineering-card rounded-xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-2xl mb-4 p-2 rounded-lg bg-white/5 w-fit">{item.icon}</div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[11px] text-slate-500">
                    0{index + 1} // ENGINEERING FOCUS
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
