import React, { useState } from 'react';
import { Music, Clock, Play, Calendar, ArrowLeft, MapPin, Star } from 'lucide-react';
import { timeSlots } from '../data/mockData';
import { Restaurant } from '../types';

interface MusicLineupProps {
  restaurant: Restaurant | null;
  onBackToSelection: () => void;
}

export default function MusicLineup({ restaurant, onBackToSelection }: MusicLineupProps) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);

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
          <h2 className="text-3xl font-bold text-white mb-4">ตารางดนตรีสด</h2>
          <p className="text-gray-300">ค้นพบศิลปินสุดเจ๋งที่จะมาแสดงตลอดทั้งคืน</p>
        </div>

        {/* Time Slot Selector */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-amber-400" />
            เลือกช่วงเวลา
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => setSelectedTimeSlot(slot)}
                className={`p-4 rounded-xl text-center transition-all duration-200 ${
                  selectedTimeSlot.id === slot.id
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <div className="text-lg font-bold">{slot.time}</div>
                <div className="text-sm opacity-80">{slot.period}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Band Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedTimeSlot.bands.map((band) => (
            <div
              key={band.id}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={band.image}
                  alt={band.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {band.genre}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200">
                    <Play className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{band.name}</h3>
                <p className="text-gray-300 mb-4">{band.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {band.startTime} - {band.endTime}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    จองโต๊ะ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTimeSlot.bands.length === 0 && (
          <div className="text-center py-16">
            <Music className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">ไม่มีการแสดงในช่วงนี้</h3>
            <p className="text-gray-500">กลับมาดูใหม่ภายหลัง หรือเลือกช่วงเวลาอื่น</p>
          </div>
        )}

        {/* Schedule Overview */}
        <div className="mt-12 bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-amber-400" />
            ตารางแสดงทั้งหมด
          </h3>
          <div className="space-y-4">
            {timeSlots.map((slot) => (
              <div key={slot.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div>
                  <div className="text-white font-medium">{slot.time} - {slot.period}</div>
                  <div className="text-gray-400 text-sm">
                    {slot.bands.length > 0 
                      ? slot.bands.map(b => b.name).join(', ')
                      : 'ไม่มีการแสดง'
                    }
                  </div>
                </div>
                <div className="text-amber-400 text-sm">
                  {slot.bands.length} วง
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}