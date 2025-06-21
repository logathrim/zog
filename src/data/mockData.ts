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

// Table layouts - แต่ละร้านมี concept ชัดเจน
export const restaurantTables: { [key: string]: Table[] } = {
  // 🎭 Zog Downtown - CONCEPT: Theater Style (โรงละครสไตล์)
  // จัดเป็นแถวโค้งหันหน้าเข้าหาเวที เหมือนโรงละคร
  '1': [
    // แถวหน้าสุด - โค้งเล็ก (Premium Front Row)
    { id: '1', number: 1, seats: 2, position: { x: 35, y: 20 }, isAvailable: false, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 45, y: 18 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 55, y: 18 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 65, y: 20 }, isAvailable: false, isSelected: false },

    // แถวที่ 2 - โค้งกว้างขึ้น
    { id: '5', number: 5, seats: 4, position: { x: 25, y: 32 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 4, position: { x: 38, y: 30 }, isAvailable: false, isSelected: false },
    { id: '7', number: 7, seats: 4, position: { x: 50, y: 29 }, isAvailable: true, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 62, y: 30 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 75, y: 32 }, isAvailable: false, isSelected: false },

    // แถวที่ 3 - โค้งกว้างสุด
    { id: '10', number: 10, seats: 4, position: { x: 18, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 4, position: { x: 32, y: 42 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 50, y: 41 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 68, y: 42 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 82, y: 45 }, isAvailable: false, isSelected: false },

    // แถวที่ 4 - โต๊ะใหญ่
    { id: '15', number: 15, seats: 6, position: { x: 20, y: 58 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 6, position: { x: 40, y: 55 }, isAvailable: false, isSelected: false },
    { id: '17', number: 17, seats: 6, position: { x: 60, y: 55 }, isAvailable: true, isSelected: false },
    { id: '18', number: 18, seats: 6, position: { x: 80, y: 58 }, isAvailable: true, isSelected: false },

    // แถวหลังสุด - VIP Tables
    { id: '19', number: 19, seats: 8, position: { x: 25, y: 72 }, isAvailable: false, isSelected: false },
    { id: '20', number: 20, seats: 8, position: { x: 50, y: 70 }, isAvailable: true, isSelected: false },
    { id: '21', number: 21, seats: 8, position: { x: 75, y: 72 }, isAvailable: true, isSelected: false },

    // Balcony Level - แถวสูง
    { id: '22', number: 22, seats: 4, position: { x: 30, y: 85 }, isAvailable: false, isSelected: false },
    { id: '23', number: 23, seats: 4, position: { x: 50, y: 83 }, isAvailable: true, isSelected: false },
    { id: '24', number: 24, seats: 4, position: { x: 70, y: 85 }, isAvailable: true, isSelected: false }
  ],

  // 🌊 Zog Riverside - CONCEPT: Waterfront Terrace (ระเบียงริมน้ำ)
  // จัดเป็นชั้นๆ ตามความสูงของระเบียง วิวดีที่สุดด้านหน้า
  '2': [
    // Waterfront Deck - ชั้นล่างสุด ติดแม่น้ำ
    { id: '1', number: 1, seats: 2, position: { x: 15, y: 15 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 30, y: 15 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 45, y: 15 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 60, y: 15 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 75, y: 15 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 85, y: 15 }, isAvailable: true, isSelected: false },

    // Lower Terrace - ชั้นที่ 2
    { id: '7', number: 7, seats: 4, position: { x: 20, y: 28 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 40, y: 28 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 60, y: 28 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 80, y: 28 }, isAvailable: false, isSelected: false },

    // Mid Terrace - ชั้นที่ 3
    { id: '11', number: 11, seats: 4, position: { x: 15, y: 42 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 35, y: 42 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 55, y: 42 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 75, y: 42 }, isAvailable: true, isSelected: false },
    { id: '15', number: 15, seats: 6, position: { x: 90, y: 42 }, isAvailable: false, isSelected: false },

    // Upper Terrace - ชั้นที่ 4
    { id: '16', number: 16, seats: 6, position: { x: 25, y: 58 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 6, position: { x: 50, y: 58 }, isAvailable: false, isSelected: false },
    { id: '18', number: 18, seats: 6, position: { x: 75, y: 58 }, isAvailable: true, isSelected: false },

    // Private Dining - ชั้นบนสุด
    { id: '19', number: 19, seats: 8, position: { x: 30, y: 75 }, isAvailable: false, isSelected: false },
    { id: '20', number: 20, seats: 8, position: { x: 60, y: 75 }, isAvailable: true, isSelected: false },
    { id: '21', number: 21, seats: 10, position: { x: 85, y: 75 }, isAvailable: true, isSelected: false },

    // Sunset Lounge - มุมพิเศษ
    { id: '22', number: 22, seats: 4, position: { x: 10, y: 85 }, isAvailable: false, isSelected: false },
    { id: '23', number: 23, seats: 6, position: { x: 45, y: 88 }, isAvailable: true, isSelected: false }
  ],

  // 🏊‍♂️ Zog Rooftop - CONCEPT: Pool Deck (รอบสระว่ายน้ำ) - เก็บไว้เหมือนเดิมเพราะดีแล้ว
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

  // 🌳 Zog Garden - CONCEPT: Garden Paths (ทางเดินในสวน)
  // จัดตามทางเดินโค้งในสวน มีต้นไม้เป็นจุดแบ่ง
  '4': [
    // Garden Entrance - ทางเข้าสวน
    { id: '1', number: 1, seats: 2, position: { x: 45, y: 15 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 55, y: 15 }, isAvailable: false, isSelected: false },

    // Left Garden Path - ทางเดินซ้าย (โค้งไปซ้าย)
    { id: '3', number: 3, seats: 4, position: { x: 25, y: 25 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 4, position: { x: 20, y: 35 }, isAvailable: false, isSelected: false },
    { id: '5', number: 5, seats: 4, position: { x: 18, y: 45 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 6, position: { x: 20, y: 58 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 6, position: { x: 25, y: 70 }, isAvailable: false, isSelected: false },

    // Right Garden Path - ทางเดินขวา (โค้งไปขวา)
    { id: '8', number: 8, seats: 4, position: { x: 75, y: 25 }, isAvailable: false, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 80, y: 35 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 82, y: 45 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 6, position: { x: 80, y: 58 }, isAvailable: false, isSelected: false },
    { id: '12', number: 12, seats: 6, position: { x: 75, y: 70 }, isAvailable: true, isSelected: false },

    // Center Garden - กลางสวน (รอบน้ำพุ)
    { id: '13', number: 13, seats: 4, position: { x: 45, y: 30 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 55, y: 30 }, isAvailable: false, isSelected: false },
    { id: '15', number: 15, seats: 6, position: { x: 40, y: 45 }, isAvailable: true, isSelected: false },
    { id: '16', number: 16, seats: 6, position: { x: 60, y: 45 }, isAvailable: true, isSelected: false },

    // Secret Garden - มุมลับในสวน
    { id: '17', number: 17, seats: 8, position: { x: 50, y: 62 }, isAvailable: false, isSelected: false },

    // Garden Pavilion - ศาลาในสวน
    { id: '18', number: 18, seats: 8, position: { x: 35, y: 80 }, isAvailable: true, isSelected: false },
    { id: '19', number: 19, seats: 8, position: { x: 65, y: 80 }, isAvailable: false, isSelected: false },

    // Tree House Tables - โต๊ะใต้ต้นไม้ใหญ่
    { id: '20', number: 20, seats: 4, position: { x: 15, y: 85 }, isAvailable: true, isSelected: false },
    { id: '21', number: 21, seats: 4, position: { x: 85, y: 85 }, isAvailable: true, isSelected: false }
  ],

  // 🎵 Zog Underground - CONCEPT: Club Arena (สนามไนท์คลับ)
  // จัดรอบ Dance Floor แบบ Arena มี VIP Booth ด้านข้าง
  '5': [
    // VIP Booths - Left Side (ด้านซ้าย - VIP Booths สูง)
    { id: '1', number: 1, seats: 8, position: { x: 8, y: 20 }, isAvailable: false, isSelected: false },
    { id: '2', number: 2, seats: 8, position: { x: 8, y: 35 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 8, position: { x: 8, y: 50 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 8, position: { x: 8, y: 65 }, isAvailable: false, isSelected: false },
    { id: '5', number: 5, seats: 8, position: { x: 8, y: 80 }, isAvailable: true, isSelected: false },

    // VIP Booths - Right Side (ด้านขวา - VIP Booths สูง)
    { id: '6', number: 6, seats: 8, position: { x: 92, y: 20 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 8, position: { x: 92, y: 35 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 8, position: { x: 92, y: 50 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 8, position: { x: 92, y: 65 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 8, position: { x: 92, y: 80 }, isAvailable: false, isSelected: false },

    // Arena Level - รอบ Dance Floor (ระดับล่าง)
    { id: '11', number: 11, seats: 4, position: { x: 25, y: 22 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 40, y: 20 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 4, position: { x: 60, y: 20 }, isAvailable: true, isSelected: false },
    { id: '14', number: 14, seats: 4, position: { x: 75, y: 22 }, isAvailable: true, isSelected: false },

    // Arena Level - ด้านล่าง Dance Floor
    { id: '15', number: 15, seats: 4, position: { x: 25, y: 78 }, isAvailable: false, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 40, y: 80 }, isAvailable: true, isSelected: false },
    { id: '17', number: 17, seats: 4, position: { x: 60, y: 80 }, isAvailable: true, isSelected: false },
    { id: '18', number: 18, seats: 4, position: { x: 75, y: 78 }, isAvailable: false, isSelected: false },

    // Mezzanine Level - ชั้นกลาง (elevated)
    { id: '19', number: 19, seats: 6, position: { x: 20, y: 40 }, isAvailable: true, isSelected: false },
    { id: '20', number: 20, seats: 6, position: { x: 30, y: 35 }, isAvailable: false, isSelected: false },
    { id: '21', number: 21, seats: 6, position: { x: 70, y: 35 }, isAvailable: true, isSelected: false },
    { id: '22', number: 22, seats: 6, position: { x: 80, y: 40 }, isAvailable: true, isSelected: false },

    // Mezzanine Level - ด้านล่าง
    { id: '23', number: 23, seats: 6, position: { x: 20, y: 60 }, isAvailable: false, isSelected: false },
    { id: '24', number: 24, seats: 6, position: { x: 30, y: 65 }, isAvailable: true, isSelected: false },
    { id: '25', number: 25, seats: 6, position: { x: 70, y: 65 }, isAvailable: false, isSelected: false },
    { id: '26', number: 26, seats: 6, position: { x: 80, y: 60 }, isAvailable: true, isSelected: false }
  ],

  // 🥃 Zog Classic - CONCEPT: Gentleman's Club (สโมสรสุภาพบุรุษ)
  // จัดแบบห้องสมุด มีโซนต่างๆ แยกชัดเจน
  '6': [
    // Bar Counter - เคาน์เตอร์บาร์หลัก
    { id: '1', number: 1, seats: 2, position: { x: 20, y: 18 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 30, y: 18 }, isAvailable: false, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 40, y: 18 }, isAvailable: true, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 50, y: 18 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 60, y: 18 }, isAvailable: false, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 70, y: 18 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 80, y: 18 }, isAvailable: true, isSelected: false },

    // Whiskey Lounge - มุมวิสกี้ (ด้านซ้าย)
    { id: '8', number: 8, seats: 4, position: { x: 15, y: 35 }, isAvailable: false, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 15, y: 50 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 6, position: { x: 15, y: 65 }, isAvailable: true, isSelected: false },

    // Cigar Room - ห้องซิการ์ (ด้านขวา)
    { id: '11', number: 11, seats: 4, position: { x: 85, y: 35 }, isAvailable: true, isSelected: false },
    { id: '12', number: 12, seats: 4, position: { x: 85, y: 50 }, isAvailable: false, isSelected: false },
    { id: '13', number: 13, seats: 6, position: { x: 85, y: 65 }, isAvailable: true, isSelected: false },

    // Library Section - มุมหนังสือ (กลาง)
    { id: '14', number: 14, seats: 4, position: { x: 35, y: 35 }, isAvailable: true, isSelected: false },
    { id: '15', number: 15, seats: 4, position: { x: 50, y: 35 }, isAvailable: false, isSelected: false },
    { id: '16', number: 16, seats: 4, position: { x: 65, y: 35 }, isAvailable: true, isSelected: false },

    // Fireplace Lounge - มุมเตาผิง
    { id: '17', number: 17, seats: 6, position: { x: 35, y: 52 }, isAvailable: false, isSelected: false },
    { id: '18', number: 18, seats: 6, position: { x: 65, y: 52 }, isAvailable: true, isSelected: false },

    // Billiard Area - โซนบิลเลียด
    { id: '19', number: 19, seats: 4, position: { x: 25, y: 75 }, isAvailable: true, isSelected: false },
    { id: '20', number: 20, seats: 4, position: { x: 45, y: 75 }, isAvailable: false, isSelected: false },
    { id: '21', number: 21, seats: 4, position: { x: 65, y: 75 }, isAvailable: true, isSelected: false },

    // Private Dining - ห้องส่วนตัว
    { id: '22', number: 22, seats: 8, position: { x: 50, y: 88 }, isAvailable: true, isSelected: false }
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