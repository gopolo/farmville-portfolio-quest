import farmHeroBg from "@/assets/farm-hero-bg.jpg";
import { WoodenSign } from "./WoodenSign";
import { StatBadge } from "./StatBadge";
import { GameButton } from "./GameButton";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with blur for text readability */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url(${farmHeroBg})` }}
      />
      {/* Overlay for enhanced readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-farm-soil/90 via-farm-soil/40 to-farm-sky/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        {/* Main Sign */}
        <WoodenSign size="lg" className="mb-8 inline-block">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-shadow-game">
            SHAILESH GURAV
          </h1>
          <p className="text-lg md:text-xl mt-2 text-accent font-semibold">
            ✨ Full-Stack E-Learning Solutions Expert ✨
          </p>
        </WoodenSign>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          <StatBadge value="67" label="Projects" icon="🧺" delay={200} />
          <StatBadge value="18" label="Clients" icon="🏆" delay={400} />
          <StatBadge value="14+" label="Years" icon="⭐" delay={600} />
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground font-medium mb-8 text-shadow-light">
          Pioneering the future of learning through{" "}
          <span className="text-accent font-bold">immersive experiences</span>,
          cutting-edge methodologies, and{" "}
          <span className="text-accent font-bold">transformative design</span>
        </p>

        {/* CTA Button */}
        <GameButton
          href="#about"
          variant="primary"
          size="lg"
        >
          Explore My Farm 🚜
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </GameButton>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      
      {/* Floating decorations */}
      <div className="absolute top-24 left-8 text-4xl animate-float opacity-80">☁️</div>
      <div className="absolute top-32 right-12 text-5xl animate-float opacity-80" style={{ animationDelay: "1s" }}>☁️</div>
      <div className="absolute top-20 left-1/4 text-3xl animate-float opacity-70" style={{ animationDelay: "0.5s" }}>🦋</div>
    </section>
  );
};
