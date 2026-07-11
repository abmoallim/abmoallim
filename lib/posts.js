import { postsData } from './posts-data';

export function getPostSlugs() {
    return postsData.map((post) => `${post.slug}.md`);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, '');
    const post = postsData.find((p) => p.slug === realSlug);

    if (!post) {
        throw new Error(`Post not found: ${realSlug}`);
    }

    return post;
}

export function getAllPosts() {
    return postsData;
}
