import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, Wifi, Car, Music, Wine, ArrowRight, Filter } from 'lucide-react';
import { Restaurant } from '../types';
import { restaurants } from '../data/mockData';

interface RestaurantSelectionProps {
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

export default function RestaurantSelection({ onRestaurantSelect }: RestaurantSelectionProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'ทั้งหมด', icon: Wine },
    { id: 'rooftop', label: 'รูฟท็อป', icon: Star },
    { id: 'riverside', label: 'ริมแม่น้ำ', icon: MapPin },
    { id: 'garden', label: 'สวนสวย', icon: Users },
    { id: 'underground', label: 'ใต้ดิน', icon: Music }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.atmosphere.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    
    const filterMap: { [key: string]: string[] } = {
      'rooftop': ['รูฟท็อป', 'สกายบาร์', 'วิวพาโนรามา'],
      'riverside': ['วิวแม่น้ำ', 'เทอเรส'],
      'garden': ['สวนสวย', 'ธรรมชาติ'],
      'underground': ['ใต้ดิน', 'ไนท์คลับ']
    };
    
    const keywords = filterMap[selectedFilter] || [];
    const matchesFilter = keywords.some(keyword => 
      restaurant.features.some(feature => feature.includes(keyword)) ||
      restaurant.atmosphere.includes(keyword) ||
      restaurant.description.includes(keyword)
    );
    
    return matchesSearch && matchesFilter;
  });

  const getFeatureIcon = (feature: string) => {
    const iconMap: { [key: string]: any } = {
      'ดนตรีสด': Music,
      'รูฟท็อป': Star,
      'ค็อกเทลพิเศษ': Wine,
      'ที่จอดรถ': Car,
      'วิวแม่น้ำ': MapPin,
      'เทอเรส': MapPin,
      'ไวน์คอลเลคชัน': Wine,
      'เชฟพิเศษ': Star,
      'วิวพาโนรามา': Star,
      'สกายบาร์': Star,
      'DJ เซ็ต': Music,
      'อินฟินิตี้พูล': Wifi,
      'สวนสวย': Users,
      'อาหารออร์แกนิค': Star,
      'โยคะ': Users,
      'พื้นที่ส่วนตัว': Users,
      'ดนตรีอิเล็กทรอนิกส์': Music,
      'แสงไฟพิเศษ': Star,
      'เดนซ์ฟลอร์': Music,
      'VIP บูธ': Star,
      'วิสกี้คอลเลคชัน': Wine,
      'เฟอร์นิเจอร์วินเทจ': Star,
      'ซิการ์': Wine,
      'บิลเลียด': Users
    };
    return iconMap[feature] || Star;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl shadow-lg">
                <Wine className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white tracking-wide">Zog</h1>
            </div>
            <p className="text-purple-200 text-lg">เลือกสาขาที่คุณต้องการ</p>
            <p className="text-purple-300 text-sm mt-2">บาร์ & เลาจน์ระดับพรีเมียม ทุกสาขาทั่วกรุงเทพฯ</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ค้นหาสาขา, ทำเลที่ตั้ง หรือบรรยากาศ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                />
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group cursor-pointer border border-purple-500/20"
              onClick={() => onRestaurantSelect(restaurant)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>

                {/* Price Range */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold">
                    {restaurant.priceRange}
                  </div>
                </div>

                {/* Open Status */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-green-500/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>เปิดอยู่</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{restaurant.name}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-amber-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{restaurant.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.slice(0, 3).map((feature, index) => {
                    const IconComponent = getFeatureIcon(feature);
                    return (
                      <div key={index} className="flex items-center space-x-1 bg-gray-800/50 px-2 py-1 rounded-lg">
                        <IconComponent className="h-3 w-3 text-amber-400" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    );
                  })}
                  {restaurant.features.length > 3 && (
                    <div className="bg-gray-800/50 px-2 py-1 rounded-lg">
                      <span className="text-xs text-gray-300">+{restaurant.features.length - 3}</span>
                    </div>
                  )}
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.openTime} - {restaurant.closeTime}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{restaurant.capacity} ที่นั่ง</span>
                  </div>
                </div>

                {/* Atmosphere Tag */}
                <div className="mt-3 pt-3 border-t border-gray-700/50">
                  <span className="inline-block bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                    {restaurant.atmosphere}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-16">
            <Wine className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">ไม่พบสาขาที่ตรงกับการค้นหา</h3>
            <p className="text-gray-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">ทำไมต้องเลือก Zog?</h3>
            <p className="text-gray-300">ประสบการณ์บาร์ระดับพรีเมียมที่ไม่เหมือนใคร</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Music className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">ดนตรีสดทุกคืน</h4>
              <p className="text-gray-400 text-sm">ศิลปินระดับท็อปและวงดนตรีคุณภาพ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wine className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">ค็อกเทลพรีเมียม</h4>
              <p className="text-gray-400 text-sm">บาร์เทนเดอร์มืออาชีพและส่วนผสมคุณภาพ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">บริการระดับ 5 ดาว</h4>
              <p className="text-gray-400 text-sm">ทีมงานมืออาชีพและบรรยากาศหรูหรา</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}