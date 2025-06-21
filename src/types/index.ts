export interface Band {
  id: string;
  name: string;
  genre: string;
  image: string;
  startTime: string;
  endTime: string;
  description: string;
}

export interface Table {
  id: string;
  number: number;
  seats: number;
  position: { x: number; y: number };
  isAvailable: boolean;
  isSelected: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  terms: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  period: string;
  bands: Band[];
}

export interface Reservation {
  tableId: string;
  date: string;
  timeSlot: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
}