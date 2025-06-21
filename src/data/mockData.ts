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

// Table layouts for each restaurant
export const restaurantTables: { [key: string]: Table[] } = {
  // Zog Downtown - Modern layout with stage focus
  '1': [
    { id: '1', number: 1, seats: 2, position: { x: 25, y: 30 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 75, y: 30 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 4, position: { x: 20, y: 50 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 4, position: { x: 50, y: 45 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 4, position: { x: 80, y: 50 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 6, position: { x: 35, y: 65 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 6, position: { x: 65, y: 65 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 2, position: { x: 15, y: 75 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 2, position: { x: 85, y: 75 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 8, position: { x: 50, y: 80 }, isAvailable: true, isSelected: false }
  ],

  // Zog Riverside - Waterfront layout
  '2': [
    { id: '1', number: 1, seats: 2, position: { x: 15, y: 25 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 35, y: 25 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 55, y: 25 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 2, position: { x: 75, y: 25 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 4, position: { x: 25, y: 45 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 4, position: { x: 65, y: 45 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 6, position: { x: 45, y: 60 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 20, y: 75 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 70, y: 75 }, isAvailable: true, isSelected: false }
  ],

  // Zog Rooftop - Circular layout around pool
  '3': [
    { id: '1', number: 1, seats: 2, position: { x: 30, y: 20 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 70, y: 20 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 4, position: { x: 15, y: 35 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 4, position: { x: 85, y: 35 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 2, position: { x: 20, y: 55 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 80, y: 55 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 6, position: { x: 15, y: 75 }, isAvailable: true, isSelected: false },
    { id: '8', number: 8, seats: 6, position: { x: 85, y: 75 }, isAvailable: false, isSelected: false },
    { id: '9', number: 9, seats: 4, position: { x: 30, y: 85 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 4, position: { x: 70, y: 85 }, isAvailable: true, isSelected: false },
    { id: '11', number: 11, seats: 8, position: { x: 50, y: 90 }, isAvailable: true, isSelected: false }
  ],

  // Zog Garden - Scattered among trees
  '4': [
    { id: '1', number: 1, seats: 2, position: { x: 20, y: 25 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 4, position: { x: 45, y: 20 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 2, position: { x: 75, y: 30 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 6, position: { x: 25, y: 45 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 4, position: { x: 60, y: 40 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 85, y: 55 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 4, position: { x: 15, y: 65 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 6, position: { x: 50, y: 70 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 2, position: { x: 80, y: 80 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 8, position: { x: 35, y: 85 }, isAvailable: true, isSelected: false }
  ],

  // Zog Underground - Club layout with dance floor
  '5': [
    { id: '1', number: 1, seats: 4, position: { x: 15, y: 20 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 4, position: { x: 85, y: 20 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 6, position: { x: 10, y: 35 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 6, position: { x: 90, y: 35 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 8, position: { x: 15, y: 55 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 8, position: { x: 85, y: 55 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 4, position: { x: 10, y: 75 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 90, y: 75 }, isAvailable: true, isSelected: false },
    { id: '9', number: 9, seats: 6, position: { x: 25, y: 85 }, isAvailable: true, isSelected: false },
    { id: '10', number: 10, seats: 6, position: { x: 75, y: 85 }, isAvailable: true, isSelected: false }
  ],

  // Zog Classic - Traditional bar layout
  '6': [
    { id: '1', number: 1, seats: 2, position: { x: 25, y: 35 }, isAvailable: true, isSelected: false },
    { id: '2', number: 2, seats: 2, position: { x: 75, y: 35 }, isAvailable: true, isSelected: false },
    { id: '3', number: 3, seats: 4, position: { x: 35, y: 50 }, isAvailable: false, isSelected: false },
    { id: '4', number: 4, seats: 4, position: { x: 65, y: 50 }, isAvailable: true, isSelected: false },
    { id: '5', number: 5, seats: 6, position: { x: 50, y: 65 }, isAvailable: true, isSelected: false },
    { id: '6', number: 6, seats: 2, position: { x: 20, y: 75 }, isAvailable: true, isSelected: false },
    { id: '7', number: 7, seats: 2, position: { x: 80, y: 75 }, isAvailable: false, isSelected: false },
    { id: '8', number: 8, seats: 4, position: { x: 50, y: 85 }, isAvailable: true, isSelected: false }
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