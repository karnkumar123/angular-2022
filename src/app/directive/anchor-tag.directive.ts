import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnchorTag]'
})
export class AnchorTagDirective {

  constructor() { }

  @HostBinding('alt') altMessage: string;
  @HostListener('mouseenter') mouseEnter(event: Event){
    this.altMessage = 'This is working yyy';
  }

}
