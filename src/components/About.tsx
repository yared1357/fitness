import React from 'react';
import { Target, Heart, Trophy, Shield, Zap, Users } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Fitse Fitness?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We're more than just a gym - we're your partner in achieving a healthier, stronger, and more confident you
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Modern gym interior with state-of-the-art equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 text-white p-6 rounded-lg shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-600'}`}>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Fitness Journey Starts Here
              </h3>
              
              <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                At Fitse Fitness, we believe that fitness is not just about physical transformation - it's about 
                building confidence, creating healthy habits, and becoming the best version of yourself. Our 
                state-of-the-art facility combines cutting-edge equipment with expert guidance to deliver results.
              </p>

              <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Whether you're a beginner taking your first steps or an experienced athlete pushing your limits, 
                our diverse range of programs and personalized approach ensures that every member receives the 
                support they need to succeed.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Target className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Goal-Oriented Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Health-Focused Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proven Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Safe Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-8 rounded-lg shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <Zap className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                High-Energy Workouts
              </h4>
              <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dynamic training sessions designed to maximize your energy and deliver exceptional results in minimal time.
              </p>
            </div>

            <div className={`text-center p-8 rounded-lg shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <Users className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Community Support
              </h4>
              <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join a supportive community of like-minded individuals who motivate and inspire each other every day.
              </p>
            </div>

            <div className={`text-center p-8 rounded-lg shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <Trophy className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Proven Methods
              </h4>
              <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Science-backed training methods and nutrition guidance that have helped thousands achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;