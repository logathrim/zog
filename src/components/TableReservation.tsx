import React, { useState, useEffect } from "react";
import { Calendar, Clock, Users, Phone, Mail, User, Music, ArrowLeft, MapPin, Star } from "lucide-react";
import { Table, Reservation, Restaurant } from "../types";
import { restaurantTables } from "../data/mockData";

interface TableReservationProps {
  restaurant: Restaurant | null;
  onBackToSelection: () => void;
}

export default function TableReservation({ restaurant, onBackToSelection }: TableReservationProps) {
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [reservationForm, setReservationForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Update tables when restaurant changes
  useEffect(() => {
    if (restaurant) {
      setTables(restaurantTables[restaurant.id] || []);
    }
  }, [restaurant]);

  const timeSlots = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  const handleTableSelect = (tableId: string) => {
    setTables(
      tables.map((table: any) => ({
        ...table,
        isSelected: table.id === tableId ? !table.isSelected : false,
      }))
    );
  };

  const selectedTable = tables.find((table: any) => table.isSelected);

  const handleReservation = () => {
    if (selectedTable && selectedDate && selectedTime && reservationForm.name) {
      alert(
        `การจองสำเร็จ โต๊ะ ${selectedTable.number} ที่ ${restaurant?.name} วันที่ ${selectedDate} เวลา ${selectedTime}`
      );
      setShowForm(false);
      setTables(
        tables.map((table: any) => ({
          ...table,
          isSelected: false,
          isAvailable:
            table.id === selectedTable.id ? false : table.isAvailable,
        }))
      );
      setReservationForm({ name: "", phone: "", email: "" });
    }
  };

  // Get restaurant-specific layout info
  const getLayoutInfo = () => {
    switch (restaurant?.id) {
      case '1':
        return {
          title: 'Theater Layout',
          subtitle: 'เวทีแสดง',
          description: 'จัดเรียงแบบโรงละคร หันหน้าเข้าหาเวที',
          centerElement: null
        };
      case '2':
        return {
          title: 'Waterfront Terrace',
          subtitle: 'วิวแม่น้ำ',
          description: 'ระเบียงชั้นๆ วิวแม่น้ำสวยที่สุด',
          centerElement: null
        };
      case '3':
        return {
          title: 'Pool Deck',
          subtitle: 'บาร์เคาน์เตอร์',
          description: 'รอบสระว่ายน้ำ บรรยากาศรูฟท็อป',
          centerElement: 'Pool'
        };
      case '4':
        return {
          title: 'Garden Paths',
          subtitle: 'สวนกลาง',
          description: 'ทางเดินในสวน ท่ามกลางธรรมชาติ',
          centerElement: 'Fountain'
        };
      case '5':
        return {
          title: 'Club Arena',
          subtitle: 'Dance Floor',
          description: 'รอบเวทีเต้นรำ บรรยากาศไนท์คลับ',
          centerElement: 'Dance Floor'
        };
      case '6':
        return {
          title: 'Gentleman\'s Club',
          subtitle: 'บาร์หลัก',
          description: 'สโมสรสุภาพบุรุษ มีโซนต่างๆ',
          centerElement: 'Fireplace'
        };
      default:
        return {
          title: 'Restaurant Layout',
          subtitle: 'พื้นที่หลัก',
          description: 'จัดเรียงโต๊ะอาหาร',
          centerElement: null
        };
    }
  };

  const layoutInfo = getLayoutInfo();

  if (!restaurant) return null;

  return (
    <div className="min-h-screen">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-amber-400" />
              เลือกโต๊ะของคุณ
            </h2>
            <div className="mb-4">
              <p className="text-amber-300 text-sm font-medium">{layoutInfo.title}</p>
              <p className="text-gray-400 text-xs">{layoutInfo.description}</p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 rounded-2xl p-6 min-h-[500px] border border-gray-700/50 shadow-inner overflow-hidden">
              {/* Main Feature Area */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500/40 rounded-lg px-4 py-2 backdrop-blur-sm z-20">
                <div className="flex items-center space-x-2">
                  <Music className="h-3 w-3 text-amber-400" />
                  <span className="text-amber-300 text-xs font-semibold">
                    {layoutInfo.subtitle}
                  </span>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-xl"></div>

              {/* Special Center Elements */}
              {layoutInfo.centerElement === 'Pool' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-blue-500/10 border border-blue-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-300 text-xs">Pool</span>
                </div>
              )}

              {layoutInfo.centerElement === 'Dance Floor' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-purple-500/10 border border-purple-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-purple-300 text-xs">Dance Floor</span>
                </div>
              )}

              {layoutInfo.centerElement === 'Fountain' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500/10 border border-cyan-400/30 rounded-full flex items-center justify-center">
                  <span className="text-cyan-300 text-xs">🌊</span>
                </div>
              )}

              {layoutInfo.centerElement === 'Fireplace' && (
                <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-12 bg-orange-500/10 border border-orange-400/30 rounded-lg flex items-center justify-center">
                  <span className="text-orange-300 text-xs">🔥</span>
                </div>
              )}

              {/* Tables */}
              {tables.map((table) => (
                <button
                  key={table.id}
                  onClick={() =>
                    table.isAvailable ? handleTableSelect(table.id) : null
                  }
                  disabled={!table.isAvailable}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 group ${
                    table.isSelected
                      ? "scale-110 z-10"
                      : table.isAvailable
                      ? "hover:scale-105 z-0"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  style={{
                    left: `${table.position.x}%`,
                    top: `${table.position.y}%`,
                  }}
                >
                  <div
                    className={`relative w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shadow-md border transition-all duration-200 ${
                      table.isSelected
                        ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white border-amber-300 shadow-amber-500/50 shadow-lg"
                        : table.isAvailable
                        ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white border-emerald-400 hover:from-emerald-400 hover:to-green-500 shadow-emerald-500/20"
                        : "bg-gradient-to-br from-red-500 to-red-600 text-white border-red-400 shadow-red-500/20"
                    }`}
                  >
                    <span className="relative z-10">{table.number}</span>
                    {table.isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-lg animate-pulse"></div>
                    )}
                    {table.isAvailable && !table.isSelected && (
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    )}
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none ${
                      !table.isAvailable ? "hidden" : ""
                    }`}
                  >
                    {table.seats} ที่นั่ง
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded shadow-sm"></div>
                  <span className="text-gray-300">ว่าง</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded shadow-sm"></div>
                  <span className="text-gray-300">ไม่ว่าง</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded shadow-sm"></div>
                  <span className="text-gray-300">เลือกแล้ว</span>
                </div>
              </div>
              <div className="text-gray-400 text-xs">
                รวม {tables.length} โต๊ะ | ว่าง {tables.filter(t => t.isAvailable).length} โต๊ะ
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="mr-3 h-6 w-6 text-amber-400" />
              รายละเอียดการจอง
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                  วันที่
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 backdrop-blur-sm"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-amber-400" />
                  เวลา
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                        selectedTime === time
                          ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-400 shadow-lg shadow-amber-500/30"
                          : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border-gray-600 hover:border-gray-500"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-amber-400" />
                  จำนวนแขก
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-12 h-12 bg-gray-800/70 hover:bg-gray-700/70 rounded-xl flex items-center justify-center text-white border border-gray-600 hover:border-gray-500 transition-all duration-200"
                  >
                    -
                  </button>
                  <div className="flex-1 bg-gray-800/70 rounded-xl px-4 py-3 text-center text-white font-medium border border-gray-600">
                    {guests} คน
                  </div>
                  <button
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="w-12 h-12 bg-gray-800/70 hover:bg-gray-700/70 rounded-xl flex items-center justify-center text-white border border-gray-600 hover:border-gray-500 transition-all duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {selectedTable && (
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-amber-300 font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    โต๊ะที่เลือก
                  </h3>
                  <div className="text-white text-sm space-y-1">
                    <p>โต๊ะหมายเลข {selectedTable.number}</p>
                    <p>จำนวนที่นั่ง: {selectedTable.seats} คน</p>
                    <p className={`${selectedTable.seats >= guests ? 'text-green-300' : 'text-red-300'}`}>
                      {selectedTable.seats >= guests 
                        ? `✓ เหมาะสำหรับ ${guests} คน` 
                        : `⚠️ โต๊ะนี้มี ${selectedTable.seats} ที่นั่ง แต่คุณต้องการ ${guests} คน`
                      }
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowForm(true)}
                disabled={!selectedTable || !selectedDate || !selectedTime || (selectedTable && selectedTable.seats < guests)}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
              >
                {!selectedTable ? "เลือกโต๊ะ" : 
                 !selectedDate || !selectedTime ? "เลือกวันและเวลา" :
                 selectedTable.seats < guests ? "โต๊ะไม่เพียงพอ" :
                 "ยืนยันการจอง"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 max-w-md w-full border border-purple-500/30 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">
              กรอกข้อมูลการจอง
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  value={reservationForm.name}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  value={reservationForm.phone}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      phone: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  อีเมล
                </label>
                <input
                  type="email"
                  value={reservationForm.email}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-700/70 hover:bg-gray-600/70 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 border border-gray-600"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleReservation}
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}