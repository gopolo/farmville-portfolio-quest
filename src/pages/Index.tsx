import { NavigationBar } from "@/components/farm/NavigationBar";
import { HeroSection } from "@/components/farm/HeroSection";
import { AboutSection } from "@/components/farm/AboutSection";
import { SkillsSection } from "@/components/farm/SkillsSection";
import { TechStackSection } from "@/components/farm/TechStackSection";
import { ContactSection } from "@/components/farm/ContactSection";
import { AppreciationSection } from "@/components/farm/AppreciationSection";
import { FooterSection } from "@/components/farm/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStackSection />
        <AppreciationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
