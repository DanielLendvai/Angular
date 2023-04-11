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
  id: number = 0;
  heroes: any;
  updatedArray: any;
  recentMatches: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllHeroes().subscribe((data) => {
      this.heroes = data;
      // console.log(this.heroes);
    });
    this.dataService.getRecentMatches().subscribe((data) => {
      this.recentMatches = data;
      // console.log(this.recentMatches);
    });

    const updatedArray = this.recentMatches.map((item: { id: any; }) => {
      const nameObj = this.heroes.find((obj: { id: any; }) => obj.id === item.id);
      return { ...item, name: nameObj ? nameObj.name : '' };
    });
    
    // Assign the updated array to a component property to use it in the template
    this.updatedArray = updatedArray;
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
