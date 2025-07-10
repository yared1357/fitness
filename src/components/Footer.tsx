import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Dumbbell } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`text-white transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-900'}`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Dumbbell className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <h3 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>Fitse Fitness</h3>
              </div>
              <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                Transform your body and mind with our world-class fitness facilities, 
                expert trainers, and supportive community. Your fitness journey starts here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Home</a></li>
                <li><a href="#about" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>About Us</a></li>
                <li><a href="#programs" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Programs</a></li>
                <li><a href="#trainers" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Trainers</a></li>
                <li><a href="#membership" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Membership</a></li>
                <li><a href="#contact" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Personal Training</a></li>
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Group Classes</a></li>
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Nutrition Coaching</a></li>
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Recovery Services</a></li>
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Corporate Wellness</a></li>
                <li><a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-300 hover:text-blue-500'}`}>Youth Programs</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className={`w-5 h-5 mt-0.5 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                    <p>123 Fitness Street</p>
                    <p>Health City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>info@fitsefitness.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>5:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p>6:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">24/7 Access</p>
                  <p>Premium & Elite Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-800'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © 2024 Fitse Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>Privacy Policy</a>
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>Terms of Service</a>
              <a href="#" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;