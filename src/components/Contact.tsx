import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'mahnoorshahid2410@gmail.com', href: 'mailto:mahnoorshahid2410@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mahnoorshahid2410', href: 'https://linkedin.com/in/mahnoorshahid2410' },
  { icon: Github, label: 'GitHub', value: 'github.com/mahnoor2410', href: 'https://github.com/mahnoor2410' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: null },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Unable to submit contact form');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-70" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal eyebrow justify-center">
            <span className="h-px w-6 bg-brand-500" /> Contact
          </span>
          <h2 className="reveal section-title mt-3">Let's build your AI solution</h2>
          <p className="reveal mt-4 text-ink-600 dark:text-ink-300">
            Have a project in mind? Tell me about it and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Contact info */}
          <div className="reveal lg:col-span-2">
            <div className="glass-card h-full p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                Available for freelance AI projects, full-time roles and collaborations.
              </p>
              <ul className="mt-6 space-y-3">
                {CONTACTS.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-brand-500/10">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400">{c.label}</div>
                        <div className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{c.value}</div>
                      </div>
                    </div>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card space-y-4 p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Subject">
                <input
                  type="text"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="Project / role inquiry"
                  className="input"
                />
              </Field>
              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project, timeline and goals…"
                  className="input resize-none"
                />
              </Field>

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-70">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl bg-accent-500/10 p-3 text-sm text-accent-700 dark:text-accent-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Thanks! Your message has been sent. I'll reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}
