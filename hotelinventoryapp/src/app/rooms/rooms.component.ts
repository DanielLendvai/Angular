import { HttpEventType } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
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

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    observer.error('error');
  });

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();
  //should never inject a component

  totalBytes = 0;

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('req has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('req success');
          break;
        }
        case HttpEventType.DownloadProgress : {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body)
          break;
        }
      }
    });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));
    this.roomsService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  ngAfterViewInit(): void {
    // this.headerComponent.title = 'Rooms View';
    // this.headerChildrenComponent.last.title = "Last title"
  }
  ngAfterViewChecked(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // number: '4',
      rating: 4.2,
      humidity: 0.22,
      roomType: 'Deluxe Room',
      amenities: 'Minibar, room-service, television, lorem, ipsum, tesusmeor',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
      checkinTime: new Date('20-Dec-2015'),
      checkoutTime: new Date('25-Dec-2015'),
    };
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
    console.log(this.roomList);
    // this.roomList.push(room) - not immutable
    // this.roomList = [...this.roomList, room];
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      rating: 4.2,
      humidity: 0.22,
      roomType: 'Deluxe Room',
      amenities: 'Minibar, room-service, television, lorem, ipsum, tesusmeor',
      price: 2000,
      photos:
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
      checkinTime: new Date('20-Dec-2015'),
      checkoutTime: new Date('25-Dec-2015'),
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  deleteRoom() {
    this.roomsService
      .delete('12b9e4df-1e00-4d96-b5d9-889999ebbeed')
      .subscribe((data) => {
        this.roomList = data;
        console.log(this.roomList);
      });
  }
}
