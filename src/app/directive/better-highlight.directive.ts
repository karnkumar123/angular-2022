import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultcolor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') wallpapercolor: string = 'transparent';
  constructor() { }

  ngOnInit(): void {
      this.wallpapercolor = this.defaultcolor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event){
      this.wallpapercolor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event){
    this.wallpapercolor = this.defaultcolor;
  }

}
