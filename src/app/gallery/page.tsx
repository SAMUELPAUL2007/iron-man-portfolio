"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { IronParticleField } from "@/components/scene/iron-particle-field";
import { Section } from "@/components/ui/section";
import { FadeIn, StaggerFadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";

const items = [
  { id: 1, title: "Arc Reactor", category: "Technology", image: "/images/suits/mark85-lightning.jpg" },
  { id: 2, title: "Mark III Flight", category: "Suit", image: "/images/suits/iron-man-flying.jpg" },
  { id: 3, title: "Avengers Assemble", category: "Team", image: "/images/suits/iron-man-thanos.jpg" },
  { id: 4, title: "Repulsor Power", category: "Technology", image: "/images/suits/mark85-power.jpg" },
  { id: 5, title: "Hulkbuster", category: "Suit", image: "/images/suits/iron-man-hulkbuster.jpg" },
  { id: 6, title: "Nanotech Assembly", category: "Technology", image: "/images/suits/mark85-charging.jpg" },
  { id: 7, title: "Endgame Battle", category: "Film", image: "/images/suits/mark85-sacrifice.jpg" },
  { id: 8, title: "Iron Legion", category: "Team", image: "/images/suits/mark85-display.jpg" },
  { id: 9, title: "Arc Overload", category: "Behind", image: "/images/suits/mark85-overload.jpg" },
  { id: 10, title: "Space Rescue", category: "Film", image: "/images/suits/iron-man-space.jpg" },
  { id: 11, title: "Mark L Helmet", category: "Suit", image: "/images/suits/mark85-mindstone.jpg" },
  { id: 12, title: "Stark Legacy", category: "Event", image: "/images/suits/iron-man-stark.jpg" },
];

const categories = ["All", "Suit", "Technology", "Film", "Team", "Behind", "Event"];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);
  const sel = selected ? filtered.findIndex((i) => i.id === selected) : -1;

  function nav(dir: "prev" | "next") {
    const n = dir === "prev" ? (sel - 1 + filtered.length) % filtered.length : (sel + 1) % filtered.length;
    setSelected(filtered[n].id);
  }

  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo("/videos/ironman-nano-tech.mp4", "ambient", 0.2); }, [setVideo]);

  return (
    <>
      <IronParticleField count={80} />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="arc" className="mb-4">
            <ImageIcon className="mr-1.5 h-3 w-3" />
            Visuals
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Visual <span className="gradient-text-iron">Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
            A cinematic collection of Iron Man imagery spanning suits, technology, films, and behind-the-scenes moments.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-iron-arc text-white shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                  : "border border-white/10 text-neutral-400 hover:border-iron-arc/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <StaggerFadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" staggerDelay={0.05}>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 text-left"
              whileHover={{ scale: 1.02, y: -4 }}
              layout
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 pt-12">
                <span className="text-xs font-medium text-iron-arc">{item.category}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.button>
          ))}
        </StaggerFadeIn>
      </Section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav("prev"); }} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav("next"); }} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10">
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-[80vh] max-w-3xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={items.find(i => i.id === selected)?.image}
                  alt={items.find(i => i.id === selected)?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-neutral-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-iron-arc">{items.find(i => i.id === selected)?.category}</span>
                    <h2 className="text-xl font-bold text-white">{items.find(i => i.id === selected)?.title}</h2>
                  </div>
                  <span className="text-sm text-neutral-500">{sel + 1} / {filtered.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
