'use client';
// Blog as a comms archive: dispatch rows with a live grep field,
// also driven by the console's `search <query>` command.
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { blogs } from '@/lib/blogs';
import { onConsole } from '@/lib/consoleBus';
import HudPanel from '../components/cockpit/HudPanel';

export default function Blog() {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q = params.get('q');
        if (q) setQuery(q);
    }, []);

    useEffect(() => onConsole('blog.search', ({ q }) => setQuery(q)), []);

    const visible = blogs.filter((b) => b.title.toLowerCase().includes(query.trim().toLowerCase()));

    return (
        <main className="mx-auto max-w-6xl space-y-6 px-3 pb-8 pt-20 sm:px-6">
            <HudPanel
                title="COMMS ARCHIVE — DISPATCHES"
                right={`${visible.length}/${blogs.length} LOGS`}
                bodyClassName="p-0 sm:p-0"
            >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ctp-surface1/60 px-4 py-3 sm:px-6">
                    <div className="flex min-w-0 flex-1 items-center gap-2 border border-ctp-surface1 bg-ctp-crust/60 px-3 py-1.5 sm:max-w-sm">
                        <Search className="h-3.5 w-3.5 shrink-0 text-ctp-overlay0" />
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="grep transmissions…"
                            aria-label="Search blog posts"
                            className="w-full bg-transparent font-mono text-xs text-ctp-text caret-hud outline-none placeholder:text-ctp-overlay0 focus-visible:outline-none"
                        />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ctp-overlay0">
                        console: search &lt;query&gt;
                    </span>
                </div>

                {visible.length === 0 ? (
                    <p className="px-4 py-10 text-center font-mono text-sm text-ctp-overlay0 sm:px-6">
                        NO TRANSMISSIONS MATCHING <span className="text-hud2">{query}</span>
                    </p>
                ) : (
                    <ol>
                        {visible.map((blog) => (
                            <li key={blog.slug} className="border-b border-ctp-surface0/60 last:border-b-0">
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="group grid grid-cols-[1fr,auto] items-center gap-x-4 px-4 py-4 transition-colors hover:bg-hud/5 sm:grid-cols-[auto,1fr,auto,auto] sm:gap-x-6 sm:px-6"
                                >
                                    <span className="relative hidden h-14 w-24 shrink-0 overflow-hidden border border-ctp-surface1/70 sm:block">
                                        <Image
                                            src={blog.image}
                                            alt=""
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="96px"
                                        />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">
                                            [{blog.date}] · {blog.readingTime.toUpperCase()}
                                        </span>
                                        <span className="mt-1 block font-mono text-sm font-semibold leading-snug text-ctp-text transition-colors group-hover:text-hud sm:text-base">
                                            {blog.title}
                                        </span>
                                    </span>
                                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ctp-overlay0 sm:block">
                                        SIG OK
                                    </span>
                                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-hud opacity-70 transition-opacity group-hover:opacity-100">
                                        DECODE ▸
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                )}
            </HudPanel>
        </main>
    );
}
