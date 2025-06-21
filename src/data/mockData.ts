import { Band, Table, Promotion, TimeSlot, Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Zog Downtown',
    description: 'สาขาใจกลางเมือง บรรยากาศหรูหราพร้อมดนตรีสดทุกคืน',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'สีลม, กรุงเทพฯ',
    rating: 4.8,
    priceRange: '฿฿฿',
    openTime: '17:00',
    closeTime: '02:00',
    features: ['ดนตรีสด', 'รูฟท็อป', 'ค็อกเทลพิเศษ', 'ที่จอดรถ'],
    atmosphere: 'หรูหรา & โมเดิร์น',
    capacity: 120
  },
  {
    id: '2',
    name: 'Zog Riverside',
    description: 'วิวแม่น้ำสุดโรแมนติก เหมาะสำหรับดินเนอร์พิเศษ',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'อาศรม, กรุงเทพฯ',
    rating: 4.9,
    priceRange: '฿฿฿฿',
    openTime: '18:00',
    closeTime: '01:00',
    features: ['วิวแม่น้ำ', 'เทอเรส', 'ไวน์คอลเลคชัน', 'เชฟพิเศษ'],
    atmosphere: 'โรแมนติก & เอ็กซ์คลูซีฟ',
    capacity: 80
  },
  {
    id: '3',
    name: 'Zog Rooftop',
    description: 'บาร์รูฟท็อปชั้น 35 วิว 360 องศาของกรุงเทพฯ',
    image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'สาทร, กรุงเทพฯ',
    rating: 4.7,
    priceRange: '฿฿฿฿',
    openTime: '17:30',
    closeTime: '02:00',
    features: ['วิวพาโนรามา', 'สกายบาร์', 'DJ เซ็ต', 'อินฟินิตี้พูล'],
    atmosphere: 'สุดหรู & ทันสมัย',
    capacity: 150
  },
  {
    id: '4',
    name: 'Zog Garden',
    description: 'บรรยากาศสวนสวยในใจเมือง ผ่อนคลายท่ามกลางธรรมชาติ',
    image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'ทองหล่อ, กรุงเทพฯ',
    rating: 4.6,
    priceRange: '฿฿฿',
    openTime: '16:00',
    closeTime: '01:00',
    features: ['สวนสวย', 'อาหารออร์แกนิค', 'โยคะ', 'พื้นที่ส่วนตัว'],
    atmosphere: 'ธรรมชาติ & ผ่อนคลาย',
    capacity: 100
  },
  {
    id: '5',
    name: 'Zog Underground',
    description: 'บาร์ใต้ดินสุดเท่ ดนตรีอิเล็กทรอนิกส์และค็อกเทลสุดแนว',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'เอกมัย, กรุงเทพฯ',
    rating: 4.5,
    priceRange: '฿฿฿',
    openTime: '19:00',
    closeTime: '03:00',
    features: ['ดนตรีอิเล็กทรอนิกส์', 'แสงไฟพิเศษ', 'เดนซ์ฟลอร์', 'VIP บูธ'],
    atmosphere: 'ไนท์คลับ & เอ็นเนอร์เจติก',
    capacity: 200
  },
  {
    id: '6',
    name: 'Zog Classic',
    description: 'บาร์คลาสสิกสไตล์วินเทจ เหล้าเก่าแก่และบรรยากาศอบอุ่น',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'ราชเทวี, กรุงเทพฯ',
    rating: 4.4,
    priceRange: '฿฿',
    openTime: '17:00',
    closeTime: '01:00',
    features: ['วิสกี้คอลเลคชัน', 'เฟอร์นิเจอร์วินเทจ', 'ซิการ์', 'บิลเลียด'],
    atmosphere: 'คลาสสิก & อบอุ่น',
    capacity: 60
  }
];

// Table layouts for each restaurant - จัดเรียงแบบเหมือนจริง ไม่ซ้อนกัน
export const restaurantTables: { [key: string]: Table[] } = {
  // Zog Downtown - Modern restaurant layout with stage at front
  '1': [
    // แถวหน้า - ใกล้เวที (โต๊ะเล็ก 2 ที่นั่ง) - y: 30
    { id: '1', number: 1, seats: 2, position: { x: 15, y: 30 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 25, y: 30 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 35, y: 30 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 45, y: 30 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 55, y: 30 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 65, y: 30 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 75, y: 30 }, isAvailable: true, isSelected: false },
    { id: '8', number: 8, seats: 2, position: { x: 85, y: 30 }, isAvailable: false, isSelected: false },

    // แถวที่ 2 (โต๊ะ 4 ที่นั่ง) - y: 45
    { id: '9', number: 9, seats: 4, position: { x: 15, y: 45 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 30, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 45, y: 45 }, isAvailable: false, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 60, y: 45 }, isAvailable: true, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 75, y: 45 }, isAvailable: true, isSelected: false },

    // แถวที่ 3 (โต๊ะ 4 ที่นั่ง) - y: 60
    { id: '14', number: 14, seats: 4, position: { x: 15, y: 60 }, isAvailable: false, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 30, y: 60 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 45, y: 60 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 60, y: 60 }, isAvailable: false, isSelected: false },
    { id: '18', number: 18, seats: 4, position: { x: 75, y: 60 }, isAvailable: true, isSelected: false },

    // แถวหลัง (โต๊ะใหญ่ 6-8 ที่นั่ง) - y: 75
    { id: '19', number: 19, seats: 6, position: { x: 20, y: 75 }, isAvailable: true, isSelected: false },
    { id: '20', number: 20, seats: 6, position: { x: 40, y: 75 }, isAvailable: true, isSelected: false },
    { id: '21', number: 21, seats: 6, position: { x: 60, y: 75 }, isAvailable: false, isSelected: false },
    { id: '22', number: 22, seats: 8, position: { x: 80, y: 75 }, isAvailable: true, isSelected: false },

    // แถวสุดท้าย - y: 90
    { id: '23', number: 23, seats: 6, position: { x: 25, y: 90 }, isAvailable: true, isSelected: false },
    { id: '24', number: 24, seats: 8, position: { x: 50, y: 90 }, isAvailable: false, isSelected: false },
    { id: '25', number: 25, seats: 6, position: { x: 75, y: 90 }, isAvailable: true, isSelected: false }
  ],

  // Zog Riverside - Waterfront restaurant layout
  '2': [
    // แถวริมน้ำ (วิวสวยที่สุด) - y: 25
    { id: '1', number: 1, seats: 2, position: { x: 10, y: 25 }, isAvailable: false, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 20, y: 25 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 30, y: 25 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 40, y: 25 }, isAvailable: false, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 50, y: 25 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 60, y: 25 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 70, y: 25 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 2, position: { x: 80, y: 25 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 2, position: { x: 90, y: 25 }, isAvailable: true, isSelected: false },

    // แถวที่ 2 - y: 40
    { id: '10', number: 10, seats: 4, position: { x: 15, y: 40 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 30, y: 40 }, isAvailable: false, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 45, y: 40 }, isAvailable: true, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 60, y: 40 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 75, y: 40 }, isAvailable: false, isSelected: false },

    // แถวที่ 3 - y: 55
    { id: '15', number: 15, seats: 4, position: { x: 15, y: 55 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 30, y: 55 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 45, y: 55 }, isAvailable: false, isSelected: false },
    { id: '18', number: 18, seats: 4, position: { x: 60, y: 55 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 4, position: { x: 75, y: 55 }, isAvailable: true, isSelected: false },

    // แถวหลัง - y: 70
    { id: '20', number: 20, seats: 6, position: { x: 20, y: 70 }, isAvailable: false, isSelected: false },
    { id: '21', number: 21, seats: 6, position: { x: 40, y: 70 }, isAvailable: true, isSelected: false },
    { id: '22', number: 22, seats: 6, position: { x: 60, y: 70 }, isAvailable: true, isSelected: false },
    { id: '23', number: 23, seats: 8, position: { x: 80, y: 70 }, isAvailable: false, isSelected: false },

    // แถวสุดท้าย - y: 85
    { id: '24', number: 24, seats: 8, position: { x: 30, y: 85 }, isAvailable: true, isSelected: false },
    { id: '25', number: 25, seats: 8, position: { x: 60, y: 85 }, isAvailable: true, isSelected: false }
  ],

  // Zog Rooftop - Rooftop bar layout
  '3': [
    // บาร์เคาน์เตอร์ (แถวหน้า) - y: 20
    { id: '1', number: 1, seats: 2, position: { x: 15, y: 20 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 25, y: 20 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 35, y: 20 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 45, y: 20 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 55, y: 20 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 65, y: 20 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 75, y: 20 }, isAvailable: true, isSelected: false },
    { id: '8', number: 8, seats: 2, position: { x: 85, y: 20 }, isAvailable: false, isSelected: false },

    // พื้นที่รอบพูล - แถวซ้าย
    { id: '9', number: 9, seats: 4, position: { x: 10, y: 35 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 10, y: 50 }, isAvailable: false, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 10, y: 65 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 6, position: { x: 10, y: 80 }, isAvailable: true, isSelected: false },

    // พื้นที่รอบพูล - แถวขวา
    { id: '13', number: 13, seats: 4, position: { x: 90, y: 35 }, isAvailable: false, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 90, y: 50 }, isAvailable: true, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 90, y: 65 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 6, position: { x: 90, y: 80 }, isAvailable: false, isSelected: false },

    // พื้นที่กลาง - รอบพูล บน
    { id: '17', number: 17, seats: 4, position: { x: 25, y: 35 }, isAvailable: true, isSelected: false },
    { id: '18', number: 18, seats: 4, position: { x: 40, y: 35 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 4, position: { x: 60, y: 35 }, isAvailable: false, isSelected: false },
    { id: '20', number: 20, seats: 4, position: { x: 75, y: 35 }, isAvailable: true, isSelected: false },

    // พื้นที่กลาง - รอบพูล ล่าง
    { id: '21', number: 21, seats: 4, position: { x: 25, y: 65 }, isAvailable: false, isSelected: false },
    { id: '22', number: 22, seats: 4, position: { x: 40, y: 65 }, isAvailable: true, isSelected: false },
    { id: '23', number: 23, seats: 4, position: { x: 60, y: 65 }, isAvailable: true, isSelected: false },
    { id: '24', number: 24, seats: 4, position: { x: 75, y: 65 }, isAvailable: false, isSelected: false },

    // VIP Section - แถวหลัง
    { id: '25', number: 25, seats: 8, position: { x: 20, y: 90 }, isAvailable: true, isSelected: false },
    { id: '26', number: 26, seats: 8, position: { x: 40, y: 90 }, isAvailable: false, isSelected: false },
    { id: '27', number: 27, seats: 8, position: { x: 60, y: 90 }, isAvailable: true, isSelected: false },
    { id: '28', number: 28, seats: 8, position: { x: 80, y: 90 }, isAvailable: true, isSelected: false }
  ],

  // Zog Garden - Garden restaurant layout
  '4': [
    // แถวหน้า - ใต้ต้นไม้ - y: 30
    { id: '1', number: 1, seats: 2, position: { x: 15, y: 30 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 25, y: 30 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 35, y: 30 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 50, y: 30 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 65, y: 30 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 75, y: 30 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 85, y: 30 }, isAvailable: true, isSelected: false },

    // แถวที่ 2 - y: 45
    { id: '8', number: 8, seats: 4, position: { x: 15, y: 45 }, isAvailable: false, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 30, y: 45 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 45, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 60, y: 45 }, isAvailable: false, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 75, y: 45 }, isAvailable: true, isSelected: false },

    // แถวที่ 3 - y: 60
    { id: '13', number: 13, seats: 4, position: { x: 15, y: 60 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 30, y: 60 }, isAvailable: false, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 45, y: 60 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 60, y: 60 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 75, y: 60 }, isAvailable: false, isSelected: false },

    // แถวหลัง - โต๊ะใหญ่ - y: 75
    { id: '18', number: 18, seats: 6, position: { x: 20, y: 75 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 6, position: { x: 40, y: 75 }, isAvailable: true, isSelected: false },
    { id: '20', number: 20, seats: 6, position: { x: 60, y: 75 }, isAvailable: false, isSelected: false },
    { id: '21', number: 21, seats: 8, position: { x: 80, y: 75 }, isAvailable: true, isSelected: false },

    // แถวสุดท้าย - y: 90
    { id: '22', number: 22, seats: 8, position: { x: 25, y: 90 }, isAvailable: false, isSelected: false },
    { id: '23', number: 23, seats: 8, position: { x: 50, y: 90 }, isAvailable: true, isSelected: false },
    { id: '24', number: 24, seats: 6, position: { x: 75, y: 90 }, isAvailable: true, isSelected: false }
  ],

  // Zog Underground - Nightclub layout
  '5': [
    // VIP Booths - ด้านซ้าย
    { id: '1', number: 1, seats: 6, position: { x: 10, y: 25 }, isAvailable: false, isSelected: false },
    { id: '2', number: 2, seats: 6, position: { x: 10, y: 40 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 8, position: { x: 10, y: 55 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 8, position: { x: 10, y: 70 }, isAvailable: false, isSelected: false },
    { id: '5', number: 5, seats: 6, position: { x: 10, y: 85 }, isAvailable: true, isSelected: false },

    // VIP Booths - ด้านขวา
    { id: '6', number: 6, seats: 6, position: { x: 90, y: 25 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 6, position: { x: 90, y: 40 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 8, position: { x: 90, y: 55 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 8, position: { x: 90, y: 70 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 6, position: { x: 90, y: 85 }, isAvailable: false, isSelected: false },

    // รอบ Dance Floor - แถวบน - y: 30
    { id: '11', number: 11, seats: 4, position: { x: 25, y: 30 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 35, y: 30 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 45, y: 30 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 55, y: 30 }, isAvailable: true, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 65, y: 30 }, isAvailable: false, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 75, y: 30 }, isAvailable: true, isSelected: false },

    // รอบ Dance Floor - แถวล่าง - y: 70
    { id: '17', number: 17, seats: 4, position: { x: 25, y: 80 }, isAvailable: false, isSelected: false },
    { id: '18', number: 18, seats: 4, position: { x: 35, y: 80 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 4, position: { x: 45, y: 80 }, isAvailable: true, isSelected: false },
    { id: '20', number: 20, seats: 4, position: { x: 55, y: 80 }, isAvailable: false, isSelected: false },
    { id: '21', number: 21, seats: 4, position: { x: 65, y: 80 }, isAvailable: true, isSelected: false },
    { id: '22', number: 22, seats: 4, position: { x: 75, y: 80 }, isAvailable: true, isSelected: false },

    // Premium Tables - แถวหลัง - y: 95
    { id: '23', number: 23, seats: 8, position: { x: 30, y: 95 }, isAvailable: false, isSelected: false },
    { id: '24', number: 24, seats: 8, position: { x: 50, y: 95 }, isAvailable: true, isSelected: false },
    { id: '25', number: 25, seats: 8, position: { x: 70, y: 95 }, isAvailable: true, isSelected: false }
  ],

  // Zog Classic - Traditional bar layout
  '6': [
    // บาร์เคาน์เตอร์ - y: 25
    { id: '1', number: 1, seats: 2, position: { x: 20, y: 25 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 30, y: 25 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 40, y: 25 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 50, y: 25 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 60, y: 25 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 70, y: 25 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 80, y: 25 }, isAvailable: true, isSelected: false },

    // แถวกลาง - y: 45
    { id: '8', number: 8, seats: 4, position: { x: 20, y: 45 }, isAvailable: false, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 35, y: 45 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 50, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 65, y: 45 }, isAvailable: false, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 80, y: 45 }, isAvailable: true, isSelected: false },

    // แถวหลัง - y: 65
    { id: '13', number: 13, seats: 4, position: { x: 20, y: 65 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 35, y: 65 }, isAvailable: false, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 50, y: 65 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 65, y: 65 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 80, y: 65 }, isAvailable: false, isSelected: false },

    // โต๊ะใหญ่ด้านหลัง - y: 85
    { id: '18', number: 18, seats: 6, position: { x: 25, y: 85 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 6, position: { x: 45, y: 85 }, isAvailable: false, isSelected: false },
    { id: '20', number: 20, seats: 6, position: { x: 65, y: 85 }, isAvailable: true, isSelected: false },
    { id: '21', number: 21, seats: 8, position: { x: 85, y: 85 }, isAvailable: true, isSelected: false }
  ]
};

export const bands: Band[] = [
  {
    id: '1',
    name: 'คาราบาว',
    genre: 'เพลงเพื่อชีวิต',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    startTime: '20:00',
    endTime: '22:00',
    description: 'วงเพลงเพื่อชีวิตระดับตำนานของไทย'
  },
  {
    id: '2',
    name: 'บิ๊กแอส',
    genre: 'ป็อป',
    image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=400',
    startTime: '22:30',
    endTime: '00:30',
    description: 'วงป็อปร็อคสุดฮิตแห่งยุค 90'
  },
  {
    id: '3',
    name: 'โบ สุนิตา',
    genre: 'อคูสติก',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
    startTime: '18:00',
    endTime: '20:00',
    description: 'นักร้องเสียงใสแห่งวงการเพลงไทย'
  },
  {
    id: '4',
    name: 'โลโซ',
    genre: 'ร็อค',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    startTime: '23:00',
    endTime: '01:00',
    description: 'วงร็อคพลังแรงที่สร้างชื่อในวงการ'
  }
];

// Keep the original tables for backward compatibility
export const tables: Table[] = restaurantTables['1'];

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'แฮปปี้อาวร์พิเศษ',
    description: 'ลด 50% สำหรับค็อกเทลและอาหารว่างทุกรายการ',
    discount: 'ลด 50%',
    validUntil: '2024-12-31',
    image: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400',
    terms: ['ใช้ได้วันจันทร์-ศุกร์ เวลา 17:00-19:00 น.', 'ไม่สามารถใช้ร่วมกับโปรโมชันอื่นได้', 'สำหรับลูกค้าที่ทานในร้านเท่านั้น']
  },
  {
    id: '2',
    title: 'คืนดนตรีสด',
    description: 'เข้าฟรี เมื่อจองโต๊ะอาหารเย็นในวันเสาร์-อาทิตย์',
    discount: 'เข้าฟรี',
    validUntil: '2024-12-31',
    image: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400',
    terms: ['สำหรับการจองวันเสาร์-อาทิตย์เท่านั้น', 'ขั้นต่ำ 2 ท่าน', 'ขึ้นอยู่กับที่ว่าง']
  },
  {
    id: '3',
    title: 'พิเศษวันเกิด',
    description: 'ของหวานและแชมเปญฟรี สำหรับการฉลองวันเกิด',
    discount: 'ของแถมฟรี',
    validUntil: '2024-12-31',
    image: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400',
    terms: ['ต้องแสดงบัตรประชาชน', 'แจ้งล่วงหน้า', 'กลุ่ม 4 คนขึ้นไป']
  }
];

export const timeSlots: TimeSlot[] = [
  {
    id: '1',
    time: '18:00',
    period: 'ช่วงเย็น',
    bands: [bands[2]]
  },
  {
    id: '2',
    time: '20:00',
    period: 'ไพรม์ไทม์',
    bands: [bands[0]]
  },
  {
    id: '3',
    time: '22:00',
    period: 'ดึก',
    bands: [bands[1]]
  },
  {
    id: '4',
    time: '23:00',
    period: 'เที่ยงคืน',
    bands: [bands[3]]
  }
];