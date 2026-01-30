import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FarmBuildingProps {
  title: string;
  icon: string;
  items: string[];
  buildingType?: "barn" | "silo" | "greenhouse" | "windmill" | "coop" | "stable";
  delay?: number;
}

const buildingColors = {
  barn: "from-red-500 to-red-700 border-red-800",
  silo: "from-slate-400 to-slate-600 border-slate-700",
  greenhouse: "from-emerald-400 to-emerald-600 border-emerald-700",
  windmill: "from-amber-600 to-amber-800 border-amber-900",
  coop: "from-yellow-500 to-yellow-700 border-yellow-800",
  stable: "from-stone-500 to-stone-700 border-stone-800",
};

export const FarmBuilding = ({
  title,
  icon,
  items,
  buildingType = "barn",
  delay = 0,
}: FarmBuildingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl border-4 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105",
          buildingColors[buildingType],
          "bg-gradient-to-b shadow-xl"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Roof */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[30px] border-l-transparent border-r-transparent border-b-farm-wood" />

        {/* Building content */}
        <div className="pt-8 pb-4 px-4">
          {/* Icon */}
          <div className="text-5xl text-center mb-2 animate-float">{icon}</div>

          {/* Title */}
          <h3 className="font-display font-bold text-white text-center text-lg text-shadow-light">
            {title}
          </h3>

          {/* Expand indicator */}
          <div className="flex justify-center mt-2">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-white/80" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/80" />
            )}
          </div>
        </div>

        {/* Expanded items */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 bg-black/20",
            isOpen ? "max-h-96 py-3" : "max-h-0"
          )}
        >
          <ul className="space-y-1 px-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-white/90 text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Status badge */}
        <div className="absolute top-2 right-2 bg-farm-crop-green text-white text-xs font-bold px-2 py-1 rounded-full">
          ACTIVE
        </div>
      </div>
    </div>
  );
};
