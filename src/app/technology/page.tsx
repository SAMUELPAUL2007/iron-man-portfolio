"use client";

import { useEffect } from "react";
import { Cpu, Zap, Shield, Radio, Atom, Satellite, Microscope, Gauge } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { HUDOverlay } from "@/components/scene/hud-overlay";
import { IronParticleField } from "@/components/scene/iron-particle-field";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardIcon } from "@/components/ui/card";
import { FadeIn, StaggerFadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";

const tech = [
  {
    icon: Zap, title: "Arc Reactor", category: "Energy",
    description: "Miniature cold fusion reactor generating 3 gigajoules per second. Clean energy that could power a city block.",
    specs: ["3 GJ/s output", "Self-sustaining", "Clean energy", "Scalable design"],
  },
  {
    icon: Cpu, title: "JARVIS/FRIDAY AI", category: "AI",
    description: "Advanced holographic AI system capable of real-time tactical analysis, suit management, and global network integration.",
    specs: ["Real-time analysis", "Voice interface", "Global network", "Predictive modeling"],
  },
  {
    icon: Shield, title: "Repulsor Technology", category: "Weapons",
    description: "Directed energy projection systems mounted in palms and chest. Variable output from non-lethal to building-shattering.",
    specs: ["Variable output", "Precision targeting", "Rapid fire", "Uni-beam chest cannon"],
  },
  {
    icon: Radio, title: "Holographic Interface", category: "UI",
    description: "Full-body holographic workspace with gesture control. 3D modeling, data analysis, and global surveillance.",
    specs: ["Gesture control", "3D modeling", "Real-time data", "Multi-screen"],
  },
  {
    icon: Gauge, title: "Flight Systems", category: "Mobility",
    description: "Multi-directional thrusters enabling Mach 10 speeds. Inertial dampeners protect Tony from extreme G-forces.",
    specs: ["Mach 10+ speed", "Inertial dampening", "VTOL capability", "Orbital flight"],
  },
  {
    icon: Atom, title: "Nanotechnology", category: "Materials",
    description: "Self-assembling nanobots stored in the arc reactor housing. Form any tool or weapon instantly.",
    specs: ["Instant assembly", "Self-repair", "Shape memory", "Energy blade formation"],
  },
  {
    icon: Satellite, title: "Global Defense Network", category: "Defense",
    description: "Satellite network providing global coverage. Includes Veronica, the orbital Hulkbuster deployment system.",
    specs: ["Satellite network", "Veronica system", "Global coverage", "Rapid deployment"],
  },
  {
    icon: Microscope, title: "Medical Nanites", category: "Medical",
    description: "Internal nanite system for injury repair, toxin filtering, and biological enhancement.",
    specs: ["Injury repair", "Toxin filtering", "Biological monitoring", "Enhanced healing"],
  },
];

export default function TechnologyPage() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo("/videos/ironman-endgame-4k.mp4", "tech", 0.2); }, [setVideo]);
  return (
    <>
      <HUDOverlay />
      <IronParticleField count={80} />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="arc" className="mb-4">R&D</Badge>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Stark <span className="gradient-text-iron">Technologies</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
            From clean energy to artificial intelligence — Tony Stark didn&apos;t just build suits. He rewrote the rules of what&apos;s possible.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <StaggerFadeIn className="grid gap-6 lg:grid-cols-2" staggerDelay={0.08}>
          {tech.map((item) => (
            <Card key={item.title}>
              <div className="flex items-start gap-4">
                <CardIcon className="shrink-0">
                  <item.icon className="h-6 w-6" />
                </CardIcon>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <Badge variant="tech" className="text-[10px]">{item.category}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.specs.map((spec) => (
                      <span key={spec} className="rounded-full border border-iron-arc/10 bg-iron-arc/[0.03] px-2 py-0.5 text-[10px] text-iron-arc">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-iron-arc/10 bg-gradient-to-br from-iron-arc/5 via-iron-red/5 to-iron-dark p-10 text-center">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="relative">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                The Future Is <span className="gradient-text-iron">Already Here</span>
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                &ldquo;Sometimes you gotta run before you can walk.&rdquo;
              </p>
              <p className="mt-1 text-sm text-neutral-600">— Tony Stark</p>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
