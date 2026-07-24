import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/content/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Tanzania Exploration" },
      { name: "description", content: "Answers to the most common questions about safaris, Kilimanjaro treks, Zanzibar beaches, visas, health and how we tailor every trip." },
      { property: "og:title", content: "Frequently Asked Questions — Tanzania Exploration" },
      { property: "og:description", content: "Visas, vaccinations, best seasons, packing, booking and payment — everything you need before your trip." },
      { property: "og:image", content: IMAGES.heroSerengeti },
    ],
  }),
  component: FAQsPage,
});

const FAQS: { q: string; a: string }[] = [
  { q: "When is the best time to go on safari?", a: "Tanzania's Northern Circuit is a year-round destination. June to October offers dry weather and the greatest wildlife density; January to March is calving season in the southern Serengeti; the Great Migration river crossings usually peak between July and September." },
  { q: "Do I need a visa to visit Tanzania?", a: "Most nationalities need a visa. You can apply online in advance via the eVisa portal, or obtain one on arrival at major airports. We provide a briefing document with the latest requirements after you book." },
  { q: "What vaccinations do I need?", a: "A yellow fever certificate is required only if you are arriving from a yellow-fever country. Consult your travel clinic about routine vaccinations, hepatitis A/B, typhoid and antimalarials. Malaria prophylaxis is recommended for the mainland." },
  { q: "How fit do I need to be for Kilimanjaro?", a: "A good baseline of cardiovascular fitness is essential. You do not need to be a mountaineer, but training with long hikes, stair climbs and altitude prep in the months before your climb makes a big difference to comfort and summit success." },
  { q: "How do I book a trip?", a: "Send us your dates, party size and interests via the Plan My Trip form. We reply within 24 hours with a tailored proposal. A 30% deposit secures the booking; the balance is due 60 days before travel." },
  { q: "Are your safaris private or shared?", a: "By default, every safari we run is private — your own vehicle, guide and itinerary. Shared departures are available on request for solo travellers looking to keep costs down." },
  { q: "What is included in the price?", a: "Park fees, accommodation, all meals on safari, transport in a private 4x4, professional English-speaking guide and airport transfers. International flights, visas, tips and travel insurance are excluded." },
  { q: "Is Tanzania safe for tourists?", a: "Yes. Tanzania is one of the most stable countries in East Africa. Our guides are trained in wildlife and travel safety, and every itinerary is planned around trusted lodges, camps and roads." },
];

function FAQsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img src={IMAGES.heroSerengeti} alt="FAQs" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 h-full container-x mx-auto max-w-[1500px] flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">Help centre</p>
          <h1 className="mt-4 font-display font-light text-5xl md:text-7xl text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">Frequently asked questions</h1>
        </div>
      </section>

      <section className="container-x mx-auto max-w-3xl py-20">
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-lg border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-lg text-foreground">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-foreground/75 leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
