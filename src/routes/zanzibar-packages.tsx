import { createFileRoute } from "@tanstack/react-router";
import { PackageListing } from "@/components/site/PackageListing";
import { TOURS, IMAGES } from "@/content/site";

export const Route = createFileRoute("/zanzibar-packages")({
  head: () => ({
    meta: [
      { title: "Zanzibar Packages | Tanzania Exploration" },
      { name: "description", content: "Zanzibar beach escapes, honeymoon journeys and safari-and-sand combinations along the Indian Ocean coast." },
      { property: "og:title", content: "Zanzibar Packages — Tanzania Exploration" },
      { property: "og:description", content: "White-sand beaches, dhow cruises and Stone Town culture — bespoke Zanzibar itineraries." },
      { property: "og:image", content: IMAGES.heroZanzibar },
    ],
  }),
  component: ZanzibarPackagesPage,
});

function ZanzibarPackagesPage() {
  const tours = TOURS.filter((t) => ["Beach", "Honeymoon"].includes(t.category));
  return (
    <PackageListing
      eyebrow="Packages"
      title="Zanzibar Packages"
      intro="Turquoise water, spice-scented streets and barefoot luxury on the Swahili coast. Combine the bush and the beach, or unwind on Zanzibar's finest sands with a private villa and sunset dhow."
      heroImage={IMAGES.heroZanzibar}
      tours={tours}
    />
  );
}
