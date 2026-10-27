'use client';

import React from 'react';

const academicInterests = [
  { topic: 'Engineering Design & CAD', icon: '📐' },
  { topic: 'Kinematics & Dynamics of Machines', icon: '⚙️' },
  { topic: 'Manufacturing Processes & Metallurgy', icon: '🏭' },
  { topic: 'Automotive Systems & Powertrains', icon: '🏎️' },
  { topic: 'Mechanical Mechanisms & Synthesis', icon: '🔧' },
  { topic: 'Robotics & Industrial Automation', icon: '🤖' },
];

export function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">05 // ACADEMIC BACKGROUND</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Institution Card */}
          <div className="lg:col-span-8 engineering-card rounded-2xl p-6 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-mono text-automotive-light uppercase tracking-widest block mb-1">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  MIT ADT University
                </h3>
              </div>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                2023 – 2027 (Expected)
              </span>
            </div>

            <div className="text-base sm:text-lg font-semibold text-automotive-light mb-2">
              Bachelor of Technology (B.Tech) in Mechanical Engineering
            </div>
            <div className="text-xs font-mono text-slate-400 mb-6">
              📍 Pune, Maharashtra, India
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Pursuing a comprehensive B.Tech curriculum in Mechanical Engineering, with focused technical exploration spanning automotive systems, product development, computer-aided engineering design, manufacturing workflows, and robotics.
            </p>

            {/* Academic Interest Highlights */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
                Core Areas of Academic Interest
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {academicInterests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-dark-900 border border-white/5 flex items-center gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Placeholders for upcoming records */}
            <div className="mt-8 pt-6 border-t border-white/5 grid sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-dark-950 border border-dashed border-white/15 text-xs text-slate-400">
                <span className="font-mono text-automotive-light font-bold block mb-1">Cumulative CGPA</span>
                <span>[Official transcript confirmation in progress]</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-950 border border-dashed border-white/15 text-xs text-slate-400">
                <span className="font-mono text-automotive-light font-bold block mb-1">Key Electives</span>
                <span>Automotive Engineering, Mechatronics, Operations Research</span>
              </div>
            </div>
          </div>

          {/* Academic Journey Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="engineering-card rounded-2xl p-6 sm:p-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-automotive-light mb-4">
                Campus Highlights
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-automotive-blue font-bold">✓</span>
                  <span>Active participation in university mechanical workshops and lab experiments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-automotive-blue font-bold">✓</span>
                  <span>Interdisciplinary projects bridging mechanical design and automation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-automotive-blue font-bold">✓</span>
                  <span>Extracurricular creative excellence (Photography Persona 2025 1st Place).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
