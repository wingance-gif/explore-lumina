import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/content/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section className="container-x mx-auto max-w-[1100px] py-32">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Travellers</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
          Stories from the field.
        </h2>
      </div>
      <div className="mt-16 relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <Quote className="mx-auto text-primary" size={36} />
            <blockquote className="mt-8 font-display text-2xl md:text-3xl leading-snug text-balance text-foreground/95">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-8 text-sm uppercase tracking-[0.22em] text-foreground/60">
              {t.name} <span className="text-primary">·</span> {t.country}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-12 flex justify-center gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-2 bg-foreground/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
