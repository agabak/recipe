import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
 private  recipes: Recipe[] = [
    new Recipe('test', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [new Ingredient('Meat', 10), new Ingredient('flower', 1), new Ingredient('Bread', 3)]),
    new Recipe('test 2', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [new Ingredient('Meat', 10), new Ingredient('flower', 1), new Ingredient('Bread', 3)]),
    new Recipe('test 3', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [new Ingredient('Meat', 10), new Ingredient('flower', 1), new Ingredient('Bread', 3)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
