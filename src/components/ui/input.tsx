import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-sm border border-line bg-bg-2 px-3 text-base text-ink placeholder:text-ink-soft",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-16 w-full rounded-sm border border-line bg-bg-2 px-3 py-2 text-base text-ink placeholder:text-ink-soft",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("block text-sm font-semibold text-ink-soft", className)}
      {...props}
    />
  );
}

export { Input, Textarea, Label };
