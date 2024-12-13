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
        <section id="blog" className="pt-36 py-16 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(0, visibleBlogs).map((blog, index) => (
                        <Link key={index} href={`/blog/${blog.slug}`}>
                            <Card className="h-full transition-shadow hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-primary/20">
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    width={400} 
                                    height={200} 
                                    className="w-full h-48 object-cover"
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                                        <span>{blog.readingTime}</span>
                                        <span>{blog.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                {visibleBlogs < blogs.length && (
                    <div className="text-center mt-8">
                        <Button onClick={loadMore} variant="outline">
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
