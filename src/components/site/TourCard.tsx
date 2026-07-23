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
        className="block overflow-hidden rounded-3xl bg-surface shadow-elevated transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

          <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90">
                {tour.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#827768]/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
                <Calendar size={11} /> {tour.days}D / {tour.nights}N
              </span>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#827768] text-white translate-y-[-4px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg">
              <ArrowUpRight size={16} />
            </span>
          </div>

          <div className="absolute inset-x-5 bottom-5">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/85">
              <MapPin size={12} className="text-primary" />
              <span>{tour.destination}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl md:text-[1.65rem] leading-tight text-balance text-white">
              {tour.title}
            </h3>
            <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/60">From</p>
                <p className="text-sm font-medium text-white">Bespoke pricing</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 group-hover:bg-[#827768]">
                View Tour <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
