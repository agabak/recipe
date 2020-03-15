import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10)
];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event: Ingredient) {
    if (event.name !== '' || event.amount.toString() !== '') {
      this.ingredients.push(event);
    }
  }

  onDelete(event: Ingredient) {
    if (event.name !== '' || event.amount.toString() !== '') {
    this.ingredients.splice(0, 1);
    }
  }
}
