import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, PawPrint } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { DestinationExperience } from "@/content/site";
import { PlanTripDialog } from "@/components/site/PlanTripDialog";

type Props = {
  slug: string;
  name: string;
  short: string;
  image: string;
  region: string;
  highlights?: string[];
  experiences?: DestinationExperience[];
  index?: number;
};

export function DestinationCard({
  slug,
  name,
  short,
  image,
  region,
  highlights = [],
  experiences = [],
  index = 0,
}: Props) {
  const hasExperiences = experiences.length > 0;
  const hasContent = hasExperiences || highlights.length > 0;

  return (
    <motion.article variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-elevated">
      <Link
        to="/destinations/$slug"
        params={{ slug }}
        className="relative block aspect-[3/4] overflow-hidden"
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
          <span className="grid h-10 w-10 place-items-center rounded-full glass text-white transition-colors group-hover:bg-[#827768] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6">
          <h3 className="font-display text-3xl leading-tight text-balance text-white">{name}</h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-2 text-pretty">{short}</p>
        </div>
      </Link>

      {hasContent && (
        <details className="group/details px-5 py-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="inline-flex items-center gap-2">
              <PawPrint size={13} /> What you'll experience
            </span>
            <ChevronDown size={14} className="opacity-70 transition-transform duration-300 group-open/details:rotate-180" />
          </summary>

          {hasExperiences ? (
            <ul className="mt-4 grid gap-4 text-sm text-foreground/85">
              {experiences.map((exp) => (
                <li key={exp.title} className="flex items-start gap-3">
                  <PawPrint size={14} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{exp.title}</p>
                    <p className="mt-1 text-foreground/70 leading-relaxed">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3 grid gap-2 text-sm text-foreground/85">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <PawPrint size={12} className="mt-1 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {hasExperiences && (
            <div className="mt-4 border-t border-border/60 pt-3">
              <PlanTripDialog
                destination={name}
                experienceTitle={name}
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-primary hover:opacity-80"
                  >
                    Plan this experience →
                  </button>
                }
              />
            </div>
          )}
        </details>
      )}
    </motion.article>
  );
}
