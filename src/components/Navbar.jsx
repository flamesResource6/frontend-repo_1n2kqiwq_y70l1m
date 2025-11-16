import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight text-slate-800">My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
            <div className="h-5 w-px bg-slate-300/60" />
            <div className="flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-200/60 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-200/60 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-lg hover:bg-slate-200/60 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-200/60">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-200/60">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
