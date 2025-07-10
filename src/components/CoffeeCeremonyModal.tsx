import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, Mail, User, Coffee } from 'lucide-react';

interface CoffeeCeremonyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  isDarkMode?: boolean;
}

const CoffeeCeremonyModal: React.FC<CoffeeCeremonyModalProps> = ({ isOpen, onClose, onSubmit, isDarkMode = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    experience: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      experience: '',
      specialRequests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <Coffee className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Book Coffee Ceremony</h2>
            </div>
            <button
              onClick={onClose}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <div className={`border rounded-lg p-4 mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-amber-900/20 border-amber-700' : 'bg-amber-50 border-amber-200'}`}>
            <h3 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-amber-300' : 'text-amber-800'}`}>Ethiopian Coffee Ceremony Experience</h3>
            <p className={`text-sm mb-2 transition-colors duration-300 ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              Join us for an authentic Ethiopian coffee ceremony, a sacred ritual that celebrates community, 
              conversation, and the world's finest coffee beans from their birthplace.
            </p>
            <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              <li>• Duration: 45-60 minutes</li>
              <li>• Includes: Traditional roasting, grinding, and brewing process</li>
              <li>• Cultural storytelling and history of Ethiopian coffee</li>
              <li>• Three rounds of coffee: Abol, Tona, and Baraka</li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
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
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
                />
              </div>
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
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
              />
            </div>

            {/* Ceremony Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Calendar className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
                />
              </div>
              <div className="relative">
                <Clock className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
                >
                  <option value="">Select Time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
              <div className="relative">
                <Users className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
                >
                  <option value="">Participants</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                </select>
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Coffee Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner - New to Ethiopian coffee</option>
                <option value="intermediate">Intermediate - Some knowledge of coffee</option>
                <option value="advanced">Advanced - Coffee enthusiast</option>
                <option value="expert">Expert - Professional or serious collector</option>
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <textarea
                name="specialRequests"
                placeholder="Special requests, dietary restrictions, or questions about the ceremony"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-amber-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-600'}`}
              />
            </div>

            {/* Important Notes */}
            <div className={`border rounded-lg p-4 transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'}`}>
              <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>What to Expect:</h4>
              <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                <li>• The ceremony begins with washing and roasting green coffee beans</li>
                <li>• You'll experience the traditional incense burning ritual</li>
                <li>• Learn about the cultural significance and history</li>
                <li>• Participate in three rounds of coffee tasting</li>
                <li>• Photography is welcome to capture this cultural experience</li>
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
                className={`flex-1 px-6 py-3 text-white rounded-lg transition-colors duration-300 font-medium flex items-center justify-center space-x-2 ${isDarkMode ? 'bg-amber-700 hover:bg-amber-600' : 'bg-amber-600 hover:bg-amber-700'}`}
              >
                <Coffee className="w-5 h-5" />
                <span>Book Coffee Ceremony</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCeremonyModal;