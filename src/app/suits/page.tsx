"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { Sparkles, Shield, Zap, Eye, Crosshair, Cpu, Gauge, Rocket } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";
import { HolographicGrid } from "@/components/scene/holographic-grid";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerFadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";

const armors = [
  {
    name: "Mark I", year: "2008", movie: "Iron Man",
    description: "Built from scrap metal in a cave. Crude, heavy, and barely functional — but it started everything.",
    features: ["Flame throwers", "Crude repulsors", "Missile launcher", "Iron plating"],
    image: assetUrl("/images/suits/iron-man-battle.jpg"),
    color: "from-gray-700 via-gray-600 to-gray-500",
  },
  {
    name: "Mark III", year: "2008", movie: "Iron Man",
    description: "The iconic red-and-gold suit. The first truly functional Iron Man armor with flight stabilizers.",
    features: ["Supersonic flight", "Advanced repulsors", "Targeting HUD", "Full weapon systems"],
    image: assetUrl("/images/suits/mark3.jpg"),
    color: "from-red-600 via-iron-gold to-iron-gold",
  },
  {
    name: "Mark VII", year: "2012", movie: "The Avengers",
    description: "Deployable in seconds via wristbands. Enhanced for heavy combat against alien forces.",
    features: ["Rapid deployment", "Enhanced thrusters", "Shield generators", "Alien combat mode"],
    image: assetUrl("/images/suits/iron-man-flying.jpg"),
    color: "from-red-600 via-iron-gold to-red-700",
  },
  {
    name: "Mark XLII", year: "2013", movie: "Iron Man 3",
    description: "Revolutionary prehensile suit with modular assembly. Controlled via chip implants in Tony's arm.",
    features: ["Modular assembly", "Remote control", "Self-destruct sequence", "Enhanced AI"],
    image: assetUrl("/images/suits/iron-man-urban.jpg"),
    color: "from-iron-red via-iron-gold to-iron-red",
  },
  {
    name: "Mark XLIII", year: "2015", movie: "Avengers: Age of Ultron",
    description: "Refined design with enhanced repulsors, upgraded AI integration, and Veronica satellite support.",
    features: ["Veronica satellite", "Hulkbuster mode", "Enhanced repulsors", "AI upgrades"],
    image: assetUrl("/images/suits/iron-man-hulkbuster.jpg"),
    color: "from-red-600 via-iron-gold to-red-500",
  },
  {
    name: "Mark XLVI", year: "2016", movie: "Captain America: Civil War",
    description: "Sleeker design optimized for combat against enhanced individuals. Features FRIDAY AI.",
    features: ["FRIDAY AI system", "Enhanced mobility", "Compact design", "Energy shielding"],
    image: assetUrl("/images/suits/iron-man-stark.jpg"),
    color: "from-iron-red via-iron-gold to-iron-blue",
  },
  {
    name: "Mark L", year: "2018", movie: "Avengers: Infinity War",
    description: "Nanotechnology-based armor stored in the arc reactor housing. Forms instantly around Tony's body.",
    features: ["Nanotech construction", "Energy blades", "Gravity boots", "Shield formation"],
    image: assetUrl("/images/suits/mark85-charging.jpg"),
    color: "from-iron-red via-iron-gold to-iron-red",
  },
  {
    name: "Mark LXXXV", year: "2019", movie: "Avengers: Endgame",
    description: "The final armor. Enhanced nanotech with the most advanced weapon systems ever built.",
    features: ["Nano gauntlet", "Enhanced energy sword", "Shield array", "Arc overload"],
    image: assetUrl("/images/suits/mark85-power.jpg"),
    color: "from-iron-red via-iron-gold to-iron-arc",
  },
];

export default function SuitsPage() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo(assetUrl("/videos/ironman-nano-tech.mp4"), "red", 0.2); }, [setVideo]);
  return (
    <>
      <HolographicGrid />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="premium" className="mb-4">
            <Sparkles className="mr-1.5 h-3 w-3" />
            Armor Collection
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            Iron Man <span className="gradient-text-iron">Armors</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Over 85 suits built across decades. Each one a refinement of the last — pushing the boundaries of what technology can achieve.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="grid gap-8">
          {armors.map((armor, i) => (
            <FadeIn key={armor.name} delay={i * 0.08}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/30 transition-all duration-500 hover:border-iron-arc/20"
                whileHover={{ scale: 1.01 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${armor.color} opacity-[0.02] transition-opacity group-hover:opacity-[0.04]`} />
                <div className="relative grid gap-6 p-8 lg:grid-cols-5">
                  <div className="flex items-center justify-center lg:col-span-1">
                    <motion.div
                      className="relative h-40 w-36 overflow-hidden rounded-2xl border-2 border-iron-arc/15"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                    >
                      <img
                        src={armor.image}
                        alt={armor.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-iron-dark/60 via-transparent to-transparent" />
                    </motion.div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white">{armor.name}</h3>
                    <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500">
                      <span className="text-iron-arc">{armor.year}</span>
                      <span>|</span>
                      <span>{armor.movie}</span>
                    </div>
                    <p className="mt-4 leading-relaxed text-neutral-400">{armor.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">Capabilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {armor.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-sm text-neutral-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-iron-arc" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          label="Evolution"
          title="From Cave to Nanotech"
          description="Each suit represents a leap forward in engineering. The evolution of Iron Man is the evolution of possibility itself."
        />
      </Section>
    </>
  );
}
