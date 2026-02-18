import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";
import { RichText } from "@/components/blog/RichText";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl py-8 px-4">
      <header className="mb-8">
        {post.publishedDate && (
          <time dateTime={post.publishedDate} className="text-sm text-gray-600">
            {new Date(post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
        {post.excerpt && (
          <p className="text-xl text-gray-600">{post.excerpt}</p>
        )}
      </header>

      {post.featuredImage &&
        typeof post.featuredImage === "object" &&
        post.featuredImage.url && (
          <div className="mb-8 relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

      <div className="prose prose-lg max-w-none">
        <RichText content={post.content} />
      </div>
    </article>
  );
}
