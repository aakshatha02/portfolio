import React from 'react';
import { Trophy, BookOpen, PenTool, Dumbbell, Utensils, Heart } from 'lucide-react';
import { awards } from '../data';

export default function EducationAndCredentials() {
  const hobbies = [
    {
      id: 'hob1',
      name: 'Reading Fictional Stories',
      description: 'Love spending free time in reading fictional, mystery novels.',
      icon: BookOpen,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 'hob2',
      name: 'Writing Technical Blogs',
      description: 'Sharing practical insights on cloud technology, modern data tools.',
      icon: PenTool,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 'hob3',
      name: 'Fitness & Health',
      description: 'Keeping an active, healthy lifestyle.',
      icon: Dumbbell,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      id: 'hob4',
      name: 'Cooking & Culinary Arts',
      description: 'Experimenting with different cuisines, healthy recipe. Cooking is my passion',
      icon: Utensils,
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="credentials" className="py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Awards & Recognition Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900">
                Awards & Recognition
              </h3>
            </div>

            <div className="space-y-3.5">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="bg-white p-4 rounded-xl border border-slate-100 hover:border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all flex items-start gap-3"
                >
                  <div className="p-1 bg-amber-50 text-amber-500 rounded-lg mt-0.5 flex-shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans mt-1">
                      {award.description}
                    </p>
                    {award.issuer && (
                      <p className="text-[9px] font-mono text-slate-400 mt-1">
                        {award.issuer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900">
                Hobbies & Interests
              </h3>
            </div>

            <div className="space-y-3.5">
              {hobbies.map((hobby) => {
                const IconComponent = hobby.icon;
                return (
                  <div
                    key={hobby.id}
                    className="bg-white p-4 rounded-xl border border-slate-100 hover:border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all flex items-start gap-3"
                  >
                    <div className={`p-1.5 rounded-lg mt-0.5 flex-shrink-0 ${hobby.color}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                        {hobby.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-sans mt-1">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
