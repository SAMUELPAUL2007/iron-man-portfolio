"use client";

import { useEffect, useRef } from "react";

export function FlyingIronMan({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let x = -100;
    let y = 0;
    let trail: { x: number; y: number; life: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      y = canvas!.height * (0.2 + Math.random() * 0.3);
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      const speed = 0.8;
      x += speed;

      if (x > canvas!.width + 100) {
        x = -100;
        y = canvas!.height * (0.15 + Math.random() * 0.35);
        trail = [];
      }

      const drift = Math.sin(x * 0.005) * 30;
      const currentY = y + drift;

      trail.unshift({ x, y: currentY, life: 60 });
      if (trail.length > 60) trail.pop();

      trail.forEach((t, i) => {
        t.life--;
        if (t.life <= 0) return;
        const fade = t.life / 60;
        const size = 4 * fade;

        const grad = ctx!.createRadialGradient(t.x, t.y, 0, t.x, t.y, size);
        grad.addColorStop(0, `rgba(0, 191, 255, ${fade * 0.5})`);
        grad.addColorStop(0.5, `rgba(212, 47, 47, ${fade * 0.3})`);
        grad.addColorStop(1, `rgba(0, 0, 0, 0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(t.x, t.y, size, 0, Math.PI * 2);
        ctx!.fill();
      });

      const angle = Math.cos(x * 0.005) * 0.15;
      ctx!.save();
      ctx!.translate(x, currentY);
      ctx!.rotate(angle);

      const s = 2.5;
      ctx!.strokeStyle = "rgba(212, 47, 47, 0.15)";
      ctx!.lineWidth = 2;

      ctx!.beginPath();
      ctx!.moveTo(20 * s, 0);
      ctx!.lineTo(10 * s, -8 * s);
      ctx!.lineTo(-15 * s, -6 * s);
      ctx!.lineTo(-18 * s, -3 * s);
      ctx!.lineTo(-18 * s, 3 * s);
      ctx!.lineTo(-15 * s, 6 * s);
      ctx!.lineTo(10 * s, 8 * s);
      ctx!.closePath();
      ctx!.stroke();

      ctx!.fillStyle = "rgba(232, 163, 23, 0.08)";
      ctx!.fill();

      ctx!.beginPath();
      ctx!.arc(8 * s, 0, 3 * s, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(0, 191, 255, 0.3)";
      ctx!.fill();

      ctx!.restore();

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
