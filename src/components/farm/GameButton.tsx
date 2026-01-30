import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GameButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

const variantStyles = {
  primary: "from-accent to-accent/80 border-farm-wood text-accent-foreground",
  secondary: "from-secondary to-secondary/80 border-secondary/60 text-secondary-foreground",
  success: "from-farm-crop-green to-farm-grass border-farm-soil text-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const GameButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  href,
}: GameButtonProps) => {
  const buttonClasses = cn(
    "relative font-display font-bold",
    "bg-gradient-to-b border-4 rounded-xl",
    "shadow-lg transition-all duration-200",
    "hover:-translate-y-1 hover:shadow-xl",
    "active:translate-y-0 active:shadow-md",
    "flex items-center gap-2 justify-center",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <span className="absolute top-0.5 left-3 right-3 h-1.5 bg-white/30 rounded-full" />
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span className="absolute top-0.5 left-3 right-3 h-1.5 bg-white/30 rounded-full" />
      {children}
    </button>
  );
};
