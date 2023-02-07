import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  getClass(name: string) {
    switch (name) {
      case 'Deluxe Room':
        return 'deluxe';
      case 'Private Suite':
        return 'double';
      case 'Deluxe King':
        return 'deluxe-king';
      default:
        return 'white-background';
    }
  }

  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
