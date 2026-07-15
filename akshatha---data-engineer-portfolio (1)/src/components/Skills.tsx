import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Cloud, 
  Cpu, 
  Server, 
  Code, 
  BarChart3, 
  Settings, 
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { skillCategories, certifications } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  Server: Server,
  Code: Code,
  BarChart: BarChart3,
  Settings: Settings,
  CheckCircle: CheckCircle
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 pb-1.5 inline-block border-b-4 border-teal-500 rounded-xs">
            Skills
          </h2>
        </div>

        {/* Dynamic Bento Grid of Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, index) => {
            const IconComponent = iconMap[cat.icon] || Code;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-200/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 bg-blue-50/80 text-blue-600 rounded-full flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-slate-900 leading-snug">
                      {cat.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-xs font-semibold text-slate-800 bg-slate-100/60 border border-transparent px-3 py-1.5 rounded-lg shadow-2xs hover:border-indigo-300 hover:text-indigo-600 hover:shadow-xs transition-all duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications Section */}
        <div className="text-center mt-20 mb-10">
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900">
            Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const isAzure = cert.name.toLowerCase().includes("azure");
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-5">
                  {isAzure ? (
                    <Cloud className="w-6 h-6" />
                  ) : (
                    <Database className="w-6 h-6" />
                  )}
                </div>
                <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base leading-snug max-w-xs">
                  {cert.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
                  {cert.date}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
