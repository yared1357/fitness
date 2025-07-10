import React, { useState } from 'react';
import { X, Calendar, Clock, Users, User, Mail, Phone } from 'lucide-react';

interface ClassBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  isDarkMode: boolean;
}

const ClassBookingModal: React.FC<ClassBookingModalProps> = ({ isOpen, onClose, onSubmit, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    className: '',
    date: '',
    time: '',
    experience: '',
    specialRequests: ''
  });

  const classes = [
    { id: 'strength', name: 'Strength Training', times: ['6:00 AM', '8:00 AM', '12:00 PM', '6:00 PM', '8:00 PM'] },
    { id: 'cardio', name: 'Cardio Blast', times: ['7:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '7:00 PM'] },
    { id: 'hiit', name: 'HIIT Workout', times: ['6:30 AM', '8:30 AM', '12:30 PM', '5:30 PM', '7:30 PM'] },
    { id: 'yoga', name: 'Yoga Flow', times: ['7:30 AM', '10:00 AM', '2:00 PM', '6:30 PM'] },
    { id: 'pilates', name: 'Pilates', times: ['8:00 AM', '11:00 AM', '3:00 PM', '7:00 PM'] },
    { id: 'zumba', name: 'Zumba Dance', times: ['9:00 AM', '1:00 PM', '6:00 PM'] },
    { id: 'spinning', name: 'Spin Class', times: ['6:00 AM', '7:00 AM', '12:00 PM', '5:00 PM', '6:00 PM'] },
    { id: 'functional', name: 'Functional Training', times: ['8:00 AM', '10:00 AM', '2:00 PM', '7:00 PM'] }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      className: '',
      date: '',
      time: '',
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

  const selectedClass = classes.find(c => c.id === formData.className);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className={`w-8 h-8 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Book a Class</h2>
            </div>
            <button
              onClick={onClose}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Description */}
          <div className={`border rounded-lg p-4 mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50 border-blue-200'}`}>
            <h3 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>Class Booking Information</h3>
            <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              <li>• Classes are limited to ensure quality instruction</li>
              <li>• Please arrive 10 minutes early for check-in</li>
              <li>• Bring a water bottle and towel</li>
              <li>• Cancellations must be made 2 hours in advance</li>
              <li>• First class is free for new members!</li>
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

            {/* Class Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Users className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                >
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                />
              </div>
              <div className="relative">
                <Clock className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  disabled={!selectedClass}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 disabled:opacity-50' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600 disabled:opacity-50'}`}
                >
                  <option value="">Select Time</option>
                  {selectedClass?.times.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Fitness Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner - New to fitness</option>
                <option value="intermediate">Intermediate - Some experience</option>
                <option value="advanced">Advanced - Regular exerciser</option>
                <option value="expert">Expert - Competitive athlete</option>
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <textarea
                name="specialRequests"
                placeholder="Any special requests, injuries, or questions about the class?"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
              />
            </div>

            {/* Important Notes */}
            <div className={`border rounded-lg p-4 transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'}`}>
              <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>What to Expect:</h4>
              <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                <li>• Professional instruction and form correction</li>
                <li>• Modifications provided for all fitness levels</li>
                <li>• Supportive and encouraging environment</li>
                <li>• All necessary equipment provided</li>
                <li>• Post-workout stretching and cool-down</li>
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
                className={`flex-1 px-6 py-3 text-white rounded-lg transition-colors duration-300 font-medium flex items-center justify-center space-x-2 ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Class</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassBookingModal;