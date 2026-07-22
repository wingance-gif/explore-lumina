import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Calendar, Check, MapPin, X } from "lucide-react";
import { TOURS } from "@/content/site";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = TOURS.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tour.title} | Sahara Wild` },
      { name: "description", content: loaderData?.tour.summary },
      { property: "og:title", content: loaderData?.tour.title },
      { property: "og:description", content: loaderData?.tour.summary },
      { property: "og:image", content: loaderData?.tour.image },
      { property: "og:url", content: `/tours/${loaderData?.tour.slug}` },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: `/tours/${loaderData?.tour.slug}` }],
  }),
  component: TourDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Tour not found</h1>
        <Link to="/tours" className="mt-6 inline-block text-primary">← All tours</Link>
      </div>
    </div>
  ),
});

function TourDetail() {
  const { tour } = Route.useLoaderData();
  return (
    <>
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 container-x mx-auto max-w-[1500px] h-full flex flex-col justify-end pb-20">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/90">
            <span className="rounded-full glass px-3 py-1 text-primary">{tour.category}</span>
            <span className="inline-flex items-center gap-1"><Calendar size={12} /> {tour.days}D / {tour.nights}N</span>
            <span className="inline-flex items-center gap-1"><MapPin size={12} /> {tour.destination}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl">
            {tour.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/85">{tour.summary}</p>
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1500px] py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl md:text-4xl">Day-by-day itinerary</h2>
          <ol className="mt-10 space-y-6">
            {tour.itinerary.map((step: { day: number; title: string; body: string }) => (
              <li key={step.day} className="glass rounded-2xl p-6 md:p-7 flex gap-5">
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-full bg-[#827768] text-white font-display text-lg">
                  {step.day}
                </div>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div>
              <h3 className="font-display text-2xl">What's included</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {tour.includes.map((i: string) => (
                  <li key={i} className="flex gap-3"><Check size={16} className="text-primary shrink-0 mt-0.5" /> {i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Not included</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/70">
                {tour.excludes.map((i: string) => (
                  <li key={i} className="flex gap-3"><X size={16} className="text-foreground/40 shrink-0 mt-0.5" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-fit glass-strong rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Tailored trip</p>
          <p className="mt-2 font-display text-3xl text-primary">Bespoke pricing</p>
          <p className="text-sm text-foreground/65">Every itinerary is quoted to your dates, party size and preferred camps.</p>


          <div className="mt-6 space-y-2 text-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">Highlights</p>
            {tour.highlights.map((h: string) => (
              <p key={h} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" /> {h}</p>
            ))}
          </div>

          <Link to="/plan-my-trip" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#827768] px-6 py-4 text-sm font-medium text-white shadow-glow-lime hover:scale-[1.02] transition-transform">
            Enquire about this tour <ArrowRight size={14} />
          </Link>
          <a href="https://wa.me/255686166360" target="_blank" rel="noreferrer" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-4 text-sm hover:bg-surface-elevated transition-colors">
            Chat on WhatsApp
          </a>
        </aside>
      </section>
    </>
  );
}
