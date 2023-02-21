import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleText = false;
  log = [];

  onToggle() {
    this.toggleText = !this.toggleText;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date().toLocaleTimeString());
  }
}
