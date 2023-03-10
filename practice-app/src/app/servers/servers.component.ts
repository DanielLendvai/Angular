import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer = false;
  emptyUsername = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['testserver1', 'testserver2'];

    
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }
  // resetUsername() {
  //   this.userName = '';
  // }
}
