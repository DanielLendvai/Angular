import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'Lorem Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>
  
  // roomService = new RoomsService();
  //should never inject a component  
  constructor(@SkipSelf() private roomsService: RoomsService) {}
  
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngAfterViewInit(): void {
    // this.headerComponent.title = 'Rooms View';
    // this.headerChildrenComponent.last.title = "Last title"
  }
  ngAfterViewChecked(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      number: 4,
      rating: 4.2,
      humidity: 0.22,
      type: 'Deluxe King',
      amenities: 'Minibar, room-service, television, lorem, ipsum, tesusmeor',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
      checkinTime: new Date('20-Dec-2015'),
      checkoutTime: new Date('25-Dec-2015'),
    };

    // this.roomList.push(room) - not immutable
    this.roomList = [...this.roomList, room];
  }
}
