import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  Recipes: Recipe[] = [
    new Recipe('test', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('test 2', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('test 3', 'test recipr',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

}
