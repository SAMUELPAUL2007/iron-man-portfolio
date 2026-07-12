"use client";

import { useEffect, useRef } from "react";

export function ArcReactor({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      const cx = canvas!.width / 2;
      const cy = canvas!.height / 3;
      const maxR = Math.min(canvas!.width, canvas!.height) * 0.25;

      angle += 0.008;

      const glow = Math.sin(angle * 2) * 0.2 + 0.6;

      const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, maxR);
      grad.addColorStop(0, `rgba(0, 191, 255, ${glow * 0.4})`);
      grad.addColorStop(0.3, `rgba(0, 191, 255, ${glow * 0.15})`);
      grad.addColorStop(0.6, `rgba(212, 47, 47, ${glow * 0.08})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let r = maxR * 0.3; r < maxR; r += maxR * 0.08) {
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(0, 191, 255, ${0.04 * glow})`;
        ctx!.lineWidth = 0.5;
        ctx!.stroke();
      }

      const lines = 16;
      for (let i = 0; i < lines; i++) {
        const a = (i / lines) * Math.PI * 2 + angle;
        ctx!.beginPath();
        ctx!.moveTo(cx, cy);
        ctx!.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx!.strokeStyle = `rgba(0, 191, 255, ${0.03 * glow})`;
        ctx!.lineWidth = 0.5;
        ctx!.stroke();
      }

      ctx!.beginPath();
      ctx!.arc(cx, cy, maxR * 0.1, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(0, 191, 255, ${glow * 0.3})`;
      ctx!.fill();

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
