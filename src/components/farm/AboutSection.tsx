import { WoodenSign } from "./WoodenSign";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <WoodenSign className="inline-block mb-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3">
              <span>🏠</span> About The Farmer <span>🏠</span>
            </h2>
          </WoodenSign>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="farm-plot">
            <div className="farm-plot-inner p-6 md:p-8">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-inner">
                {/* Avatar */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-farm-sun flex items-center justify-center text-6xl shadow-lg border-4 border-farm-wood">
                      👨‍🌾
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-farm-crop-green text-white text-xs font-bold px-2 py-1 rounded-full">
                      14+ YRS
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Shailesh Gurav
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Learning Experience Designer & E-Learning Pioneer
                    </p>
                  </div>
                </div>

                {/* Bio paragraphs */}
                <div className="space-y-4 text-foreground/90">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🌱</span>
                    <span>
                      <strong>14+ years</strong> of pioneering multi-domain experience in
                      learning experience design. Specializing in crafting immersive
                      training experiences using advanced learning theories and
                      cutting-edge tools.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span>
                      <strong>My mission:</strong> Inspire transformation. With
                      meticulous attention to detail and next-generation design
                      expertise, every element perfectly aligns with strategic
                      learning objectives.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <span>
                      <strong>Innovation-driven.</strong> Constantly evolving with
                      emerging eLearning trends, delivering excellence through
                      technology fusion and creative mastery, empowering learners
                      to dominate real-world scenarios.
                    </span>
                  </p>
                </div>

                {/* Quick skills highlight */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { skill: "Instructional Design", icon: "📚", level: "90%" },
                      { skill: "Adult Learning", icon: "🎓", level: "90%" },
                      { skill: "LMS Expert", icon: "💻", level: "90%" },
                    ].map((item) => (
                      <div
                        key={item.skill}
                        className="bg-muted px-4 py-2 rounded-full flex items-center gap-2 font-medium"
                      >
                        <span>{item.icon}</span>
                        <span className="text-sm">{item.skill}</span>
                        <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
