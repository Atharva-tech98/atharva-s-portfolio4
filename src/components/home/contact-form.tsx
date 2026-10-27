'use client';
import { useState } from 'react';

export function ContactForm({ onSubmit, done }: { onSubmit: () => void; done: boolean }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }
    const params = new URLSearchParams({
      subject: `Portfolio Contact from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    window.location.href = `mailto:atharvanaikodi1@gmail.com?${params}`;
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="glass-card rounded-2xl p-8 border border-white/10 bg-[#0f172a]/60 shadow-xl">
        {error && <p className="text-accent-400 text-sm mb-4 font-medium">{error}</p>}
        {done && <p className="text-green-400 text-sm mb-4 font-medium">Opening your email client to send message...</p>}
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Your Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:border-primary-500 focus:outline-none resize-none"
              placeholder="Brief details about your inquiry or project..."
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-6 w-full py-3.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm tracking-wide transition-all hover:scale-[1.01] shadow-lg shadow-accent-500/25 cursor-pointer"
        >
          {done ? 'Message Dispatched ✓' : 'Send Message →'}
        </button>
      </div>
    </form>
  );
}
