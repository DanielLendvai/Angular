import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus(): string {
    return this.serverStatus;
    // if(this.serverId > 5){
    //   return this.serverStatus
    // }
    // else if (this.serverId <= 5 && this.serverId >= 0) {
    //   return 'online';
    // }
    // else {
    //   return 'unknown';
    // }
  }
}
