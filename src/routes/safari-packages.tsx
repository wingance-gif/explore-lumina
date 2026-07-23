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
      intro="From private luxury camps in the Serengeti to authentic mobile camping under the stars — every safari is hand-built around your pace, budget and the wildlife you most want to see."
      heroImage={IMAGES.heroSerengeti}
      tours={tours}
    />
  );
}
