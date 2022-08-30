import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  constructor(private _activatedRoute: ActivatedRoute,
    private _usrService: UserService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    })
  }

  onActivation(){
    this._usrService.isActivated.next(true);
  }

}
