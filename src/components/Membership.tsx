import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

interface MembershipProps {
  onJoinNowClick: (membershipType: string) => void;
  isDarkMode: boolean;
}

const Membership: React.FC<MembershipProps> = ({ onJoinNowClick, isDarkMode }) => {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started with your fitness journey',
      icon: Zap,
      popular: false,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        'Standard operating hours',
        'Community support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts',
      icon: Star,
      popular: true,
      features: [
        'Everything in Basic',
        '24/7 gym access',
        'Group fitness classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Guest passes (2/month)',
        'Priority booking',
        'Towel service'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate fitness experience with premium perks',
      icon: Crown,
      popular: false,
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal planning',
        'Recovery services (massage, sauna)',
        'VIP locker room',
        'Unlimited guest passes',
        'Priority equipment access',
        'Exclusive member events',
        'Supplement discounts'
      ]
    }
  ];

  return (
    <section id="membership" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Choose Your Membership
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Flexible membership options designed to fit your lifestyle and fitness goals
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div 
                  key={plan.id} 
                  className={`relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? isDarkMode 
                        ? 'bg-gradient-to-b from-blue-900 to-blue-800 ring-2 ring-blue-400' 
                        : 'bg-gradient-to-b from-blue-600 to-blue-700 ring-2 ring-blue-500'
                      : isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-750' 
                        : 'bg-white hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className={`px-4 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-400 text-gray-900'}`}>
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        plan.popular 
                          ? 'bg-white/20' 
                          : isDarkMode 
                            ? 'bg-blue-900/30' 
                            : 'bg-blue-100'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          plan.popular 
                            ? 'text-white' 
                            : isDarkMode 
                              ? 'text-blue-400' 
                              : 'text-blue-600'
                        }`} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        plan.popular 
                          ? 'text-white' 
                          : isDarkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                      }`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm ${
                        plan.popular 
                          ? 'text-blue-100' 
                          : isDarkMode 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                      }`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className={`text-4xl font-bold ${
                        plan.popular 
                          ? 'text-white' 
                          : isDarkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                      }`}>
                        ${plan.price}
                        <span className={`text-lg font-normal ${
                          plan.popular 
                            ? 'text-blue-100' 
                            : isDarkMode 
                              ? 'text-gray-400' 
                              : 'text-gray-500'
                        }`}>
                          /{plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.popular 
                              ? 'text-green-300' 
                              : isDarkMode 
                                ? 'text-green-400' 
                                : 'text-green-500'
                          }`} />
                          <span className={`text-sm ${
                            plan.popular 
                              ? 'text-blue-100' 
                              : isDarkMode 
                                ? 'text-gray-300' 
                                : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => onJoinNowClick(plan.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-white text-blue-600 hover:bg-gray-100'
                          : isDarkMode
                            ? 'bg-blue-700 text-white hover:bg-blue-600'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className={`rounded-lg p-8 border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                All Memberships Include
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>No</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Enrollment Fees</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>30-Day</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Money Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Free</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fitness Assessment</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Cancel</div>
                  <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;