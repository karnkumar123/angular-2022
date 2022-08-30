import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inactiveUsers: string[] = [];
  constructor(private _usrService: UserService) { }

  ngOnInit(): void {
    this.inactiveUsers = this._usrService.inactiveUser;
  }
  makeActive(index: number, name: string){
    this._usrService.makeActive(index, name);
  }
}
