'use client';

import React from 'react';

const skillCategories = [
  {
    title: 'CAD & Mechanical Design',
    icon: '📐',
    description: 'Computer-aided design, 3D modeling, and mechanical assembly synthesis.',
    skills: [
      'Autodesk Fusion 360',
      'Solid Edge',
      '3D CAD Parametric Modelling',
      'Mechanical Mechanisms & Motion',
      'Basic Simulation & Kinematics Exposure',
    ],
  },
  {
    title: 'Manufacturing & Machining',
    icon: '🏭',
    description: 'Hands-on industrial machining and production workshop practices.',
    skills: [
      'CNC & VMC Machine Exposure (Haas VMC-2)',
      'Conventional Lathe Operations',
      'Turning, Milling, Drilling & Boring',
      'Chamfering, Grinding & Knurling',
      'Manufacturing Process Fundamentals & Workshop Safety',
    ],
  },
  {
    title: 'Automotive Engineering',
    icon: '🚗',
    description: 'Vehicle architecture, testing standards, and compliance procedures.',
    skills: [
      'Commercial Vehicle Homologation Fundamentals',
      'Automotive Standards & Regulations (AIS, CMVR)',
      'Vehicle Systems & Inspection Workflows',
      'Preventive Maintenance & Servicing Exposure',
      'Commercial Vehicle Technical Specifications',
    ],
  },
  {
    title: 'Robotics & Automation',
    icon: '🤖',
    description: 'Robotic mechanisms, compliant systems, and automated handling.',
    skills: [
      'Robotics Fundamentals',
      'Industrial Automation Systems',
      'Soft Robotics & Compliant Grippers',
      'Mechanical Systems for Automation',
    ],
  },
  {
    title: 'Professional & Engineering Mindset',
    icon: '💡',
    description: 'Practical analytical thinking, communication, and collaborative execution.',
    skills: [
      'Practical Engineering Problem-Solving',
      'Multidisciplinary Team Collaboration',
      'Technical Communication & Documentation',
      'Adaptability & Fast On-Site Learning',
      'Leadership & Project Ownership',
    ],
  },
];

const currentlyLearning = [
  { name: 'CATIA V5/3DEXPERIENCE', desc: 'Surfacing & automotive BIW design' },
  { name: 'ANSYS Mechanical', desc: 'Finite Element Analysis (FEA) fundamentals' },
  { name: 'GD&T (ASME Y14.5)', desc: 'Geometric dimensioning and engineering tolerances' },
  { name: 'Advanced Automotive Design', desc: 'Vehicle crashworthiness & lightweighting' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6 border-t border-white/5 bg-dark-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">04 // TECHNICAL COMPETENCIES</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
            Core mechanical competencies developed through academic coursework, industrial training, and active workshop experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="engineering-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl p-2 rounded-lg bg-white/5 border border-white/10">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 font-light mb-6">
                  {category.description}
                </p>

                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-automotive-blue mt-1.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                VERIFIED SKILL GROUP 0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Subsection: Currently Learning */}
        <div className="rounded-2xl p-8 sm:p-10 bg-dark-850/80 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="technical-badge mb-2 inline-block">SKILLS IN PROGRESS</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Currently Learning & Expanding
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-md">
              Actively developing theoretical and hands-on familiarity with industry-standard analysis and tolerancing frameworks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-dark-900 border border-white/5 hover:border-automotive-blue/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-bold text-sm text-white">{item.name}</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
