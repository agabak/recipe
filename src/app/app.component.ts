import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eblaToAddNewService = true;
  constructor() {
     setTimeout(() => {
       this.eblaToAddNewService = false;
     }, 600);
  }
  name = 'online';
}
