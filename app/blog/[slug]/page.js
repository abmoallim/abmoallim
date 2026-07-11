import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';

export async function generateStaticParams() {
    return getPostSlugs().map((filename) => ({
        slug: filename.replace('.md', ''),
    }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;

    const { contentHtml, frontmatter: data } = getPostBySlug(slug);

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

            <article
                className="prose max-w-none prose-headings:text-ink prose-p:text-ink/80 prose-a:text-clay prose-strong:text-ink prose-code:text-clay prose-code:before:content-none prose-code:after:content-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </main>
    );
}
