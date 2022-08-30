import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, AfterContentInit {
  @Output() servers = new EventEmitter<{name: string, content: string, type: string}>();
  @ViewChild('srvContent') serverContent: ElementRef;
  @ContentChild('cockpitComponentHeader') header: ElementRef;
  constructor() { }
  ngAfterContentInit(): void {
    let headerContent = this.header.nativeElement.textContent;
    console.log('Header Content ->', headerContent);
    console.log(this.header.nativeElement);
  }

  ngOnInit(): void {
  }
  onAddServer(srvName: HTMLInputElement){
    let serverContent = this.serverContent.nativeElement.value;
    this.servers.emit({name: srvName.value, content: serverContent.value, type: 'server'});
  }
  onAddBlueprintServer(srvName: HTMLInputElement){
    this.servers.emit({name: srvName.value, content: this.serverContent.nativeElement.value, type: 'blueprint'});
  }

}
