import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Sparkles, Flag, Languages, Briefcase, ChevronRight } from 'lucide-react';
import { personalInfo, journeyParagraphs } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

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
    <>
      {/* 1. HERO / LANDING FOLD */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-80px)] md:min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/30"
      >
        {/* Background abstract elements */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full max-w-7xl mx-auto opacity-[0.03] pointer-events-none">
          <img
            src={personalInfo.heroBgPath}
            alt="Abstract Data Pipelines"
            className="w-full h-full object-cover object-right"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modern ambient glow spheres */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -z-10 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 w-80 h-80 bg-emerald-50 rounded-full filter blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left info column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200/60 rounded-full text-slate-800 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>Available for new opportunities</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none"
                >
                  Hello, I'm <span className="text-indigo-600 relative inline-block">
                    {personalInfo.name}
                    <span className="absolute left-0 bottom-1.5 w-full h-3 bg-indigo-100/70 -z-10 rounded" />
                  </span>
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="font-display text-2xl sm:text-3xl font-semibold text-slate-600"
                >
                  {personalInfo.title}
                </motion.h2>
              </div>

              {/* Action Buttons inside Hero as seen in screenshot */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollSection('projects')}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-md shadow-indigo-100 transition-all flex items-center gap-2 group"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollSection('contact')}
                  className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all flex items-center gap-2 group"
                >
                  <span>Get in Touch</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right graphics column */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Outer decorative SVG rotating orbits representing ETL pipeline flows */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_50s_linear_infinite]" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 15" />
                  <circle cx="200" cy="200" r="185" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="10 20" />
                  {/* Floating pipeline nodes */}
                  <circle cx="200" cy="15" r="5" fill="#4f46e5" />
                  <circle cx="385" cy="200" r="6" fill="#10b981" />
                  <circle cx="200" cy="385" r="4" fill="#6366f1" />
                  <circle cx="15" cy="200" r="5.5" fill="#f59e0b" />
                </svg>

                {/* Glowing decorative frame */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 p-0.5 shadow-2xl overflow-hidden backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
                  <img
                    src={personalInfo.avatarPath}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-[22px] transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Data tags floating around the avatar */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute top-10 -right-4 bg-white/95 shadow-md px-3 py-1.5 rounded-full border border-slate-100 flex items-center gap-1.5 text-xs font-mono text-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Data Expert</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-6 -left-6 bg-white/95 shadow-md px-3 py-1.5 rounded-full border border-slate-100 flex items-center gap-1.5 text-xs font-mono text-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                  <span>Bremen, Germany</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div
          onClick={() => scrollSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors group z-20"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="p-1 border border-slate-200 group-hover:border-indigo-200 rounded-full bg-white/80"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section
        id="about"
        className="py-24 bg-white border-y border-slate-100 scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left/Main Column: Heading and bio text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase font-bold block mb-1">
                  Get To Know Me
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 pb-2 inline-block border-b-4 border-indigo-600 rounded-xs">
                  About Me
                </h2>
              </div>

              <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans space-y-4">
                <p>
                  {personalInfo.summary}
                </p>
              </div>

              {/* Quick Specs rendered below biography block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:border-indigo-100 transition-colors">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Flag className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Nationality</p>
                    <p className="font-semibold text-slate-800">Indian</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:border-indigo-100 transition-colors">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Location</p>
                    <p className="font-semibold text-slate-800">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:border-indigo-100 transition-colors">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Languages</p>
                    <p className="font-semibold text-slate-800">English (C1), Kannada (C1), Hindi (B2), Deutsch (B1)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:border-indigo-100 transition-colors">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Experience</p>
                    <p className="font-semibold text-slate-800">6+ Years (Professional Experience)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Beautiful matching narrative card for My Journey into Data */}
            <div className="lg:col-span-5 h-full flex flex-col justify-start">
              <div className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 w-full shadow-xs hover:border-indigo-100/80 hover:bg-slate-50/80 transition-all duration-300">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
                  <span>My Story</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                  My Journey into Data
                </h3>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  {journeyParagraphs.map((para, idx) => (
                    <p key={idx} className="font-sans">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
