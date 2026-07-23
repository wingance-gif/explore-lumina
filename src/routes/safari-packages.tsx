import { createFileRoute } from "@tanstack/react-router";
import { PackageListing } from "@/components/site/PackageListing";
import { TOURS, IMAGES } from "@/content/site";

export const Route = createFileRoute("/safari-packages")({
  head: () => ({
    meta: [
      { title: "Safari Packages | Tanzania Exploration" },
      { name: "description", content: "Curated Tanzania safari packages — luxury, lodge, camping and specialist itineraries across the Northern Circuit." },
      { property: "og:title", content: "Safari Packages — Tanzania Exploration" },
      { property: "og:description", content: "Luxury, lodge and camping safaris across Serengeti, Ngorongoro and Tarangire." },
      { property: "og:image", content: IMAGES.heroSerengeti },
    ],
  }),
  component: SafariPackagesPage,
});

function SafariPackagesPage() {
  const tours = TOURS.filter((t) =>
    ["Luxury Safari", "Lodge Safari", "Camping Safari", "Birding"].includes(t.category),
  );
  return (
    <PackageListing
      eyebrow="Packages"
      title="Safari Packages"
      intro="Explore Tanzania's most unforgettable wildlife experiences, from short getaways to extended adventures across the legendary Northern and Southern Circuits."
      heroImage={IMAGES.heroSerengeti}
      tours={tours}
      featuredSlugs={["6-days-tanzania-luxury-scenic-lodge-safari", "4-days-tanzania-lodge-safari"]}
    />
  );
}
