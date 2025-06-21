import { Band, Table, Promotion, TimeSlot } from '../types';

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

export const tables: Table[] = [
  { id: '1', number: 1, seats: 2, position: { x: 30, y: 25 }, isAvailable: true, isSelected: false },
  { id: '2', number: 2, seats: 4, position: { x: 70, y: 25 }, isAvailable: true, isSelected: false },
  { id: '3', number: 3, seats: 2, position: { x: 30, y: 55 }, isAvailable: false, isSelected: false },
  { id: '4', number: 4, seats: 6, position: { x: 70, y: 55 }, isAvailable: true, isSelected: false },
  { id: '5', number: 5, seats: 4, position: { x: 30, y: 85 }, isAvailable: true, isSelected: false },
  { id: '6', number: 6, seats: 2, position: { x: 70, y: 85 }, isAvailable: true, isSelected: false },
  { id: '7', number: 7, seats: 8, position: { x: 50, y: 40 }, isAvailable: true, isSelected: false },
  { id: '8', number: 8, seats: 4, position: { x: 50, y: 70 }, isAvailable: false, isSelected: false }
];

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