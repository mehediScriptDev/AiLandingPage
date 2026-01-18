import { ArrowRight, Star, MessageCircle, Lightbulb } from "lucide-react";
import SectionSubTitle from "../../Components/common/SectionSubTitle";
import HeroTitle from "./components/HeroTitle";
import { IoCheckmarkSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdPeople } from "react-icons/md";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative  "
      style={{
        backgroundImage: `url(images/herobg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        // height: "98vh",
      }}
    >
      {/* background main gradient color */}
      <div className="bg-secondaryBg/95 absolute inset-0 z-0"></div>
      <div className="bg-linear-to-b absolute inset-0 z-10 h- from-white/40 via-secondaryBg/50 to-secondaryBg/50"></div>
      <div className="max-w-7xl w-11/12 mx-auto lg:pt-8 relative z-40 flex flex-col items-center pt-28  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center w-full">
          {/* Left Content */}
          <div className="lg:space-y-8 space-y-4 ">
            <HeroTitle title={"Simulate. Sell. Scale. "} />

            <SectionSubTitle subtitle="SimuPitch AI is your AI-powered sales simulation platform—practice your pitch in realistic scenarios and get feedback that helps you sharpen your delivery, handle objections, and build confidence before the next real conversation." />

            <div className="flex sm:flex-row flex-col w-full items-center gap-3 sm:gap-4">
              <a
                href="https://simupitch.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary w-full text-secondaryBg font-semibold text-sm lg:text-base lg:px-8 px-4 py-2.5 lg:py-4 rounded-lg transition-all flex items-center gap-2 shadow-lg justify-center hover:shadow-xl sm:w-fit"
              >
                Start Practicing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://simupitch.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-primaryText/30 text-primaryText font-semibold text-sm lg:text-base lg:px-8 px-4 py-2.5 lg:py-4 rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl w-full justify-center sm:w-fit"
              >
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro-points under CTA */}
            <ul className="lg:space-y-3 space-y-1.5 lg:pt-4 pt-2 text-gray-300">
              <li className="flex items-center lg:gap-3 gap-1.5">
                <IoCheckmarkSharp className="lg:w-5 lg:h-5 w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">
                  Practice in simulated real-world sales conversations
                </span>
              </li>
              <li className="flex items-center lg:gap-3 gap-1.5">
                <IoCheckmarkSharp className="lg:w-5 lg:h-5 w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">
                  Get AI-driven feedback to refine your pitch
                </span>
              </li>
              <li className="flex items-center lg:gap-3 gap-1.5">
                <IoCheckmarkSharp className="lg:w-5 lg:h-5 w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">
                  Train consistently—without waiting for live reps
                </span>
              </li>
            </ul>
          </div>
          <div>
            {/* Plumber Image with white outline */}
            <div className="relative">
              <div className="lg:absolute lg:inset-0 bg-black rounded-full blur-3xl opacity-20"></div>
              <img
                src="images/bbg1.png"
                className="relative z-10 sm:w-96 lg:w-150 xl:w-auto mx-auto rounded-lg"
                // style={{
                //   filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
