'use client';
import { useState } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { projects, projectSlug } from '@/lib/projects';

const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'live', label: 'Live' },
    { key: 'private', label: 'Private' },
];

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const visible = filter === 'all' ? projects : projects.filter((p) => p.status === filter);

    return (
        <main className="mx-auto max-w-4xl px-4 pb-8 pt-10 sm:px-6">
            <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-clay">projects/</div>
                <h1 className="mt-1">Projects</h1>
                <p className="mt-2 max-w-xl text-ink/70">
                    A mix of live products, internal tools, and client work. Most of what I&apos;ve built is
                    under NDA, so this is the part I can show.
                </p>
            </div>

            <div className="mb-6 flex gap-2" role="group" aria-label="Filter projects">
                {FILTERS.map((f) => (
                    <button
                        key={f.key}
                        type="button"
                        onClick={() => setFilter(f.key)}
                        className={`border px-3 py-1.5 text-sm transition-colors ${
                            filter === f.key
                                ? 'border-clay/60 bg-accent text-clay'
                                : 'border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {visible.map((project) => {
                    const slug = projectSlug(project.title);
                    const isLive = project.status === 'live';
                    return (
                        <li key={slug} className="py-6">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <h2 className="text-lg">{project.title}</h2>
                                <span className="mt-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
                                    {isLive ? <ExternalLink className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                                    {isLive ? 'Live' : 'Private'}
                                </span>
                            </div>
                            <p className="mt-2 max-w-2xl leading-relaxed text-ink/70">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="border border-ink/10 px-2 py-0.5 font-mono text-xs text-ink/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-clay hover:underline"
                                >
                                    {project.link.replace(/^https?:\/\//, '')}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
