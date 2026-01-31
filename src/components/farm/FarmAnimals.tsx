import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Animal {
  id: number;
  type: "chicken" | "cow" | "pig" | "sheep";
  emoji: string;
  startX: number;
  y: number;
  speed: number;
  direction: "left" | "right";
  delay: number;
}

const animalTypes = {
  chicken: { emoji: "🐔", minY: 70, maxY: 90 },
  cow: { emoji: "🐄", minY: 75, maxY: 95 },
  pig: { emoji: "🐷", minY: 80, maxY: 95 },
  sheep: { emoji: "🐑", minY: 72, maxY: 88 },
};

const generateAnimals = (): Animal[] => {
  const animals: Animal[] = [];
  const types = Object.keys(animalTypes) as Array<keyof typeof animalTypes>;
  
  for (let i = 0; i < 6; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const config = animalTypes[type];
    const direction = Math.random() > 0.5 ? "left" : "right";
    
    animals.push({
      id: i,
      type,
      emoji: config.emoji,
      startX: direction === "right" ? -10 : 110,
      y: config.minY + Math.random() * (config.maxY - config.minY),
      speed: 15 + Math.random() * 25,
      direction,
      delay: Math.random() * 20,
    });
  }
  
  return animals;
};

export const FarmAnimals = () => {
  const [animals] = useState<Animal[]>(generateAnimals);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {animals.map((animal) => (
        <div
          key={animal.id}
          className={cn(
            "absolute text-3xl md:text-4xl",
            animal.direction === "left" && "scale-x-[-1]"
          )}
          style={{
            top: `${animal.y}%`,
            animation: `walk-${animal.direction} ${animal.speed}s linear infinite`,
            animationDelay: `${animal.delay}s`,
          }}
        >
          <span className="inline-block animate-farm-bounce">
            {animal.emoji}
          </span>
        </div>
      ))}
    </div>
  );
};
