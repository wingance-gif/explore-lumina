import { createFileRoute } from "@tanstack/react-router";
import { PackageListing } from "@/components/site/PackageListing";
import { TOURS, IMAGES } from "@/content/site";

export const Route = createFileRoute("/trekking-packages")({
  head: () => ({
    meta: [
      { title: "Trekking Packages | Tanzania Exploration" },
      { name: "description", content: "Kilimanjaro and Mount Meru trekking packages — Machame, Lemosho and specialist routes with certified KPAP guides." },
      { property: "og:title", content: "Trekking Packages — Tanzania Exploration" },
      { property: "og:description", content: "Summit Kilimanjaro and Mount Meru with certified guides and best-in-class acclimatisation." },
      { property: "og:image", content: IMAGES.heroKilimanjaro },
    ],
  }),
  component: TrekkingPackagesPage,
});

function TrekkingPackagesPage() {
  const tours = TOURS.filter((t) => t.category === "Trekking");
  return (
    <PackageListing
      eyebrow="Packages"
      title="Trekking Packages"
      intro="Stand on the Roof of Africa. Our Kilimanjaro and Mount Meru treks are led by certified KPAP guides with the acclimatisation days, crew ratios and safety standards that put summit success first."
      heroImage={IMAGES.heroKilimanjaro}
      tours={tours}
    />
  );
}
