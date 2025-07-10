import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Moon, Sun, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onJoinNowClick: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoinNowClick, isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleJoinNowClick = () => {
    setIsMenuOpen(false);
    onJoinNowClick();
  };

  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg sticky top-0 z-50 transition-colors duration-300`}>
      {/* Top bar with contact info */}
      <div className={`${isDarkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white py-2 px-4 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>123 Fitness Street, Health City, HC 12345</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Open: Mon-Sun 5:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Dumbbell className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <div className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Fitse Fitness
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('programs')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              Programs
            </button>
            <button 
              onClick={() => handleNavClick('trainers')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              Trainers
            </button>
            <button 
              onClick={() => handleNavClick('membership')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              Membership
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}
            >
              Contact
            </button>
          </div>

          {/* CTA Button and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={handleJoinNowClick}
              className={`${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium`}
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={toggleMenu} className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('programs')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                Programs
              </button>
              <button 
                onClick={() => handleNavClick('trainers')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                Trainers
              </button>
              <button 
                onClick={() => handleNavClick('membership')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                Membership
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium text-left`}
              >
                Contact
              </button>
              <button 
                onClick={handleJoinNowClick}
                className={`${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium self-start`}
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;