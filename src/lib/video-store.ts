"use client";

import { create } from "zustand";
import { assetUrl } from "./path";

interface VideoState {
  src: string;
  overlay: "red" | "blue" | "dark" | "ambient" | "tech";
  opacity: number;
  setVideo: (src: string, overlay?: VideoState["overlay"], opacity?: number) => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  src: assetUrl("/videos/ironman-nano-tech.mp4"),
  overlay: "ambient",
  opacity: 0.25,
  setVideo: (src, overlay = "ambient", opacity = 0.25) =>
    set({ src, overlay, opacity }),
}));
