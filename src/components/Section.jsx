export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          {eyebrow && (
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
