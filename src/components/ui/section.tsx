import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("relative px-4 py-24 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-16 max-w-3xl text-center", className)}>
      {label && (
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-iron-arc">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}
