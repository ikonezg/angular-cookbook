import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  {
  
  @HostBinding('class.open') dropdownToggle: boolean = false;
   

  @HostListener('click') onClickEl(){
    this.dropdownToggle = !this.dropdownToggle;
    
  }

}
