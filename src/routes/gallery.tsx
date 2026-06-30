import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY, IMAGES } from "@/content/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tanzania Safari Photography | Sahara Wild" },
      { name: "description", content: "Cinematic frames from the Serengeti, Kilimanjaro, Ngorongoro and Zanzibar — shot in the field." },
      { property: "og:title", content: "Gallery — Sahara Wild" },
      { property: "og:description", content: "Tanzania, frame by frame." },
      { property: "og:image", content: IMAGES.wildLion },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      <section className="pt-40 pb-16 container-x mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-4xl">
          Tanzania, frame by frame.
        </h1>
      </section>

      <section className="container-x mx-auto max-w-[1500px] pb-32">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.05 }}
              onClick={() => setLightbox(src)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-surface group"
            >
              <img src={src} alt="" loading="lazy" className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full glass">
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.96 }} animate={{ scale: 1 }}
              src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
