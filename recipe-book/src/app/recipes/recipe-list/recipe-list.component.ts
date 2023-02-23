import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Breast', 'Best served warm', 'https://easychickenrecipes.com/wp-content/uploads/2020/05/featured-baked-chicken-breast-reshoot.jpg'),
    new Recipe('Chicken Breast', 'Best served warm', 'https://easychickenrecipes.com/wp-content/uploads/2020/05/featured-baked-chicken-breast-reshoot.jpg'),
  ];

  constructor() {}
  ngOnInit() {}
}
