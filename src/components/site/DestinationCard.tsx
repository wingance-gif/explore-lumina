import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/motion";

type Props = {
  slug: string;
  name: string;
  short: string;
  image: string;
  region: string;
  highlights?: string[];
  index?: number;
};

export function DestinationCard({ slug, name, short, image, region, highlights = [], index = 0 }: Props) {
  return (
    <motion.article variants={fadeUp} className="group relative flex flex-col">
      <Link
        to="/destinations/$slug"
        params={{ slug }}
        className="relative block aspect-[3/4] overflow-hidden rounded-3xl"
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-6 top-6 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/80">
            {String(index + 1).padStart(2, "0")} / {region}
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors group-hover:bg-gradient-accent group-hover:text-primary-foreground">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6">
          <h3 className="font-display text-3xl leading-tight text-balance text-white">{name}</h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-2 text-pretty">{short}</p>
        </div>
      </Link>

      {highlights.length > 0 && (
        <details className="group/details mt-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm px-5 py-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={12} /> What you'll experience
            </span>
            <ChevronDown size={14} className="opacity-70 transition-transform duration-300 group-open/details:rotate-180" />
          </summary>
          <ul className="mt-3 grid gap-2 text-sm text-foreground/85">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </details>
      )}
    </motion.article>
  );
}
