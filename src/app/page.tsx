"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect } from "react";
import { ArrowRight, Zap, Shield, Cpu, Gauge, Rocket, ChevronDown } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";
import { FlyingIronMan } from "@/components/scene/flying-iron-man";
import { HUDOverlay } from "@/components/scene/hud-overlay";
import { IronParticleField } from "@/components/scene/iron-particle-field";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardIcon } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerFadeIn } from "@/motion/primitives/fade-in";
import { easing } from "@/motion/tokens";

const features = [
  { icon: Shield, title: "Repulsor Technology", description: "Advanced repulsor beams in palms and chest for precision energy projection and flight stabilization." },
  { icon: Cpu, title: "JARVIS AI", description: "Sophisticated AI assistant capable of managing suit systems, tactical analysis, and global defense networks." },
  { icon: Zap, title: "Arc Reactor", description: "Miniature arc fusion reactor providing clean energy for the suit with enough power to sustain a city." },
  { icon: Gauge, title: "Supersonic Flight", description: "Multi-directional thrusters enabling Mach 10+ speeds with advanced inertial dampening systems." },
  { icon: Rocket, title: "Weapon Systems", description: "Integrated weapons including missiles, lasers, EMPs, and the signature uni-beam projection." },
];

const stats = [
  { value: "85+", label: "Suits Built" },
  { value: "50+", label: "Patents Filed" },
  { value: "14", label: "Avengers Missions" },
  { value: "∞", label: "Genius IQ" },
  { value: "$12.4B", label: "Net Worth" },
  { value: "1", label: "Iron Man" },
];

const suits = [
  { name: "Mark III", year: "2008", image: assetUrl("/images/suits/mark3.jpg"), color: "from-red-600 to-iron-gold" },
  { name: "Mark VII", year: "2012", image: assetUrl("/images/suits/iron-man-flying.jpg"), color: "from-red-600 to-iron-gold" },
  { name: "Mark XLII", year: "2013", image: assetUrl("/images/suits/iron-man-urban.jpg"), color: "from-iron-red to-iron-gold" },
  { name: "Mark L", year: "2018", image: assetUrl("/images/suits/mark85-charging.jpg"), color: "from-iron-red via-iron-gold to-iron-blue" },
];

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <FlyingIronMan />
      <HUDOverlay />
      <IronParticleField count={150} />
      <div className="absolute inset-0 arc-glow" />
      <div className="absolute inset-0 tech-grid" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing.standard, delay: 0.2 }}
        >
          <Badge variant="arc" className="mb-6">
            <Zap className="mr-1.5 h-3 w-3" />
            Stark Industries — R&D Division
          </Badge>
        </motion.div>

        <motion.div
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-iron-arc/20 bg-iron-arc/5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
        >
          <div className="relative flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-iron-arc/30 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute inset-2 rounded-full border border-iron-arc/20" />
            <span className="text-3xl font-black text-iron-arc">⚡</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing.standard, delay: 0.4 }}
        >
          I Am{" "}
          <span className="gradient-text-iron">Iron Man</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing.standard, delay: 0.5 }}
        >
          Genius. Billionaire. Playboy. Philanthropist. Tony Stark changed the world when he 
          built the first arc reactor in a cave. Explore the legacy of the armored Avenger.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing.standard, delay: 0.6 }}
        >
          <Link href="/about">
            <Button variant="gradient" size="lg" className="gap-2">
              Discover the Story <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/suits">
            <Button variant="tech" size="lg">
              View Armors
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-neutral-500" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <Section className="border-y border-white/5">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <FadeIn key={stat.label} delay={0.1}>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white lg:text-4xl gradient-text-arc"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function FeaturesSection() {
  return (
    <Section>
      <SectionHeader
        label="Technology"
        title="Cutting-Edge Innovation"
        description="The technologies that make Iron Man the most advanced superhero on the planet."
      />
      <StaggerFadeIn className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {features.map((feat) => (
          <Card key={feat.title}>
            <CardIcon>
              <feat.icon className="h-6 w-6" />
            </CardIcon>
            <h3 className="mb-2 text-lg font-semibold text-white">{feat.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-400">{feat.description}</p>
          </Card>
        ))}
      </StaggerFadeIn>
      <FadeIn delay={0.2} className="mt-10 text-center">
        <Link href="/technology">
          <Button variant="tech" size="lg" className="gap-2">
            Explore Technology <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}

function SuitsPreview() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-iron-arc/[0.02] to-transparent">
      <SectionHeader
        label="Armor"
        title="Iconic Armors"
        description="From the cave-built Mark I to the nanotech Mark LXXXV — every suit tells a story."
      />
      <StaggerFadeIn className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
        {suits.map((suit) => (
          <motion.div
            key={suit.name}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 p-6 transition-all duration-500 hover:border-iron-arc/30"
            whileHover={{ y: -8 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${suit.color} opacity-[0.04] transition-opacity group-hover:opacity-[0.08]`} />
            <div className="relative">
              <div className="mb-4 h-40 overflow-hidden rounded-2xl">
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{suit.name}</h3>
              <p className="text-xs text-neutral-500">First flight: {suit.year}</p>
            </div>
          </motion.div>
        ))}
      </StaggerFadeIn>
      <FadeIn delay={0.2} className="mt-10 text-center">
        <Link href="/suits">
          <Button variant="tech" size="lg" className="gap-2">
            View All Armors <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </FadeIn>
    </Section>
  );
}

function CTASection() {
  return (
    <Section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-iron-arc/5 to-iron-red/5" />
      <FadeIn>
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-iron-arc/20 bg-iron-arc/5">
            <span className="text-2xl font-black text-iron-arc">⚡</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Proof That Tony Stark Has a Heart
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            The arc reactor isn&apos;t just a power source — it&apos;s a symbol of redemption. 
            Explore the full legacy of Iron Man.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/timeline">
              <Button variant="gradient" size="lg" className="gap-2">
                View Timeline <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/connect">
              <Button variant="tech" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default function HomePage() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo(assetUrl("/videos/ironman-nano-tech.mp4"), "ambient", 0.25); }, [setVideo]);
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SuitsPreview />
      <CTASection />
    </>
  );
}
