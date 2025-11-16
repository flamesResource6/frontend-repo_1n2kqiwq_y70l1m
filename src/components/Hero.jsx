import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-green-500" /> Open to work
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-tr from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          I build modern, fast, and delightful digital experiences. Full‑stack developer focused on React, Node, and cloud.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800 transition">
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 shadow ring-1 ring-slate-900/10 hover:ring-slate-900/20 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
