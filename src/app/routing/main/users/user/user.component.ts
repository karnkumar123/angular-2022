import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user: {name: string, id: number};
  paramsSubscription: Subscription;
  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    console.log('The params subscription has been destoyed !!');
    
  }

  ngOnInit(): void {
    this.user = {
      id: this._activatedRoute.snapshot.params['id'],
      name: this._activatedRoute.snapshot.params['name']
    }

    this.paramsSubscription = this._activatedRoute.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

}
