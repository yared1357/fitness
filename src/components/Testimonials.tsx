import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  isDarkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDarkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Thompson',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "Fitse Fitness completely transformed my approach to health and wellness. The trainers are incredibly knowledgeable and supportive, and the facilities are top-notch. I've never felt stronger or more confident!",
      achievement: 'Lost 30 lbs in 6 months'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "As someone who works long hours at a desk, I was struggling with back pain and low energy. The functional training program here has been a game-changer. I feel more energetic and pain-free than I have in years.",
      achievement: 'Eliminated chronic back pain'
    },
    {
      id: 3,
      name: 'Sarah Rodriguez',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "The group fitness classes are amazing! The energy is infectious, and I've made so many friends. It's not just a gym, it's a community. I actually look forward to my workouts now!",
      achievement: 'Improved cardiovascular health by 40%'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Retired Veteran',
      image: 'https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "At 55, I thought my best fitness days were behind me. The trainers here proved me wrong. They created a program that worked with my limitations and helped me achieve goals I never thought possible.",
      achievement: 'Completed first marathon at age 56'
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Nurse',
      image: 'https://images.pexels.com/photos/3768917/pexels-photo-3768917.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "Working night shifts made it hard to maintain a fitness routine. The 24/7 access and flexible class schedules have been perfect for my lifestyle. The nutrition guidance has been invaluable too.",
      achievement: 'Gained 15 lbs of lean muscle'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: "The personal training here is exceptional. My trainer understands my busy schedule and creates efficient workouts that deliver results. I've never been in better shape, and my stress levels have plummeted.",
      achievement: 'Reduced body fat by 25%'
    }
  ];

  return (
    <section id="testimonials" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Success Stories
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Real transformations from real people who chose to invest in their health and fitness
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.text}"
                </p>

                {/* Achievement Badge */}
                <div className={`mb-4 p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                    🏆 {testimonial.achievement}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16">
            <div className={`rounded-lg p-8 text-center transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Members' Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>98%</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Member Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>85%</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Achieve Their Goals</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>92%</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Renew Membership</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>4.9</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;