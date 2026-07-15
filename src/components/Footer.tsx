import React from 'react';
import { Linkedin, Github, Mail, Database } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollSection('home')}>
            <div className="p-2 bg-slate-800 text-white rounded-lg">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Akshatha
              </span>
              <span className="text-xs font-mono ml-2 text-indigo-400 font-medium">
                [{personalInfo.title}]
              </span>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono">
          <p>© {new Date().getFullYear()} Akshatha. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => scrollSection('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollSection('experience')} className="hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollSection('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollSection('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
