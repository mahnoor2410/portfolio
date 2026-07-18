import { useCountUp } from '../hooks/useCountUp';

const STATS = [
  { target: 15, suffix: '+', label: 'Projects Completed' },
  { target: 12, suffix: '+', label: 'AI Technologies' },
  { target: 8, suffix: '+', label: 'Computer Vision Models' },
  { target: 10, suffix: '+', label: 'Happy Clients' },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-20">
      <div className="container-px">
        <div className="reveal glass-card overflow-hidden p-8 sm:p-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
        <span ref={ref}>
          {value}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-sm text-ink-500 dark:text-ink-400">{label}</div>
    </div>
  );
}
