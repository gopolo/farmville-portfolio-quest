import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: "🏠" },
  { label: "Skills", href: "#skills", icon: "🌱" },
  { label: "Tech Stack", href: "#tech", icon: "🏗️" },
  { label: "Contact", href: "#contact", icon: "📮" },
];

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-farm-sky to-farm-sky/90 backdrop-blur-sm border-b-4 border-farm-grass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-2xl text-farm-wood flex items-center gap-2"
          >
            <span className="text-3xl">🌻</span>
            <span className="text-shadow-light">Shailesh's Skills Farm</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-display font-semibold text-farm-soil hover:text-primary transition-colors rounded-lg hover:bg-white/30 flex items-center gap-2"
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-farm-soil"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 font-display font-semibold text-farm-soil hover:bg-white/30 rounded-lg flex items-center gap-2"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
