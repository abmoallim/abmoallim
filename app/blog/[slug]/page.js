import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export default async function BlogPostPage({ params }) {
    const { slug } = params;

    const filePath = path.join('posts', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return (
        <section className="pt-32 py-16 bg-white text-gray-700">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    {data.title}
                </h1>
                <div className="flex justify-center items-center mb-8">
                    <div className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md mx-2">
                        <span>{data.date}</span>
                    </div>
                    <div className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md mx-2">
                        <span>{data.readingTime}</span>
                    </div>
                </div>
                <article className="prose max-w-none">
                    <MDXRemote
                        source={content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            },
                        }}
                    />
                </article>
            </div>
        </section>
    );
}
