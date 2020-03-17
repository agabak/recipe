import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
