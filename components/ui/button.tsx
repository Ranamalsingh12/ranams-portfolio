import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(99,102,241,0.6))] text-white shadow-[0_20px_80px_-30px_rgba(56,189,248,0.8)] hover:translate-y-[-1px] hover:shadow-[0_24px_90px_-30px_rgba(99,102,241,0.9)]",
        secondary:
          "border border-white/12 bg-white/[0.06] text-white/88 hover:border-white/20 hover:bg-white/[0.1]",
        ghost:
          "text-white/72 hover:bg-white/[0.06] hover:text-white",
        outline:
          "border border-white/16 bg-transparent text-white hover:border-sky-400/50 hover:bg-sky-400/8",
        link: "rounded-none p-0 text-white/82 hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-[0.95rem]",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
