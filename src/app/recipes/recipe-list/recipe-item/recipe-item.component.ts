import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
// tslint:disable-next-line:no-input-rename
@Input('recipe') recipe: Recipe;
 constructor(private recipeService: RecipeService){}

onSelected() {
  this.recipeService.recipeSelected.emit(this.recipe);
}
}
