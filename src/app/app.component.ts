import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './exercise/active-inactive-users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  @ViewChild('heading') header: ElementRef;
  customStructuralDirectiveBoolean = false;
  title = 'Angular-tutorial';
  servers = [];
  oddNumbers = [];
  evenNumbers = [];
  isUserAuthenticated: boolean = true;
  user: {name: string} = {name: 'Ayushman'};
  numbervalue: number = 40;
  hitcount: number = 0;
  constructor(private _usrService: UserService){}

  ngOnInit(): void {
      this._usrService.hit.subscribe((data) => {
        this.hitcount = data;
      })
  }
  onNewServers(data: {name: string, content: string, type: string}){
    this.servers.push(data);
  }
  ngAfterViewInit(){
    let para = this.header.nativeElement.textContent;
    console.log(para);
  }
  onGettingNumber(value: number){
    if(this.isOddNumber(value)){
      this.oddNumbers.push(value);
    }else if(this.isEvenNumber(value)){
      this.evenNumbers.push(value);
    }
  }

  isOddNumber(value: number): boolean{
    if(value % 2 !== 0){
      return true;
    }else{
      return false;
    }
  }
  isEvenNumber(value: number): boolean{
    if(value % 2 === 0){
      return true;
    }else{
      return false;
    }
  }
  
}
