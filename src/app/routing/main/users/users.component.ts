import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: {id: number, name: string}[] = [{id: 1,name:'Arjun'}, {id: 2, name:'Karan'},{id:3,name:'Neel'}]
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onLoadServers(){
    this._router.navigate(['/servers'])
  }
}
