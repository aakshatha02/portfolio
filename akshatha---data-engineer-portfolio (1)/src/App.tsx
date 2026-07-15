import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationAndCredentials from './components/EducationAndCredentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-800 antialiased font-sans bg-slate-50/20 selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <div className="print:hidden">
        <Navbar sections={navSections} />
      </div>

      {/* Main Content Layout */}
      <main className="space-y-0">
        <Hero />
        
        <div id="resume-section">
          <Resume />
        </div>

        <div id="projects-section">
          <Projects />
        </div>

        <div id="skills-section">
          <Skills />
        </div>

        <div id="credentials-section">
          <EducationAndCredentials />
        </div>

        <div id="contact-section">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
