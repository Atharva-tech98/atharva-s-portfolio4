'use client';

import React, { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    // Launch mailto
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:atharvanaikodi1@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus('success');
  };

  return (
    <section id="contact" className="relative py-28 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="technical-badge mb-3">10 // GET IN TOUCH</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg mt-3 font-light">
            I am always interested in connecting with engineers, automotive professionals, designers, and people who enjoy building practical solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              Whether it is a discussion about automotive engineering, mechanical design, manufacturing, or a potential project collaboration, I would be happy to connect.
            </p>

            <div className="space-y-4 pt-4">
              {/* Location Card */}
              <div className="engineering-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="font-semibold text-white text-sm sm:text-base">Pune, Maharashtra, India</div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/atharva-naikodi-621635252/"
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-card rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-automotive-light">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.53 7.06c.73-.26 1.23-.69 1.38-1.24L20 11h-5V9.2l4-3.61V11z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn Network</div>
                    <div className="font-semibold text-white text-sm sm:text-base group-hover:text-automotive-light transition-colors">
                      atharva-naikodi-621635252
                    </div>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-automotive-light transition-colors font-mono text-sm">
                  →
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:atharvanaikodi1@gmail.com"
                className="engineering-card rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
                    <div className="font-semibold text-white text-sm sm:text-base group-hover:text-automotive-light transition-colors">
                      atharvanaikodi1@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-automotive-light transition-colors font-mono text-sm">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="engineering-card rounded-2xl p-6 sm:p-10 space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send an Engineering Message
              </h3>

              {formStatus === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-medium">
                  ⚠️ {errorMessage}
                </div>
              )}

              {formStatus === 'success' && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  ✓ Dispatching message to your default mail client...
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-automotive-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-automotive-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Automotive Homologation / Mechanical Design Collaboration"
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-automotive-blue transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project, inquiry, or internship opportunity..."
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-automotive-blue transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-automotive-blue hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-glow-blue flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Message →</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
