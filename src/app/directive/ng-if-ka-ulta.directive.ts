import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIfKaUlta]'
})
export class NgIfKaUltaDirective {
  @Input() set appNgIfKaUlta(condition: boolean){
    if(!condition){
      this._vcref.createEmbeddedView(this._tplRef);
    }else{
      this._vcref.clear();
    }
  }
  constructor(private _tplRef: TemplateRef<any>, private _vcref: ViewContainerRef) { }
}
