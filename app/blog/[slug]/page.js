import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((filename) => ({
        slug: filename.replace('.md', ''),
    }));

    return paths;
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;

    const filePath = path.join('posts', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return (
        <main className="mx-auto max-w-3xl space-y-6 px-4 pb-8 pt-10 sm:px-6">
            <Link
                href="/blog"
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-clay"
            >
                ← Back to writing
            </Link>

            <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
                    {data.date} · {data.readingTime}
                </div>
                <h1 className="mt-1 text-2xl leading-tight sm:text-3xl">{data.title}</h1>
            </div>

            <article className="prose max-w-none prose-headings:text-ink prose-p:text-ink/80 prose-a:text-clay prose-strong:text-ink prose-code:text-clay prose-code:before:content-none prose-code:after:content-none">
                <MDXRemote
                    source={content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                />
            </article>
        </main>
    );
}
