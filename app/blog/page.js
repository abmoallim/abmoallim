/* eslint-disable @next/next/no-img-element */
// app/blog/page.js

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

const Blog = () => {
    return (
        <section id="blog" className="pt-32 py-16 bg-white text-gray-700">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <a 
                            key={index} 
                            href={`/blog/${blog.slug}`} 
                            className="block bg-white border rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg hover:shadow-gray-800"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                                    <span>{blog.readingTime}</span>
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
