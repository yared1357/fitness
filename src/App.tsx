import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MembershipModal from './components/MembershipModal';
import ClassBookingModal from './components/ClassBookingModal';

function App() {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isClassBookingModalOpen, setIsClassBookingModalOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference and apply to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleJoinNowClick = (membershipType?: string) => {
    if (membershipType) {
      setSelectedMembership(membershipType);
    }
    setIsMembershipModalOpen(true);
  };

  const handleCloseMembershipModal = () => {
    setIsMembershipModalOpen(false);
    setSelectedMembership('');
  };

  const handleMembershipSubmit = (formData: any) => {
    console.log('Membership application submitted:', formData);
    alert(`Thank you ${formData.firstName}! Your membership application has been received. We'll contact you within 24 hours to complete your enrollment.`);
    setIsMembershipModalOpen(false);
    setSelectedMembership('');
  };

  const handleBookClassClick = () => {
    setIsClassBookingModalOpen(true);
  };

  const handleCloseClassBookingModal = () => {
    setIsClassBookingModalOpen(false);
  };

  const handleClassBookingSubmit = (formData: any) => {
    console.log('Class booking submitted:', formData);
    alert(`Thank you ${formData.name}! Your class booking for ${formData.className} on ${formData.date} at ${formData.time} has been confirmed.`);
    setIsClassBookingModalOpen(false);
  };

  const handleContactFormSubmit = (formData: any) => {
    console.log('Contact form submitted:', formData);
    alert(`Thank you ${formData.name}! Your message has been received. We'll get back to you soon.`);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header 
        onJoinNowClick={() => handleJoinNowClick()} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <Hero 
        onJoinNowClick={() => handleJoinNowClick()}
        onBookClassClick={handleBookClassClick}
        isDarkMode={isDarkMode}
      />
      <About isDarkMode={isDarkMode} />
      <Programs onBookClassClick={handleBookClassClick} isDarkMode={isDarkMode} />
      <Trainers isDarkMode={isDarkMode} />
      <Membership onJoinNowClick={handleJoinNowClick} isDarkMode={isDarkMode} />
      <Gallery isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact onContactFormSubmit={handleContactFormSubmit} isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <MembershipModal
        isOpen={isMembershipModalOpen}
        onClose={handleCloseMembershipModal}
        onSubmit={handleMembershipSubmit}
        selectedMembership={selectedMembership}
        isDarkMode={isDarkMode}
      />
      <ClassBookingModal
        isOpen={isClassBookingModalOpen}
        onClose={handleCloseClassBookingModal}
        onSubmit={handleClassBookingSubmit}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;