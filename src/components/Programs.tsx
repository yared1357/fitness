import React from 'react';
import { Dumbbell, Heart, Users, Zap, Target, Clock } from 'lucide-react';

interface ProgramsProps {
  onBookClassClick: () => void;
  isDarkMode: boolean;
}

const Programs: React.FC<ProgramsProps> = ({ onBookClassClick, isDarkMode }) => {
  const programs = [
    {
      id: 1,
      name: 'Strength Training',
      description: 'Build muscle, increase strength, and improve bone density with our comprehensive strength training programs.',
      icon: Dumbbell,
      duration: '45-60 min',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['Free Weights', 'Machine Training', 'Progressive Overload', 'Form Coaching']
    },
    {
      id: 2,
      name: 'Cardio Blast',
      description: 'High-intensity cardiovascular workouts designed to burn calories and improve heart health.',
      icon: Heart,
      duration: '30-45 min',
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['HIIT Training', 'Cycling', 'Running', 'Circuit Training']
    },
    {
      id: 3,
      name: 'Group Fitness',
      description: 'Fun and motivating group classes that combine fitness with social interaction and team spirit.',
      icon: Users,
      duration: '45-60 min',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['Zumba', 'Yoga', 'Pilates', 'Spin Classes']
    },
    {
      id: 4,
      name: 'HIIT Workouts',
      description: 'Maximum results in minimum time with our high-intensity interval training sessions.',
      icon: Zap,
      duration: '20-30 min',
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['Tabata', 'Circuit Training', 'Metabolic Conditioning', 'Fat Burning']
    },
    {
      id: 5,
      name: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals, fitness level, and schedule.',
      icon: Target,
      duration: '60 min',
      level: 'Customized',
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['Custom Programs', 'Nutrition Guidance', 'Progress Tracking', 'Flexible Scheduling']
    },
    {
      id: 6,
      name: 'Functional Fitness',
      description: 'Real-world movement patterns that improve daily activities and overall quality of life.',
      icon: Clock,
      duration: '45 min',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      features: ['Movement Patterns', 'Core Stability', 'Balance Training', 'Injury Prevention']
    }
  ];

  return (
    <section id="programs" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Programs
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover the perfect program for your fitness goals with our diverse range of training options
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <div key={program.id} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 left-4 p-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/80' : 'bg-blue-600/80'}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {program.name}
                    </h3>
                    <p className={`mb-4 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className={`w-4 h-4 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{program.duration}</span>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                        {program.level}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        What's Included:
                      </h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {program.features.map((feature, index) => (
                          <li key={index} className={`text-xs flex items-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-300 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={onBookClassClick}
                      className={`w-full text-white py-3 rounded-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      Book This Program
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className={`rounded-lg p-8 border transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Not Sure Which Program is Right for You?
              </h3>
              <p className={`mb-6 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our fitness experts are here to help you choose the perfect program based on your goals, 
                fitness level, and schedule. Get a free consultation today!
              </p>
              <button 
                onClick={onBookClassClick}
                className={`text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium inline-flex items-center space-x-2 ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                <span>Schedule Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;