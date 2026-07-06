'use client';
// Projects as a flight plan: waypoint rows, expandable detail, console-driven
// filter (`projects --live`) and selection (`select <n|name>`).
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, TriangleAlert, ChevronDown } from 'lucide-react';
import { projects, projectSlug } from '@/lib/projects';
import { onConsole } from '@/lib/consoleBus';
import HudPanel from '../components/cockpit/HudPanel';

const FILTERS = [
    { key: 'all', label: 'ALL' },
    { key: 'open', label: 'LIVE' },
    { key: 'github', label: 'REPO' },
];

const normalizeFilter = (value) =>
    value === 'open' || value === 'live' ? 'open' : value === 'github' || value === 'repo' ? 'github' : 'all';

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);
    const [flash, setFlash] = useState(null);
    const rowRefs = useRef({});

    // initial state from URL (?filter=…&select=…) — console navigations land here
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const f = params.get('filter');
        const s = params.get('select');
        if (f) setFilter(normalizeFilter(f));
        if (s) setSelected(s);
    }, []);

    // live console control while on this page
    useEffect(() => onConsole('projects.filter', ({ type }) => {
        setFilter(normalizeFilter(type));
    }), []);
    useEffect(() => onConsole('projects.select', ({ slug }) => {
        setFilter('all');
        setSelected(slug);
    }), []);

    // when a waypoint gets locked, scroll to it and flash the row
    useEffect(() => {
        if (!selected) return;
        const el = rowRefs.current[selected];
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setFlash(selected);
            const t = setTimeout(() => setFlash(null), 1700);
            return () => clearTimeout(t);
        }
    }, [selected]);

    const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

    return (
        <main className="mx-auto max-w-6xl space-y-6 px-3 pb-8 pt-20 sm:px-6">
            <div className="flex items-start gap-3 border border-hud2/40 bg-hud2/5 px-4 py-3">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-hud2" />
                <div>
                    <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-hud2 hud2-glow">
                        ADVISORY — MOST PROJECTS ARE PRIVATE
                    </div>
                    <p className="mt-1 text-sm text-ctp-subtext0">
                        Many of my projects were developed for clients under NDAs and can&apos;t be publicly displayed.
                        The projects shown here represent only a portion of my work.
                    </p>
                </div>
            </div>

            <HudPanel
                title="FLIGHT PLAN — PROJECT WAYPOINTS"
                right={`${visible.length} WPTS · ${filter.toUpperCase()}`}
                bodyClassName="p-0 sm:p-0"
            >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ctp-surface1/60 px-4 py-3 sm:px-6">
                    <div className="flex gap-2" role="group" aria-label="Filter waypoints">
                        {FILTERS.map((f) => (
                            <button
                                key={f.key}
                                type="button"
                                onClick={() => setFilter(f.key)}
                                className={`border px-4 py-1.5 font-mono text-xs tracking-[0.2em] transition-colors ${
                                    filter === f.key
                                        ? 'border-hud/60 bg-hud/10 text-hud hud-glow'
                                        : 'border-ctp-surface1 text-ctp-subtext0 hover:border-hud/40 hover:text-hud'
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ctp-overlay0">
                        console: projects --live · select &lt;n&gt;
                    </span>
                </div>

                <ol>
                    {visible.map((project) => {
                        const slug = projectSlug(project.title);
                        const wptNumber = projects.indexOf(project) + 1;
                        const isOpen = selected === slug;
                        const isRepo = project.type === 'github';
                        return (
                            <li
                                key={slug}
                                id={`wpt-${slug}`}
                                ref={(el) => (rowRefs.current[slug] = el)}
                                className={`border-b border-ctp-surface0/60 last:border-b-0 ${flash === slug ? 'animate-wpt-flash' : ''}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelected(isOpen ? null : slug)}
                                    aria-expanded={isOpen}
                                    className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-x-3 px-4 py-3.5 text-left transition-colors hover:bg-hud/5 sm:grid-cols-[auto,1fr,auto,auto] sm:gap-x-5 sm:px-6"
                                >
                                    <span className="font-mono text-xs tracking-[0.2em] text-ctp-overlay0">
                                        WPT{String(wptNumber).padStart(2, '0')}
                                    </span>
                                    <span className="min-w-0">
                                        <span className={`block truncate font-mono text-sm font-semibold sm:text-base ${isOpen ? 'text-hud hud-glow' : 'text-ctp-text'}`}>
                                            {project.title}
                                        </span>
                                        <span className="block truncate font-mono text-[11px] text-ctp-overlay0 sm:hidden">
                                            {project.technologies.slice(0, 3).join(' · ')}
                                        </span>
                                    </span>
                                    <span className="hidden max-w-[16rem] truncate font-mono text-[11px] text-ctp-overlay0 sm:block">
                                        {project.technologies.slice(0, 3).join(' · ')}
                                        {project.technologies.length > 3 && ` +${project.technologies.length - 3}`}
                                    </span>
                                    <span className="flex items-center gap-3">
                                        <span
                                            className={`border px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] ${
                                                isRepo
                                                    ? 'border-hud2/50 bg-hud2/10 text-hud2'
                                                    : 'border-hud/50 bg-hud/10 text-hud'
                                            }`}
                                        >
                                            {isRepo ? 'REPO' : 'LIVE'}
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-ctp-overlay0 transition-transform ${isOpen ? 'rotate-180 text-hud' : ''}`}
                                        />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="grid gap-5 border-t border-ctp-surface0/60 bg-ctp-crust/40 px-4 py-5 sm:px-6 md:grid-cols-[280px,1fr]">
                                        <div className="relative h-40 w-full overflow-hidden border border-ctp-surface1/70 md:h-44">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} screenshot`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 280px"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <p className="text-sm leading-relaxed text-ctp-subtext1">{project.description}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech) => (
                                                    <span key={tech} className="border border-ctp-surface1 bg-ctp-surface0/50 px-2 py-0.5 font-mono text-[11px] text-ctp-subtext0">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-auto flex flex-wrap items-center gap-4">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 border border-hud/60 bg-hud/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-hud transition-colors hover:bg-hud hover:text-ctp-crust"
                                                >
                                                    {isRepo ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                                                    {isRepo ? 'View on GitHub' : 'Visit Project'}
                                                </a>
                                                <span className="truncate font-mono text-[11px] text-ctp-overlay0">{project.link}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </HudPanel>
        </main>
    );
}
