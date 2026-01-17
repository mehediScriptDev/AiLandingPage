import { Award, Target, TrendingUp } from "lucide-react";

const proofPoints = [
  {
    icon: Award,
    text: "Built for performance-focused sales teams",
  },
  {
    icon: Target,
    text: "Designed to make practice more realistic—and more consistent",
  },
  {
    icon: TrendingUp,
    text: "A repeatable way to sharpen your pitch",
  },
];

const SocialProof = () => {
  return (
    <section className="py-4 lg:py-8  border-y border-primary/20">
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 ">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 lg:gap-4 justify-start"
              >
                <div className="bg-primary/20 rounded-full p-2 shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/90 text-sm xl:text-base font-medium">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
