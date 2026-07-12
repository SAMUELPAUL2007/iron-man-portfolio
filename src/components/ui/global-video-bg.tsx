"use client";

import { useRef, useEffect } from "react";
import { useVideoStore } from "@/lib/video-store";
import { assetUrl } from "@/lib/path";

export function GlobalVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = useVideoStore((s) => s.src);
  const overlay = useVideoStore((s) => s.overlay);
  const opacity = useVideoStore((s) => s.opacity);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.src !== src) {
      video.src = assetUrl(src);
      video.load();
      video.play().catch(() => {});
    }
  }, [src]);

  const overlayMap: Record<string, string> = {
    red: "bg-red-900/60",
    blue: "bg-blue-900/60",
    dark: "bg-neutral-950/80",
    ambient: "bg-black/40",
    tech: "bg-gradient-to-br from-blue-950/70 via-black/50 to-red-950/70",
  };

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 transition-colors duration-700 ${overlayMap[overlay] ?? "bg-black/40"}`}
        style={{ opacity }}
      />
    </div>
  );
}
