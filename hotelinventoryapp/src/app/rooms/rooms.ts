export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}
export interface RoomList {
  number: number;
  type: string;
  humidity: number;
  rating: number;   
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
