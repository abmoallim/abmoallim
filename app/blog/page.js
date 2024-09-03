/* eslint-disable @next/next/no-img-element */
// app/blog/page.js

'use client';
import { useState } from 'react';

const blogs = [
    {
        title: 'Web Scraping with Playwright and Node.js: A Practical Tutorial',
        slug: 'web-scraping-playwright-node',
        image: '/imgs/web-scraping.png',
        readingTime: '8 min read',
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
        <section id="blog" className="pt-32 py-16 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-slate-400 mb-8">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(0, visibleBlogs).map((blog, index) => (
                        <a 
                            key={index} 
                            href={`/blog/${blog.slug}`} 
                            className="block bg-white dark:bg-slate-900 text-black dark:text-white border rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg hover:shadow-gray-800"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-500 mb-2">{blog.title}</h3>
                                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                                    <span>{blog.readingTime}</span>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                {visibleBlogs < blogs.length && (
                    <div className="text-center mt-8">
                        <button 
                            onClick={loadMore}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-2 px-4 rounded-full"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
