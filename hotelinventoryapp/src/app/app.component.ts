import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { InitService } from './init.service';

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

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService
  ) {
    // console.log(initService.config);
  }

  // ngAfterViewInit() {
  //    const componentRef = this.vcr.createComponent(RoomsComponent);
  //    componentRef.instance.numberOfRooms = 20;
  // }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.localStorage.setItem('name', 'Lorem Hotel');
  }
}
