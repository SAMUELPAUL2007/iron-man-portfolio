"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iron-arc/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-iron-red text-white hover:bg-red-600 hover:shadow-[0_0_30px_rgba(212,47,47,0.4)]",
        outline: "border border-iron-red/50 text-iron-red hover:bg-iron-red/10 hover:border-iron-red",
        ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
        gradient: "bg-gradient-to-r from-iron-red to-iron-gold text-white hover:shadow-[0_0_40px_rgba(212,47,47,0.3)]",
        arc: "bg-gradient-to-r from-iron-arc to-iron-blue text-white hover:shadow-[0_0_40px_rgba(0,191,255,0.3)]",
        tech: "border border-iron-arc/30 text-iron-arc bg-iron-arc/5 hover:bg-iron-arc/10 hover:border-iron-arc/50",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
