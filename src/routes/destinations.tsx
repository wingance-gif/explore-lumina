import { createFileRoute } from "@tanstack/react-router";
import { DestinationCard } from "@/components/site/DestinationCard";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { DESTINATIONS, IMAGES } from "@/content/site";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Serengeti, Ngorongoro, Kilimanjaro & Zanzibar | Tanzania Exploration" },
      { name: "description", content: "Tanzania's most iconic destinations — northern circuit safaris, southern wilderness, Kilimanjaro and the Zanzibar archipelago." },
      { property: "og:title", content: "Tanzania Destinations — Tanzania Exploration" },
      { property: "og:description", content: "From the Serengeti to Zanzibar — explore Tanzania's iconic parks and islands." },
      { property: "og:image", content: IMAGES.heroNgorongoro },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Destinations</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Eight ecosystems. One unforgettable country.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75">
          From the endless Serengeti to glacier-capped Kilimanjaro and the turquoise reefs of Zanzibar —
          choose your starting point, we'll script the rest.
        </p>
      </section>
      <section className="container-x mx-auto max-w-[1500px] pb-32">
        <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <DestinationCard key={d.slug} {...d} index={i} />
          ))}
        </ScrollReveal>
      </section>
    </>
  );
}
