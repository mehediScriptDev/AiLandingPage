import { ArrowRight } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";

const Cta = () => {
  return (
    <section className="bg-linear-to-r from-secondaryBg/40 via-primary/20 to-secondaryBg/40 max-w-7xl border border-gray-600 w-11/12 mx-auto rounded-lg text-white mb-10 py-10 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center flex items-center flex-col justify-center">
        {/* Headline */}
        <div className="mb-3 lg:mb-6 ">
          <SectionTitle
            title="Your next pitch will be better than your last."
          />
        </div>

        {/* Body Copy */}
        <div className="mb-5 lg:mb-8 ">
          <SectionSubTitle
            subtitle="Get out of 'theory' and into real practice. Simulate real conversations, get AI-driven coaching, and build a pitch you can deliver with confidence."
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 w-full sm:w-auto">
          <a
            href="https://simupitch.ai/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary text-secondaryBg font-semibold lg:px-8 lg:py-4 px-6 py-3 text-sm lg:text-base rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl justify-center w-full sm:w-fit"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://simupitch.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/30 text-white font-semibold lg:px-8 lg:py-4 px-6 py-3 text-sm lg:text-base rounded-lg transition-all flex items-center gap-2 shadow-lg justify-center hover:shadow-xl hover:border-white/50 w-full sm:w-fit"
          >
            Login
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
