"use client";

import { useEffect, useRef } from "react";

export function HUDOverlay({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let scanY = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      scanY += 1.5;
      if (scanY > canvas!.height) scanY = -100;

      const grad = ctx!.createLinearGradient(0, scanY, 0, scanY + 60);
      grad.addColorStop(0, "rgba(0, 191, 255, 0)");
      grad.addColorStop(0.3, "rgba(0, 191, 255, 0.03)");
      grad.addColorStop(0.5, "rgba(0, 191, 255, 0.06)");
      grad.addColorStop(0.7, "rgba(0, 191, 255, 0.03)");
      grad.addColorStop(1, "rgba(0, 191, 255, 0)");

      ctx!.fillStyle = grad;
      ctx!.fillRect(0, scanY, canvas!.width, 60);

      ctx!.strokeStyle = "rgba(0, 191, 255, 0.02)";
      ctx!.lineWidth = 0.5;

      const step = 30;
      for (let x = 0; x < canvas!.width; x += step) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, canvas!.height);
        ctx!.stroke();
      }

      const cornerSize = 40;
      const margin = 20;
      ctx!.strokeStyle = "rgba(0, 191, 255, 0.08)";
      ctx!.lineWidth = 1;

      const corners = [
        [margin, margin, 1, 1],
        [canvas!.width - margin, margin, -1, 1],
        [margin, canvas!.height - margin, 1, -1],
        [canvas!.width - margin, canvas!.height - margin, -1, -1],
      ];

      corners.forEach(([x, y, dx, dy]) => {
        ctx!.beginPath();
        ctx!.moveTo(x, y + cornerSize * dy);
        ctx!.lineTo(x, y);
        ctx!.lineTo(x + cornerSize * dx, y);
        ctx!.stroke();
      });

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
