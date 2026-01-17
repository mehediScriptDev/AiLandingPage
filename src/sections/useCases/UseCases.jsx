import { User, Users, Rocket } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";

const useCases = [
  {
    icon: User,
    title: "For individual reps",
    description: "Practice your pitch on demand and show up sharper for every call.",
  },
  {
    icon: Users,
    title: "For sales leaders",
    description: "Reinforce consistent messaging and give your team a repeatable practice loop.",
  },
  {
    icon: Rocket,
    title: "For founders & operators",
    description: "Pressure-test your positioning and refine how you explain value—fast.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <SectionTitle title="Built for anyone who sells." />
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="bg-primary/20 rounded-full p-4 w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industry Line */}
        <div className="text-center">
          <p className="text-white/60 text-sm lg:text-base italic max-w-2xl mx-auto">
            Great for high-trust, consultative sales teams—where confidence and clarity win deals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
