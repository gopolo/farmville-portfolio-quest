import { WoodenSign } from "./WoodenSign";
import { SkillCrop } from "./SkillCrop";

const skills = [
  {
    name: "Instructional Design",
    level: 90,
    description: "Knowledge of Adult learning theories and custom eLearning design based on ID principles.",
    cropType: "wheat" as const,
  },
  {
    name: "LMS Customization",
    level: 90,
    description: "Solutions for customizing open-source and premium content delivery platforms.",
    cropType: "corn" as const,
  },
  {
    name: "eLearning Content",
    level: 85,
    description: "Designs and curates training content for ILT, WBT, Application walkthrough.",
    cropType: "tomato" as const,
  },
  {
    name: "Course Development",
    level: 88,
    description: "Developing course evaluations including formative and summative methods.",
    cropType: "carrot" as const,
  },
  {
    name: "Learning Analytics",
    level: 85,
    description: "Performance tracking, assessment design, and data-driven insights.",
    cropType: "sunflower" as const,
  },
  {
    name: "Rapid Prototyping",
    level: 82,
    description: "Quick iterations with rapid authoring tools and agile methodologies.",
    cropType: "pumpkin" as const,
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <WoodenSign className="inline-block mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3">
              <span>🌱</span> Skill Garden <span>🌾</span>
            </h2>
          </WoodenSign>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            Each crop represents a skill I've cultivated over the years. 
            Click to water and show your appreciation! 💧
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCrop
              key={skill.name}
              name={skill.name}
              level={skill.level}
              description={skill.description}
              cropType={skill.cropType}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/20 border-2 border-accent rounded-xl px-6 py-3">
            <p className="font-display text-foreground">
              🌟 <strong>Fun Fact:</strong> Just like a real farm, these skills grow better when nurtured with practice!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
