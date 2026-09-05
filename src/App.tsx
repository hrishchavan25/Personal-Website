/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DevTerminal } from './components/DevTerminal';
import { CopyrightCertificateModal } from './components/CopyrightCertificateModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToResearch = () => {
    const researchElem = document.getElementById('research');
    if (researchElem) {
      researchElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5ff] text-[#1e1035] flex flex-col font-chic selection:bg-purple-300/40 selection:text-purple-950">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleScrollToContact}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenContact={handleScrollToContact}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCertificate={() => setIsCertModalOpen(true)}
        />

        {/* Research Philosophy, Human-Centric Tech & Copyrights */}
        <ResearchSection onOpenCertificate={() => setIsCertModalOpen(true)} />

        {/* Featured Projects & Software Systems */}
        <ProjectsSection onOpenCertificate={() => setIsCertModalOpen(true)} />

        {/* About Me, Coursework & Leadership Journey */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenCertificate={() => setIsCertModalOpen(true)}
      />

      {/* Official Registered Copyright Certificate Modal (PDF View & Print) */}
      <CopyrightCertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      {/* Interactive Developer Terminal */}
      <DevTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onLaunchDemo={handleScrollToResearch}
      />
    </div>
  );
}
