import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS, DESTINATION_DETAILS, TOURS } from "@/content/site";
import { TourCard } from "@/components/site/TourCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const d = DESTINATIONS.find((x) => x.slug === params.slug);
    if (!d) throw notFound();
    const detail = DESTINATION_DETAILS[params.slug];
    const related = TOURS.filter((t) =>
      t.destination.toLowerCase().includes(d.name.split(" ")[0].toLowerCase())
    ).slice(0, 3);
    return { destination: d, detail, related };
  },
  head: ({ loaderData }) => {
    const hero = loaderData?.detail?.hero ?? loaderData?.destination.image;
    return {
      meta: [
        { title: `${loaderData?.destination.name} — Sahara Wild` },
        { name: "description", content: loaderData?.destination.short },
        { property: "og:title", content: `${loaderData?.destination.name} — Tanzania` },
        { property: "og:description", content: loaderData?.destination.short },
        { property: "og:image", content: hero },
        { property: "og:url", content: `/destinations/${loaderData?.destination.slug}` },
      ],
      links: [{ rel: "canonical", href: `/destinations/${loaderData?.destination.slug}` }],
    };
  },
  component: DestinationDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Destination not found</h1>
        <Link to="/destinations" className="mt-6 inline-block text-primary">← All destinations</Link>
      </div>
    </div>
  ),
});

function DestinationDetailPage() {
  const { destination: d, detail, related } = Route.useLoaderData();
  const heroImg = detail?.hero ?? d.image;

  return (
    <>
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt={d.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-20">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <MapPin size={12} /> {d.region}
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
            {d.name}
          </h1>
        </div>
      </section>

      {/* Intro + highlights aside */}
      <section className="container-x mx-auto max-w-[1100px] py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5">
          {(detail?.intro ?? [d.long]).map((p: string, i: number) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>

        <aside className="glass rounded-2xl p-6 h-fit">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Highlights</p>
          <ul className="mt-4 space-y-2 text-sm">
            {d.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" /> {h}
              </li>
            ))}
          </ul>
          {detail?.generalInfo && (
            <>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-primary">Park info</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                {detail.generalInfo.map((g: { label: string; value: string }) => (
                  <div key={g.label} className="flex justify-between gap-3 border-b border-border/40 pb-1.5">
                    <dt className="text-foreground/60">{g.label}</dt>
                    <dd className="text-foreground/90 text-right">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
          <Link
            to="/plan-my-trip"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#827768] px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Plan a trip here <ArrowRight size={14} />
          </Link>
        </aside>
      </section>

      {/* Detailed sections */}
      {detail?.sections && detail.sections.length > 0 && (
        <section className="container-x mx-auto max-w-[1100px] pb-20">
          <ScrollReveal className="grid gap-10 md:grid-cols-2">
            {detail.sections.map((s: { title: string; body: string }) => (
              <article key={s.title}>
                <h2 className="font-display text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </ScrollReveal>
        </section>
      )}

      {/* Activities */}
      {detail?.activities && detail.activities.length > 0 && (
        <section className="container-x mx-auto max-w-[1100px] pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Activities</p>
          <h2 className="mt-3 font-display text-2xl md:text-4xl">Things to do</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {detail.activities.map((a: string) => (
              <li key={a} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/85">
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {detail?.gallery && detail.gallery.length > 0 && (
        <section className="container-x mx-auto max-w-[1500px] pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
          <h2 className="mt-3 font-display text-2xl md:text-4xl">From the park</h2>
          <ScrollReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.gallery.map((src: string, i: number) => (
              <div key={`${src}-${i}`} className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <img
                  src={src}
                  alt={`${d.name} ${i + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </ScrollReveal>
        </section>
      )}

      {related.length > 0 && (
        <section className="container-x mx-auto max-w-[1500px] pb-32">
          <h2 className="font-display text-3xl md:text-5xl mb-10">Tours in {d.name.split(" ")[0]}</h2>
          <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t: typeof TOURS[number]) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </ScrollReveal>
        </section>
      )}
    </>
  );
}
