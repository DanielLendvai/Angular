import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: any;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getAllHeroes().subscribe((data) => {
      this.heroes = data;
      // console.log(this.heroes);
    });
  }
}
