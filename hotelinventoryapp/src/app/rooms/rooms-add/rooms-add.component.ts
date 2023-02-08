import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    rating: 0,
    humidity: 0,
    photos: '',
    price: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };

  successMessage: string = '';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  AddRoom() {
    this.roomsService
      .addRoom(this.room)
      .subscribe((data) => (this.successMessage = 'Added successfully'));
  }
}
