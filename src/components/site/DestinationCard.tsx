import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
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
  const [open, setOpen] = useState(false);
  const hasExperiences = experiences.length > 0;
  const hasContent = hasExperiences || highlights.length > 0;

  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col self-start overflow-hidden rounded-3xl border border-white/5 bg-[#181818] shadow-elevated text-white"
    >
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
        <div className="px-6 pt-4 pb-5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full cursor-pointer items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <PawPrint size={13} className="text-[#C2B6A2]" /> What you'll experience
            </span>
            <ChevronDown
              size={14}
              className={`opacity-70 transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {hasExperiences ? (
                  <ul className="mt-5 grid gap-4 text-sm text-white/80">
                    {experiences.map((exp) => (
                      <li key={exp.title} className="flex items-start gap-3">
                        <PawPrint size={14} className="mt-1 shrink-0 text-[#C2B6A2]" />
                        <div>
                          <p className="font-medium text-white">{exp.title}</p>
                          <p className="mt-1 text-white/70 leading-relaxed">{exp.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-4 grid gap-2 text-sm text-white/80">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <PawPrint size={12} className="mt-1 shrink-0 text-[#C2B6A2]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {hasExperiences && (
                  <div className="mt-5">
                    <PlanTripDialog
                      destination={name}
                      experienceTitle={name}
                      trigger={
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-[#C2B6A2] hover:text-white transition-colors"
                        >
                          Plan this experience →
                        </button>
                      }
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.article>
  );
}

