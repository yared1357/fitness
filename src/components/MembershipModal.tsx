import React, { useState } from 'react';
import { X, User, Mail, Phone, Calendar, CreditCard, Shield } from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  selectedMembership: string;
  isDarkMode: boolean;
}

const MembershipModal: React.FC<MembershipModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  selectedMembership,
  isDarkMode 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    membershipType: selectedMembership,
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    fitnessGoals: '',
    experience: '',
    referralSource: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      membershipType: '',
      emergencyContact: '',
      emergencyPhone: '',
      medicalConditions: '',
      fitnessGoals: '',
      experience: '',
      referralSource: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  React.useEffect(() => {
    if (selectedMembership) {
      setFormData(prev => ({ ...prev, membershipType: selectedMembership }));
    }
  }, [selectedMembership]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <Shield className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Join Fitse Fitness</h2>
            </div>
            <button
              onClick={onClose}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="relative">
                  <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="relative">
                  <Phone className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="relative">
                  <Calendar className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="relative">
                  <CreditCard className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                  >
                    <option value="">Select Membership</option>
                    <option value="basic">Basic - $29/month</option>
                    <option value="premium">Premium - $59/month</option>
                    <option value="elite">Elite - $99/month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Emergency Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="emergencyContact"
                  placeholder="Emergency Contact Name"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                />
                <input
                  type="tel"
                  name="emergencyPhone"
                  placeholder="Emergency Contact Phone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                />
              </div>
            </div>

            {/* Fitness Information */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Fitness Information
              </h3>
              <div className="space-y-4">
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                >
                  <option value="">Select Fitness Experience Level</option>
                  <option value="beginner">Beginner - New to fitness</option>
                  <option value="intermediate">Intermediate - Some experience</option>
                  <option value="advanced">Advanced - Regular exerciser</option>
                  <option value="expert">Expert - Competitive athlete</option>
                </select>

                <textarea
                  name="fitnessGoals"
                  placeholder="What are your fitness goals? (e.g., weight loss, muscle gain, general health)"
                  value={formData.fitnessGoals}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                />

                <textarea
                  name="medicalConditions"
                  placeholder="Any medical conditions or injuries we should know about? (Optional)"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                />

                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                >
                  <option value="">How did you hear about us? (Optional)</option>
                  <option value="friend">Friend/Family Referral</option>
                  <option value="social">Social Media</option>
                  <option value="google">Google Search</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="walkby">Walked by the gym</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className={`border rounded-lg p-4 transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50 border-blue-200'}`}>
              <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>Membership Benefits:</h4>
              <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                <li>• 30-day money-back guarantee</li>
                <li>• No enrollment fees</li>
                <li>• Cancel anytime with 30-day notice</li>
                <li>• Free fitness assessment and orientation</li>
                <li>• Access to mobile app and online resources</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 px-6 py-3 border rounded-lg transition-colors duration-300 font-medium ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 px-6 py-3 text-white rounded-lg transition-colors duration-300 font-medium ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;