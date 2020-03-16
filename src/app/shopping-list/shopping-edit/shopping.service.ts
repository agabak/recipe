import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

    Ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];


    add(event: Ingredient) {
      if (event.name !== '' || event.amount.toString() !== '') {
        this.Ingredients.push(event);
      }
    }

    delete(event: Ingredient) {
      if (event.name !== '' || event.amount.toString() !== '') {
      this.Ingredients.splice(0, 1);
      }
    }
}
