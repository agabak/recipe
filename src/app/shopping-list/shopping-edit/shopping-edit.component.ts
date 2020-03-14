import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingrideantForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
    add(event) {
       console.log(event);
    }
}
