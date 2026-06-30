import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/content/site";

function SunOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="32" cy="32" r="6" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 32 + Math.cos(a) * 11;
        const y1 = 32 + Math.sin(a) * 11;
        const x2 = 32 + Math.cos(a) * (i % 2 === 0 ? 22 : 17);
        const y2 = 32 + Math.sin(a) * (i % 2 === 0 ? 22 : 17);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
      })}
    </svg>
  );
}

export function CinematicHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 7500);
    return () => clearInterval(t);
  }, [paused]);

  const slide = HERO_SLIDES[i];
  const prev = () => setI((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setI((p) => (p + 1) % HERO_SLIDES.length);

  return (
    <section
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 9, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Center stage */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="text-[10px] md:text-xs font-light uppercase tracking-[0.45em] md:tracking-[0.55em] text-white/85 drop-shadow">
              {slide.eyebrow}
            </p>
            <h1 className="font-script text-white text-balance leading-[0.95] drop-shadow-[0_6px_30px_rgba(0,0,0,0.55)] mt-6 text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem]">
              {slide.title.replace(/\.$/, "")}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-[11px] md:text-xs font-light uppercase tracking-[0.35em] text-white/80">
              {slide.sub.split(" — ")[0] || slide.sub.split(".")[0]}
            </p>

            <div className="mt-10 flex flex-col items-center gap-6">
              <SunOrnament className="h-9 w-9 text-white/80" />
              <a
                href="/tours"
                className="inline-flex items-center justify-center rounded-sm border border-cream/80 bg-cream/95 px-9 py-3.5 text-[11px] font-medium uppercase tracking-[0.35em] text-primary-foreground hover:bg-white transition-colors"
              >
                Plan a trip
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom slide pager */}
      <div className="absolute bottom-8 md:bottom-10 inset-x-0 z-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/35 text-white/85 hover:bg-white hover:text-background transition-colors"
        >
          <ArrowLeft size={14} />
        </button>
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-[2px] rounded-full transition-all ${
                idx === i ? "w-10 bg-white" : "w-5 bg-white/35"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/35 text-white/85 hover:bg-white hover:text-background transition-colors"
        >
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
