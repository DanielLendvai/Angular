import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '22222';
  
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }
  onCreateServer() { 
    this.serverCreationStatus = 'server was created'; 
  }
  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = event.target.value;
  }
}
