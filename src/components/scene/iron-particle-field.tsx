"use client";

import { useEffect, useRef } from "react";

interface IronParticleFieldProps {
  count?: number;
  color1?: string;
  color2?: string;
}

export function IronParticleField({
  count = 120,
  color1 = "rgba(212, 47, 47, 0.6)",
  color2 = "rgba(232, 163, 23, 0.4)",
}: IronParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string; life: number; maxLife: number;
    }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function spawn() {
      if (particles.length < count) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.2,
          size: Math.random() * 3 + 1,
          alpha: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? color1 : color2,
          life: 0,
          maxLife: Math.random() * 200 + 100,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const fade = 1 - p.life / p.maxLife;

        if (p.life > p.maxLife || p.x < -50 || p.x > canvas!.width + 50) {
          particles.splice(i, 1);
          continue;
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * fade, 0, Math.PI * 2);
        ctx!.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.alpha * fade})`);
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * 2 * fade, 0, Math.PI * 2);
        ctx!.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.alpha * 0.2 * fade})`);
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count, color1, color2]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
