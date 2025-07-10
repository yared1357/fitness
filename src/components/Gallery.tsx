import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  isDarkMode: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Modern gym with state-of-the-art equipment',
      category: 'Facilities'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Group fitness class in action',
      category: 'Classes'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Personal training session',
      category: 'Training'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Cardio equipment area',
      category: 'Cardio'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Weight training area',
      category: 'Strength'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Yoga and stretching area',
      category: 'Wellness'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Functional training zone',
      category: 'Functional'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Recovery and wellness area',
      category: 'Recovery'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      alt: 'Locker room facilities',
      category: 'Amenities'
    }
  ];

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Facilities
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Take a virtual tour of our state-of-the-art fitness facility and see what makes Fitse Fitness special
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === 0 || index === 4 ? 'md:col-span-2' : ''
                } ${index === 0 ? 'md:row-span-2' : ''}`}
                onClick={() => openModal(image.id)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-white font-medium text-lg">{image.category}</p>
                    <p className="text-white text-sm mt-1">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && selectedImageData && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImageData.url}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <X className="w-8 h-8" />
                </button>
                
                {/* Previous button */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                {/* Next button */}
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                
                {/* Image info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">{selectedImageData.category}</p>
                  <p className="text-sm opacity-75">{selectedImageData.alt}</p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className={`rounded-lg p-8 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                World-Class Fitness Facilities
              </h3>
              <p className={`mb-6 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our 50,000 square foot facility features the latest equipment, spacious workout areas, 
                and premium amenities designed to enhance your fitness experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>50K</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sq Ft Facility</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>200+</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Equipment Pieces</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>5</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Specialized Zones</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>24/7</div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Access Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;