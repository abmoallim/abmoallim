"use client";
// Global command console — fixed dock at the bottom of every page.
// Commands navigate, filter waypoints, search comms, copy contact data,
// re-theme the HUD, toggle CRT texture, ping the radar, and reboot the deck.
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { projects, projectSlug } from '@/lib/projects';
import { blogs } from '@/lib/blogs';
import { technologies } from '@/lib/skills';
import { socials } from '@/lib/socials';
import { emitConsole } from '@/lib/consoleBus';

const PROMPT = 'abmoallim@fedora:~$';
const zulu = () => `${new Date().toISOString().slice(11, 19)}Z`;

const COPY_TARGETS = {
    email: 'contact@abmoallim.com',
    linkedin: 'https://www.linkedin.com/in/abmoallim/',
    github: 'https://github.com/abmoallim',
    x: 'https://x.com/abmoallim',
    site: 'https://abmoallim.com',
};

const HELP = [
    { group: 'NAVIGATION', items: [
        ['home / about', 'flight deck · crew manifest'],
        ['projects / blog / contact', 'waypoints · comms archive · transmit'],
        ['goto <page>', 'route to any page'],
    ]},
    { group: 'DATA', items: [
        ['projects', 'list all waypoints'],
        ['projects --live | --repo', 'filter the flight plan'],
        ['select <n | name>', 'lock onto a waypoint'],
        ['search <query>', 'grep the comms archive (blog)'],
        ['skills / socials / whoami', 'systems · uplinks · pilot ident'],
    ]},
    { group: 'ACTIONS', items: [
        ['copy email | linkedin | github | x', 'copy to clipboard'],
        ['resume', 'open resume PDF'],
        ['contact', 'show uplink channels'],
    ]},
    { group: 'SYSTEM', items: [
        ['theme green | amber | mauve', 'swap HUD phosphor'],
        ['crt on | off', 'toggle scanline texture'],
        ['radar', 'ping the traffic scope'],
        ['reboot', 'replay instrument boot'],
        ['clear', 'wipe console output'],
    ]},
];

const Out = ({ children }) => <span className="text-ctp-subtext1">{children}</span>;
const Hud = ({ children }) => <span className="text-hud">{children}</span>;
const Warn = ({ children }) => <span className="text-hud2">{children}</span>;
const Err = ({ children }) => <span className="text-ctp-red">{children}</span>;
const A = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-ctp-sapphire underline decoration-dotted underline-offset-4 hover:text-ctp-sky">
        {children}
    </a>
);
const L = ({ href, children }) => (
    <Link href={href} className="text-ctp-sapphire underline decoration-dotted underline-offset-4 hover:text-ctp-sky">
        {children}
    </Link>
);

export default function CommandConsole() {
    const router = useRouter();
    const pathname = usePathname();
    const [entries, setEntries] = useState([]);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(null);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handler = (event) => {
            const target = event.target;
            const editing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
            if (!editing && (event.key === '/' || (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)))) {
                event.preventDefault();
                inputRef.current?.focus();
            } else if (event.key === 'Escape') {
                setOpen(false);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [entries, open]);

    const print = (cmd, out) => {
        setEntries((prev) => [...prev, { id: `${Date.now()}-${prev.length}`, cmd, out, ts: zulu() }]);
        setOpen(true);
    };

    const scrollOrRoute = (cmd, sectionId, path, label) => {
        if (pathname === '/' && sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                print(cmd, <Out>NAV ▸ scoping <Hud>{label}</Hud></Out>);
                return;
            }
        }
        print(cmd, <Out>NAV ▸ routing to <Hud>{label}</Hud>…</Out>);
        router.push(path);
    };

    const applyProjectFilter = (cmd, type, label) => {
        if (pathname === '/projects') {
            emitConsole('projects.filter', { type });
        } else {
            router.push(`/projects?filter=${type}`);
        }
        print(cmd, <Out>FLIGHT PLAN ▸ filter set to <Hud>{label}</Hud></Out>);
    };

    const runCommand = (raw) => {
        const trimmed = raw.trim();
        if (!trimmed) return;
        const [name, ...rest] = trimmed.split(/\s+/);
        const cmd = name.toLowerCase();
        const arg = rest.join(' ').trim();
        const argLower = arg.toLowerCase();

        switch (cmd) {
            case 'help':
                print(trimmed, (
                    <div className="space-y-2">
                        {HELP.map((section) => (
                            <div key={section.group}>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-ctp-overlay0">{section.group}</div>
                                <ul>
                                    {section.items.map(([usage, desc]) => (
                                        <li key={usage} className="flex flex-wrap gap-x-3">
                                            <span className="min-w-[15rem] text-hud">{usage}</span>
                                            <Out>{desc}</Out>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ));
                break;

            case 'whoami':
                print(trimmed, <Warn>ABDIHAMID MOALLIM :: SOFTWARE ENGINEER · AI ENTHUSIAST · FUTURE AVIATOR</Warn>);
                break;

            case 'home':
            case 'deck':
                if (pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    print(trimmed, <Out>NAV ▸ back on the <Hud>FLIGHT DECK</Hud></Out>);
                } else {
                    print(trimmed, <Out>NAV ▸ routing to <Hud>FLIGHT DECK</Hud>…</Out>);
                    router.push('/');
                }
                break;

            case 'about':
            case 'crew':
                scrollOrRoute(trimmed, 'about', '/#about', 'CREW MANIFEST');
                break;

            case 'goto': {
                const map = {
                    home: () => runCommand('home'),
                    deck: () => runCommand('home'),
                    about: () => runCommand('about'),
                    projects: () => scrollOrRoute(trimmed, null, '/projects', 'WAYPOINTS'),
                    waypoints: () => scrollOrRoute(trimmed, null, '/projects', 'WAYPOINTS'),
                    blog: () => scrollOrRoute(trimmed, null, '/blog', 'COMMS ARCHIVE'),
                    contact: () => scrollOrRoute(trimmed, null, '/contact', 'TRANSMIT'),
                    skills: () => scrollOrRoute(trimmed, 'skills', '/#skills', 'SYSTEMS'),
                };
                if (map[argLower]) map[argLower]();
                else print(trimmed, <Err>unknown destination: {arg || '(none)'} — try goto home|about|projects|blog|contact</Err>);
                break;
            }

            case 'projects':
            case 'waypoints':
                if (argLower.includes('live') || argLower.includes('open')) {
                    applyProjectFilter(trimmed, 'open', 'LIVE');
                } else if (argLower.includes('repo') || argLower.includes('github')) {
                    applyProjectFilter(trimmed, 'github', 'REPO');
                } else if (argLower.includes('all')) {
                    applyProjectFilter(trimmed, 'all', 'ALL');
                } else {
                    print(trimmed, (
                        <div>
                            <ul>
                                {projects.map((p, i) => (
                                    <li key={p.title} className="flex flex-wrap gap-x-2">
                                        <span className="text-ctp-overlay0">WPT{String(i + 1).padStart(2, '0')}</span>
                                        <Warn>{p.title}</Warn>
                                        <span className="text-ctp-overlay0">[{p.type === 'github' ? 'REPO' : 'LIVE'}]</span>
                                        <A href={p.link}>{p.link}</A>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-1 text-ctp-overlay0">
                                ▸ select &lt;n&gt; to lock a waypoint · projects --live / --repo to filter
                            </div>
                        </div>
                    ));
                }
                break;

            case 'select':
            case 'open': {
                let project = null;
                const n = parseInt(argLower, 10);
                if (!Number.isNaN(n) && n >= 1 && n <= projects.length) {
                    project = projects[n - 1];
                } else if (arg) {
                    project = projects.find((p) => p.title.toLowerCase().includes(argLower));
                }
                if (!project) {
                    print(trimmed, <Err>no waypoint matching &apos;{arg}&apos; — run &apos;projects&apos; for the list</Err>);
                    break;
                }
                const slug = projectSlug(project.title);
                if (pathname === '/projects') {
                    emitConsole('projects.select', { slug });
                } else {
                    router.push(`/projects?select=${slug}`);
                }
                print(trimmed, <Out>WPT LOCKED ▸ <Warn>{project.title}</Warn></Out>);
                break;
            }

            case 'blog':
            case 'comms':
                if (arg) {
                    runCommand(`search ${arg}`);
                    break;
                }
                print(trimmed, (
                    <div>
                        <ul>
                            {blogs.map((b) => (
                                <li key={b.slug} className="flex flex-wrap gap-x-2">
                                    <span className="text-ctp-overlay0">[{b.date}]</span>
                                    <L href={`/blog/${b.slug}`}>{b.title}</L>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-1 text-ctp-overlay0">▸ search &lt;query&gt; to grep the archive</div>
                    </div>
                ));
                break;

            case 'search': {
                if (!arg) {
                    print(trimmed, <Err>usage: search &lt;query&gt;</Err>);
                    break;
                }
                const matches = blogs.filter((b) => b.title.toLowerCase().includes(argLower));
                if (pathname === '/blog') emitConsole('blog.search', { q: arg });
                print(trimmed, matches.length === 0 ? (
                    <Out>no transmissions matching <Warn>{arg}</Warn></Out>
                ) : (
                    <div>
                        <div className="text-ctp-overlay0">{matches.length} MATCH{matches.length > 1 ? 'ES' : ''} DECODED:</div>
                        <ul>
                            {matches.map((b) => (
                                <li key={b.slug} className="flex flex-wrap gap-x-2">
                                    <span className="text-ctp-overlay0">[{b.date}]</span>
                                    <L href={`/blog/${b.slug}`}>{b.title}</L>
                                </li>
                            ))}
                        </ul>
                        {pathname !== '/blog' && (
                            <div className="mt-1 text-ctp-overlay0">▸ <L href={`/blog?q=${encodeURIComponent(arg)}`}>open filtered archive</L></div>
                        )}
                    </div>
                ));
                break;
            }

            case 'contact':
                print(trimmed, (
                    <div className="space-y-0.5">
                        <div><span className="text-ctp-overlay0">FREQ 1 · EMAIL ....</span> <Hud>contact@abmoallim.com</Hud></div>
                        <div><span className="text-ctp-overlay0">FREQ 2 · PAGE .....</span> <L href="/contact">/contact</L></div>
                        <div className="text-ctp-overlay0">▸ &apos;copy email&apos; to grab the address</div>
                    </div>
                ));
                break;

            case 'copy': {
                const key = argLower || 'email';
                const value = COPY_TARGETS[key];
                if (!value) {
                    print(trimmed, <Err>nothing to copy for &apos;{arg}&apos; — try email | linkedin | github | x | site</Err>);
                    break;
                }
                if (navigator.clipboard) {
                    navigator.clipboard
                        .writeText(value)
                        .then(() => print(trimmed, <Out><Hud>✓</Hud> copied {key} ▸ <Warn>{value}</Warn></Out>))
                        .catch(() => print(trimmed, <Out>clipboard unavailable — {key}: <Warn>{value}</Warn></Out>));
                } else {
                    print(trimmed, <Out>clipboard unavailable — {key}: <Warn>{value}</Warn></Out>);
                }
                break;
            }

            case 'resume':
            case 'cv':
                window.open('/imgs/resume.pdf', '_blank', 'noopener,noreferrer');
                print(trimmed, <Out>DOC ▸ opening <Hud>resume.pdf</Hud> in a new tab…</Out>);
                break;

            case 'skills':
            case 'stack':
            case 'systems':
                print(trimmed, (
                    <div>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                            {technologies.map((t) => (
                                <span key={t.name} className={t.color}>{t.name}</span>
                            ))}
                        </div>
                        <div className="mt-1 text-ctp-overlay0">▸ full systems board: <L href="/#skills">/#skills</L></div>
                    </div>
                ));
                break;

            case 'socials':
                print(trimmed, (
                    <ul>
                        {socials.map((s) => (
                            <li key={s.name} className="flex gap-x-2">
                                <span className="min-w-[6rem] text-ctp-overlay0">{s.name.toUpperCase()} ▸</span>
                                <A href={s.url}>{s.url}</A>
                            </li>
                        ))}
                    </ul>
                ));
                break;

            case 'theme': {
                const themes = { green: '', amber: 'amber', mauve: 'mauve' };
                if (!(argLower in themes)) {
                    print(trimmed, <Err>usage: theme green | amber | mauve</Err>);
                    break;
                }
                if (themes[argLower]) document.documentElement.dataset.hud = themes[argLower];
                else delete document.documentElement.dataset.hud;
                print(trimmed, <Out>HUD ▸ phosphor set to <Hud>{argLower.toUpperCase()}</Hud></Out>);
                break;
            }

            case 'crt':
                if (argLower === 'off') {
                    document.documentElement.dataset.crt = 'off';
                    print(trimmed, <Out>CRT ▸ scanlines <Warn>DISABLED</Warn></Out>);
                } else if (argLower === 'on' || argLower === '') {
                    delete document.documentElement.dataset.crt;
                    print(trimmed, <Out>CRT ▸ scanlines <Hud>ENABLED</Hud></Out>);
                } else {
                    print(trimmed, <Err>usage: crt on | off</Err>);
                }
                break;

            case 'radar':
            case 'ping':
                emitConsole('radar.ping');
                if (pathname === '/') {
                    document.getElementById('radar-scope')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    print(trimmed, <Out>RADAR ▸ sweep initiated — {projects.length} contacts on scope</Out>);
                } else {
                    print(trimmed, <Out>no scope on this page — &apos;home&apos; to reach the flight deck</Out>);
                }
                break;

            case 'reboot':
                if (pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    emitConsole('boot.replay');
                    print(trimmed, <Out>SYS ▸ reinitializing flight deck…</Out>);
                } else {
                    print(trimmed, <Out>SYS ▸ rebooting to <Hud>FLIGHT DECK</Hud>…</Out>);
                    router.push('/');
                }
                break;

            case 'clear':
                setEntries([]);
                setOpen(false);
                break;

            default:
                print(trimmed, <Err>command not found: {trimmed}. type &apos;help&apos; for options.</Err>);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        runCommand(input);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(null);
        setInput('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (history.length === 0) return;
            const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(next);
            setInput(history[next]);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (historyIndex === null) return;
            const next = historyIndex + 1;
            if (next >= history.length) {
                setHistoryIndex(null);
                setInput('');
            } else {
                setHistoryIndex(next);
                setInput(history[next]);
            }
        }
    };

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 font-mono">
            {open && entries.length > 0 && (
                <div className="mx-auto w-full max-w-5xl px-2 sm:px-4">
                    <div className="border border-b-0 border-ctp-surface1 bg-ctp-crust/95 backdrop-blur">
                        <div className="flex items-center justify-between border-b border-ctp-surface1/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0 sm:px-4">
                            <span><span className="text-hud">▮</span> CONSOLE OUTPUT</span>
                            <div className="flex gap-3">
                                <button type="button" onClick={() => setEntries([])} className="hover:text-hud">CLEAR</button>
                                <button type="button" onClick={() => setOpen(false)} className="hover:text-hud">MINIMIZE</button>
                            </div>
                        </div>
                        <div ref={scrollRef} className="custom-scrollbar max-h-[45vh] overflow-y-auto px-3 py-2 text-xs sm:px-4 sm:text-sm">
                            {entries.map((entry) => (
                                <div key={entry.id} className="mb-2.5">
                                    <div className="flex flex-wrap gap-x-2">
                                        <span className="text-ctp-overlay0">{entry.ts}</span>
                                        <span className="text-hud">{PROMPT}</span>
                                        <span className="text-ctp-text">{entry.cmd}</span>
                                    </div>
                                    <div className="mt-0.5 pl-3 sm:pl-4">{entry.out}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="border-t border-ctp-surface1 bg-ctp-crust/95 backdrop-blur">
                <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-5xl items-center gap-2 px-3 py-2.5 sm:px-4">
                    {entries.length > 0 && !open && (
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-ctp-overlay0 hover:text-hud"
                        >
                            ▲ OUT
                        </button>
                    )}
                    <label htmlFor="global-console-input" className="hidden shrink-0 text-sm text-hud sm:block">
                        {PROMPT}
                    </label>
                    <span className="shrink-0 text-sm text-hud sm:hidden" aria-hidden="true">$</span>
                    <input
                        id="global-console-input"
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        placeholder="type 'help' — press / to focus"
                        aria-label="Command console input"
                        className="w-full flex-1 bg-transparent text-sm text-ctp-text caret-hud outline-none placeholder:text-ctp-overlay0 focus-visible:outline-none"
                    />
                    <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.2em] text-ctp-overlay0 md:block">
                        CMD CONSOLE
                    </span>
                </form>
            </div>
        </div>
    );
}
