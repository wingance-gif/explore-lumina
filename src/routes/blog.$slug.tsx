import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} | Tanzania Exploration` },
      { name: "description", content: loaderData?.post.excerpt },
      { property: "og:title", content: loaderData?.post.title },
      { property: "og:description", content: loaderData?.post.excerpt },
      { property: "og:image", content: loaderData?.post.image },
      { property: "og:url", content: `/blog/${loaderData?.post.slug}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/blog/${loaderData?.post.slug}` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: loaderData?.post.title,
        author: { "@type": "Person", name: loaderData?.post.author },
        datePublished: loaderData?.post.date,
        image: loaderData?.post.image,
      }),
    }],
  }),
  component: BlogPost,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Story not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary">← All stories</Link>
      </div>
    </div>
  ),
});

function renderBody(body: string) {
  return body.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.includes("**\n")) {
      const [headline, ...rest] = para.split("\n");
      return (
        <div key={i} className="mt-10">
          <h3 className="font-display text-2xl text-primary">{headline.replace(/\*\*/g, "")}</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/85">{rest.join(" ")}</p>
        </div>
      );
    }
    return <p key={i} className="mt-6 text-base leading-relaxed text-foreground/85 whitespace-pre-line">{para}</p>;
  });
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1100px] h-full flex flex-col justify-end pb-20">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.author}
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>
      <article className="container-x mx-auto max-w-[760px] py-20">
        <p className="font-display text-2xl text-foreground/90 leading-snug text-balance">{post.excerpt}</p>
        <div className="mt-8">{renderBody(post.body)}</div>
        <Link to="/blog" className="mt-16 inline-block text-sm text-primary">← All stories</Link>
      </article>
    </>
  );
}
