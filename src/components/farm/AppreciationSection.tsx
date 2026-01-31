import { useState, useEffect } from "react";
import { WoodenSign } from "./WoodenSign";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const appreciationItems = [
  { icon: "❤️", label: "Love it!", type: "love", color: "from-red-400 to-red-600" },
  { icon: "⭐", label: "Amazing!", type: "amazing", color: "from-yellow-400 to-amber-500" },
  { icon: "🌟", label: "Stellar!", type: "stellar", color: "from-purple-400 to-purple-600" },
  { icon: "🔥", label: "On Fire!", type: "fire", color: "from-orange-400 to-red-500" },
  { icon: "💧", label: "Refreshing!", type: "refreshing", color: "from-cyan-400 to-blue-500" },
];

export const AppreciationSection = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial counts from database
  useEffect(() => {
    const fetchCounts = async () => {
      const { data, error } = await supabase
        .from("appreciations")
        .select("reaction_type, count");
      
      if (data) {
        const countsMap: Record<string, number> = {};
        data.forEach((item) => {
          countsMap[item.reaction_type] = item.count;
        });
        setCounts(countsMap);
      }
      setIsLoading(false);
    };

    fetchCounts();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("appreciations")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "appreciations" },
        (payload) => {
          const updated = payload.new as { reaction_type: string; count: number };
          setCounts((prev) => ({
            ...prev,
            [updated.reaction_type]: updated.count,
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleAppreciate = async (index: number) => {
    const item = appreciationItems[index];
    setClickedIndex(index);

    // Optimistic update
    setCounts((prev) => ({
      ...prev,
      [item.type]: (prev[item.type] || 0) + 1,
    }));

    // Call the database function to increment
    const { error } = await supabase.rpc("increment_appreciation", {
      reaction: item.type,
    });

    if (error) {
      console.error("Error incrementing appreciation:", error);
      // Revert optimistic update on error
      setCounts((prev) => ({
        ...prev,
        [item.type]: (prev[item.type] || 1) - 1,
      }));
    } else {
      toast.success(`Thanks for the ${item.label} 🌻`, {
        description: "Your appreciation helps the farm grow!",
      });
    }

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
              disabled={isLoading}
              className={cn(
                "relative flex flex-col items-center gap-2 p-4 rounded-2xl",
                "bg-gradient-to-br border-4 border-farm-wood/50",
                "transition-all duration-300 hover:scale-110 hover:-translate-y-1",
                "active:scale-95 shadow-lg hover:shadow-xl",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                item.color,
                clickedIndex === index && "animate-wiggle"
              )}
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="font-display font-bold text-white text-sm">
                {item.label}
              </span>
              <span className="absolute -top-2 -right-2 bg-white text-foreground font-bold text-xs px-2 py-1 rounded-full shadow-md">
                {isLoading ? "..." : counts[item.type] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
