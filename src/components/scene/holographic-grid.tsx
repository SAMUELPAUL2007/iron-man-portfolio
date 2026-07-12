"use client";

import { useEffect, useRef } from "react";

export function HolographicGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      offset += 0.3;

      const spacing = 60;
      const cols = Math.ceil(canvas!.width / spacing) + 1;
      const rows = Math.ceil(canvas!.height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        ctx!.beginPath();
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + (r % 2) * (spacing / 2);
          const y = r * spacing + (offset % spacing);

          if (r > 0 && c > 0) {
            const px = x - spacing + (r % 2) * (spacing / 2);
            const py = y - spacing;

            ctx!.moveTo(px, py);
            ctx!.lineTo(x, py);
            ctx!.lineTo(x, y);
            ctx!.lineTo(x - spacing, y);
            ctx!.closePath();
          }
        }
        ctx!.strokeStyle = "rgba(0, 191, 255, 0.03)";
        ctx!.lineWidth = 0.5;
        ctx!.stroke();
      }

      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const ringR = Math.min(canvas!.width, canvas!.height) * 0.3;

      for (let i = 0; i < 3; i++) {
        const r = ringR + Math.sin(offset * 0.02 + i) * 20;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(0, 191, 255, ${0.04 - i * 0.01})`;
        ctx!.lineWidth = 0.5;
        ctx!.setLineDash([4, 8]);
        ctx!.stroke();
        ctx!.setLineDash([]);
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
