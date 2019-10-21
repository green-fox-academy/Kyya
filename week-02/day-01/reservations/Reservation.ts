import { Reservationy } from './Reservationy';

const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// code 0-9 A-Z
const CODE = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z',
];

export default class Reservation implements Reservationy {
  getDowBooking(): string {
    return DOW[Math.floor(Math.random() * 7)];
  }

  getCodeBooking(): string {
    return [...Array(8)].map(() => CODE[Math.floor(Math.random() * 36)]).join('');
  }

  toString(): string {
    return `Booking #${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}
