import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something great">
      <div className="mx-auto max-w-2xl">
        <form className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <input required type="text" placeholder="Name" className="rounded-lg border border-slate-300/60 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" />
            <input required type="email" placeholder="Email" className="rounded-lg border border-slate-300/60 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" />
          </div>
          <input type="text" placeholder="Subject" className="rounded-lg border border-slate-300/60 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" />
          <textarea required rows="5" placeholder="Your message" className="rounded-lg border border-slate-300/60 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow hover:bg-slate-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
