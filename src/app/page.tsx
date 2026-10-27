import React from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { EducationSection } from '@/components/education-section';
import { CertificationsSection } from '@/components/certifications-section';
import { JourneySection } from '@/components/journey-section';
import { BeyondEngineeringSection } from '@/components/beyond-engineering-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/home/contact-section';
import { FooterSection } from '@/components/footer-section';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-automotive-blue/30 selection:text-white">
      {/* Precision Top Header Navigation */}
      <Header />

      <main className="flex flex-col">
        {/* 01. Hero Section with Profile Photo & Key CTAs */}
        <HeroSection />

        {/* 02. About Me & What Drives Me */}
        <AboutSection />

        {/* 03. Industrial Experience (Tata Motors, Mercedes-Benz, Ankur Enterprises) */}
        <ExperienceSection />

        {/* 04. Engineering Projects Portfolio (Interactive Specs Modal) */}
        <ProjectsSection />

        {/* 05. Technical Competencies & Currently Learning */}
        <SkillsSection />

        {/* 06. Education at MIT ADT University */}
        <EducationSection />

        {/* 07. Industry Certifications (Godrej, AWS, L&T, Google) */}
        <CertificationsSection />

        {/* 08. Visual Engineering Journey Roadmap */}
        <JourneySection />

        {/* 09. Beyond Engineering (Persona 2025 Photography Award) */}
        <BeyondEngineeringSection />

        {/* 10. Download Resume & Credentials */}
        <ResumeSection />

        {/* 11. Let's Connect Contact Form & Details */}
        <ContactSection />
      </main>

      {/* Global Engineering Footer */}
      <FooterSection />
    </div>
  );
}
