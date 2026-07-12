import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-iron-red/10 text-iron-red border border-iron-red/20",
        premium: "bg-gradient-to-r from-iron-red/10 to-iron-gold/10 text-iron-gold border border-iron-gold/20",
        arc: "bg-iron-arc/10 text-iron-arc border border-iron-arc/20",
        tech: "border border-iron-arc/20 text-iron-arc bg-iron-arc/5",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
