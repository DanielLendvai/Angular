import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template:  `<h1>inline template</h1>
  //            <p>lorem ipsum</p>`
  styleUrls: ['./app.component.scss'],
  //styles: [`h1{color:green}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  
  // ngAfterViewInit() {
  //    const componentRef = this.vcr.createComponent(RoomsComponent);
  //    componentRef.instance.numberOfRooms = 20;
  // }
  ngOnInit() {

  }
}
