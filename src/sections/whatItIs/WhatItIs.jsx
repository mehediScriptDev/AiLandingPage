import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";
import { ArrowRight } from "lucide-react";

const WhatItIs = () => {
  return (
    <section id="what-it-is" className="py-16 lg:py-24  relative">
      <div className="max-w-5xl w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12 space-y-6">
          <SectionTitle title="A smart training ground for serious closers." />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-white/80 text-base lg:text-lg leading-relaxed">
              Most reps don't get enough real practice before they're in front of a prospect. 
              SimuPitch AI gives you a realistic place to rehearse your pitch, pressure-test your 
              messaging, and improve fast—with AI-driven coaching that helps you identify what to 
              keep, what to tighten, and what to say next.
            </p>
            
            <p className="text-primary text-xl lg:text-2xl font-bold italic">
              Stop "winging it." Start simming it.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="https://simupitch.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-white font-semibold text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4 rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl w-fit mx-auto"
            >
              Try It Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
