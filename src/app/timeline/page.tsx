"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { Sparkles, BookOpen, Film, Tv, Gamepad2 } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";
import { IronParticleField } from "@/components/scene/iron-particle-field";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";

const events = [
  { year: "1963", title: "Tales of Suspense #39", category: "comic", description: "Iron Man's first appearance. Created by Stan Lee, Larry Lieber, Don Heck, and Jack Kirby." },
  { year: "1979", title: "Iron Man Animated Series", category: "tv", description: "The first animated adaptation brings Iron Man to television screens." },
  { year: "2008", title: "Iron Man (Film)", category: "film", description: "Robert Downey Jr. launches the MCU with a defining performance. Over $585M worldwide." },
  { year: "2010", title: "Iron Man 2", category: "film", description: "Tony fights Whiplash and battles his own demons. Introduces War Machine and Black Widow." },
  { year: "2012", title: "The Avengers", category: "film", description: "Earth's Mightiest Heroes assemble for the first time. Tony carries a nuke through a wormhole." },
  { year: "2013", title: "Iron Man 3", category: "film", description: "Tony faces PTSD and the Mandarin. Introduces the Mark XLII with modular assembly." },
  { year: "2015", title: "Avengers: Age of Ultron", category: "film", description: "Tony's attempt to create a global defense system backfires. The Hulkbuster vs Hulk." },
  { year: "2016", title: "Captain America: Civil War", category: "film", description: "The Avengers split. Tony and Steve go head-to-head over the Sokovia Accords." },
  { year: "2017", title: "Spider-Man: Homecoming", category: "film", description: "Tony becomes a mentor to Peter Parker. The paternal side of Iron Man emerges." },
  { year: "2018", title: "Avengers: Infinity War", category: "film", description: "Tony fights Thanos on Titan. The snap. Failure has never felt so devastating." },
  { year: "2019", title: "Avengers: Endgame", category: "film", description: "The ultimate sacrifice. Tony snaps away Thanos and his army. I am Iron Man." },
  { year: "2020", title: "Iron Man VR", category: "game", description: "PlayStation VR game puts players in the suit. A love letter to Iron Man fans." },
  { year: "2023", title: "Iron Man: Legacy Continued", category: "comic", description: "New comic series exploring the continuing legacy of Tony Stark's impact." },
];

const categoryIcons = { comic: BookOpen, film: Film, tv: Tv, game: Gamepad2 };
const categoryColors = { comic: "border-l-iron-arc", film: "border-l-iron-red", tv: "border-l-iron-gold", game: "border-l-emerald-500" };

export default function TimelinePage() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo(assetUrl("/videos/ironman-classic.mp4"), "dark", 0.15); }, [setVideo]);
  return (
    <>
      <IronParticleField count={100} />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="premium" className="mb-4">
            <Sparkles className="mr-1.5 h-3 w-3" />
            History
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            Iron Man <span className="gradient-text-iron">Timeline</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            From 1963 to today — trace the evolution of Iron Man through comics, films, television, and games.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-iron-arc via-iron-red to-iron-gold" />
          <div className="space-y-8">
            {events.map((event, i) => {
              const Icon = categoryIcons[event.category as keyof typeof categoryIcons];
              const borderColor = categoryColors[event.category as keyof typeof categoryColors];

              return (
                <FadeIn key={`${event.year}-${i}`} delay={i * 0.05} direction="left">
                  <motion.div
                    className={`relative pl-16 border-l-2 ${borderColor} transition-all duration-300 hover:border-l-iron-arc`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="absolute -left-[25px] top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-iron-arc bg-iron-dark transition-all duration-300">
                      <Icon className="h-5 w-5 text-iron-arc" />
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-iron-arc/20">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold tracking-wider text-iron-arc">{event.year}</span>
                        <Badge variant="tech" className="text-[10px] uppercase">{event.category}</Badge>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-white">{event.title}</h3>
                      <p className="mt-2 leading-relaxed text-neutral-400">{event.description}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <p className="text-sm text-neutral-500">The legacy continues. New chapters are being written.</p>
      </Section>
    </>
  );
}
