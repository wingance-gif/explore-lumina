import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { stagger, VIEWPORT } from "@/lib/motion";

export function ScrollReveal({
  children,
  className,
  delay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={stagger(delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}
