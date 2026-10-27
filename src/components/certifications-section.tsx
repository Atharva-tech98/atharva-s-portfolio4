'use client';

import React from 'react';

const certifications = [
  {
    title: 'Industrial Robotics and Automation Training Program',
    organisation: 'Godrej Enterprises Group',
    date: 'April 2026',
    category: 'Industrial Automation & Robotics',
    skills: ['Industrial Manipulators', 'Automation Systems', 'Safety Standards'],
  },
  {
    title: 'Introduction to Generative AI: Art of the Possible',
    organisation: 'Amazon Web Services (AWS)',
    date: 'December 2025',
    category: 'Applied AI & Cloud',
    skills: ['Generative AI Fundamentals', 'AWS Cloud Services', 'Applied AI Applications'],
  },
  {
    title: 'Fundamentals of Robotics & Industrial Automation',
    organisation: 'L&T EduTech',
    date: 'February 2025',
    category: 'Robotics Engineering',
    skills: ['Robotics Fundamentals', 'Industrial Actuators', 'Mechatronic Systems'],
  },
  {
    title: 'Google Prompting Essentials',
    organisation: 'Google',
    date: 'February 2025',
    category: 'Productivity & AI Prompting',
    skills: ['Prompt Engineering', 'AI Productivity Workflows', 'Problem Structuring'],
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-28 px-6 border-t border-white/5 bg-dark-900/40">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">06 // CREDENTIALS & SPECIALIZED TRAINING</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
            Professional skill certifications verified through industry leaders including Godrej Enterprises, AWS, L&T EduTech, and Google.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="engineering-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-automotive-light">
                    {cert.organisation}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 mb-6 font-light">
                  Focus: {cert.category}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="technical-badge-silver text-[11px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Verified Credential
                </span>
                <span>Direct Verification Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
