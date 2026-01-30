import { useState } from "react";
import { WoodenSign } from "./WoodenSign";
import { cn } from "@/lib/utils";
import { Heart, Sparkles, Star, ThumbsUp, Droplets } from "lucide-react";
import { toast } from "sonner";

const appreciationItems = [
  { icon: "❤️", label: "Love it!", count: 42, color: "from-red-400 to-red-600" },
  { icon: "⭐", label: "Amazing!", count: 38, color: "from-yellow-400 to-amber-500" },
  { icon: "🌟", label: "Stellar!", count: 27, color: "from-purple-400 to-purple-600" },
  { icon: "🔥", label: "On Fire!", count: 31, color: "from-orange-400 to-red-500" },
  { icon: "💧", label: "Refreshing!", count: 24, color: "from-cyan-400 to-blue-500" },
];

export const AppreciationSection = () => {
  const [counts, setCounts] = useState(appreciationItems.map((item) => item.count));
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleAppreciate = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
    setClickedIndex(index);

    toast.success(`Thanks for the ${appreciationItems[index].label} 🌻`, {
      description: "Your appreciation helps the farm grow!",
    });

    setTimeout(() => setClickedIndex(null), 500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-farm-grass/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <WoodenSign size="sm" className="inline-block mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span>💝</span> Show Appreciation <span>🌈</span>
            </h2>
          </WoodenSign>
          <p className="text-muted-foreground font-medium">
            Like what you see? Water my skills with your appreciation!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {appreciationItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleAppreciate(index)}
              className={cn(
                "relative flex flex-col items-center gap-2 p-4 rounded-2xl",
                "bg-gradient-to-br border-4 border-farm-wood/50",
                "transition-all duration-300 hover:scale-110 hover:-translate-y-1",
                "active:scale-95 shadow-lg hover:shadow-xl",
                item.color,
                clickedIndex === index && "animate-wiggle"
              )}
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="font-display font-bold text-white text-sm">
                {item.label}
              </span>
              <span className="absolute -top-2 -right-2 bg-white text-foreground font-bold text-xs px-2 py-1 rounded-full shadow-md">
                {counts[index]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
