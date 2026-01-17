import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl w-11/12 mx-auto pt-8 lg:pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="text-2xl font-bold tracking-tight uppercase text-primary">SimuPitch AI</span> */}
              
              <Link to="/">
              <img src="/images/logo.png" className='lg:w-48 w-32' alt="website logo" />
              </Link>
            </div>

            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Practice smarter. Sell better. Scale faster.
            </p>

            <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
              AI-powered sales simulation platform helping reps build confidence through realistic practice scenarios and instant feedback.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Use Cases</a></li>
              <li><a href="https://simupitch.ai/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Login</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Customer Stories</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
              <li><a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Book a Demo</a></li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© SimuPitch AI. Simulate. Sell. Scale. Powered by AI.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="https://simupitch.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;