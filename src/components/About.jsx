import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4 text-slate-700">
          <p>
            I’m a developer who loves crafting immersive, accessible, and high‑performance interfaces.
            I combine strong product sense with deep technical execution to ship delightful experiences.
          </p>
          <p>
            My current toolkit includes React, TypeScript, Node, FastAPI, and cloud platforms.
            I enjoy building design systems, animations, and data‑driven apps.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {['React', 'TypeScript', 'Node', 'FastAPI', 'Tailwind', 'MongoDB'].map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-900/10">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-tr from-indigo-500/20 via-cyan-400/20 to-sky-500/20 p-1">
          <div className="h-full w-full rounded-lg bg-white p-6 shadow ring-1 ring-slate-900/5">
            <p className="font-medium text-slate-900">Highlights</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>5+ years building web products</li>
              <li>Performance and DX advocate</li>
              <li>Shipped apps to thousands of users</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
