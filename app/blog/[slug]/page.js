import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

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
        <section className="pt-32 py-16 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h1 className="text-4xl font-bold text-center mb-4">
                            {data.title}
                        </h1>
                        <div className="flex justify-center items-center space-x-4 mb-8">
                            <Badge variant="secondary" className="flex items-center">
                                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                                {data.date}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                                {data.readingTime}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <article className="prose dark:prose-invert max-w-none">
                            <MDXRemote
                                source={content}
                                options={{
                                    mdxOptions: {
                                        remarkPlugins: [remarkGfm],
                                    },
                                }}
                            />
                        </article>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
