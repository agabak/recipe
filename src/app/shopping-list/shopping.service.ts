import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
ingredienntChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];


    add(event: Ingredient) {
      if (event.name !== '' || event.amount.toString() !== '') {
        this.ingredients.push(event);
        this.ingredienntChanged.emit(this.ingredients.slice());
      }
    }

    delete(event: Ingredient) {
      if (event.name !== '' || event.amount.toString() !== '') {
      const index = this.ingredients.findIndex(ing => ing.name === event.name);

      if (index <= -1) {  return; }
      this.ingredients.splice(index, 1);
      this.ingredienntChanged.emit(this.ingredients.slice());
      }
    }

    getAllIngredients() {
      return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredienntChanged.emit(this.ingredients.slice());
    }

  }
