import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star } from "lucide-react";
import type { Tour } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function PackageCard({ tour, featured = false }: { tour: Tour; featured?: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-elevated transition-transform duration-300 hover:-translate-y-1"
    >
      <Link
        to="/tours/$slug"
        params={{ slug: tour.slug }}
        className="block relative aspect-[4/3] overflow-hidden"
      >
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/55 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
          {tour.category}
        </span>
        {featured && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#827768] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-elevated">
            <Star size={11} className="fill-white" /> Featured
          </span>
        )}
        <span className="absolute right-4 bottom-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#3D372F]">
          {tour.days}D / {tour.nights}N
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-snug text-foreground">
          {tour.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-foreground/70">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={12} /> {tour.days} Days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} /> {tour.destination}
          </span>
        </div>

        <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-3">
          {tour.summary}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border/50 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">From</p>
            <p className="font-display text-2xl text-[#827768] leading-none mt-1">
              ${tour.priceFrom.toLocaleString()}
              <span className="text-xs text-foreground/60 font-sans ml-1">/ pp</span>
            </p>
          </div>
          <Link
            to="/tours/$slug"
            params={{ slug: tour.slug }}
            className="shrink-0 rounded-sm bg-[#827768] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white hover:bg-[#6f6558] transition-colors"
          >
            View Tour
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
