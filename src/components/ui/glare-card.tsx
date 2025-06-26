
import React from "react";
import { cn } from "@/lib/utils";

interface GlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlareCard = React.forwardRef<HTMLDivElement, GlareCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-white/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
          "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl",
          className
        )}
        {...props}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

GlareCard.displayName = "GlareCard";
