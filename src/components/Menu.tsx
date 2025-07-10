import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  popular?: boolean;
}

interface MenuProps {
  onCoffeeCeremonyClick: () => void;
  isDarkMode: boolean;
  isDarkMode: boolean;
}

const Menu: React.FC<MenuProps> = ({ onCoffeeCeremonyClick, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', count: 8 },
    { id: 'mains', name: 'Main Courses', count: 10 },
    { id: 'desserts', name: 'Desserts', count: 7 },
    { id: 'beverages', name: 'Beverages', count: 6 },
  ];

  const menuItems: MenuItem[] = [
    // Starters
    {
      id: 1,
      name: 'Sambusa',
      description: 'Crispy pastry filled with spiced lentils or meat, served with awaze sauce',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 2,
      name: 'Timatim Salata',
      description: 'Fresh tomato and onion salad with jalapeño, dressed with olive oil and lemon',
      category: 'starters',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 3,
      name: 'Azifa',
      description: 'Green lentil salad with mustard seed, jalapeño, and fresh herbs',
      category: 'starters',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 4,
      name: 'Kategna',
      description: 'Ethiopian flatbread topped with berbere spice and clarified butter',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 5,
      name: 'Dulet',
      description: 'Traditional Ethiopian tripe and liver dish with onions and spices',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518845/pexels-photo-4518845.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 6,
      name: 'Kitfo Tartare',
      description: 'Ethiopian-style beef tartare seasoned with mitmita and clarified butter',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518846/pexels-photo-4518846.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 7,
      name: 'Ayib Begomen',
      description: 'Fresh Ethiopian cheese with collard greens and spices',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518847/pexels-photo-4518847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 8,
      name: 'Ful Medames',
      description: 'Slow-cooked fava beans with tomatoes, onions, and Ethiopian spices',
      category: 'starters',
      image: 'https://images.pexels.com/photos/4518848/pexels-photo-4518848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    
    // Main Courses
    {
      id: 9,
      name: 'Doro Wat',
      description: 'Ethiopia\'s national dish - chicken stew with berbere spice and hard-boiled eggs',
      category: 'mains',
      image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 10,
      name: 'Kitfo',
      description: 'Ethiopian beef tartare served with ayib cheese and gomen',
      category: 'mains',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 11,
      name: 'Tibs',
      description: 'Sautéed beef or lamb with onions, tomatoes, and rosemary',
      category: 'mains',
      image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 12,
      name: 'Vegetarian Combo',
      description: 'Assortment of vegetarian dishes including shiro, gomen, and misir wat',
      category: 'mains',
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 13,
      name: 'Siga Wat',
      description: 'Spicy beef stew cooked with berbere and Ethiopian herbs',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518849/pexels-photo-4518849.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 14,
      name: 'Fish Gulash',
      description: 'Fresh fish cooked with onions, tomatoes, and Ethiopian spices',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518850/pexels-photo-4518850.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 15,
      name: 'Zilzil Tibs',
      description: 'Strips of beef sautéed with onions, jalapeños, and rosemary',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518851/pexels-photo-4518851.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 16,
      name: 'Gored Gored',
      description: 'Cubed raw beef seasoned with awaze and clarified butter',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518852/pexels-photo-4518852.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 17,
      name: 'Yebeg Alicha',
      description: 'Mild lamb stew with turmeric, ginger, and onions',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518853/pexels-photo-4518853.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 18,
      name: 'Shiro Wat',
      description: 'Ground chickpea stew with berbere and Ethiopian spices',
      category: 'mains',
      image: 'https://images.pexels.com/photos/4518854/pexels-photo-4518854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },

    // Desserts
    {
      id: 19,
      name: 'Honey Wine Cake',
      description: 'Traditional Ethiopian cake made with tej (honey wine) and spices',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 20,
      name: 'Baklava Ethiopian Style',
      description: 'Layered pastry with honey, nuts, and Ethiopian spices',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 21,
      name: 'Dabo Kolo',
      description: 'Crunchy roasted barley snack with berbere seasoning',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/4518855/pexels-photo-4518855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 22,
      name: 'Ethiopian Coffee Ice Cream',
      description: 'Homemade ice cream infused with Ethiopian coffee beans',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/4518856/pexels-photo-4518856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 23,
      name: 'Fruit Platter',
      description: 'Fresh seasonal fruits including mango, papaya, and banana',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/4518857/pexels-photo-4518857.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 24,
      name: 'Teff Cookies',
      description: 'Traditional cookies made with teff flour and honey',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/4518858/pexels-photo-4518858.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 25,
      name: 'Honey Bread',
      description: 'Sweet bread made with Ethiopian honey and spices',
      category: 'desserts',
      image: 'https://images.pexels.com/photos/4518859/pexels-photo-4518859.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },

    // Beverages
    {
      id: 26,
      name: 'Ethiopian Coffee',
      description: 'Traditional coffee ceremony with freshly roasted beans',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      popular: true
    },
    {
      id: 27,
      name: 'Tej (Honey Wine)',
      description: 'Traditional Ethiopian mead made with honey and gesho',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 28,
      name: 'Tella',
      description: 'Traditional Ethiopian beer made from barley and gesho',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/4518860/pexels-photo-4518860.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 29,
      name: 'Fresh Fruit Juice',
      description: 'Freshly squeezed mango, papaya, or avocado juice',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/4518861/pexels-photo-4518861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 30,
      name: 'Spiced Tea',
      description: 'Ethiopian tea blend with cardamom, cinnamon, and cloves',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/4518862/pexels-photo-4518862.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      id: 31,
      name: 'Mineral Water',
      description: 'Local Ethiopian mineral water from natural springs',
      category: 'beverages',
      image: 'https://images.pexels.com/photos/4518863/pexels-photo-4518863.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Menu
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover authentic Ethiopian flavors prepared with traditional recipes and the finest ingredients
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? isDarkMode 
                      ? 'bg-red-700 text-white shadow-lg' 
                      : 'bg-red-800 text-white shadow-lg'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white'}`}>
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-red-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className={`rounded-lg p-8 border transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-amber-700' : 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Experience the Ethiopian Coffee Ceremony
              </h3>
              <p className={`mb-6 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join us for our traditional coffee ceremony, a cultural experience that brings people 
                together to share stories and enjoy the finest Ethiopian coffee.
              </p>
              <button 
                onClick={onCoffeeCeremonyClick}
                className={`text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium inline-flex items-center space-x-2 ${isDarkMode ? 'bg-amber-700 hover:bg-amber-600' : 'bg-amber-600 hover:bg-amber-700'}`}
              >
                <span>Book Coffee Ceremony</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;