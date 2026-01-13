import { ArrowRight, Star } from "lucide-react";
import SectionSubTitle from "../../Components/common/SectionSubTitle";
import HeroTitle from "./components/HeroTitle";

const Hero = () => {
  return (
    <div
      className="relative  "
      style={{
        backgroundImage: `url(images/herobg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        // height: "98vh",



      }}
    >
      {/* background main gradient color */}
      <div className="bg-black/95 absolute inset-0 z-0"></div>
      <div className="bg-linear-to-b absolute inset-0 z-10 h- from-primary/20 via-black/30 to-black/30"></div>
      <div className="max-w-7xl w-11/12 mx-auto lg:pt-20 relative z-40 flex items-center pt-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:space-y-8 space-y-4">
            <HeroTitle title={"BOOST SALES CONVERSIONS WITH AI SALES COACHING FOR PLUMBERS"} />

            <SectionSubTitle subtitle="Learn how Sales Ask AI works as your AI sales coach, delivering
              AI-powered sales coaching to boost close rates, increase job
              value, and scale service businesses. From AI sales coaching for
              plumbers to painting contractors, AI coaching helps your team sell
              smarter. Schedule a demo now." />

            <button className="group bg-primary text-white font-semibold text-sm lg:text-base lg:px-8 px-4 py-3 lg:py-4 rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
              See it in action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            
            <div>
                <img className="w-60 lg:w-70" src="/images/reviews.png" alt="" />
            </div>
          </div>
          <div >

            {/* Plumber Image with white outline */}
            <div className="relative">
              <div className="lg:absolute lg:inset-0 bg-white rounded-full blur-2xl opacity-20"></div>
              <img
                src="images/demo.avif"
                className="relative z-10 rounded-lg"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
