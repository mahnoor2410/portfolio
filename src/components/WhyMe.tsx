import { Rocket, Eye, Sparkles, Code2, Target } from 'lucide-react';

const REASONS = [
  {
    icon: Rocket,
    title: 'Production-ready AI',
    text: 'I ship models that run in real environments — not just notebooks. Clean APIs, tests and deployment included.',
  },
  {
    icon: Eye,
    title: 'Strong Computer Vision experience',
    text: 'Real industrial CV work at Thingtrax: detection, tracking, OCR and custom pipelines on the factory floor.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI expertise',
    text: 'RAG chatbots, LLM agents and Gemini-powered apps grounded in your data with citations and guardrails.',
  },
  {
    icon: Code2,
    title: 'Clean, scalable code',
    text: 'Readable, documented and maintainable codebases you can hand off and extend without rewriting.',
  },
  {
    icon: Target,
    title: 'Business-focused AI',
    text: 'I start from the business problem, then choose the right model — not the other way around.',
  },
  {
    icon: Target,
    title: 'End-to-end ownership',
    text: 'From data and modeling to API, UI and deployment — one accountable engineer across the whole stack.',
  },
];

export function WhyMe() {
  return (
    <section id="why-me" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-6 bg-brand-500" /> Why Work With Me
          </span>
          <h2 className="reveal section-title mt-3">A partner who ships AI that works</h2>
          <p className="reveal mt-4 text-ink-600 dark:text-ink-300">
            I combine research depth with engineering discipline so the AI I build actually reaches production
            and delivers value.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="reveal group glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 transition-colors group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white dark:text-brand-400">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
