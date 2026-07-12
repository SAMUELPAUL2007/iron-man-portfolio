"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { Quote, Atom, GraduationCap, Heart, Building2, Award, Sword } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { HolographicGrid } from "@/components/scene/holographic-grid";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardIcon } from "@/components/ui/card";
import { FadeIn, StaggerFadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";

const timeline = [
  { year: "1970", title: "Born Genius", description: "Tony Stark born to Howard and Maria Stark in Manhattan, New York." },
  { year: "1990", title: "Stark Industries CEO", description: "At 21, Tony inherits Stark Industries after his parents' tragic death." },
  { year: "2008", title: "The Cave", description: "Kidnapped by terrorists, Tony builds the first arc reactor and Mark I suit in a cave. He becomes Iron Man." },
  { year: "2010", title: "Iron Man 2", description: "Tony reveals his identity as Iron Man. Fights Whiplash and refines the arc reactor technology." },
  { year: "2012", title: "The Avengers", description: "Tony helps form the Avengers and nearly sacrifices himself carrying a nuke through the portal." },
  { year: "2013", title: "Iron Man 3", description: "Tony battles his demons after NYC. Develops the Mark XLII with remote-assembly technology." },
  { year: "2015", title: "Ultron & Vision", description: "Tony creates Ultron (and later Vision) in an attempt to protect the world." },
  { year: "2016", title: "Civil War", description: "The Sokovia Accidents divide the Avengers. Tony supports government oversight." },
  { year: "2018", title: "Infinity War", description: "Tony fights Thanos on Titan. Loses. Stranded in space with Nebula." },
  { year: "2023", title: "Endgame", description: "Tony discovers time travel. The ultimate sacrifice — snapping to save the universe." },
];

const highlights = [
  { icon: Atom, text: "MIT graduate at 17 with degrees in Physics and Engineering" },
  { icon: Building2, text: "Transformed Stark Industries from weapons manufacturing to clean energy" },
  { icon: Award, text: "Nobel Prize nominee for the Arc Reactor technology" },
  { icon: Heart, text: "Married Pepper Potts, his longtime assistant and love of his life" },
  { icon: Sword, text: "Co-founder and benefactor of the Avengers Initiative" },
];

export default function AboutPage() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo("/videos/ironman-nano-tech.mp4", "blue", 0.2); }, [setVideo]);
  return (
    <>
      <HolographicGrid />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="arc" className="mb-4">About</Badge>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Tony <span className="gradient-text-iron">Stark</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Visionary. Inventor. Hero. The man who turned shrapnel into salvation and built a legacy from scrap metal and sheer will.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-iron-arc/10">
              <img
                src="/images/suits/iron-man-armor.jpg"
                alt="Iron Man"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white/60">Iron Man — Mark LXXXV</p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col justify-center">
            <FadeIn direction="right" delay={0.1}>
              <div className="mb-8 flex items-center gap-2 text-iron-arc">
                <Quote className="h-5 w-5" />
                <span className="text-sm font-medium">Origin Story</span>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Genius, Billionaire, Playboy, Philanthropist
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-neutral-400">
                <p>
                  Anthony Edward Stark was born into privilege as the son of legendary inventor Howard Stark 
                  and Maria Stark. A true prodigy, Tony entered MIT at 15 and graduated with dual degrees 
                  in physics and engineering by 17.
                </p>
                <p>
                  When his parents died, Tony inherited Stark Industries — a global weapons manufacturing 
                  empire. But the shrapnel that pierced his chest in an Afghan cave changed everything. 
                  Forced to build a weapon of mass destruction, Tony instead built a suit of armor — and a new purpose.
                </p>
                <p>
                  <span className="text-iron-arc font-medium">I am Iron Man.</span> Three words that changed 
                  the world. Tony Stark didn&apos;t just build a suit — he built a future. And when the moment came, 
                  he gave everything to protect it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Highlights"
          title="Life Achievements"
          description="The milestones that define Tony Stark's extraordinary journey."
        />
        <StaggerFadeIn className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {highlights.map((item) => (
            <Card key={item.text}>
              <CardIcon>
                <item.icon className="h-6 w-6" />
              </CardIcon>
              <p className="text-sm leading-relaxed text-neutral-300">{item.text}</p>
            </Card>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section className="bg-gradient-to-b from-transparent via-iron-arc/[0.02] to-transparent">
        <SectionHeader
          label="Timeline"
          title="The Stark Legacy"
          description="The moments that defined a hero."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-iron-arc via-iron-red to-transparent" />
          <StaggerFadeIn className="space-y-12" staggerDelay={0.1}>
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-12">
                <div className="absolute left-2.5 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-iron-arc bg-iron-dark">
                  <div className="h-2 w-2 rounded-full bg-iron-arc" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-iron-arc">{item.year}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{item.description}</p>
              </div>
            ))}
          </StaggerFadeIn>
        </div>
      </Section>
    </>
  );
}
