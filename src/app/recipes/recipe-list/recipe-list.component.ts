import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('recipeDetail') recipeDetail = new EventEmitter<Recipe>();
 recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }
}
