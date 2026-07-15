import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Database, Cpu, HelpCircle, BarChart3, Radio, ArrowUpRight, CheckCircle, Github } from 'lucide-react';
import { projects } from '../data';
import { ProjectItem } from '../types';

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'pipelines', label: 'Data Pipelines' },
  { key: 'cloud', label: 'Cloud Solutions' },
  { key: 'analytics', label: 'Analytics & BI' },
  { key: 'streaming', label: 'Real-time Streaming' },
];

const technologies = [
  { key: 'python', label: 'Python' },
  { key: 'sql', label: 'SQL' },
  { key: 'dbt', label: 'dbt' },
  { key: 'snowflake', label: 'Snowflake' },
  { key: 'apacheairflow', label: 'Apache Airflow' },
  { key: 'powerbi', label: 'Power BI' },
  { key: 'tableau', label: 'Tableau' },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'pipelines':
      return <Network className="w-5 h-5 text-indigo-600" />;
    case 'cloud':
      return <Database className="w-5 h-5 text-emerald-600" />;
    case 'analytics':
      return <BarChart3 className="w-5 h-5 text-indigo-600" />;
    case 'streaming':
      return <Radio className="w-5 h-5 text-amber-600" />;
    default:
      return <Cpu className="w-5 h-5 text-slate-600" />;
  }
};

export default function Projects() {
  const [activeType, setActiveType] = useState<'category' | 'tech'>('category');
  const [activeValue, setActiveValue] = useState<string>('all');

  const filteredProjects = projects.filter((proj) => {
    if (activeType === 'category') {
      if (activeValue === 'all') return true;
      return proj.category === activeValue;
    } else {
      const targetTech = activeValue.toLowerCase();
      return proj.techStack.some((tech) => {
        const t = tech.toLowerCase();
        if (targetTech === 'sql') {
          return t.includes('sql') || t === 'postgresql' || t === 'sqlite';
        }
        if (targetTech === 'powerbi') {
          return t.includes('power bi') || t.includes('powerbi');
        }
        if (targetTech === 'apacheairflow') {
          return t.includes('airflow');
        }
        return t.includes(targetTech);
      });
    }
  });

  return (
    <section id="projects" className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 pb-1.5 inline-block border-b-4 border-indigo-600/90 rounded-xs">
            Projects
          </h2>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-6 mb-12">
          {/* Categories */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 sm:border-r sm:border-slate-200 sm:pr-4 sm:h-5 sm:flex sm:items-center">
              Category
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  id={`project-filter-${cat.key}`}
                  onClick={() => {
                    setActiveType('category');
                    setActiveValue(cat.key);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-250 ${
                    activeType === 'category' && activeValue === cat.key
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 sm:border-r sm:border-slate-200 sm:pr-4 sm:h-5 sm:flex sm:items-center">
              Technology
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech.key}
                  id={`project-filter-${tech.key}`}
                  onClick={() => {
                    setActiveType('tech');
                    setActiveValue(tech.key);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-250 ${
                    activeType === 'tech' && activeValue === tech.key
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 shadow-sm'
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={proj.id}
                id={`project-card-${proj.id}`}
                className="bg-white rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Accent Top Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500/80 to-emerald-500/80" />

                <div className="p-6 space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-2xl">
                      {getCategoryIcon(proj.category)}
                    </div>
                    <div className="flex items-center gap-2">
                      {proj.title === 'End-to-End Retail Data Pipeline' && (
                        <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                          Ongoing
                        </span>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-xl transition-all"
                          title="View Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                      <span>{proj.title}</span>
                    </h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="bg-slate-50/80 border-t border-slate-100 p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50/50 border border-indigo-100/60 px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
