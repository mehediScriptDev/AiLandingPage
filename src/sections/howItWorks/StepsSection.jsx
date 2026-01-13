import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";
import SectionBadge from "../../Components/common/SectionBadge";

const steps = [
  {
    number: "01",
    title: "THE DEMO",
    description:
      "Explore how Sales Ask's AI transforms your team's coaching process, giving you the ability to refine every sales conversation in minutes instead of hours.",
    image:
      "https://smallbizclub.com/wp-content/uploads/2015/08/6-tips-to-get-the-most-out-of-your-next-client-meeting-735x414.jpg",
    imagePosition: "right",
  },
  {
    number: "02",
    title: "ONBOARDING",
    description:
      "In just one week, we'll align with your business goals, fine-tune our AI to match your sales approach, and equip your team to unlock rapid growth.",
    image:
      "https://www.allstarss.com/wp-content/uploads/iStock-1331428275-edit.jpg",
    imagePosition: "left",
  },
  {
    number: "03",
    title: "SUCCESS",
    description:
      "Your dedicated Customer Success Manager will provide ongoing support with regular check-ins. Three months in, we'll review your performance gains and celebrate your ROI milestones together.",
    image:
      "https://priorityonepayroll.com/wp-content/uploads/2018/06/pop-client-meeting.jpg",
    imagePosition: "right",
  },
];

export const StepsSection = () => {
  return (
    <section id="how-it-works" className="relative bg-background container mx-auto">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center flex flex-col items-center justify-center"
        >
          <SectionBadge text={"STEPS"} />

          <SectionTitle title={"How It Works"} />
          <SectionSubTitle
            subtitle={
              "We're by your side from setup to results, ensuring your success at every step."
            }
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-primary via-primary to-transparent" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                  {/* Glow layer */}
                  <div
                    className="absolute inset-0 rounded-full 
    bg-white/30 blur-xl
  "
                  />

                  {/* Main circle */}
                  <div
                    className="relative flex h-12 w-12 items-center justify-center
    rounded-full bg-primary backdrop-blur-xl
    text-lg font-bold text-white shadow-lg
  "
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content grid */}
                <div
                  className={`grid gap-8 pt-20 lg:grid-cols-2 lg:gap-16 ${
                    step.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text content */}
                  <div
                    className={`space-y-4 ${
                      step.imagePosition === "right"
                        ? "lg:text-right lg:pr-16"
                        : "lg:order-2 lg:pl-16"
                    }`}
                  >
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="text-primaryText leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`${
                      step.imagePosition === "right"
                        ? "lg:order-2 lg:pl-16"
                        : "lg:pr-16"
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card/50 shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Decorative elements */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 cta-gradient opacity-60" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
