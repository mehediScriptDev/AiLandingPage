import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6 max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight uppercase">simupitch ai</span>
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                <div className="w-1 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Join The Sales Fix!</h3>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              A no-fluff, high-signal weekly newsletter built for home service pros who want to close more deals, train reps faster, and sharpen their sales process.
            </p>

            {/* Badges */}
            {/* <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="text-white text-xs font-bold text-center">
                  <div>ACP</div>
                  <div>SCC</div>
                </div>
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="text-purple-900 text-xs font-bold">GDPR</div>
              </div>
            </div> */}
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industry</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home Remodeling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Painting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Roofing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">HVAC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Landscaping & Lawncare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Plumbing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Windows & Doors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Chimney Services</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Book a Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Coach Dean</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Customer Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Zoom Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ROI Calculator</a></li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#" className="bg-white text-black rounded-lg px-6 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
          <a href="#" className="bg-white text-black rounded-lg px-6 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 Sales Ask. All Rights Reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;