import configPromise from "../../payload.config";
import { getPayload } from "payload";

export async function getBlogPosts() {
  const payload = await getPayload({
    config: configPromise,
  });

  const result = await payload.find({
    collection: "blog",
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedDate",
    limit: 100,
  });

  return result.docs;
}

export async function getBlogPostBySlug(slug: string) {
  const payload = await getPayload({
    config: configPromise,
  });

  const result = await payload.find({
    collection: "blog",
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: "published",
          },
        },
      ],
    },
    limit: 1,
  });

  return result.docs[0] || null;
}

export async function getBlogPostSlugs() {
  const payload = await getPayload({
    config: configPromise,
  });

  const result = await payload.find({
    collection: "blog",
    where: {
      status: {
        equals: "published",
      },
    },
    limit: 1000,
    select: {
      slug: true,
    },
  });

  return result.docs.map((post) => post.slug);
}
