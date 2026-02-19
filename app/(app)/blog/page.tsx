import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <Link
              href={`/blog/${post.slug}`}
              className="block hover:opacity-80 transition-opacity"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            </Link>
            {post.excerpt && (
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            )}
            {post.publishedDate && (
              <time
                dateTime={post.publishedDate}
                className="text-base text-gray-500"
              >
                {new Date(post.publishedDate).toLocaleDateString()}
              </time>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
