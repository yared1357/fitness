import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

interface ContactProps {
  onContactFormSubmit: (formData: any) => void;
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ onContactFormSubmit, isDarkMode }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    onContactFormSubmit(data);
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to start your fitness journey? Contact us today for a free consultation and facility tour
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Visit Our Facility</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                      <MapPin className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Address</h4>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        123 Fitness Street<br />
                        Health City, HC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                      <Phone className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+1 (555) 123-4567</p>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                      <Mail className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>info@fitsefitness.com</p>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>membership@fitsefitness.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                      <Clock className={`w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Hours</h4>
                      <div className={`space-y-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                        <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                        <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>24/7 Access for Premium & Elite Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className={`rounded-lg p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button className={`w-full text-left p-3 rounded-lg transition-colors duration-300 flex items-center space-x-3 ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                    <MessageSquare className="w-5 h-5" />
                    <span>Schedule a Free Tour</span>
                  </button>
                  <button className={`w-full text-left p-3 rounded-lg transition-colors duration-300 flex items-center space-x-3 ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                    <Phone className="w-5 h-5" />
                    <span>Book a Consultation</span>
                  </button>
                  <button className={`w-full text-left p-3 rounded-lg transition-colors duration-300 flex items-center space-x-3 ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                    <Mail className="w-5 h-5" />
                    <span>Get Membership Info</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`rounded-lg p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                  />
                  <select
                    name="subject"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-600 text-white focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'}`}
                  >
                    <option value="">Select Subject</option>
                    <option value="membership">Membership Information</option>
                    <option value="tour">Facility Tour</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Group Classes</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${isDarkMode ? 'border-gray-600 bg-gray-600 text-white placeholder-gray-400 focus:ring-blue-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-600'}`}
                ></textarea>
                <button
                  type="submit"
                  className={`w-full text-white py-3 rounded-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className={`rounded-lg h-96 flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Fitse Fitness Location</p>
                <p className="text-sm">123 Fitness Street, Health City, HC 12345</p>
                <p className="text-sm mt-2">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;