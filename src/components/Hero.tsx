import React from 'react';
import { ArrowRight, Play, Star, Users, Award, Clock } from 'lucide-react';

interface HeroProps {
  onJoinNowClick: () => void;
  onBookClassClick: () => void;
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ onJoinNowClick, onBookClassClick, isDarkMode }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-black/80 to-black/50' : 'from-black/70 to-black/30'} z-10 transition-all duration-300`}></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block text-blue-400">Body & Mind</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
          Join thousands of members who have achieved their fitness goals with our world-class facilities, 
          expert trainers, and personalized programs designed for every fitness level.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={onJoinNowClick}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onBookClassClick}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Book a Class</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-blue-400 mr-2" />
              <div className="text-3xl font-bold text-blue-400">5000+</div>
            </div>
            <div className="text-sm uppercase tracking-wide">Active Members</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-blue-400 mr-2" />
              <div className="text-3xl font-bold text-blue-400">50+</div>
            </div>
            <div className="text-sm uppercase tracking-wide">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-8 h-8 text-blue-400 mr-2" />
              <div className="text-3xl font-bold text-blue-400">24/7</div>
            </div>
            <div className="text-sm uppercase tracking-wide">Access Available</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-blue-400 mr-2" />
              <div className="text-3xl font-bold text-blue-400">15+</div>
            </div>
            <div className="text-sm uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;