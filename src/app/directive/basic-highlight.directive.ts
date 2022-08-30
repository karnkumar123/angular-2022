import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlight implements OnInit{
    constructor(private _elRef: ElementRef){}
    ngOnInit(): void {
        this._elRef.nativeElement.style.backgroundColor = 'red';
    }
}