"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";
import { HUDOverlay } from "@/components/scene/hud-overlay";

export default function NotFound() {
  const setVideo = useVideoStore((s) => s.setVideo);
  useEffect(() => { setVideo(assetUrl("/videos/ironman-classic.mp4"), "dark", 0.15); }, [setVideo]);
  return (
    <>
      <HUDOverlay />
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-iron-arc/20 bg-iron-arc/5"
        >
          <span className="text-5xl font-black text-iron-arc/50">IM</span>
        </motion.div>

        <motion.h1
          className="text-8xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-xl text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Even JARVIS can&apos;t find this page
        </motion.p>

        <motion.p
          className="mt-2 text-sm text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          The arc reactor is running. The page isn&apos;t. Let&apos;s get you back.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <Button variant="arc" size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Return Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
