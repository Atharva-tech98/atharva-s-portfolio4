'use client';
import { useState } from 'react';
import Link from 'next/link';

const items = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-accent-500 text-white text-xs font-semibold shadow-lg shadow-accent-500/30 flex items-center gap-2"
      >
        <span>{open ? '✕ Close' : '☰ Menu'}</span>
      </button>
      {open && (
        <div className="fixed inset-x-4 bottom-20 z-50 rounded-2xl border border-white/15 bg-[#0f172a]/95 backdrop-blur-xl p-6 space-y-4 shadow-2xl">
          {items.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setOpen(false)} 
              className="block text-gray-200 hover:text-white py-1 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="mailto:atharvanaikodi1@gmail.com" 
            onClick={() => setOpen(false)} 
            className="block text-accent-400 font-semibold pt-2 border-t border-white/10"
          >
            Email Atharva →
          </a>
        </div>
      )}
    </div>
  );
}
