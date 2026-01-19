import React from "react";
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary/40 text-primaryText">
      <div className="max-w-7xl w-11/12 mx-auto pt-8 lg:pt-12 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="max-w-sm ">
            <div className="flex items-center gap-2 mb-3">
              {/* <span className="text-2xl font-bold tracking-tight uppercase text-primary">SimuPitch AI</span> */}

              <Link to="/">
                <img
                  src="/images/pinklogo.png"
                  className="lg:w-52 w-32 -ml-2"
                  alt="website logo"
                />
              </Link>
            </div>

            <p className="text-primaryText text-sm lg:text-base leading-relaxed font-medium">
              Practice smarter. Sell better. Scale faster.
            </p>

             <p className="text-primaryText text-xs lg:text-sm leading-relaxed">
              AI-powered sales simulation platform helping reps build confidence through realistic practice scenarios and instant feedback.
            </p> 
          </div>

          {/* Company Links */}
          <div className="">
            <h3 className="text-lg text-primaryText font-semibold mb-6">Company</h3>
            <ul className="lg:space-y-3 space-y-1.5">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features-detailed')}
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('use-cases')}
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  Use Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg text-primaryText font-semibold mb-6">Quick Links</h3>
            <ul className="lg:space-y-3 space-y-1.5">
              <li>
                <button
                  onClick={() => scrollToSection('what-it-is')}
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  What It Is
                </button>
              </li>
              <li>
                <a
                  href="https://simupitch.ai/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://simupitch.ai/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="https://simupitch.ai/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm font-medium"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/60 text-sm text-center">
              © SimuPitch AI. Simulate. Sell. Scale. Powered by AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
