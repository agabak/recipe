import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
// tslint:disable-next-line:no-input-rename
@Input('recipe') recipe: Recipe;
// tslint:disable-next-line:no-output-rename
@Output('recipeSelected') recipeSeletecd = new EventEmitter<void>();

onSelected() {
  this.recipeSeletecd.emit();
}
}
