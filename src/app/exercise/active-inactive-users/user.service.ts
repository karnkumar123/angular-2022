import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser: string[] = ['Priya', 'Aman', 'Neelkanth', 'Sawan'];
  inactiveUser: string[] = ['Saurav', 'Arjun', 'Murari', 'karan'];
  updateActiveUsers = new EventEmitter<string[]>();
  updateInactiveusers = new EventEmitter<string[]>();
  hit = new EventEmitter<number>();
  hitCount: number = 0; 
  constructor() { }

  makeInactive(index: number, name: string){
    this.activeUser.splice(index,1);
    this.updateActiveUsers.emit(this.activeUser);
    this.inactiveUser.push(name);
    this.updateInactiveusers.emit(this.inactiveUser);
    this.hitCount++;
    this.hit.emit(this.hitCount);
  }

  makeActive(index: number, name: string){
    this.inactiveUser.splice(index,1);
    this.updateInactiveusers.emit(this.inactiveUser);
    this.activeUser.push(name);
    this.updateActiveUsers.emit(this.activeUser);
    this.hitCount++;
    this.hit.emit(this.hitCount);
  }
}
