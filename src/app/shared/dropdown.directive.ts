import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding('class.open') isOpen = false;
  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')  toggleOpen() {
   // this.render.setStyle(this.el.nativeElement, 'open' , null );
   this.isOpen = !this.isOpen;
  }

}


/*
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}

*/
