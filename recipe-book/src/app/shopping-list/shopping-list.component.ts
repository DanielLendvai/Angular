import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 10),
    new Ingredient('Vanilla', 10),
    new Ingredient('Strawberry', 10),
    new Ingredient('Berry', 10),
  ];
  constructor() {}
  ngOnInit() {}
}
