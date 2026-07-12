import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 p-6 transition-all duration-500 hover:border-iron-arc/30 hover:shadow-[0_0_40px_rgba(0,191,255,0.08)]",
        className
      )}
      {...props}
    />
  );
}

export function CardIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-iron-arc/10 text-iron-arc ring-1 ring-iron-arc/20",
        className
      )}
    >
      {children}
    </div>
  );
}
