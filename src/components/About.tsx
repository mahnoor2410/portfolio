import { CheckCircle2, Sparkles, Briefcase, GraduationCap } from 'lucide-react';

const FOCUS = [
  'Machine Learning',
  'Computer Vision',
  'NLP & Deep Learning',
  'Generative AI',
  'Production AI Apps',
  'RAG & LLM Systems',
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500/30 to-accent-500/30 blur-2xl" />
              <div className="glass-card relative h-full overflow-hidden p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-lg font-bold">Mahnoor Shahid</div>
                    <div className="text-xs text-ink-500 dark:text-ink-400">AI Engineer · Lahore, PK</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: Briefcase, label: 'Current role', value: 'Junior AI Engineer @ Thingtrax' },
                    { icon: GraduationCap, label: 'Focus', value: 'CV · NLP · GenAI · Deep Learning' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3 rounded-xl bg-white/40 p-3 dark:bg-white/5">
                      <row.icon className="mt-0.5 h-5 w-5 text-brand-500" />
                      <div>
                        <div className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400">{row.label}</div>
                        <div className="text-sm font-medium text-ink-800 dark:text-ink-100">{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400">Core focus</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {FOCUS.map((f) => (
                      <span key={f} className="chip">{f}</span>
                    ))}
                  </div>
                </div>

                {/* decorative orbit */}
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 animate-spin-slow rounded-full border border-dashed border-brand-400/40" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="reveal eyebrow">
              <span className="h-px w-6 bg-brand-500" /> About Me
            </span>
            <h2 className="reveal section-title mt-3">
              AI Engineer building{' '}
              <span className="text-brand-600 dark:text-brand-400">production-ready</span> intelligent systems
            </h2>
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
              <p>
                I'm an AI Engineer passionate about Machine Learning, Computer Vision, NLP, Deep Learning and
                Generative AI. I enjoy turning research-grade models into reliable, production-ready applications
                that solve real-world business problems — not just demos that look good in a notebook.
              </p>
              <p>
                I currently work as a <strong className="text-ink-900 dark:text-white">Junior AI Engineer at Thingtrax</strong>,
                where I build industrial computer vision solutions: object detection, tracking, OCR and custom AI
                workflows tailored to manufacturing environments. I focus on customer-focused AI that fits the real
                constraints of the production floor.
              </p>
              <p>
                Whether it's a defect-classification CNN, a RAG chatbot over your documents, or a FastAPI service
                serving a vision model in real time, I care about clean, scalable code and AI that delivers measurable
                business value.
              </p>
            </div>

            <ul className="reveal mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Production-ready AI solutions',
                'Strong Computer Vision experience',
                'Generative AI & RAG expertise',
                'Clean, scalable, documented code',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
