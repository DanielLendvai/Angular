import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    if(this.serverId > 5){
      return this.serverStatus
    }
    else if (this.serverId <= 5 && this.serverId >= 0) {
      return 'online';
    }
    else {
      return 'unknown';
    }
  }
}
