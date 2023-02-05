import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

export class RoomsComponent {
  hotelName = 'Lorem Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };

  roomList: RoomList[] = [
    {
      number: 1,
      rating: 4.1,
      humidity: 0.2,
      type: 'Double',
      amenities: 'Minibar, room-service, television',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      checkinTime: new Date('02-Nov-2015'),
      checkoutTime: new Date('05-Nov-2015'),
    },
    {
      number: 2,
      rating: 3.4,
      humidity: 0.25,
      type: 'Deluxe',
      amenities: 'Minibar, room-service, television, lorem, ipsum',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      checkinTime: new Date('20-Dec-2015'),
      checkoutTime: new Date('25-Dec-2015'),
    },
    {
      number: 3,
      rating: 4.2,
      humidity: 0.22,
      type: 'Deluxe King',
      amenities: 'Minibar, room-service, television, lorem, ipsum, tesusmeor',
      price: 2000,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      checkinTime: new Date('20-Dec-2015'),
      checkoutTime: new Date('25-Dec-2015'),
    },
  ];

  getClass(name: string) {
    switch (name) {
      case 'Deluxe':
        return 'deluxe';
      case 'Double':
        return 'double';
      case 'Deluxe King':
        return 'deluxe-king';
      default:
        return 'white-background';
    }
  }
  

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
