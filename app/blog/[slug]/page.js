import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import HudPanel from '../../components/cockpit/HudPanel';

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
        <main className="mx-auto max-w-4xl space-y-6 px-3 pb-8 pt-20 sm:px-6">
            <Link
                href="/blog"
                className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-ctp-overlay0 transition-colors hover:text-hud"
            >
                ◂ RETURN TO ARCHIVE
            </Link>

            <HudPanel
                title="DECODED TRANSMISSION"
                right={`${(data.date || '').toUpperCase()} · ${(data.readingTime || '').toUpperCase()}`}
            >
                <h1 className="font-mono text-2xl font-bold leading-tight text-ctp-text hud-glow sm:text-3xl">
                    {data.title}
                </h1>

                <article className="prose prose-invert mt-6 max-w-none prose-headings:font-mono prose-a:text-ctp-sapphire prose-strong:text-ctp-text prose-code:text-hud">
                    <MDXRemote
                        source={content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            },
                        }}
                    />
                </article>
            </HudPanel>
        </main>
    );
}
