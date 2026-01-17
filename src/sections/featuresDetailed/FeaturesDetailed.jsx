import { MessageSquare, Lightbulb, FileText, ShieldCheck, Users, Zap } from "lucide-react";
import SectionBadge from "../../Components/common/SectionBadge";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";

const features = [
  {
    icon: MessageSquare,
    title: "Realistic sales simulations",
    description: "Practice in scenarios that feel like the conversations you face in the real world—so you're not improvising when it counts.",
  },
  {
    icon: Lightbulb,
    title: "AI-driven feedback",
    description: "Get immediate coaching on what landed and what didn't, with clear suggestions to improve your pitch over the next rep.",
  },
  {
    icon: FileText,
    title: "Pitch clarity & structure",
    description: "Tighten your opening, value prop, and close so your message is easy to understand—and hard to ignore.",
  },
  {
    icon: ShieldCheck,
    title: "Objection practice",
    description: "Build confidence handling common objections by practicing responses until they feel natural.",
  },
  {
    icon: Users,
    title: "Consistent training for teams",
    description: "Give your team a repeatable way to practice and improve—without needing constant 1:1 roleplay time.",
  },
  {
    icon: Zap,
    title: "Faster ramp for new reps",
    description: "Help new hires get 'real reps' sooner, so they're ready for live conversations faster.",
  },
];

const FeaturesDetailed = () => {
  return (
    <section id="features-detailed" className="py-10 lg:py-20 relative">
      <div className="absolute inset-0 -z-10"></div>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/20 via-primary/1 to-black/20">

      </div>

      <div className="max-w-7xl w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center flex justify-center items-center flex-col max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <SectionBadge text="Features" />
          <SectionTitle title="Everything you need to level up" />
          <SectionSubTitle subtitle="Powerful tools designed to make your sales practice more realistic, actionable, and effective." />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="bg-primary/20 rounded-lg p-3 w-fit mb-5 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailed;
