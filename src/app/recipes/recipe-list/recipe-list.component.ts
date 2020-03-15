import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('recipeDetail') recipeDetail = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
   new Recipe('test', 'test recipr',
   'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
   new Recipe('test 2', 'test recipr',
   'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
   new Recipe('test 3', 'test recipr',
   'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
 ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeDetail.emit(recipe);
  }
}
