'use client';

import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  software?: string;
  summary: string;
  tags: string[];
  icon: string;
  overview: string;
  problemStatement: string;
  objective: string;
  myContribution: string[];
  designApproach: string;
  challengesSolutions: string;
  keyLearnings: string[];
  specsPlaceholders: string[];
}

const projectsData: Project[] = [
  {
    id: 'urjastrot-biomass',
    title: 'Urjastrot – Biomass Pellet Manufacturing Machine',
    category: 'Mechanical Design | Manufacturing | Sustainable Energy',
    software: 'Mechanical Design & Fabrication Planning',
    icon: '🌿',
    summary:
      'A dedicated machine engineered for manufacturing densified biomass fuel pellets, bridging mechanical compression systems, die extrusion, and sustainable alternative energy processes.',
    tags: ['Biomass Pelleting', 'Die Extrusion', 'Sustainable Fuel', 'Mechanical Systems'],
    overview:
      'A comprehensive engineering project focused on developing a machine for manufacturing high-density biomass fuel pellets. The system connects mechanical compression and extrusion systems with sustainable manufacturing processes to convert agricultural waste biomass into clean, high-efficiency fuel resources.',
    problemStatement:
      'Agricultural crop residue and biomass are frequently incinerated as waste, causing immense air pollution while high-cost fossil fuels continue to drive industrial boilers.',
    objective:
      'Design a robust mechanical extrusion and die system capable of compressing loose agricultural biomass into uniform, high-calorific fuel pellets with optimal mechanical efficiency.',
    myContribution: [
      'Analyzed the mechanical requirements for biomass compression and feeding mechanisms.',
      'Studied die extrusion geometry, roller pressure dynamics, and pellet density constraints.',
      'Investigated power transmission, gearbox torque requirements, and continuous material throughput.',
      'Explored thermal and mechanical binding properties of organic lignin during high-pressure pelleting.',
      'Connected mechanical engineering design principles directly to practical renewable energy applications.',
    ],
    designApproach:
      'Engineered a rotary roller-die assembly optimizing friction-generated thermal binding, compressing loose agricultural biomass into solid cylindrical pellets without external chemical binders.',
    challengesSolutions:
      'Challenge: Excessive die wear and uneven pellet density from varying biomass moisture. Solution: Specified optimized compression ratios and heavy-duty alloy die plates with tailored taper angles.',
    keyLearnings: [
      'High-pressure mechanical extrusion and die design fundamentals.',
      'Material mechanics of biomass and agricultural residue.',
      'Gearbox torque sizing and continuous manufacturing processes.',
      'Design for sustainability and clean-energy applications.',
    ],
    specsPlaceholders: [
      'Biomass Pellet Machine Assembly Drawings [CAD Placeholder]',
      'Die Compression Ratio & Pellet Diameter (mm)',
      'Throughput Capacity (kg/hr) & Motor Rating (HP/kW)',
      'Calorific Value & Pellet Durability Index Records',
    ],
  },
  {
    id: 'kinetic-facade',
    title: 'Kinetic Facade Mechanism',
    category: 'Mechanical Design | CAD Modelling | Mechanism Design',
    software: 'Autodesk Fusion 360',
    icon: '🏢',
    summary:
      'An architectural kinetic facade with articulated triangular frames that adaptively open and close to modulate solar heat gain and daylighting.',
    tags: ['Fusion 360', 'Kinematic Mechanism', 'Sustainable Design', 'CAD Assembly'],
    overview:
      'An academic real-world project exploring a moving architectural facade made of triangular frames that can dynamically open and close. The concept focuses on developing an innovative mechanical arrangement that allows triangular facade elements to actuate and adapt to changing environmental conditions.',
    problemStatement:
      'Modern glass-heavy structures suffer from intense solar heat gain, dramatically increasing building HVAC cooling demands in warm climates.',
    objective:
      'Engineer a mechanical linkage system that can actuate modular triangular louvers to shield direct sunlight while maintaining natural illumination.',
    myContribution: [
      'Created a comprehensive 3D parametric CAD concept using Autodesk Fusion 360.',
      'Explored and synthesized the mechanical linkage required to synchronously open and close the triangular frames.',
      'Studied the mechanical principles of controlling sunlight and heat radiation entering the building envelope.',
      'Explored the potential to reduce cooling demand and energy consumption in hot climates.',
      'Applied rigorous mechanical design and assembly constraints to an architectural engineering application.',
    ],
    designApproach:
      'Leveraged parametric solid modeling in Fusion 360 to establish geometric relationships between the triangular facets and the central pivot actuator, ensuring zero binding during actuation cycles.',
    challengesSolutions:
      'Challenge: Ensuring uniform motion across non-rectangular triangular geometries without interference. Solution: Designed a coordinated multi-bar linkage with dedicated mechanical stops.',
    keyLearnings: [
      'Parametric 3D CAD modeling and multi-body assembly constraints.',
      'Mechanical mechanism synthesis and motion simulation.',
      'Product design thinking applied to real-world structural challenges.',
      'Engineering applications in sustainable, energy-efficient architecture.',
    ],
    specsPlaceholders: [
      'Fusion 360 Assembly & Part Renderings [CAD File Placeholder]',
      'Kinematic Motion Study & Range of Motion (°)',
      'Actuation Mechanism Schematic Drawing',
      'Solar Shading Efficiency & Lux Reduction Estimates',
    ],
  },
  {
    id: 'electric-weeder',
    title: 'Battery-Operated Electric Weeder',
    category: 'Mechanical Design | Electric Drive | Agricultural Engineering',
    software: 'CAD Design & Mechanical Fabrication',
    icon: '🌱',
    summary:
      'A portable, battery-powered agricultural weeder engineered to eliminate manual weeding effort with an integrated anti-tangling reverse mechanism.',
    tags: ['Electric Drive', 'Agricultural Machinery', 'Mechanical Linkages', 'Reverse Motion'],
    overview:
      'An engineering project focused on developing a lightweight battery-operated machine for removing agricultural weeds while drastically reducing strenuous manual physical labor in farm operations.',
    problemStatement:
      'Traditional manual weeding is physically exhausting, slow, and expensive, while large tractor attachments are inaccessible for narrow-crop smallholders.',
    objective:
      'Design an ergonomic, motorized mechanical weeding tool with adequate blade torque, lightweight portability, and a jammed-blade recovery feature.',
    myContribution: [
      'Explored the layout and arrangement of the electric motor, rechargeable battery pack, and rotating cutting mechanism.',
      'Considered motor torque requirements necessary for cutting through root-dense weed clusters.',
      'Included an innovative reverse-motion concept to reverse blade rotation if dense weeds become tangled around the cutting head.',
      'Evaluated operator ergonomics, weight balance, and practical field operating conditions.',
      'Explored how a powered electric mechanism could assist sustainable farming practices.',
    ],
    designApproach:
      'Structured a rigid tubular chassis maintaining balance between motor position and cutting head, preventing operator arm fatigue while maximizing ground blade penetration.',
    challengesSolutions:
      'Challenge: Fibrous weeds jamming rotating cutting blades. Solution: Implemented an electrical and mechanical reverse-drive toggle to quickly unwind wrapped weeds.',
    keyLearnings: [
      'Electric motor torque, power calculation, and selection fundamentals.',
      'Mechanical component integration and lightweight chassis design.',
      'Ergonomics and practical field operating requirements in agriculture.',
      'Practical engineering problem-solving and fail-safe design.',
    ],
    specsPlaceholders: [
      'Prototype Assembly Photographs [Fabrication Placeholder]',
      'Motor Torque (Nm) & RPM Ratings',
      'Battery Pack Voltage, Ah Capacity & Runtime Specifications',
      'Cutting Blade Geometry & Ground Penetration Depth (mm)',
    ],
  },
  {
    id: 'pedal-hacksaw',
    title: 'Pedal-Operated Hacksaw',
    category: 'Mechanical Design | Kinematics | Power Transmission',
    software: 'Mechanism Kinematics & Workshop Fabrication',
    icon: '🚲',
    summary:
      'A human-powered workshop cutting machine converting continuous rotary pedal motion into reciprocating linear hacksaw strokes.',
    tags: ['Kinematics', 'Power Transmission', 'Slider-Crank Mechanism', 'Human-Powered'],
    overview:
      'A mechanical engineering project exploring how human pedal power can be efficiently converted into reciprocating cutting motion to operate a hacksaw without requiring electrical grid power.',
    problemStatement:
      'Cutting metal stock in rural or non-electrified workshops using manual hand hacksaws is slow, uneven, and fatiguing for the worker.',
    objective:
      'Design a bicycle-pedal-driven workshop hacksaw using a crank-and-slotted-lever or slider-crank linkage to deliver steady cutting power.',
    myContribution: [
      'Studied the kinematic conversion of continuous rotary pedal cadence into reciprocating linear cutting strokes.',
      'Explored mechanical linkages, chain-and-sprocket drive ratios, and power transmission efficiency.',
      'Considered mechanical frame rigidity to dampen vibrations during high-cadence sawing.',
      'Gained practical insight into mechanical assembly, bearing alignments, and workshop fabrication constraints.',
    ],
    designApproach:
      'Integrated a heavy flywheel to store rotational momentum during the non-cutting return stroke, delivering a smooth, consistent cutting stroke and reducing operator effort.',
    challengesSolutions:
      'Challenge: Blade buckling during the forward push stroke. Solution: Configured the linkage to exert cutting force on the backward stroke and maintain blade tension.',
    keyLearnings: [
      'Kinematics and machine dynamics fundamentals.',
      'Four-bar and slider-crank linkage design.',
      'Rotary-to-linear motion conversion and mechanical advantage.',
      'Workshop assembly, alignment, and practical machine fabrication.',
    ],
    specsPlaceholders: [
      'Fabricated Machine Photographs [Workshop Placeholder]',
      'Sprocket Gear Ratios & Flywheel Diameter (mm)',
      'Hacksaw Stroke Length & Frequency (Strokes/min)',
      'Detailed Linkage CAD Assembly Blueprint',
    ],
  },
  {
    id: 'soft-robotic-gripper',
    title: 'Load-Carrying Capacity of a Soft Robotic Gripper',
    category: 'Soft Robotics | Mechanical Behaviour | Robotics',
    software: 'Robotics Kinematics & Mechanics Analysis',
    icon: '🤖',
    summary:
      'An engineering study analyzing grasp stability and load-bearing performance of biomimetic soft compliant gripper fingers.',
    tags: ['Soft Robotics', 'Biomimicry', 'Compliant Mechanisms', 'Load Capacity'],
    overview:
      'An engineering study focused on understanding the load-carrying capacity of a soft robotic gripper inspired by the flexible movement, natural compliance, and grasping dexterity of the human hand.',
    problemStatement:
      'Conventional rigid metal robotic grippers often damage delicate, fragile, or irregularly shaped objects during automated pick-and-place operations.',
    objective:
      'Investigate how compliant finger flexibility, surface friction, and geometry determine the maximum load capacity for delicate object manipulation.',
    myContribution: [
      'Studied the mechanical contact interaction between flexible elastomeric gripper fingers and diverse object geometries.',
      'Explored the relationship between finger compliance, contact surface area, and load-carrying capacity.',
      'Investigated critical factors influencing grasp stability, slip prevention, and repeatable object handling.',
      'Explored potential industrial applications in agricultural sorting, fragile logistics, and industrial food automation.',
    ],
    designApproach:
      'Analyzed multi-chambered flexible finger profiles designed to bend upon actuation, conforming naturally around objects without requiring complex feedback sensors.',
    challengesSolutions:
      'Challenge: Balancing structural compliance (flexibility) with high load-carrying capacity without buckling. Solution: Studied finger wall thickness ratios and internal pressure chambers.',
    keyLearnings: [
      'Fundamentals of soft robotics and compliant mechanism design.',
      'Biomimetic gripping mechanics and force distribution analysis.',
      'Mechanical behavior of non-rigid, flexible polymer materials.',
      'Engineering evaluation for industrial automation applications.',
    ],
    specsPlaceholders: [
      'Gripper CAD Model & Finger Chamber Geometry [Design Placeholder]',
      'Tested Payload Capacity (grams/kg) across Object Geometries',
      'Grip Pressure / Actuation Threshold Data',
      'Experimental Grasp Stability Records',
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">03 // ENGINEERING PROJECTS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects Portfolio
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
            Selected engineering projects bridging CAD design, manufacturing systems, agricultural machinery, and mechanism kinematics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="engineering-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header line */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-automotive-blue/50 transition-all duration-300">
                    {project.icon}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-dark-900 px-3 py-1 rounded-md border border-white/5">
                    {project.software || 'Engineering Study'}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-automotive-light mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-automotive-light transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="technical-badge-silver text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button
                  type="button"
                  className="w-full py-3 rounded-lg bg-white/5 hover:bg-automotive-blue/20 text-slate-200 hover:text-white font-medium text-xs tracking-wider uppercase border border-white/10 hover:border-automotive-blue/50 transition-all flex items-center justify-center gap-2 group-hover:border-automotive-blue/40"
                >
                  <span>View Project Specs</span>
                  <svg className="w-3.5 h-3.5 text-automotive-light group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Drawer with smooth entrance animation */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-dark-900 border border-white/15 rounded-2xl p-6 sm:p-10 overflow-y-auto shadow-2xl animate-slide-up">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Project Details"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-8">
                <div className="technical-badge mb-2">{selectedProject.category}</div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {selectedProject.title}
                </h3>
                {selectedProject.software && (
                  <div className="text-sm font-mono text-automotive-light">
                    Tools & Technologies: {selectedProject.software}
                  </div>
                )}
              </div>

              {/* Project Body */}
              <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {/* Overview */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-automotive-blue" />
                    Project Overview
                  </h4>
                  <p>{selectedProject.overview}</p>
                </div>

                {/* Problem & Objective Grid */}
                <div className="grid sm:grid-cols-2 gap-6 p-5 rounded-xl bg-dark-850 border border-white/5">
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-1">
                      Problem Statement
                    </h5>
                    <p className="text-sm text-slate-300">{selectedProject.problemStatement}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-1">
                      Objective
                    </h5>
                    <p className="text-sm text-slate-300">{selectedProject.objective}</p>
                  </div>
                </div>

                {/* Contribution */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-automotive-blue" />
                    My Contribution & Focus
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.myContribution.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-automotive-light mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design Approach & Challenges */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
                      Design Approach
                    </h4>
                    <p className="text-sm text-slate-300">{selectedProject.designApproach}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
                      Challenges & Solutions
                    </h4>
                    <p className="text-sm text-slate-300">{selectedProject.challengesSolutions}</p>
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-automotive-blue" />
                    Key Learnings
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyLearnings.map((learn, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-dark-850/80 border border-white/5 text-xs text-slate-300">
                        • {learn}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Assets / Placeholders */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
                    Technical Specifications & Verified Records
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.specsPlaceholders.map((spec, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-dark-950 border border-dashed border-white/15 text-xs font-mono text-slate-400 flex items-center gap-2">
                        <span className="text-automotive-blue">📎</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
