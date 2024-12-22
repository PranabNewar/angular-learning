export interface Room {
  totalRooms: number;
  numberOfRoomsBooked: number;
  avialableRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  price: string;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
