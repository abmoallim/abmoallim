/* eslint-disable @next/next/no-img-element */
// app/blog/page.js

'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
    {
        title: '2025: What Actually Happened',
        slug: '2025-what-actually-happened',
        image: '/imgs/my25.png',
        readingTime: '3 min read',
        date: 'December 21, 2025',
    },
    {
        title: 'I Loved Cursor Pro Until the Credits Changed',
        slug: 'i-loved-cursor-pro-until-the-credits-changed',
        image: '/imgs/I-loved-cursor.png',
        readingTime: '7 min read',
        date: 'August 17, 2025',
    },
    {
        title: 'Reflecting on My 2024',
        slug: 'my-2024',
        image: '/imgs/my-2024.png',
        readingTime: '5 min read',
        date: 'December 13, 2024',
    },
    {
        title: 'OpenAI\'s Advanced Voice Mode: I tried to teach it Somali language',
        slug: 'openai-advanced-voice-model-deep-dive',
        image: '/imgs/openai.png',
        readingTime: '5 min read',
        date: 'September 28, 2024',
    },
    {
        title: 'Web Scraping with Playwright and Node.js: A Practical Tutorial',
        slug: 'web-scraping-playwright-node',
        image: '/imgs/web-scraping.png',
        readingTime: '5 min read',
        date: 'August 24, 2024',
    },
    
    // Add more blog entries here
];

const ITEMS_PER_PAGE = 6;

const Blog = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(ITEMS_PER_PAGE);

    const loadMore = () => {
        setVisibleBlogs(prevVisible => Math.min(prevVisible + ITEMS_PER_PAGE, blogs.length));
    };

    return (
        <section id="blog" className="relative overflow-hidden pt-36 pb-20 text-foreground">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/95 to-background"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.08),_transparent_55%)]"></div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(transparent_95%,rgba(79,70,229,0.15)),linear-gradient(90deg,transparent_96%,rgba(56,189,248,0.15))] bg-[length:140px_140px] opacity-30"></div>

            <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-14 flex flex-col items-center text-center">
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-mono uppercase tracking-[0.35em] text-primary/80">Writing</span>
                    <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Blog Dispatches</h2>
                    {/* <p className="mt-4 max-w-2xl text-sm font-mono uppercase tracking-[0.24em] text-muted-foreground/70">Signal over noise—personal engineering notes, field reports, and year-in-review capsules.</p> */}
                </div>

                <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
                    {blogs.slice(0, visibleBlogs).map((blog, index) => (
                        <Link key={index} href={`/blog/${blog.slug}`} className="group">
                            <Card className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_45px_-25px_rgba(59,130,246,0.6)]">
                                <div className="absolute inset-x-6 top-4 flex justify-between text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground/70">
                                    <span>{blog.readingTime}</span>
                                    <span className="text-muted-foreground/60">{blog.date}</span>
                                </div>

                                <div className="relative mt-12 h-48 overflow-hidden rounded-2xl border border-border/60 bg-muted/40">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                </div>

                                <CardContent className="relative mt-auto flex flex-col gap-4 p-6">
                                    <div>
                                        <h3 className="text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                                            {blog.title}
                                        </h3>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground/70">
                                        <span>Open Log</span>
                                        <span className="flex items-center gap-2 text-primary">
                                            Read
                                            <span className="inline-block h-2 w-2 rounded-full bg-primary/60 shadow-[0_0_12px_rgba(59,130,246,0.55)]"></span>
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {visibleBlogs < blogs.length && (
                    <div className="mt-12 flex justify-center">
                        <Button
                            onClick={loadMore}
                            variant="secondary"
                            className="relative border border-primary/50 bg-primary/10 px-8 py-5 font-mono uppercase tracking-[0.4em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
