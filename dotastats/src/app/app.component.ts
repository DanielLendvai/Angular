import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service.service';
import Hero from './interfaces/Heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dotastats';
  
  ngOnInit(): void {
      
  }

  getStyles(data: any) {
    return {
      'background-color':
        data.kills > 8 ? 'green' : data.deaths > 10 ? 'red' : 'transparent',
      color: data.kills > 8 ? 'white' : data.deaths > 10 ? 'white' : 'black',
      'font-size': data.kills > 8 ? '20px' : data.deaths > 10 ? '20px' : '15px',
      padding: '10px',
      'border-radius': '5px',
      'text-align': 'center',
    };
  }
}
