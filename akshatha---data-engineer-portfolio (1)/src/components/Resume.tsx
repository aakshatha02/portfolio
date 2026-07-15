import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { experiences, educationList } from '../data';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-50/30 border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 pb-1.5 inline-block border-b-4 border-indigo-600/90 rounded-xs">
            Resume
          </h2>
        </div>

        {/* 2-Column Grid matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-r-2xl rounded-l-lg border border-slate-100 shadow-xs hover:shadow-sm transition-all duration-300 flex overflow-hidden min-h-[96px]"
                >
                  {/* Thick left border accent line */}
                  <div className="w-1.5 bg-blue-500 self-stretch flex-shrink-0" />
                  
                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans font-normal">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <span className="text-xs sm:text-sm font-semibold font-sans text-teal-600 flex-shrink-0 mt-0.5 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 bg-teal-50 text-teal-600 rounded-full">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-r-2xl rounded-l-lg border border-slate-100 shadow-xs hover:shadow-sm transition-all duration-300 flex overflow-hidden min-h-[96px]"
                >
                  {/* Thick left border accent line */}
                  <div className="w-1.5 bg-teal-600 self-stretch flex-shrink-0" />
                  
                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans font-normal">
                        {exp.company}
                      </p>
                    </div>
                    
                    <span className="text-xs sm:text-sm font-semibold font-sans text-teal-600 flex-shrink-0 mt-0.5 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
