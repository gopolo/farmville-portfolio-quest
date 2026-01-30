export const FooterSection = () => {
  return (
    <footer className="bg-farm-soil text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Farm decorations */}
          <div className="flex justify-center gap-4 mb-4 text-3xl">
            <span className="animate-sway">🌻</span>
            <span className="animate-sway" style={{ animationDelay: "0.2s" }}>🌾</span>
            <span className="animate-sway" style={{ animationDelay: "0.4s" }}>🌽</span>
            <span className="animate-sway" style={{ animationDelay: "0.6s" }}>🍅</span>
            <span className="animate-sway" style={{ animationDelay: "0.8s" }}>🌻</span>
          </div>

          {/* Logo */}
          <p className="font-display text-2xl font-bold mb-2">
            🌻 Shailesh Gurav's Farm 🌻
          </p>

          {/* Tagline */}
          <p className="text-primary-foreground/80 mb-4">
            Cultivating Learning Excellence Since 2010
          </p>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Shailesh Gurav. All rights reserved.
          </p>

          {/* Fun footer note */}
          <p className="text-xs text-primary-foreground/50 mt-2">
            🚜 No actual crops were harmed in the making of this portfolio 🚜
          </p>
        </div>
      </div>
    </footer>
  );
};
