import { Mic, Brain, LineChart, Rocket, CheckCircle } from "lucide-react";
import SectionBadge from "../../Components/common/SectionBadge";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";

const features = [
  {
    icon: Mic,
    title: "Smart Call Recording",
    description: "Automatically record, transcribe, and organize every sales conversation with 99% accuracy.",
    benefits: ["Automatic transcription", "Speaker identification", "Searchable archive"],
  },
  {
    icon: Brain,
    title: "AI-Powered Coaching",
    description: "Get real-time insights and personalized coaching tips based on conversation analysis.",
    benefits: ["Talk ratio analysis", "Sentiment tracking", "Best practice alerts"],
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Track individual and team performance with comprehensive dashboards and reports.",
    benefits: ["Custom scorecards", "Trend analysis", "Team benchmarks"],
  },
  {
    icon: Rocket,
    title: "Deal Acceleration",
    description: "Identify winning patterns and replicate success across your entire sales organization.",
    benefits: ["Win/loss analysis", "Pipeline insights", "Revenue forecasting"],
  },
];

const Features = () => {
  return (
    <section id="features" className=" relative">
      {/* Background */}
      
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/20 via-primary/1 to-black/20">

      </div>

      <div className="lg:container py-10 w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center flex justify-center items-center flex-col max-w-3xl mx-auto mb-6 lg:mb-16 space-y-1.5">
          <SectionBadge text="Features"/>
          <SectionTitle title={"Everything You Need to Win More Deals"}/>
          <SectionSubTitle subtitle="Powerful AI tools designed specifically for modern sales teams who want to 
            close more deals and drive predictable revenue growth" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:gap-6 gap-2.5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-secondaryBg hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#818898] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-[#818898]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;