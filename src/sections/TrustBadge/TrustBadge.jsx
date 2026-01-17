import React from "react";
import SectionTitle from "../../Components/common/SectionTitle";
import LogoLoop from "../TrustBadge/components/LogoLoop";

const TrustBadge = () => {
  const techLogos = [
    {
      src: "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://cdn.freebiesupply.com/logos/large/2x/airbnb-2-logo-png-transparent.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    
  ];

  // Alternative with image sources
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
    <div className="lg:py-20 py-10 w-11/12 mx-auto space-y-4 lg:space-y-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Trusted by hundreds of Companies across the globe"
          align="text-center"
        />
      </div>

      {/* Client Testimonials */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-2.5 mb-6">
          {/* Testimonial 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-secondaryBg p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="John Doe"
                className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primaryText truncate">John Doe</h4>
                <p className="text-xs text-gray-500">CEO, TechCorp</p>
              </div>
              <div className="text-primary text-3xl leading-none">"</div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              This platform completely transformed how we manage our sales pipeline. ROI exceeded expectations within 3 months.
            </p>
            <div className="mt-4 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-secondaryBg p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Sarah Mitchell"
                className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primaryText truncate">Sarah Mitchell</h4>
                <p className="text-xs text-gray-500">VP Sales, GlobalInc</p>
              </div>
              <div className="text-primary text-3xl leading-none">"</div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Best investment we've made this year. The team collaboration features and analytics are game-changing.
            </p>
            <div className="mt-4 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-secondaryBg p-6 shadow-sm hover:shadow-xl transition-all duration-300 ">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Mike Rodriguez"
                className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primaryText truncate">Mike Rodriguez</h4>
                <p className="text-xs text-gray-500">Director, StartupHub</p>
              </div>
              <div className="text-primary text-3xl leading-none">"</div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Intuitive, powerful, and incredibly effective. Our conversion rates improved by 45% in the first quarter.
            </p>
            <div className="mt-4 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center lg:gap-8 gap-4 lg:mb-12 text-center">
          <div className="">
            <div className="lg:text-4xl text-2xl font-bold text-primaryText lg:mb-1">250K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary"></div>
          <div className="">
            <div className="lg:text-4xl text-2xl font-bold text-primaryText lg:mb-1">98%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary"></div>
          <div className="">
            <div className="lg:text-4xl text-2xl font-bold text-primaryText lg:mb-1">50+</div>
            <div className="text-sm text-gray-400">Countries</div>
          </div>
        </div>
      </div>

      {/* Logo Loops */}
      <div className="space-y-2">
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology partners"
        />

        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="right"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          fadeOut
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default TrustBadge;
