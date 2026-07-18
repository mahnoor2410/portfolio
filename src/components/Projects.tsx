import { useMemo, useState } from 'react';
import { ArrowUpRight, Github, FileText, Star, X } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';

const FILTERS = ['All', 'Computer Vision', 'Deep Learning', 'NLP / GenAI', 'Full-Stack AI'] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const featured = projects.find((p) => p.featured)!;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-6 bg-brand-500" /> Featured Projects
          </span>
          <h2 className="reveal section-title mt-3">AI systems I've designed and shipped</h2>
          <p className="reveal mt-4 text-ink-600 dark:text-ink-300">
            A selection of end-to-end AI projects spanning computer vision, deep learning, NLP and full-stack AI apps.
          </p>
        </div>

        {/* Featured project */}
        <div className="reveal mt-14">
          <FeaturedCard project={featured} onCaseStudy={() => setActive(featured)} />
        </div>

        {/* Filters */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow'
                  : 'glass text-ink-600 hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.id} project={p} onCaseStudy={() => setActive(p)} />
            ))}
        </div>
      </div>

      {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function FeaturedCard({ project, onCaseStudy }: { project: Project; onCaseStudy: () => void }) {
  return (
    <article className="group relative overflow-hidden glass-card">
      <div className="grid lg:grid-cols-5">
        {/* Visual side */}
        <div className="relative col-span-2 min-h-[220px] overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 p-8 lg:min-h-[340px]">
          <div className="absolute inset-0 bg-grid-dark bg-[size:32px_32px] opacity-40" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-current" /> Featured Project
            </span>
            <div className="font-mono text-xs text-brand-300">
              {'> model.evaluate()'}
              <br />
              {'> macro_f1: 0.94 ✓'}
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="col-span-3 p-7 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {project.category}
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{project.description}</p>

          {project.highlights && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-ink-600 dark:text-ink-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <button onClick={onCaseStudy} className="btn-outline">
              <FileText className="h-4 w-4" /> Read Case Study
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, onCaseStudy }: { project: Project; onCaseStudy: () => void }) {
  return (
    <article className="group reveal flex h-full flex-col overflow-hidden glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      {/* Thumb */}
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950">
        <div className="absolute inset-0 bg-grid-dark bg-[size:24px_24px] opacity-40" />
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />
        <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-accent-500/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="chip text-[11px]">{t}</span>
          ))}
        </div>

        <div className="mt-5 flex flex-1 items-end gap-2 pt-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs">
              Live <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2 text-xs">
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          <button onClick={onCaseStudy} className="btn-outline px-4 py-2 text-xs">
            Case Study
          </button>
        </div>
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative m-0 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl glass p-6 shadow-card-dark sm:m-6 sm:rounded-3xl animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          Case Study · {project.category}
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">{project.tagline}</p>

        <p className="mt-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{project.description}</p>

        {project.highlights && (
          <div className="mt-6">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-700 dark:text-ink-200">
              Key highlights
            </h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-700 dark:text-ink-200">
            Tech stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github className="h-4 w-4" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
