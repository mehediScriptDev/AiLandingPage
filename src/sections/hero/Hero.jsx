import { ArrowRight, Star } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(images/herobg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "98vh",
      }}
    >
      {/* background main gradient color */}
      <div className="bg-black/95 absolute inset-0 z-0"></div>
      <div className="bg-gradient-to-b absolute inset-0 z-10 h- from-primary/20 via-black/30 to-black/30"></div>
      <div className="max-w-7xl mx-auto py-20 relative z-40 flex items-center pt-45">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl text-white font-black leading-tight">
              BOOST SALES CONVERSIONS WITH AI SALES COACHING FOR PLUMBERS
            </h1>

            <p className="text-lg text-gray-300 leading-tight max-w-xl">
              Learn how Sales Ask AI works as your AI sales coach, delivering
              AI-powered sales coaching to boost close rates, increase job
              value, and scale service businesses. From AI sales coaching for
              plumbers to painting contractors, AI coaching helps your team sell
              smarter. Schedule a demo now.
            </p>

            <button className="group bg-primary text-white font-semibold px-8 py-4 rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
              See it in action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Reviews Section */}
            {/* <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-white font-semibold ml-2">
                  168 Reviews
                </span>
              </div>
            </div> */}
            <div>
                <img className="w-70" src="/images/reviews.png" alt="" />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Analytics Card */}
            {/* <div className="absolute top-8 left-0 bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-2xl z-20">
              <div className="text-sm text-gray-400 mb-1">Conversions</div>
              <div className="text-2xl font-bold mb-2">1,278,178</div>
              <div className="text-green-400 text-sm font-semibold">+24%</div>
              <div className="mt-2">
                <svg className="w-32 h-16" viewBox="0 0 120 60">
                  <polyline
                    points="0,50 20,45 40,30 60,35 80,20 100,25 120,10"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div> */}

            {/* Plumber Image with white outline */}
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20"></div>
              <img
                src="images/herobg.jpg"
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
