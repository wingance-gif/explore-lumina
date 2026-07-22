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

      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {PARTNERS.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group flex aspect-[4/3] items-center justify-center rounded-2xl bg-[#C2B6A2]/15 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-[#C2B6A2]/25 hover:-translate-y-1"
          >
            <img
              src={p.src}
              alt={p.name}
              loading="lazy"
              className="max-h-16 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:invert"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
