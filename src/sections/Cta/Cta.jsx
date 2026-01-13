import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import SectionTitle from "../../Components/common/SectionTitle";
import SectionSubTitle from "../../Components/common/SectionSubTitle";
import LogoLoop from "../TrustBadge/components/LogoLoop";

const Cta = () => {
  const logos = [
    { name: "Heart", position: "top-8 right-32" },
    { name: "Enviro Painting", position: "top-20 right-64" },
    { name: "Alchemy", position: "top-8 right-[500px]" },
    { name: "Pro Garage Doors", position: "top-24 right-12" },
    { name: "Boreal", position: "top-44 right-64" },
    { name: "Bee Plumbing", position: "top-52 right-[500px]" },
    { name: "R+CO", position: "top-56 right-12" },
    { name: "Cardinal Heating", position: "top-72 right-64" },
    { name: "Ulrich", position: "top-80 right-[500px]" },
    { name: "Bfarri Contracting", position: "top-80 right-12" },
    { name: "American Light", position: "top-96 right-64" },
    { name: "Mountain Logo", position: "bottom-8 right-[500px]" },
    { name: "Alchemy Gray", position: "bottom-8 right-12" },
  ];
  const logos2 = [
    "R+CO",
    "HEART",
    "SMART FLOW",
    "Sunfinity Power",
    "BFARR",
    "LINKVILLE",
    "IDEAL SIDING",
    "VG Contractors",
    "DECK+",
    "UBH Solar",
    "BOREAL",
    "1CLICK",
  ];
  const imageLogos = [
    {
      src: "https://cdn.freebiesupply.com/logos/large/2x/facebook-1-logo-png-transparent.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/215/400/original/BrainStation_Primary_Logo.png?1600186065",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "https://www.criteo.com/wp-content/uploads/2020/11/ss-logo-Slesey.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      alt: "Company 4",
      href: "https://company4.com",
    },
  ];

  return (
    <section className="bg-linear-to-r from-black/30 via-primary/10 to-black/30 max-w-7xl border border-gray-800 w-11/12 mx-auto rounded-lg text-white mb-10 relative overflow-hidden">
      <div className="relative px-6 lg:px-10 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:space-y-8 space-y-4 relative z-10">
            <div className="max-w-lg">
              <SectionTitle
                title={"SELL MORE WITH AI & COACH EVERY IN-HOME SALE."}
              />
              <SectionSubTitle
                subtitle={"Get Results in 21 Days. See it in action now!"}
              />
            </div>

            {/* Rating */}
            <div className="flex items-center ">
              <div className="flex items-center gap-1">
                <img
                  className="w-40"
                  src="/images/cta.png"
                  alt="Rating Stars"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 lg:gap-4">
              <button className="group bg-primary text-white font-semibold lg:px-8 lg:py-4 px-4 py-3 text-sm lg:text-base rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                Book a live Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right - Logo Grid */}
          {/* <div className="relative h-[500px] hidden lg:block">
           
            <div className="absolute top-8 right-32 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-red-400 text-2xl mb-1">♥</div>
                <div className="text-xs text-gray-400">HEART</div>
              </div>
            </div>

            <div className="absolute top-20 right-64 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-300">ENVIRO</div>
                <div className="text-xs text-gray-400">PAINTING</div>
              </div>
            </div>

            <div className="absolute top-8 right-[500px] w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-sm font-bold text-white">ALCHEMY</div>
            </div>

            <div className="absolute top-24 right-12 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-xs font-bold text-white">PRO</div>
                <div className="text-xs text-gray-400">GARAGE DOORS</div>
              </div>
            </div>

            <div className="absolute top-44 right-64 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-sm font-bold text-gray-300">BOREAL</div>
            </div>

            <div className="absolute top-52 right-[500px] w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-xl mb-1">🐝</div>
                <div className="text-xs font-bold text-white">BEE</div>
                <div className="text-xs text-gray-400">PLUMBING</div>
              </div>
            </div>

            <div className="absolute top-56 right-12 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="text-xs font-bold text-white">R+CO</div>
              </div>
            </div>

            <div className="absolute top-72 right-64 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-xs font-bold text-gray-300">Cardinal</div>
                <div className="text-xs text-gray-500">HEATING & AIR</div>
              </div>
            </div>

            <div className="absolute top-80 right-[500px] w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-sm font-bold text-gray-400">ULRICH</div>
            </div>

            <div className="absolute top-80 right-12 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-center">
                <div className="text-xs font-bold text-white">BFARRI</div>
                <div className="text-xs text-gray-400">CONTRACTING</div>
              </div>
            </div>

            <div className="absolute bottom-32 right-64 w-36 h-24 bg-white border border-gray-300 rounded-lg flex items-center justify-center p-4 hover:border-gray-400 transition-colors">
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xs font-bold text-gray-800">
                  AMERICAN LIGHT
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-[500px] w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-2xl">⛰️</div>
            </div>

            <div className="absolute bottom-8 right-12 w-36 h-24 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center p-4 hover:border-gray-700 transition-colors">
              <div className="text-xs font-bold text-gray-500">ALCHEMY</div>
            </div>
          </div> */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 py-3 lg:py-6"
          >
            
                {logos2.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex h-20 items-center justify-center rounded-xl bg-card/50 px-4 backdrop-blur-sm transition-all border border-gray-700  hover:bg-card"
              >
                <span className="font-display text-sm font-medium text-muted-foreground">
                  {logo}
                </span>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
