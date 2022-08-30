import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit, OnChanges{
  @Input() server: {name: string, content: string, type: string};
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  

  ngOnInit(): void {
  }



}
