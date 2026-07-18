import { ArrowRight, Download, FolderGit2, MapPin } from 'lucide-react';
import { NeuralCanvas } from './NeuralCanvas';
import { useTyping } from '../hooks/useTyping';

type Props = { theme: 'light' | 'dark' };

export function Hero({ theme }: Props) {
  const typed = useTyping(
    ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Generative AI', 'NLP & RAG'],
    { typeSpeed: 75, deleteSpeed: 35, pause: 1500 },
  );

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:44px_44px] dark:bg-grid-dark mask-fade-b" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <NeuralCanvas dark={theme === 'dark'} />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ink-600 dark:text-ink-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Available for AI freelance projects
            <span className="hidden sm:inline-flex items-center gap-1 text-ink-400">
              <MapPin className="h-3 w-3" /> Lahore, Pakistan
            </span>
          </div>

          <h1 className="reveal section-title text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Building AI Solutions That{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              Solve Real Business Problems
            </span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
            I develop Machine Learning, Computer Vision and Generative AI solutions that automate
            workflows, improve decision-making and create intelligent applications.
          </p>

          {/* Typing line */}
          <div className="reveal mt-8 flex items-center justify-center gap-2 font-mono text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            <span className="text-brand-500">&gt;</span>
            <span>specializing in</span>
            <span className="font-semibold text-ink-800 dark:text-white">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-brand-500 sm:h-6" />
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/Mahnoor-Shahid-AI-Engineer-Resume.pdf" download className="btn-ghost">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
          </div>

          {/* Mini stats */}
          <div className="reveal mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { k: '5+', v: 'Years Coding' },
              { k: '10+', v: 'AI Projects' },
              { k: '8+', v: 'AI Domains' },
            ].map((s) => (
              <div key={s.v} className="glass-card px-3 py-4">
                <div className="font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-ink-500 dark:text-ink-400">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
