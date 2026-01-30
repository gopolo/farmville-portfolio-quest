import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string | number;
  label: string;
  icon: string;
  delay?: number;
}

export const StatBadge = ({ value, label, icon, delay = 0 }: StatBadgeProps) => {
  return (
    <div
      className="flex flex-col items-center gap-2 animate-bounce-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Basket icon */}
      <div className="relative">
        <div className="text-5xl">{icon}</div>
        {/* Value badge */}
        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground font-display font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-farm-wood">
          {value}
        </div>
      </div>
      <span className="font-display font-semibold text-primary-foreground text-shadow-light">
        {label}
      </span>
    </div>
  );
};
