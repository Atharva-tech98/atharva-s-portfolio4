'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';

const experiences = [
  {
    company: 'Tata Motors',
    position: 'Engineering Intern – Homologation',
    location: 'Pimpri, Pune, Maharashtra, India',
    duration: 'Current Six-Month Internship (2026)',
    status: 'Current Internship',
    image: '/images/tata-motors.jpg',
    imageAlt: 'Tata Motors Commercial Vehicle Facility, Pimpri, Pune',
    overview:
      'Gaining industry exposure in the commercial vehicle homologation department at Tata Motors. Learning how automotive regulations, technical standards, vehicle specifications, and compliance requirements relate to commercial vehicle development.',
    points: [
      'Learning about automotive homologation and regulatory compliance frameworks.',
      'Understanding applicable automotive standards (AIS, CMVR) and vehicle safety regulations.',
      'Exploring commercial vehicle classifications, weight classes, and technical specifications.',
      'Gaining familiarity with engineering documentation, technical dossiers, and compliance requirements.',
      'Understanding how engineering teams coordinate regulatory requirements and vehicle testing.',
    ],
    highlight: 'Significant milestone in automotive engineering & regulatory compliance.',
    tags: ['Automotive Homologation', 'CMVR / AIS Standards', 'Commercial Vehicles', 'Regulatory Compliance', 'Technical Documentation'],
  },
  {
    company: 'Mercedes-Benz Silver Star Workshop',
    position: 'Automotive Service and Maintenance Trainee',
    location: 'Wagholi, Pune, Maharashtra, India',
    duration: 'Two Months',
    status: 'Completed Traineeship',
    image: '/images/mercedes-benz.jpg',
    imageAlt: 'Mercedes-Benz Silver Star Workshop, Wagholi, Pune',
    overview:
      'Gained practical exposure to automotive servicing, vehicle inspection, maintenance procedures, and workshop operations for luxury commercial and passenger automobiles.',
    points: [
      'Exposure to vehicle computer diagnostics and routine maintenance procedures.',
      'Hands-on wheel alignment, balancing, and tyre inspection procedures.',
      'Automotive air-conditioning servicing and refrigerant handling.',
      'Comprehensive vehicle evaluation, fluid changes, and preventive maintenance checks.',
      'Understanding vehicle repair workflows, technician allocation, and workshop operations.',
      'Observing coordination between service advisors, workshop foremen, and technicians.',
    ],
    highlight: 'Practical exposure to premium automotive systems and rigorous workshop workflows.',
    tags: ['Vehicle Diagnostics', 'Wheel Alignment', 'AC Servicing', 'Preventive Maintenance', 'Workshop Workflows'],
  },
  {
    company: 'Ankur Enterprises Ltd.',
    position: 'Manufacturing Intern / Trainee',
    location: 'Pune, Maharashtra, India',
    duration: 'One Month',
    status: 'Completed Internship',
    image: '/images/ankur-vmc.jpg',
    imageAlt: 'Atharva operating Haas VMC-2 Machining Center at Ankur Enterprises',
    overview:
      'Gained hands-on exposure to manufacturing processes and industrial machining operations in a production workshop environment.',
    points: [
      'CNC and VMC machine operation and observation (operating Haas VMC-2 center).',
      'Conventional lathe operations, manual fixtures, and hand press usage.',
      'Practical machining processes: turning, milling, drilling, boring, chamfering, grinding, and knurling.',
      'Understanding industrial machining workflows, part tolerancing, and component manufacturing.',
      'Exposure to shop floor safety, tooling selection, and industrial workshop practices.',
    ],
    highlight: 'Foundational understanding of manufacturing constraints vital for mechanical CAD design.',
    tags: ['Haas VMC-2 Machining', 'CNC & Lathe', 'Turning & Milling', 'Component Fabrication', 'Workshop Practices'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 px-6 border-t border-white/5 bg-dark-900/40">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-start mb-16">
            <div className="technical-badge mb-3">02 // INDUSTRIAL EXPOSURE</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Industrial Experience
            </h2>
            <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
              Hands-on learning through internships at leading automotive manufacturers, specialized luxury workshops, and production machining facilities.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="engineering-card rounded-2xl overflow-hidden border border-white/10 group">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Visual / Image Side */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] bg-dark-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt}
                      fill
                      className="object-cover object-center filter brightness-90 contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent lg:hidden" />
                    
                    {/* Status Overlay Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-md text-[11px] font-mono tracking-wider font-semibold bg-dark-950/80 backdrop-blur-md border border-white/15 text-automotive-light uppercase">
                        {exp.status}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-xs text-slate-300 font-mono bg-dark-950/85 backdrop-blur-md p-2 rounded-lg border border-white/10 hidden sm:block">
                      📍 {exp.location}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Header Details */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-automotive-light transition-colors">
                          {exp.company}
                        </h3>
                        <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="text-base sm:text-lg font-semibold text-automotive-light mb-4">
                        {exp.position}
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                        {exp.overview}
                      </p>

                      {/* Key Responsibilities & Learnings */}
                      <div className="mb-6">
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                          Key Responsibilities & Learning Areas
                        </div>
                        <ul className="space-y-2.5">
                          {exp.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-automotive-blue mt-2 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tags & Significance */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="technical-badge-silver text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
