'use client';

import React from 'react';

const milestones = [
  {
    stage: 'Academic Foundation',
    title: 'Mechanical Engineering at MIT ADT University',
    desc: 'Commenced B.Tech in Mechanical Engineering, building a rigorous foundation in mechanics, machine dynamics, and 3D CAD design.',
    tag: 'Foundation',
  },
  {
    stage: 'Machining & Manufacturing',
    title: 'Manufacturing Trainee at Ankur Enterprises Ltd.',
    desc: 'Gained direct workshop experience with Haas VMC-2 centers, manual lathe operations, turning, milling, and precision component fabrication.',
    tag: 'Production Workshop',
  },
  {
    stage: 'Automotive Servicing',
    title: 'Automotive Trainee at Mercedes-Benz Silver Star',
    desc: 'Practiced vehicle diagnostics, wheel alignment, AC servicing, and multi-point preventive maintenance on luxury vehicles.',
    tag: 'Automotive Workshop',
  },
  {
    stage: 'Design & Robotics Projects',
    title: 'Kinetic Facade, Agricultural Weeder & Gripper',
    desc: 'Designed parametric architectural linkages in Fusion 360, built electric weeding mechanisms, and studied compliant soft robotic grippers.',
    tag: 'Applied Engineering',
  },
  {
    stage: 'Advanced Training',
    title: 'Industrial Robotics at Godrej Enterprises Group',
    desc: 'Completed targeted industrial training in robotic manipulators, automated manufacturing cells, and mechatronics control.',
    tag: 'Specialized Automation',
  },
  {
    stage: 'Current Industry Role',
    title: 'Commercial Vehicle Homologation Intern at Tata Motors',
    desc: 'Currently learning automotive regulatory compliance, vehicle homologation standards, technical documentation, and commercial vehicle architectures.',
    tag: 'Active Internship',
  },
];

export function JourneySection() {
  return (
    <section className="relative py-28 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="technical-badge mb-3 inline-block">07 // MILESTONES & GROWTH</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            My Journey So Far
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
            Connecting academic theory, hands-on workshop manufacturing, and automotive industry exposure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12">
          {milestones.map((m, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              {/* Milestone Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-automotive-blue group-hover:border-automotive-light group-hover:scale-125 transition-transform" />

              {/* Stage label (desktop left offset) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right text-xs font-mono text-automotive-light uppercase tracking-wider mb-1 sm:mb-0">
                {m.stage}
              </div>

              {/* Milestone Card */}
              <div className="engineering-card rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-automotive-light transition-colors">
                    {m.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {m.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
