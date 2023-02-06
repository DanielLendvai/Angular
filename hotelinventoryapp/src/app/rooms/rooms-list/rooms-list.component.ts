import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
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

  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {}
  
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
