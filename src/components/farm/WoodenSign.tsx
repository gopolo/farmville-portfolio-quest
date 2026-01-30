import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WoodenSignProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const WoodenSign = ({ children, className, size = "md" }: WoodenSignProps) => {
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-4",
    lg: "px-8 py-6",
  };

  return (
    <div
      className={cn(
        "wooden-sign text-primary-foreground",
        sizeClasses[size],
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
