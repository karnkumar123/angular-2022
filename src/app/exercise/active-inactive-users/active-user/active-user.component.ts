import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUsers: string[] = [];
  constructor(private _usrSrv: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this._usrSrv.activeUser;
    this._usrSrv.updateActiveUsers.subscribe((data) => {
      this.activeUsers = data;
    })
  }
  makeInactive(index: number, name: string){
    this._usrSrv.makeInactive(index, name);
  }

}
