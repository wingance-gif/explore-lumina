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
    <section className="container-x mx-auto max-w-[1100px] py-32 md:py-40">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Travellers</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
          Stories from the field.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm md:text-base text-foreground/65 leading-relaxed">
          Unfiltered words from the people who trusted us with their once-in-a-lifetime journey.
        </p>
      </div>
      <div className="mt-16 relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-3xl rounded-3xl bg-surface/60 backdrop-blur-md border border-border/60 shadow-elevated p-10 md:p-14 text-center"
          >
            <Quote className="mx-auto text-primary" size={40} />
            <blockquote className="mt-8 font-display text-2xl md:text-3xl leading-snug text-balance text-foreground/95">
              "{t.quote}"
            </blockquote>
            <div className="mx-auto mt-10 h-px w-16 bg-primary/40" />
            <figcaption className="mt-6 text-sm uppercase tracking-[0.22em] text-foreground/70">
              <span className="font-medium text-foreground">{t.name}</span> <span className="text-primary">·</span> {t.country}
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
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
