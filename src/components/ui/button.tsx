import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold transition-[transform,box-shadow,background-color,opacity] duration-150 ease-[var(--ease-out-smooth)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-45 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-gold text-navy-2 hover:shadow-[0_4px_14px_rgba(192,138,46,0.4)]",
        outline: "border border-line bg-transparent text-ink hover:bg-bg-2",
        quiet: "bg-bg-2 text-ink hover:bg-line",
        danger: "bg-bad-soft text-bad hover:opacity-90",
        ghost: "bg-transparent text-cream hover:bg-white/10",
        navy: "bg-navy text-cream hover:opacity-90",
      },
      size: {
        default: "h-11 px-5 text-base",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
