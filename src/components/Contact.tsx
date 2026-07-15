import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2, Sparkles, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient blurred orb */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 -z-10 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-600 font-mono mb-2">
            Let's Collaborate
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Get In Touch
          </p>
          <div className="w-12 h-1 bg-indigo-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Info Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Subtle background overlay pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="space-y-8 relative">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-850 border border-slate-800 rounded-full text-[11px] font-mono text-indigo-300 font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct Channels
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Akshatha
                </h3>
                <p className="text-sm text-slate-400 font-mono mt-1">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl border border-slate-750">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-semibold text-slate-100 hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl border border-slate-750">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">LinkedIn Profile</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
                    >
                      akshatha-aa7410132
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl border border-slate-750">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">GitHub Profile</p>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
                    >
                      aakshatha02
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl border border-slate-750">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Current Location</p>
                    <p className="text-sm sm:text-base font-semibold text-slate-100">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-10 relative">
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Looking for opportunities in Germany, remote positions, or international relocation. Ready to deploy robust databases, streaming solutions, and customized ETL processes.
              </p>
            </div>
          </div>

          {/* Right Column: High-fidelity interactive form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-slate-50/50 rounded-3xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 font-mono uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className="w-full bg-white border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 font-mono uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    className="w-full bg-white border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-bold text-slate-500 font-mono uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Data Engineering opportunity"
                  className="w-full bg-white border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 font-mono uppercase">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or open position..."
                  className="w-full bg-white border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 rounded-xl px-4 py-3 text-sm font-sans outline-none resize-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Error warning */}
              {status === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span>Please fill out all required fields.</span>
                </div>
              )}

              {/* Success Banner */}
              {status === 'success' && (
                <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl text-sm font-medium flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Message sent successfully!</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Thank you for connecting with Akshatha. She will reply to your email address shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'loading' || status === 'success'}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-all shadow-md flex items-center gap-2 disabled:bg-slate-300 disabled:shadow-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
