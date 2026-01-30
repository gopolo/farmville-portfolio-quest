import { WoodenSign } from "./WoodenSign";
import { FarmBuilding } from "./FarmBuilding";

const techCategories = [
  {
    title: "Authoring Tools",
    icon: "🏠",
    buildingType: "barn" as const,
    items: ["Articulate Storyline 360", "Adobe Captivate", "Rise 360", "Lectora Inspire"],
  },
  {
    title: "LMS Platforms",
    icon: "🏛️",
    buildingType: "silo" as const,
    items: ["Absorb LMS", "Canvas", "Blackboard", "TalentLMS", "Litmos", "Cornerstone"],
  },
  {
    title: "Design Tools",
    icon: "🏡",
    buildingType: "greenhouse" as const,
    items: ["Adobe Creative Suite", "Figma", "Canva", "Vyond", "Camtasia"],
  },
  {
    title: "Content Dev",
    icon: "⚙️",
    buildingType: "windmill" as const,
    items: ["Microsoft Office", "Google Workspace", "Articulate Review", "Snagit"],
  },
  {
    title: "Collaboration",
    icon: "🏘️",
    buildingType: "coop" as const,
    items: ["Slack", "Microsoft Teams", "Zoom", "Trello", "Asana"],
  },
  {
    title: "Web Tech",
    icon: "🏰",
    buildingType: "stable" as const,
    items: ["HTML5", "CSS3", "SCORM", "xAPI", "cmi5"],
  },
];

export const TechStackSection = () => {
  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <WoodenSign className="inline-block mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3">
              <span>🏗️</span> Tech Village <span>🏘️</span>
            </h2>
          </WoodenSign>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            Explore the different buildings in my tech village. 
            Click on each to see what tools live inside!
          </p>
        </div>

        {/* Buildings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techCategories.map((category, index) => (
            <FarmBuilding
              key={category.title}
              title={category.title}
              icon={category.icon}
              items={category.items}
              buildingType={category.buildingType}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Innovation badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-farm-wood px-6 py-3 rounded-xl text-primary-foreground font-display">
            <span className="text-2xl">💡</span>
            <span className="font-bold">Innovation Arsenal</span>
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};
