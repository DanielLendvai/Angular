import { Component } from '@angular/core';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    if(this.email==="admin@admin.admin" && this.password==="admin") {
      alert("Login successful");
    }
  }
}
