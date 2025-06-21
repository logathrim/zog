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

// Table layouts - จัดเป็นแถวเรียงกันจริงๆ เหมือนในรูป
export const restaurantTables: { [key: string]: Table[] } = {
  // 🎭 Zog Downtown - REAL CLUB LAYOUT (เหมือนรูปที่ส่งมา)
  '1': [
    // === VIP SECTION - แถวหน้าสุด (ใกล้ STAGE) ===
    { id: 'v1', number: 'V1', seats: 4, position: { x: 20, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'v2', number: 'V2', seats: 4, position: { x: 28, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'v3', number: 'V3', seats: 4, position: { x: 36, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'v4', number: 'V4', seats: 4, position: { x: 44, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'v5', number: 'V5', seats: 4, position: { x: 52, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'v6', number: 'V6', seats: 4, position: { x: 60, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'v7', number: 'V7', seats: 4, position: { x: 68, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'v8', number: 'V8', seats: 4, position: { x: 76, y: 20 }, isAvailable: true, isSelected: false },

    // === แถวที่ 2 ===
    { id: 'a1', number: 'A1', seats: 4, position: { x: 18, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'a2', number: 'A2', seats: 4, position: { x: 26, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'a3', number: 'A3', seats: 4, position: { x: 34, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'a4', number: 'A4', seats: 4, position: { x: 42, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'a5', number: 'A5', seats: 4, position: { x: 50, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'a6', number: 'A6', seats: 4, position: { x: 58, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'a7', number: 'A7', seats: 4, position: { x: 66, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'a8', number: 'A8', seats: 4, position: { x: 74, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'a9', number: 'A9', seats: 4, position: { x: 82, y: 30 }, isAvailable: true, isSelected: false },

    // === แถวที่ 3 ===
    { id: 'b1', number: 'B1', seats: 4, position: { x: 16, y: 40 }, isAvailable: false, isSelected: false },
    { id: 'b2', number: 'B2', seats: 4, position: { x: 24, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'b3', number: 'B3', seats: 4, position: { x: 32, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'b4', number: 'B4', seats: 4, position: { x: 40, y: 40 }, isAvailable: false, isSelected: false },
    { id: 'b5', number: 'B5', seats: 4, position: { x: 48, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'b6', number: 'B6', seats: 4, position: { x: 56, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'b7', number: 'B7', seats: 4, position: { x: 64, y: 40 }, isAvailable: false, isSelected: false },
    { id: 'b8', number: 'B8', seats: 4, position: { x: 72, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'b9', number: 'B9', seats: 4, position: { x: 80, y: 40 }, isAvailable: true, isSelected: false },

    // === แถวที่ 4 ===
    { id: 'c1', number: 'C1', seats: 4, position: { x: 14, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c2', number: 'C2', seats: 4, position: { x: 22, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'c3', number: 'C3', seats: 4, position: { x: 30, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c4', number: 'C4', seats: 4, position: { x: 38, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c5', number: 'C5', seats: 4, position: { x: 46, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'c6', number: 'C6', seats: 4, position: { x: 54, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c7', number: 'C7', seats: 4, position: { x: 62, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c8', number: 'C8', seats: 4, position: { x: 70, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'c9', number: 'C9', seats: 4, position: { x: 78, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'c10', number: 'C10', seats: 4, position: { x: 86, y: 50 }, isAvailable: true, isSelected: false },

    // === แถวที่ 5 ===
    { id: 'd1', number: 'D1', seats: 2, position: { x: 12, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'd2', number: 'D2', seats: 2, position: { x: 20, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd3', number: 'D3', seats: 2, position: { x: 28, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd4', number: 'D4', seats: 2, position: { x: 36, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'd5', number: 'D5', seats: 2, position: { x: 44, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd6', number: 'D6', seats: 2, position: { x: 52, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd7', number: 'D7', seats: 2, position: { x: 60, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'd8', number: 'D8', seats: 2, position: { x: 68, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd9', number: 'D9', seats: 2, position: { x: 76, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'd10', number: 'D10', seats: 2, position: { x: 84, y: 60 }, isAvailable: false, isSelected: false },

    // === แถวที่ 6 ===
    { id: 'e1', number: 'E1', seats: 2, position: { x: 10, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e2', number: 'E2', seats: 2, position: { x: 18, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'e3', number: 'E3', seats: 2, position: { x: 26, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e4', number: 'E4', seats: 2, position: { x: 34, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e5', number: 'E5', seats: 2, position: { x: 42, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'e6', number: 'E6', seats: 2, position: { x: 50, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e7', number: 'E7', seats: 2, position: { x: 58, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e8', number: 'E8', seats: 2, position: { x: 66, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'e9', number: 'E9', seats: 2, position: { x: 74, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e10', number: 'E10', seats: 2, position: { x: 82, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'e11', number: 'E11', seats: 2, position: { x: 90, y: 70 }, isAvailable: false, isSelected: false },

    // === แถวหลังสุด - BAR SEATING ===
    { id: 'bar1', number: 'BAR1', seats: 2, position: { x: 15, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'bar2', number: 'BAR2', seats: 2, position: { x: 23, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar3', number: 'BAR3', seats: 2, position: { x: 31, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar4', number: 'BAR4', seats: 2, position: { x: 39, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'bar5', number: 'BAR5', seats: 2, position: { x: 47, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar6', number: 'BAR6', seats: 2, position: { x: 55, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar7', number: 'BAR7', seats: 2, position: { x: 63, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'bar8', number: 'BAR8', seats: 2, position: { x: 71, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar9', number: 'BAR9', seats: 2, position: { x: 79, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'bar10', number: 'BAR10', seats: 2, position: { x: 87, y: 80 }, isAvailable: false, isSelected: false }
  ],

  // 🌊 Zog Riverside - แถวเรียงกันตามระเบียงชั้นๆ
  '2': [
    // === WATERFRONT ROW (แถวติดแม่น้ำ) ===
    { id: 'w1', number: 'W1', seats: 2, position: { x: 15, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'w2', number: 'W2', seats: 2, position: { x: 25, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'w3', number: 'W3', seats: 2, position: { x: 35, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'w4', number: 'W4', seats: 2, position: { x: 45, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'w5', number: 'W5', seats: 2, position: { x: 55, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'w6', number: 'W6', seats: 2, position: { x: 65, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'w7', number: 'W7', seats: 2, position: { x: 75, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'w8', number: 'W8', seats: 2, position: { x: 85, y: 15 }, isAvailable: false, isSelected: false },

    // === TERRACE LEVEL 1 ===
    { id: 't1', number: 'T1', seats: 4, position: { x: 20, y: 25 }, isAvailable: false, isSelected: false },
    { id: 't2', number: 'T2', seats: 4, position: { x: 30, y: 25 }, isAvailable: true, isSelected: false },
    { id: 't3', number: 'T3', seats: 4, position: { x: 40, y: 25 }, isAvailable: true, isSelected: false },
    { id: 't4', number: 'T4', seats: 4, position: { x: 50, y: 25 }, isAvailable: false, isSelected: false },
    { id: 't5', number: 'T5', seats: 4, position: { x: 60, y: 25 }, isAvailable: true, isSelected: false },
    { id: 't6', number: 'T6', seats: 4, position: { x: 70, y: 25 }, isAvailable: true, isSelected: false },
    { id: 't7', number: 'T7', seats: 4, position: { x: 80, y: 25 }, isAvailable: false, isSelected: false },

    // === TERRACE LEVEL 2 ===
    { id: 'r1', number: 'R1', seats: 4, position: { x: 25, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'r2', number: 'R2', seats: 4, position: { x: 35, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'r3', number: 'R3', seats: 4, position: { x: 45, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'r4', number: 'R4', seats: 4, position: { x: 55, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'r5', number: 'R5', seats: 4, position: { x: 65, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'r6', number: 'R6', seats: 4, position: { x: 75, y: 35 }, isAvailable: true, isSelected: false },

    // === MAIN DINING LEVEL ===
    { id: 'm1', number: 'M1', seats: 6, position: { x: 30, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'm2', number: 'M2', seats: 6, position: { x: 40, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'm3', number: 'M3', seats: 6, position: { x: 50, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'm4', number: 'M4', seats: 6, position: { x: 60, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'm5', number: 'M5', seats: 6, position: { x: 70, y: 45 }, isAvailable: true, isSelected: false },

    // === UPPER TERRACE ===
    { id: 'u1', number: 'U1', seats: 8, position: { x: 25, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'u2', number: 'U2', seats: 8, position: { x: 40, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'u3', number: 'U3', seats: 8, position: { x: 55, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'u4', number: 'U4', seats: 8, position: { x: 70, y: 55 }, isAvailable: true, isSelected: false },

    // === PRIVATE DINING ===
    { id: 'p1', number: 'P1', seats: 10, position: { x: 30, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'p2', number: 'P2', seats: 10, position: { x: 50, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'p3', number: 'P3', seats: 10, position: { x: 70, y: 70 }, isAvailable: true, isSelected: false }
  ],

  // 🏊‍♂️ Zog Rooftop - รอบสระว่ายน้ำ (เก็บไว้เหมือนเดิมเพราะดีแล้ว)
  '3': [
    // บาร์เคาน์เตอร์ (y: 15)
    { id: '1', number: 1, seats: 2, position: { x: 20, y: 15 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 35, y: 15 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 50, y: 15 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 65, y: 15 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 80, y: 15 }, isAvailable: false, isSelected: false },

    // รอบสระ - ด้านซ้าย
    { id: '6', number: 6, seats: 4, position: { x: 15, y: 30 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 4, position: { x: 15, y: 45 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 15, y: 60 }, isAvailable: true, isSelected: false },

    // รอบสระ - ด้านขวา
    { id: '9', number: 9, seats: 4, position: { x: 85, y: 30 }, isAvailable: false, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 85, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 85, y: 60 }, isAvailable: true, isSelected: false },

    // รอบสระ - ด้านบน
    { id: '12', number: 12, seats: 4, position: { x: 30, y: 30 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 50, y: 30 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 70, y: 30 }, isAvailable: true, isSelected: false },

    // รอบสระ - ด้านล่าง
    { id: '15', number: 15, seats: 4, position: { x: 30, y: 60 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 50, y: 60 }, isAvailable: false, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 70, y: 60 }, isAvailable: true, isSelected: false },

    // VIP Section - แถวหลัง (y: 75)
    { id: '18', number: 18, seats: 6, position: { x: 25, y: 75 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 6, position: { x: 50, y: 75 }, isAvailable: false, isSelected: false },
    { id: '20', number: 20, seats: 6, position: { x: 75, y: 75 }, isAvailable: true, isSelected: false },

    // Premium Tables - แถวสุดท้าย (y: 90)
    { id: '21', number: 21, seats: 8, position: { x: 35, y: 90 }, isAvailable: true, isSelected: false },
    { id: '22', number: 22, seats: 8, position: { x: 65, y: 90 }, isAvailable: false, isSelected: false }
  ],

  // 🌳 Zog Garden - จัดเป็นทางเดินในสวน
  '4': [
    // === LEFT GARDEN PATH ===
    { id: 'lg1', number: 'LG1', seats: 4, position: { x: 15, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'lg2', number: 'LG2', seats: 4, position: { x: 15, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'lg3', number: 'LG3', seats: 4, position: { x: 15, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'lg4', number: 'LG4', seats: 4, position: { x: 15, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'lg5', number: 'LG5', seats: 4, position: { x: 15, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'lg6', number: 'LG6', seats: 4, position: { x: 15, y: 70 }, isAvailable: true, isSelected: false },

    // === CENTER GARDEN (รอบน้ำพุ) ===
    { id: 'cg1', number: 'CG1', seats: 4, position: { x: 35, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'cg2', number: 'CG2', seats: 4, position: { x: 45, y: 25 }, isAvailable: false, isSelected: false },
    { id: 'cg3', number: 'CG3', seats: 4, position: { x: 55, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'cg4', number: 'CG4', seats: 4, position: { x: 65, y: 25 }, isAvailable: true, isSelected: false },
    
    { id: 'cg5', number: 'CG5', seats: 6, position: { x: 30, y: 40 }, isAvailable: false, isSelected: false },
    { id: 'cg6', number: 'CG6', seats: 6, position: { x: 70, y: 40 }, isAvailable: true, isSelected: false },
    
    { id: 'cg7', number: 'CG7', seats: 6, position: { x: 35, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'cg8', number: 'CG8', seats: 6, position: { x: 45, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'cg9', number: 'CG9', seats: 6, position: { x: 55, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'cg10', number: 'CG10', seats: 6, position: { x: 65, y: 55 }, isAvailable: true, isSelected: false },

    // === RIGHT GARDEN PATH ===
    { id: 'rg1', number: 'RG1', seats: 4, position: { x: 85, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'rg2', number: 'RG2', seats: 4, position: { x: 85, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'rg3', number: 'RG3', seats: 4, position: { x: 85, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'rg4', number: 'RG4', seats: 4, position: { x: 85, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'rg5', number: 'RG5', seats: 4, position: { x: 85, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'rg6', number: 'RG6', seats: 4, position: { x: 85, y: 70 }, isAvailable: true, isSelected: false },

    // === GARDEN PAVILION - แถวหลัง ===
    { id: 'gp1', number: 'GP1', seats: 8, position: { x: 30, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'gp2', number: 'GP2', seats: 8, position: { x: 50, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'gp3', number: 'GP3', seats: 8, position: { x: 70, y: 80 }, isAvailable: true, isSelected: false }
  ],

  // 🎵 Zog Underground - รอบ DANCE FLOOR
  '5': [
    // === VIP BOOTHS - LEFT WALL ===
    { id: 'vl1', number: 'VL1', seats: 8, position: { x: 10, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'vl2', number: 'VL2', seats: 8, position: { x: 10, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'vl3', number: 'VL3', seats: 8, position: { x: 10, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'vl4', number: 'VL4', seats: 8, position: { x: 10, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'vl5', number: 'VL5', seats: 8, position: { x: 10, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'vl6', number: 'VL6', seats: 8, position: { x: 10, y: 70 }, isAvailable: true, isSelected: false },

    // === VIP BOOTHS - RIGHT WALL ===
    { id: 'vr1', number: 'VR1', seats: 8, position: { x: 90, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'vr2', number: 'VR2', seats: 8, position: { x: 90, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'vr3', number: 'VR3', seats: 8, position: { x: 90, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'vr4', number: 'VR4', seats: 8, position: { x: 90, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'vr5', number: 'VR5', seats: 8, position: { x: 90, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'vr6', number: 'VR6', seats: 8, position: { x: 90, y: 70 }, isAvailable: true, isSelected: false },

    // === ARENA LEVEL - รอบ DANCE FLOOR (แถวบน) ===
    { id: 'ar1', number: 'AR1', seats: 4, position: { x: 25, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'ar2', number: 'AR2', seats: 4, position: { x: 35, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'ar3', number: 'AR3', seats: 4, position: { x: 45, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'ar4', number: 'AR4', seats: 4, position: { x: 55, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'ar5', number: 'AR5', seats: 4, position: { x: 65, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'ar6', number: 'AR6', seats: 4, position: { x: 75, y: 20 }, isAvailable: true, isSelected: false },

    // === ARENA LEVEL - รอบ DANCE FLOOR (แถวล่าง) ===
    { id: 'ab1', number: 'AB1', seats: 4, position: { x: 25, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'ab2', number: 'AB2', seats: 4, position: { x: 35, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'ab3', number: 'AB3', seats: 4, position: { x: 45, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'ab4', number: 'AB4', seats: 4, position: { x: 55, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'ab5', number: 'AB5', seats: 4, position: { x: 65, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'ab6', number: 'AB6', seats: 4, position: { x: 75, y: 80 }, isAvailable: true, isSelected: false },

    // === MEZZANINE LEVEL - ชั้นกลาง ===
    { id: 'mz1', number: 'MZ1', seats: 6, position: { x: 30, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'mz2', number: 'MZ2', seats: 6, position: { x: 40, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'mz3', number: 'MZ3', seats: 6, position: { x: 50, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'mz4', number: 'MZ4', seats: 6, position: { x: 60, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'mz5', number: 'MZ5', seats: 6, position: { x: 70, y: 35 }, isAvailable: true, isSelected: false },

    { id: 'mb1', number: 'MB1', seats: 6, position: { x: 30, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'mb2', number: 'MB2', seats: 6, position: { x: 40, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'mb3', number: 'MB3', seats: 6, position: { x: 50, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'mb4', number: 'MB4', seats: 6, position: { x: 60, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'mb5', number: 'MB5', seats: 6, position: { x: 70, y: 65 }, isAvailable: false, isSelected: false }
  ],

  // 🥃 Zog Classic - แถวเรียงกันแบบสุภาพบุรุษ
  '6': [
    // === BAR COUNTER - แถวหน้า ===
    { id: 'bc1', number: 'BC1', seats: 2, position: { x: 20, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'bc2', number: 'BC2', seats: 2, position: { x: 28, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'bc3', number: 'BC3', seats: 2, position: { x: 36, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'bc4', number: 'BC4', seats: 2, position: { x: 44, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'bc5', number: 'BC5', seats: 2, position: { x: 52, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'bc6', number: 'BC6', seats: 2, position: { x: 60, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'bc7', number: 'BC7', seats: 2, position: { x: 68, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'bc8', number: 'BC8', seats: 2, position: { x: 76, y: 20 }, isAvailable: false, isSelected: false },

    // === LIBRARY SECTION - แถวที่ 2 ===
    { id: 'lib1', number: 'LIB1', seats: 4, position: { x: 25, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'lib2', number: 'LIB2', seats: 4, position: { x: 35, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'lib3', number: 'LIB3', seats: 4, position: { x: 45, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'lib4', number: 'LIB4', seats: 4, position: { x: 55, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'lib5', number: 'LIB5', seats: 4, position: { x: 65, y: 35 }, isAvailable: false, isSelected: false },

    // === FIREPLACE LOUNGE - แถวที่ 3 ===
    { id: 'fl1', number: 'FL1', seats: 6, position: { x: 30, y: 50 }, isAvailable: false, isSelected: false },
    { id: 'fl2', number: 'FL2', seats: 6, position: { x: 45, y: 50 }, isAvailable: true, isSelected: false },
    { id: 'fl3', number: 'FL3', seats: 6, position: { x: 60, y: 50 }, isAvailable: true, isSelected: false },

    // === BILLIARD AREA - แถวที่ 4 ===
    { id: 'bil1', number: 'BIL1', seats: 4, position: { x: 25, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'bil2', number: 'BIL2', seats: 4, position: { x: 35, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'bil3', number: 'BIL3', seats: 4, position: { x: 45, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'bil4', number: 'BIL4', seats: 4, position: { x: 55, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'bil5', number: 'BIL5', seats: 4, position: { x: 65, y: 65 }, isAvailable: false, isSelected: false },

    // === PRIVATE DINING - แถวหลัง ===
    { id: 'pd1', number: 'PD1', seats: 8, position: { x: 30, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'pd2', number: 'PD2', seats: 8, position: { x: 50, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'pd3', number: 'PD3', seats: 8, position: { x: 70, y: 80 }, isAvailable: true, isSelected: false }
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