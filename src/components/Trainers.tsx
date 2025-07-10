import React from 'react';
import { Star, Award, Users, Calendar } from 'lucide-react';

interface TrainersProps {
  isDarkMode: boolean;
}

const Trainers: React.FC<TrainersProps> = ({ isDarkMode }) => {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Strength & Conditioning',
      experience: '8 years',
      certifications: ['NASM-CPT', 'CSCS'],
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Specializes in helping clients build strength and confidence through progressive training methods.',
      rating: 4.9,
      clients: 150
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      specialty: 'HIIT & Weight Loss',
      experience: '6 years',
      certifications: ['ACE-CPT', 'HIIT Specialist'],
      image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Expert in high-intensity training and metabolic conditioning for rapid fat loss and fitness gains.',
      rating: 4.8,
      clients: 120
    },
    {
      id: 3,
      name: 'Emily Chen',
      specialty: 'Yoga & Flexibility',
      experience: '10 years',
      certifications: ['RYT-500', 'Pilates Certified'],
      image: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Combines traditional yoga practices with modern fitness to improve flexibility and mindfulness.',
      rating: 5.0,
      clients: 200
    },
    {
      id: 4,
      name: 'David Thompson',
      specialty: 'Sports Performance',
      experience: '12 years',
      certifications: ['CSCS', 'FMS', 'TPI'],
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Former professional athlete specializing in sports-specific training and injury prevention.',
      rating: 4.9,
      clients: 180
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      specialty: 'Nutrition & Wellness',
      experience: '7 years',
      certifications: ['RD', 'NASM-CPT', 'Precision Nutrition'],
      image: 'https://images.pexels.com/photos/3768917/pexels-photo-3768917.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Registered dietitian and trainer focusing on sustainable lifestyle changes and holistic wellness.',
      rating: 4.8,
      clients: 140
    },
    {
      id: 6,
      name: 'James Wilson',
      specialty: 'Functional Training',
      experience: '9 years',
      certifications: ['FMS', 'SFMA', 'TRX'],
      image: 'https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Focuses on movement quality and functional strength for everyday activities and athletic performance.',
      rating: 4.9,
      clients: 160
    }
  ];

  return (
    <section id="trainers" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet Our Expert Trainers
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our certified professionals are dedicated to helping you achieve your fitness goals safely and effectively
            </p>
          </div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-600'}`}>
                    {trainer.experience}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {trainer.name}
                  </h3>
                  <p className={`text-sm font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {trainer.specialty}
                  </p>
                  
                  <p className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {trainer.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className={`w-4 h-4 fill-yellow-400 text-yellow-400`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {trainer.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className={`w-4 h-4 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {trainer.clients} clients
                      </span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className={`text-xs font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Certifications:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, index) => (
                        <span key={index} className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    <Calendar className="w-4 h-4" />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className={`rounded-lg p-8 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex items-center justify-center mb-4">
                <Award className={`w-12 h-12 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                All Our Trainers Are Certified Professionals
              </h3>
              <p className={`mb-6 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Every trainer at Fitse Fitness holds nationally recognized certifications and undergoes 
                continuous education to stay current with the latest fitness science and training methodologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>100%</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Certified Trainers</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>50+</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Expert Professionals</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>24/7</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;