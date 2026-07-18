import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolio';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-6 bg-brand-500" /> Testimonials
          </span>
          <h2 className="reveal section-title mt-3">What clients say about working with me</h2>
          <p className="reveal mt-4 text-ink-600 dark:text-ink-300">
            Placeholder testimonials — replace these with real quotes from your clients and recruiters.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal group relative flex h-full flex-col glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <Quote className="h-8 w-8 text-brand-500/30" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-ink-500 dark:text-ink-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
