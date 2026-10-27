'use client';

import React from 'react';

const personalInterests = [
  { title: 'Automotive Innovation', desc: 'Analyzing new vehicle technologies, telemetry, and electric architectures.', icon: '🏎️' },
  { title: 'Landscape & Travel Photography', desc: 'Capturing landscapes, architecture, and mechanical aesthetics through the lens.', icon: '📷' },
  { title: 'Exploring New Places', desc: 'Traveling to new terrains, discovering cultures, and broadening perspectives.', icon: '🗺️' },
  { title: 'Practical Fabrication', desc: 'Building mechanical prototypes, experimenting with workshop tools and hardware.', icon: '🔧' },
];

export function BeyondEngineeringSection() {
  return (
    <section className="relative py-28 px-6 border-t border-white/5 bg-dark-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">08 // INTERESTS & ACHIEVEMENTS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Beyond Engineering
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
            Creative pursuits, visual storytelling, and personal passions that complement my analytical engineering foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Achievement: Persona 2025 Photography */}
          <div className="lg:col-span-6 engineering-card rounded-2xl p-6 sm:p-10 flex flex-col justify-between border-automotive-blue/30 shadow-glow-blue">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-6 font-semibold">
                🏆 Verified Achievement
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                First Place — Photography Art Exhibition
              </h3>
              <div className="text-sm font-mono text-automotive-light mb-4">
                Persona 2025 • MIT ADT University, Pune
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                Awarded First Place at the annual university-wide art and cultural exhibition for exceptional visual composition, perspective framing, and light storytelling. Photography sharpens my eye for proportion, detail, and aesthetics in industrial product design.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-dashed border-white/15 text-xs text-slate-400 font-mono">
              📷 [Award Certificate & Exhibition Gallery Photograph Placeholder]
            </div>
          </div>

          {/* Personal Interests Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {personalInterests.map((interest, idx) => (
              <div
                key={idx}
                className="engineering-card rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{interest.icon}</div>
                  <h4 className="font-bold text-white text-base mb-1.5">{interest.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{interest.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  PASSION // 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
