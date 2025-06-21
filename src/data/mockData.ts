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

// Table layouts - แบบจริงของคลับ/บาร์ มีโต๊ะเยอะมาก
export const restaurantTables: { [key: string]: Table[] } = {
  // 🎭 Zog Downtown - REALISTIC CLUB LAYOUT
  '1': [
    // === VIP SECTION (แถวหน้าสุด) ===
    { id: 'v1', number: 'V1', seats: 4, position: { x: 15, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'v2', number: 'V2', seats: 4, position: { x: 25, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'v3', number: 'V3', seats: 4, position: { x: 35, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'v4', number: 'V4', seats: 4, position: { x: 45, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'v5', number: 'V5', seats: 4, position: { x: 55, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'v6', number: 'V6', seats: 4, position: { x: 65, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'v7', number: 'V7', seats: 4, position: { x: 75, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'v8', number: 'V8', seats: 4, position: { x: 85, y: 15 }, isAvailable: true, isSelected: false },

    // === PREMIUM SECTION (แถวที่ 2) ===
    { id: 'a1', number: 'A1', seats: 4, position: { x: 12, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a2', number: 'A2', seats: 4, position: { x: 20, y: 25 }, isAvailable: false, isSelected: false },
    { id: 'a3', number: 'A3', seats: 4, position: { x: 28, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a4', number: 'A4', seats: 4, position: { x: 36, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a5', number: 'A5', seats: 4, position: { x: 44, y: 25 }, isAvailable: false, isSelected: false },
    { id: 'a6', number: 'A6', seats: 4, position: { x: 52, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a7', number: 'A7', seats: 4, position: { x: 60, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a8', number: 'A8', seats: 4, position: { x: 68, y: 25 }, isAvailable: false, isSelected: false },
    { id: 'a9', number: 'A9', seats: 4, position: { x: 76, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'a10', number: 'A10', seats: 4, position: { x: 84, y: 25 }, isAvailable: true, isSelected: false },

    // === REGULAR SECTION (แถวที่ 3) ===
    { id: 'b1', number: 'B1', seats: 4, position: { x: 10, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'b2', number: 'B2', seats: 4, position: { x: 17, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b3', number: 'B3', seats: 4, position: { x: 24, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b4', number: 'B4', seats: 4, position: { x: 31, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'b5', number: 'B5', seats: 4, position: { x: 38, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b6', number: 'B6', seats: 4, position: { x: 45, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b7', number: 'B7', seats: 4, position: { x: 52, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'b8', number: 'B8', seats: 4, position: { x: 59, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b9', number: 'B9', seats: 4, position: { x: 66, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b10', number: 'B10', seats: 4, position: { x: 73, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'b11', number: 'B11', seats: 4, position: { x: 80, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'b12', number: 'B12', seats: 4, position: { x: 87, y: 35 }, isAvailable: true, isSelected: false },

    // === REGULAR SECTION (แถวที่ 4) ===
    { id: 'c1', number: 'C1', seats: 4, position: { x: 8, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c2', number: 'C2', seats: 4, position: { x: 15, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'c3', number: 'C3', seats: 4, position: { x: 22, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c4', number: 'C4', seats: 4, position: { x: 29, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c5', number: 'C5', seats: 4, position: { x: 36, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'c6', number: 'C6', seats: 4, position: { x: 43, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c7', number: 'C7', seats: 4, position: { x: 50, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c8', number: 'C8', seats: 4, position: { x: 57, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'c9', number: 'C9', seats: 4, position: { x: 64, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c10', number: 'C10', seats: 4, position: { x: 71, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c11', number: 'C11', seats: 4, position: { x: 78, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'c12', number: 'C12', seats: 4, position: { x: 85, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'c13', number: 'C13', seats: 4, position: { x: 92, y: 45 }, isAvailable: true, isSelected: false },

    // === STANDARD SECTION (แถวที่ 5) ===
    { id: 'd1', number: 'D1', seats: 2, position: { x: 6, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'd2', number: 'D2', seats: 2, position: { x: 12, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd3', number: 'D3', seats: 2, position: { x: 18, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd4', number: 'D4', seats: 2, position: { x: 24, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'd5', number: 'D5', seats: 2, position: { x: 30, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd6', number: 'D6', seats: 2, position: { x: 36, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd7', number: 'D7', seats: 2, position: { x: 42, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'd8', number: 'D8', seats: 2, position: { x: 48, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd9', number: 'D9', seats: 2, position: { x: 54, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd10', number: 'D10', seats: 2, position: { x: 60, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'd11', number: 'D11', seats: 2, position: { x: 66, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd12', number: 'D12', seats: 2, position: { x: 72, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd13', number: 'D13', seats: 2, position: { x: 78, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'd14', number: 'D14', seats: 2, position: { x: 84, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'd15', number: 'D15', seats: 2, position: { x: 90, y: 55 }, isAvailable: true, isSelected: false },

    // === STANDARD SECTION (แถวที่ 6) ===
    { id: 'e1', number: 'E1', seats: 2, position: { x: 6, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e2', number: 'E2', seats: 2, position: { x: 12, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'e3', number: 'E3', seats: 2, position: { x: 18, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e4', number: 'E4', seats: 2, position: { x: 24, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e5', number: 'E5', seats: 2, position: { x: 30, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'e6', number: 'E6', seats: 2, position: { x: 36, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e7', number: 'E7', seats: 2, position: { x: 42, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e8', number: 'E8', seats: 2, position: { x: 48, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'e9', number: 'E9', seats: 2, position: { x: 54, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e10', number: 'E10', seats: 2, position: { x: 60, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e11', number: 'E11', seats: 2, position: { x: 66, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'e12', number: 'E12', seats: 2, position: { x: 72, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e13', number: 'E13', seats: 2, position: { x: 78, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'e14', number: 'E14', seats: 2, position: { x: 84, y: 65 }, isAvailable: false, isSelected: false },
    { id: 'e15', number: 'E15', seats: 2, position: { x: 90, y: 65 }, isAvailable: true, isSelected: false },

    // === BAR SEATING (แถวหลังสุด) ===
    { id: 'bar1', number: 'BAR1', seats: 2, position: { x: 10, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'bar2', number: 'BAR2', seats: 2, position: { x: 16, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar3', number: 'BAR3', seats: 2, position: { x: 22, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar4', number: 'BAR4', seats: 2, position: { x: 28, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'bar5', number: 'BAR5', seats: 2, position: { x: 34, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar6', number: 'BAR6', seats: 2, position: { x: 40, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar7', number: 'BAR7', seats: 2, position: { x: 46, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'bar8', number: 'BAR8', seats: 2, position: { x: 52, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar9', number: 'BAR9', seats: 2, position: { x: 58, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar10', number: 'BAR10', seats: 2, position: { x: 64, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'bar11', number: 'BAR11', seats: 2, position: { x: 70, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar12', number: 'BAR12', seats: 2, position: { x: 76, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'bar13', number: 'BAR13', seats: 2, position: { x: 82, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'bar14', number: 'BAR14', seats: 2, position: { x: 88, y: 75 }, isAvailable: true, isSelected: false },

    // === STANDING AREA TABLES ===
    { id: 's1', number: 'S1', seats: 6, position: { x: 15, y: 85 }, isAvailable: true, isSelected: false },
    { id: 's2', number: 'S2', seats: 6, position: { x: 30, y: 85 }, isAvailable: false, isSelected: false },
    { id: 's3', number: 'S3', seats: 6, position: { x: 45, y: 85 }, isAvailable: true, isSelected: false },
    { id: 's4', number: 'S4', seats: 6, position: { x: 60, y: 85 }, isAvailable: true, isSelected: false },
    { id: 's5', number: 'S5', seats: 6, position: { x: 75, y: 85 }, isAvailable: false, isSelected: false }
  ],

  // 🌊 Zog Riverside - REALISTIC RIVERSIDE LAYOUT
  '2': [
    // === WATERFRONT PREMIUM (ติดแม่น้ำ) ===
    { id: 'w1', number: 'W1', seats: 2, position: { x: 10, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w2', number: 'W2', seats: 2, position: { x: 18, y: 12 }, isAvailable: false, isSelected: false },
    { id: 'w3', number: 'W3', seats: 2, position: { x: 26, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w4', number: 'W4', seats: 2, position: { x: 34, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w5', number: 'W5', seats: 2, position: { x: 42, y: 12 }, isAvailable: false, isSelected: false },
    { id: 'w6', number: 'W6', seats: 2, position: { x: 50, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w7', number: 'W7', seats: 2, position: { x: 58, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w8', number: 'W8', seats: 2, position: { x: 66, y: 12 }, isAvailable: false, isSelected: false },
    { id: 'w9', number: 'W9', seats: 2, position: { x: 74, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w10', number: 'W10', seats: 2, position: { x: 82, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'w11', number: 'W11', seats: 2, position: { x: 90, y: 12 }, isAvailable: false, isSelected: false },

    // === TERRACE LEVEL 1 ===
    { id: 't1', number: 'T1', seats: 4, position: { x: 12, y: 22 }, isAvailable: false, isSelected: false },
    { id: 't2', number: 'T2', seats: 4, position: { x: 20, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't3', number: 'T3', seats: 4, position: { x: 28, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't4', number: 'T4', seats: 4, position: { x: 36, y: 22 }, isAvailable: false, isSelected: false },
    { id: 't5', number: 'T5', seats: 4, position: { x: 44, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't6', number: 'T6', seats: 4, position: { x: 52, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't7', number: 'T7', seats: 4, position: { x: 60, y: 22 }, isAvailable: false, isSelected: false },
    { id: 't8', number: 'T8', seats: 4, position: { x: 68, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't9', number: 'T9', seats: 4, position: { x: 76, y: 22 }, isAvailable: true, isSelected: false },
    { id: 't10', number: 'T10', seats: 4, position: { x: 84, y: 22 }, isAvailable: false, isSelected: false },

    // === TERRACE LEVEL 2 ===
    { id: 'r1', number: 'R1', seats: 4, position: { x: 15, y: 32 }, isAvailable: true, isSelected: false },
    { id: 'r2', number: 'R2', seats: 4, position: { x: 23, y: 32 }, isAvailable: false, isSelected: false },
    { id: 'r3', number: 'R3', seats: 4, position: { x: 31, y: 32 }, isAvailable: true, isSelected: false },
    { id: 'r4', number: 'R4', seats: 4, position: { x: 39, y: 32 }, isAvailable: true, isSelected: false },
    { id: 'r5', number: 'R5', seats: 4, position: { x: 47, y: 32 }, isAvailable: false, isSelected: false },
    { id: 'r6', number: 'R6', seats: 4, position: { x: 55, y: 32 }, isAvailable: true, isSelected: false },
    { id: 'r7', number: 'R7', seats: 4, position: { x: 63, y: 32 }, isAvailable: true, isSelected: false },
    { id: 'r8', number: 'R8', seats: 4, position: { x: 71, y: 32 }, isAvailable: false, isSelected: false },
    { id: 'r9', number: 'R9', seats: 4, position: { x: 79, y: 32 }, isAvailable: true, isSelected: false },

    // === MAIN DINING AREA ===
    { id: 'm1', number: 'M1', seats: 6, position: { x: 18, y: 42 }, isAvailable: false, isSelected: false },
    { id: 'm2', number: 'M2', seats: 6, position: { x: 28, y: 42 }, isAvailable: true, isSelected: false },
    { id: 'm3', number: 'M3', seats: 6, position: { x: 38, y: 42 }, isAvailable: true, isSelected: false },
    { id: 'm4', number: 'M4', seats: 6, position: { x: 48, y: 42 }, isAvailable: false, isSelected: false },
    { id: 'm5', number: 'M5', seats: 6, position: { x: 58, y: 42 }, isAvailable: true, isSelected: false },
    { id: 'm6', number: 'M6', seats: 6, position: { x: 68, y: 42 }, isAvailable: true, isSelected: false },
    { id: 'm7', number: 'M7', seats: 6, position: { x: 78, y: 42 }, isAvailable: false, isSelected: false },

    // === UPPER TERRACE ===
    { id: 'u1', number: 'U1', seats: 8, position: { x: 20, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'u2', number: 'U2', seats: 8, position: { x: 35, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'u3', number: 'U3', seats: 8, position: { x: 50, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'u4', number: 'U4', seats: 8, position: { x: 65, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'u5', number: 'U5', seats: 8, position: { x: 80, y: 55 }, isAvailable: false, isSelected: false },

    // === PRIVATE DINING ===
    { id: 'p1', number: 'P1', seats: 10, position: { x: 25, y: 68 }, isAvailable: false, isSelected: false },
    { id: 'p2', number: 'P2', seats: 10, position: { x: 45, y: 68 }, isAvailable: true, isSelected: false },
    { id: 'p3', number: 'P3', seats: 10, position: { x: 65, y: 68 }, isAvailable: true, isSelected: false },

    // === SUNSET LOUNGE ===
    { id: 'sl1', number: 'SL1', seats: 4, position: { x: 15, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'sl2', number: 'SL2', seats: 4, position: { x: 30, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'sl3', number: 'SL3', seats: 4, position: { x: 45, y: 80 }, isAvailable: true, isSelected: false },
    { id: 'sl4', number: 'SL4', seats: 4, position: { x: 60, y: 80 }, isAvailable: false, isSelected: false },
    { id: 'sl5', number: 'SL5', seats: 4, position: { x: 75, y: 80 }, isAvailable: true, isSelected: false }
  ],

  // 🏊‍♂️ Zog Rooftop - REALISTIC ROOFTOP LAYOUT (เก็บไว้เหมือนเดิมเพราะดีแล้ว)
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

  // 🌳 Zog Garden - REALISTIC GARDEN LAYOUT
  '4': [
    // === GARDEN ENTRANCE ===
    { id: 'ent1', number: 'ENT1', seats: 2, position: { x: 45, y: 12 }, isAvailable: true, isSelected: false },
    { id: 'ent2', number: 'ENT2', seats: 2, position: { x: 55, y: 12 }, isAvailable: false, isSelected: false },

    // === LEFT GARDEN PATH ===
    { id: 'lg1', number: 'LG1', seats: 4, position: { x: 20, y: 20 }, isAvailable: true, isSelected: false },
    { id: 'lg2', number: 'LG2', seats: 4, position: { x: 18, y: 28 }, isAvailable: false, isSelected: false },
    { id: 'lg3', number: 'LG3', seats: 4, position: { x: 16, y: 36 }, isAvailable: true, isSelected: false },
    { id: 'lg4', number: 'LG4', seats: 4, position: { x: 14, y: 44 }, isAvailable: true, isSelected: false },
    { id: 'lg5', number: 'LG5', seats: 6, position: { x: 16, y: 52 }, isAvailable: false, isSelected: false },
    { id: 'lg6', number: 'LG6', seats: 6, position: { x: 18, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'lg7', number: 'LG7', seats: 6, position: { x: 20, y: 68 }, isAvailable: true, isSelected: false },

    // === RIGHT GARDEN PATH ===
    { id: 'rg1', number: 'RG1', seats: 4, position: { x: 80, y: 20 }, isAvailable: false, isSelected: false },
    { id: 'rg2', number: 'RG2', seats: 4, position: { x: 82, y: 28 }, isAvailable: true, isSelected: false },
    { id: 'rg3', number: 'RG3', seats: 4, position: { x: 84, y: 36 }, isAvailable: true, isSelected: false },
    { id: 'rg4', number: 'RG4', seats: 4, position: { x: 86, y: 44 }, isAvailable: false, isSelected: false },
    { id: 'rg5', number: 'RG5', seats: 6, position: { x: 84, y: 52 }, isAvailable: true, isSelected: false },
    { id: 'rg6', number: 'RG6', seats: 6, position: { x: 82, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'rg7', number: 'RG7', seats: 6, position: { x: 80, y: 68 }, isAvailable: false, isSelected: false },

    // === CENTER GARDEN (รอบน้ำพุ) ===
    { id: 'cg1', number: 'CG1', seats: 4, position: { x: 40, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'cg2', number: 'CG2', seats: 4, position: { x: 50, y: 23 }, isAvailable: false, isSelected: false },
    { id: 'cg3', number: 'CG3', seats: 4, position: { x: 60, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'cg4', number: 'CG4', seats: 6, position: { x: 35, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'cg5', number: 'CG5', seats: 6, position: { x: 65, y: 35 }, isAvailable: false, isSelected: false },
    { id: 'cg6', number: 'CG6', seats: 6, position: { x: 40, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'cg7', number: 'CG7', seats: 6, position: { x: 60, y: 45 }, isAvailable: true, isSelected: false },

    // === SECRET GARDEN ===
    { id: 'sg1', number: 'SG1', seats: 8, position: { x: 50, y: 58 }, isAvailable: false, isSelected: false },

    // === GARDEN PAVILION ===
    { id: 'gp1', number: 'GP1', seats: 8, position: { x: 30, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'gp2', number: 'GP2', seats: 8, position: { x: 50, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'gp3', number: 'GP3', seats: 8, position: { x: 70, y: 75 }, isAvailable: true, isSelected: false },

    // === TREE HOUSE TABLES ===
    { id: 'th1', number: 'TH1', seats: 4, position: { x: 12, y: 82 }, isAvailable: true, isSelected: false },
    { id: 'th2', number: 'TH2', seats: 4, position: { x: 25, y: 85 }, isAvailable: false, isSelected: false },
    { id: 'th3', number: 'TH3', seats: 4, position: { x: 75, y: 85 }, isAvailable: true, isSelected: false },
    { id: 'th4', number: 'TH4', seats: 4, position: { x: 88, y: 82 }, isAvailable: true, isSelected: false }
  ],

  // 🎵 Zog Underground - REALISTIC CLUB LAYOUT
  '5': [
    // === VIP BOOTHS - LEFT WALL ===
    { id: 'vl1', number: 'VL1', seats: 8, position: { x: 5, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'vl2', number: 'VL2', seats: 8, position: { x: 5, y: 25 }, isAvailable: true, isSelected: false },
    { id: 'vl3', number: 'VL3', seats: 8, position: { x: 5, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'vl4', number: 'VL4', seats: 8, position: { x: 5, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'vl5', number: 'VL5', seats: 8, position: { x: 5, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'vl6', number: 'VL6', seats: 8, position: { x: 5, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'vl7', number: 'VL7', seats: 8, position: { x: 5, y: 75 }, isAvailable: false, isSelected: false },
    { id: 'vl8', number: 'VL8', seats: 8, position: { x: 5, y: 85 }, isAvailable: true, isSelected: false },

    // === VIP BOOTHS - RIGHT WALL ===
    { id: 'vr1', number: 'VR1', seats: 8, position: { x: 95, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'vr2', number: 'VR2', seats: 8, position: { x: 95, y: 25 }, isAvailable: false, isSelected: false },
    { id: 'vr3', number: 'VR3', seats: 8, position: { x: 95, y: 35 }, isAvailable: true, isSelected: false },
    { id: 'vr4', number: 'VR4', seats: 8, position: { x: 95, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'vr5', number: 'VR5', seats: 8, position: { x: 95, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'vr6', number: 'VR6', seats: 8, position: { x: 95, y: 65 }, isAvailable: true, isSelected: false },
    { id: 'vr7', number: 'VR7', seats: 8, position: { x: 95, y: 75 }, isAvailable: true, isSelected: false },
    { id: 'vr8', number: 'VR8', seats: 8, position: { x: 95, y: 85 }, isAvailable: false, isSelected: false },

    // === ARENA LEVEL - รอบ DANCE FLOOR ===
    { id: 'ar1', number: 'AR1', seats: 4, position: { x: 20, y: 18 }, isAvailable: true, isSelected: false },
    { id: 'ar2', number: 'AR2', seats: 4, position: { x: 30, y: 16 }, isAvailable: false, isSelected: false },
    { id: 'ar3', number: 'AR3', seats: 4, position: { x: 40, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'ar4', number: 'AR4', seats: 4, position: { x: 50, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'ar5', number: 'AR5', seats: 4, position: { x: 60, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'ar6', number: 'AR6', seats: 4, position: { x: 70, y: 16 }, isAvailable: true, isSelected: false },
    { id: 'ar7', number: 'AR7', seats: 4, position: { x: 80, y: 18 }, isAvailable: true, isSelected: false },

    // === ARENA LEVEL - ด้านล่าง DANCE FLOOR ===
    { id: 'ab1', number: 'AB1', seats: 4, position: { x: 20, y: 82 }, isAvailable: false, isSelected: false },
    { id: 'ab2', number: 'AB2', seats: 4, position: { x: 30, y: 84 }, isAvailable: true, isSelected: false },
    { id: 'ab3', number: 'AB3', seats: 4, position: { x: 40, y: 85 }, isAvailable: true, isSelected: false },
    { id: 'ab4', number: 'AB4', seats: 4, position: { x: 50, y: 85 }, isAvailable: false, isSelected: false },
    { id: 'ab5', number: 'AB5', seats: 4, position: { x: 60, y: 85 }, isAvailable: true, isSelected: false },
    { id: 'ab6', number: 'AB6', seats: 4, position: { x: 70, y: 84 }, isAvailable: true, isSelected: false },
    { id: 'ab7', number: 'AB7', seats: 4, position: { x: 80, y: 82 }, isAvailable: false, isSelected: false },

    // === MEZZANINE LEVEL - ชั้นกลาง ===
    { id: 'mz1', number: 'MZ1', seats: 6, position: { x: 18, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'mz2', number: 'MZ2', seats: 6, position: { x: 25, y: 28 }, isAvailable: false, isSelected: false },
    { id: 'mz3', number: 'MZ3', seats: 6, position: { x: 32, y: 26 }, isAvailable: true, isSelected: false },
    { id: 'mz4', number: 'MZ4', seats: 6, position: { x: 68, y: 26 }, isAvailable: true, isSelected: false },
    { id: 'mz5', number: 'MZ5', seats: 6, position: { x: 75, y: 28 }, isAvailable: false, isSelected: false },
    { id: 'mz6', number: 'MZ6', seats: 6, position: { x: 82, y: 30 }, isAvailable: true, isSelected: false },

    // === MEZZANINE LEVEL - ด้านล่าง ===
    { id: 'mb1', number: 'MB1', seats: 6, position: { x: 18, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'mb2', number: 'MB2', seats: 6, position: { x: 25, y: 72 }, isAvailable: true, isSelected: false },
    { id: 'mb3', number: 'MB3', seats: 6, position: { x: 32, y: 74 }, isAvailable: true, isSelected: false },
    { id: 'mb4', number: 'MB4', seats: 6, position: { x: 68, y: 74 }, isAvailable: false, isSelected: false },
    { id: 'mb5', number: 'MB5', seats: 6, position: { x: 75, y: 72 }, isAvailable: true, isSelected: false },
    { id: 'mb6', number: 'MB6', seats: 6, position: { x: 82, y: 70 }, isAvailable: true, isSelected: false },

    // === ELEVATED PLATFORMS ===
    { id: 'ep1', number: 'EP1', seats: 4, position: { x: 15, y: 40 }, isAvailable: false, isSelected: false },
    { id: 'ep2', number: 'EP2', seats: 4, position: { x: 15, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'ep3', number: 'EP3', seats: 4, position: { x: 85, y: 40 }, isAvailable: true, isSelected: false },
    { id: 'ep4', number: 'EP4', seats: 4, position: { x: 85, y: 60 }, isAvailable: false, isSelected: false }
  ],

  // 🥃 Zog Classic - REALISTIC GENTLEMAN'S CLUB
  '6': [
    // === BAR COUNTER - เคาน์เตอร์บาร์หลัก ===
    { id: 'bc1', number: 'BC1', seats: 2, position: { x: 15, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc2', number: 'BC2', seats: 2, position: { x: 22, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'bc3', number: 'BC3', seats: 2, position: { x: 29, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc4', number: 'BC4', seats: 2, position: { x: 36, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc5', number: 'BC5', seats: 2, position: { x: 43, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'bc6', number: 'BC6', seats: 2, position: { x: 50, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc7', number: 'BC7', seats: 2, position: { x: 57, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc8', number: 'BC8', seats: 2, position: { x: 64, y: 15 }, isAvailable: false, isSelected: false },
    { id: 'bc9', number: 'BC9', seats: 2, position: { x: 71, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc10', number: 'BC10', seats: 2, position: { x: 78, y: 15 }, isAvailable: true, isSelected: false },
    { id: 'bc11', number: 'BC11', seats: 2, position: { x: 85, y: 15 }, isAvailable: false, isSelected: false },

    // === WHISKEY LOUNGE - ด้านซ้าย ===
    { id: 'wl1', number: 'WL1', seats: 4, position: { x: 12, y: 28 }, isAvailable: false, isSelected: false },
    { id: 'wl2', number: 'WL2', seats: 4, position: { x: 12, y: 36 }, isAvailable: true, isSelected: false },
    { id: 'wl3', number: 'WL3', seats: 4, position: { x: 12, y: 44 }, isAvailable: true, isSelected: false },
    { id: 'wl4', number: 'WL4', seats: 6, position: { x: 12, y: 52 }, isAvailable: false, isSelected: false },
    { id: 'wl5', number: 'WL5', seats: 6, position: { x: 12, y: 60 }, isAvailable: true, isSelected: false },
    { id: 'wl6', number: 'WL6', seats: 6, position: { x: 12, y: 68 }, isAvailable: true, isSelected: false },

    // === CIGAR ROOM - ด้านขวา ===
    { id: 'cr1', number: 'CR1', seats: 4, position: { x: 88, y: 28 }, isAvailable: true, isSelected: false },
    { id: 'cr2', number: 'CR2', seats: 4, position: { x: 88, y: 36 }, isAvailable: false, isSelected: false },
    { id: 'cr3', number: 'CR3', seats: 4, position: { x: 88, y: 44 }, isAvailable: true, isSelected: false },
    { id: 'cr4', number: 'CR4', seats: 6, position: { x: 88, y: 52 }, isAvailable: true, isSelected: false },
    { id: 'cr5', number: 'CR5', seats: 6, position: { x: 88, y: 60 }, isAvailable: false, isSelected: false },
    { id: 'cr6', number: 'CR6', seats: 6, position: { x: 88, y: 68 }, isAvailable: true, isSelected: false },

    // === LIBRARY SECTION - กลาง ===
    { id: 'lib1', number: 'LIB1', seats: 4, position: { x: 30, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'lib2', number: 'LIB2', seats: 4, position: { x: 40, y: 30 }, isAvailable: false, isSelected: false },
    { id: 'lib3', number: 'LIB3', seats: 4, position: { x: 50, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'lib4', number: 'LIB4', seats: 4, position: { x: 60, y: 30 }, isAvailable: true, isSelected: false },
    { id: 'lib5', number: 'LIB5', seats: 4, position: { x: 70, y: 30 }, isAvailable: false, isSelected: false },

    // === FIREPLACE LOUNGE - มุมเตาผิง ===
    { id: 'fl1', number: 'FL1', seats: 6, position: { x: 35, y: 45 }, isAvailable: false, isSelected: false },
    { id: 'fl2', number: 'FL2', seats: 6, position: { x: 50, y: 45 }, isAvailable: true, isSelected: false },
    { id: 'fl3', number: 'FL3', seats: 6, position: { x: 65, y: 45 }, isAvailable: true, isSelected: false },

    // === READING NOOKS ===
    { id: 'rn1', number: 'RN1', seats: 2, position: { x: 25, y: 55 }, isAvailable: false, isSelected: false },
    { id: 'rn2', number: 'RN2', seats: 2, position: { x: 35, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'rn3', number: 'RN3', seats: 2, position: { x: 65, y: 55 }, isAvailable: true, isSelected: false },
    { id: 'rn4', number: 'RN4', seats: 2, position: { x: 75, y: 55 }, isAvailable: false, isSelected: false },

    // === BILLIARD AREA - โซนบิลเลียด ===
    { id: 'bil1', number: 'BIL1', seats: 4, position: { x: 25, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'bil2', number: 'BIL2', seats: 4, position: { x: 35, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'bil3', number: 'BIL3', seats: 4, position: { x: 45, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'bil4', number: 'BIL4', seats: 4, position: { x: 55, y: 70 }, isAvailable: true, isSelected: false },
    { id: 'bil5', number: 'BIL5', seats: 4, position: { x: 65, y: 70 }, isAvailable: false, isSelected: false },
    { id: 'bil6', number: 'BIL6', seats: 4, position: { x: 75, y: 70 }, isAvailable: true, isSelected: false },

    // === PRIVATE DINING - ห้องส่วนตัว ===
    { id: 'pd1', number: 'PD1', seats: 8, position: { x: 30, y: 85 }, isAvailable: true, isSelected: false },
    { id: 'pd2', number: 'PD2', seats: 8, position: { x: 50, y: 85 }, isAvailable: false, isSelected: false },
    { id: 'pd3', number: 'PD3', seats: 8, position: { x: 70, y: 85 }, isAvailable: true, isSelected: false }
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