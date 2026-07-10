'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { blogs } from '@/lib/blogs';

export default function Blog() {
    const [query, setQuery] = useState('');

    const visible = blogs.filter((b) => b.title.toLowerCase().includes(query.trim().toLowerCase()));

    return (
        <main className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6">
            <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-clay">writing/</div>
                <h1 className="mt-1">Writing</h1>
            </div>

            <div className="mb-6 flex items-center gap-2 border border-ink/15 px-3 py-2 sm:max-w-sm">
                <Search className="h-4 w-4 shrink-0 text-ink/40" />
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search posts…"
                    aria-label="Search blog posts"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
                />
            </div>

            {visible.length === 0 ? (
                <p className="py-10 text-center text-ink/50">No posts matching &ldquo;{query}&rdquo;</p>
            ) : (
                <ul className="divide-y divide-ink/10 border-y border-ink/10">
                    {visible.map((blog) => (
                        <li key={blog.slug}>
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="group grid grid-cols-[auto,1fr] items-center gap-4 py-4 sm:grid-cols-[96px,1fr]"
                            >
                                <span className="relative hidden h-14 w-24 shrink-0 overflow-hidden border border-ink/10 sm:block">
                                    <Image
                                        src={blog.image}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </span>
                                <span className="min-w-0">
                                    <span className="block font-mono text-xs text-ink/40">
                                        {blog.date} · {blog.readingTime}
                                    </span>
                                    <span className="mt-1 block leading-snug text-ink transition-colors group-hover:text-clay">
                                        {blog.title}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
