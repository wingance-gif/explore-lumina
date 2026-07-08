import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import type { Tour } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <motion.div variants={fadeUp} className="group">
      <Link
        to="/tours/$slug"
        params={{ slug: tour.slug }}
        className="block overflow-hidden rounded-3xl bg-surface shadow-elevated"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 top-5 flex items-start justify-between">
            <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90">
              {tour.category}
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-accent text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight size={14} />
            </span>
          </div>
          <div className="absolute inset-x-5 bottom-5">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/90">
              <span className="inline-flex items-center gap-1"><Calendar size={12} /> {tour.days}D / {tour.nights}N</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span className="inline-flex items-center gap-1"><MapPin size={12} /> {tour.destination}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight text-balance text-white">
              {tour.title}
            </h3>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">Tailored itinerary</span>
              <span className="text-xs text-white/80 group-hover:text-primary transition-colors">View itinerary →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
