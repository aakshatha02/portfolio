import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background styles
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="p-2 bg-slate-900 text-white rounded-lg">
              <Database className="w-5 h-5" id="nav-logo-icon" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
                Akshatha
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                id={`nav-link-${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-tight transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeSection === section.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {section.label}
              </button>
            ))}
            <button
              id="nav-cta-btn"
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-medium tracking-tight shadow-sm hover:shadow transition-all"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-neutral-100 bg-white"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  id={`mobile-nav-link-${section.id}`}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium ${
                    activeSection === section.id
                      ? 'bg-slate-50 text-slate-900 font-semibold border-l-4 border-slate-900'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  id="mobile-nav-cta"
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-center font-medium block shadow-sm"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
