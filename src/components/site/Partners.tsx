import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import karibu from "@/assets/partners/karibu.png.asset.json";
import salinero from "@/assets/partners/salinero.png.asset.json";
import wilderness from "@/assets/partners/wilderness.png.asset.json";
import asilia from "@/assets/partners/asilia.png.asset.json";
import acacia from "@/assets/partners/acacia.png.asset.json";
import escape from "@/assets/partners/escape.png.asset.json";

const PARTNERS = [
  { name: "Karibu Camps & Lodges", src: karibu.url },
  { name: "Salinero Hotel", src: salinero.url },
  { name: "Wilderness", src: wilderness.url },
  { name: "Asilia", src: asilia.url },
  { name: "Acacia Collections", src: acacia.url },
  { name: "Escape Lodge", src: escape.url },
];

export function Partners() {
  return (
    <section className="container-x mx-auto max-w-[1500px] py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our partners</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
          In the company of Tanzania's finest.
        </h2>
        <p className="mt-5 text-base text-foreground/70">
          We collaborate with the country's most respected camps, lodges and safari collections —
          hand-picked for their conservation ethos, service, and unforgettable settings.
        </p>
      </div>

      <div
        className="mt-14 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-partners-marquee gap-24 pr-24 hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-40 shrink-0 items-center justify-center"
              aria-hidden={i >= PARTNERS.length ? true : undefined}
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-32 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
