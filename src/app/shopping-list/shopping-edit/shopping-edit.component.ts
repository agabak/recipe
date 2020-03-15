import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingrideantForm: FormGroup;
 // tslint:disable-next-line:no-input-rename
 // @Input('ingredient') ingredient: Ingredient;
 // tslint:disable-next-line:no-output-rename
 @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();
 @ViewChild('nameInput') name: ElementRef;
 @ViewChild('amountInput') amount: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
    add() {

      const newIngredient = new Ingredient(this.name.nativeElement.value,
                                           this.amount.nativeElement.value);
      if (newIngredient !== undefined) {
        this.ingredientAdded.emit(newIngredient);
      }
    }
}
