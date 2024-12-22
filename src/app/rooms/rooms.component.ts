import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent {
  hotelName = 'NayaHotel';

  numberOfRooms = 10;
  isHideRoom = false;
  rooms: Room = {
    totalRooms: 20,
    numberOfRoomsBooked: 10,
    avialableRooms: 0,
  };
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux',
      price: '2000',
      photos: 'https://www.google.com/imgres?',
      checkinTime: new Date('12-dec-2024'),
      checkoutTime: new Date('18-dec-2024'),
    },
    {
      roomNumber: 2,
      roomType: 'Delux',
      price: '2000',
      photos: 'https://www.google.com/imgres?',
      checkinTime: new Date('15-dec-2024'),
      checkoutTime: new Date('18-dec-2024'),
    },
    {
      roomNumber: 3,
      roomType: 'Super Delux',
      price: '3500',
      photos: 'https://www.google.com/imgres?',
      checkinTime: new Date('15-dec-2024'),
      checkoutTime: new Date('16-dec-2024'),
    },
    {
      roomNumber: 4,
      roomType: 'Semi Delux',
      price: '1000',
      photos: 'https://www.google.com/imgres?',
      checkinTime: new Date('11-dec-2024'),
      checkoutTime: new Date('12-dec-2024'),
    },
  ];

  toggle() {
    this.isHideRoom = !this.isHideRoom;
  }
}
