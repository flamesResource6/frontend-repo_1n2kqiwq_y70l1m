import Section from './Section';
import { Code2, Globe, Sparkles } from 'lucide-react';

const sampleProjects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful, high‑performance portfolio blending Spline 3D with React and motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    icon: Sparkles,
    link: '#'
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics dashboard with live charts and collaborative annotations.',
    tags: ['FastAPI', 'WebSockets', 'Tailwind'],
    icon: Code2,
    link: '#'
  },
  {
    title: 'Headless CMS Website',
    description: 'SEO‑friendly site powered by a custom content platform and edge caching.',
    tags: ['Next.js', 'Server Components', 'Edge'],
    icon: Globe,
    link: '#'
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-xl bg-white p-6 shadow ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="rounded-lg bg-slate-100 p-3 ring-1 ring-slate-900/10">
                <p.icon className="h-5 w-5 text-slate-700" />
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 ring-1 ring-slate-900/10">Case Study</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-slate-700">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-900/10">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
