import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import Hero from '../../interfaces/Heroes';

@Component({
  selector: 'app-recent-matches',
  templateUrl: './recent-matches.component.html',
  styleUrls: ['./recent-matches.component.scss']
})
export class RecentMatchesComponent implements OnInit {
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
    this.updatedArray = updatedArray;
  }
}
