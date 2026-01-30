import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Droplets } from "lucide-react";

interface SkillCropProps {
  name: string;
  level: number;
  description: string;
  cropType?: "wheat" | "carrot" | "tomato" | "corn" | "sunflower" | "pumpkin";
  delay?: number;
}

const cropEmojis = {
  wheat: "🌾",
  carrot: "🥕",
  tomato: "🍅",
  corn: "🌽",
  sunflower: "🌻",
  pumpkin: "🎃",
};

const cropColors = {
  wheat: "from-amber-400 to-amber-600",
  carrot: "from-orange-400 to-orange-600",
  tomato: "from-red-400 to-red-600",
  corn: "from-yellow-400 to-yellow-600",
  sunflower: "from-yellow-300 to-amber-500",
  pumpkin: "from-orange-500 to-orange-700",
};

export const SkillCrop = ({
  name,
  level,
  description,
  cropType = "wheat",
  delay = 0,
}: SkillCropProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWatered, setIsWatered] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleWater = () => {
    if (!isWatered) {
      setIsWatered(true);
      setShowSplash(true);
      setTimeout(() => setShowSplash(false), 600);
    }
  };

  // Calculate growth stage based on level
  const growthHeight = Math.max(20, level);

  return (
    <div
      className={cn(
        "relative group cursor-pointer transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      onClick={handleWater}
    >
      {/* Soil plot */}
      <div className="farm-plot">
        <div className="farm-plot-inner min-h-[200px] flex flex-col justify-end items-center relative">
          {/* Crop emoji */}
          <div
            className={cn(
              "text-6xl transition-all duration-700 origin-bottom",
              isWatered && "animate-wiggle scale-110"
            )}
            style={{
              transform: `scaleY(${growthHeight / 100})`,
            }}
          >
            {cropEmojis[cropType]}
          </div>

          {/* Water splash effect */}
          {showSplash && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="water-splash w-20 h-20 rounded-full bg-farm-water/40" />
            </div>
          )}

          {/* Water droplet indicator */}
          <button
            className={cn(
              "absolute top-2 right-2 p-2 rounded-full transition-all duration-300",
              isWatered
                ? "bg-farm-water text-white"
                : "bg-farm-water/30 text-farm-water hover:bg-farm-water/50"
            )}
            aria-label="Water this crop"
          >
            <Droplets className="w-4 h-4" />
          </button>

          {/* Progress bar */}
          <div className="w-full mt-4 bg-farm-soil/50 rounded-full h-3 overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full bg-gradient-to-r transition-all duration-1000",
                cropColors[cropType]
              )}
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <h3 className="font-display font-bold text-lg text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {level}% Mastery
        </p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 px-2">
          {description}
        </p>
      </div>

      {/* Hover tooltip */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-10">
        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-display text-sm whitespace-nowrap shadow-lg">
          Click to water! 💧
        </div>
      </div>
    </div>
  );
};
