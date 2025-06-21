import React from 'react';
import { Gift, Clock, Star, Tag, Music, ArrowLeft, MapPin } from 'lucide-react';
import { promotions } from '../data/mockData';
import { Restaurant } from '../types';

interface PromotionsProps {
  restaurant: Restaurant | null;
  onBackToSelection: () => void;
}

export default function Promotions({ restaurant, onBackToSelection }: PromotionsProps) {
  if (!restaurant) return null;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <button
              onClick={onBackToSelection}
              className="mr-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl shadow-lg">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-wide">
                    {restaurant.name}
                  </h1>
                  <div className="flex items-center text-purple-200 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.location}</span>
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 mr-1 text-amber-400 fill-current" />
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-purple-200">{restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">ข้อเสนอพิเศษ & โปรโมชัน</h2>
          <p className="text-gray-300">อย่าพลาดดีลเด็ดและกิจกรรมพิเศษของเรา</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                    {promo.discount}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                <p className="text-gray-300 mb-4">{promo.description}</p>
                
                <div className="flex items-center text-amber-400 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">ใช้ได้ถึง {new Date(promo.validUntil).toLocaleDateString('th-TH')}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-gray-300">เงื่อนไข:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {promo.terms.map((term, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-400 mr-1">•</span>
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200">
                  รับข้อเสนอ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Star className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">ติดตามข่าวสาร</h3>
            <p className="text-gray-300 mb-6">
              สมัครรับจดหมายข่าวและเป็นคนแรกที่รู้เรื่องโปรโมชันพิเศษ 
              กิจกรรมสุดเจ๋ง และศิลปินใหม่ๆ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="กรอกอีเมลของคุณ"
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 whitespace-nowrap">
                สมัครสมาชิก
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              เราเคารพความเป็นส่วนตัวของคุณ สามารถยกเลิกได้ตลอดเวลา
            </p>
          </div>
        </div>

        {/* VIP Membership */}
        <div className="mt-8 bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-8">
          <div className="text-center mb-6">
            <Tag className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">สมาชิก VIP</h3>
            <p className="text-gray-300">ปลดล็อกสิทธิพิเศษและประสบการณ์ระดับพรีเมียม</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">จองโต๊ะแบบเร่งด่วน</h4>
              <p className="text-gray-400 text-sm">ไม่ต้องรอคิว รับประกันโต๊ะว่าง</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Gift className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">ส่วนลดพิเศษ</h4>
              <p className="text-gray-400 text-sm">ลด 20% สำหรับอาหารและเครื่องดื่มทุกรายการ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Music className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">พบปะศิลปิน</h4>
              <p className="text-gray-400 text-sm">เซสชันส่วนตัวกับศิลปินที่มาแสดง</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              สมัคร VIP - 2,990 บาท/ปี
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}