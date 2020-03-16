import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingrideantForm: FormGroup;

 @ViewChild('nameInput') name: ElementRef;
 @ViewChild('amountInput') amount: ElementRef;
  constructor(private shoppingService: ShoppingService ) { }

  ngOnInit(): void {
  }
       add() {
        const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
        this.shoppingService.add(ingredient);
     }

       delete() {
        const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
        console.log(ingredient);
        this.shoppingService.delete(ingredient);
       }
}
