"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, MessageSquare, Check } from "lucide-react";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";
import { HUDOverlay } from "@/components/scene/hud-overlay";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/motion/primitives/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tony@starkindustries.com" },
  { icon: MapPin, label: "Location", value: "Malibu, California" },
  { icon: Phone, label: "Hotline", value: "+1 (555) STARK-01" },
  { icon: MessageSquare, label: "JARVIS", value: "Always online" },
];

export default function ConnectPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo(assetUrl("/videos/ironman-endgame-4k.mp4"), "tech", 0.18); }, [setVideo]);

  return (
    <>
      <HUDOverlay />

      <Section className="pt-32">
        <FadeIn>
          <Badge variant="arc" className="mb-4">Connect</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            Get in <span className="gradient-text-iron">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Whether you have a business proposal, a tech idea, or just want to say hi — Jarvis is standing by.
          </p>
        </FadeIn>
      </Section>

      <Section className="py-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Send a Transmission</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">Name</label>
                    <input id="name" type="text" required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-iron-arc/50 focus:ring-1 focus:ring-iron-arc/30"
                      placeholder="Tony Stark" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">Email</label>
                    <input id="email" type="email" required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-iron-arc/50 focus:ring-1 focus:ring-iron-arc/30"
                      placeholder="tony@stark.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-neutral-300">Subject</label>
                  <input id="subject" type="text" required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-iron-arc/50 focus:ring-1 focus:ring-iron-arc/30"
                    placeholder="What's on your mind?" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">Message</label>
                  <textarea id="message" required rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-iron-arc/50 focus:ring-1 focus:ring-iron-arc/30"
                    placeholder="JARVIS is listening..." />
                </div>
                <Button type="submit" variant="arc" size="lg" className="w-full gap-2">
                  {sent ? <>Message Sent! <Check className="h-4 w-4" /></> : <>Send Message <Send className="h-4 w-4" /></>}
                </Button>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Channels</h2>
              <p className="text-sm leading-relaxed text-neutral-400">
                Stark Industries maintains open channels for business, innovation, and emergency communications.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-neutral-900/40 p-5"
                    whileHover={{ x: 4, borderColor: "rgba(0, 191, 255, 0.3)" }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-iron-arc/10 text-iron-arc">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-500">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/5 bg-neutral-900/30 p-6 text-center">
                <p className="text-sm italic text-neutral-500">
                  &ldquo;I love you 3000.&rdquo;
                </p>
                <p className="mt-2 text-xs text-neutral-600">— Morgan Stark</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
