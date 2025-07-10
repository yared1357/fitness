import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  isDarkMode?: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSubmit, isDarkMode = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
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
            <h2 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Reserve Your Table</h2>
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
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
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
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
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
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
              />
            </div>

            {/* Reservation Details */}
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
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
                />
              </div>
              <div className="relative">
                <Clock className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
                >
                  <option value="">Select Time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>
              <div className="relative">
                <Users className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent appearance-none transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
                >
                  <option value="">Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10+ Guests</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <textarea
                name="specialRequests"
                placeholder="Special requests or dietary requirements"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-red-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-red-800'}`}
              />
            </div>

            {/* Important Notes */}
            <div className={`border rounded-lg p-4 transition-colors duration-300 ${isDarkMode ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-200'}`}>
              <h4 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>Important Notes:</h4>
              <ul className={`text-sm space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                <li>• Reservations are held for 15 minutes past the reserved time</li>
                <li>• For groups of 8 or more, please call us directly</li>
                <li>• We offer traditional Ethiopian coffee ceremony upon request</li>
                <li>• Cancellations must be made at least 2 hours in advance</li>
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
                className={`flex-1 px-6 py-3 text-white rounded-lg transition-colors duration-300 font-medium ${isDarkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-800 hover:bg-red-700'}`}
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;