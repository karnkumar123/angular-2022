import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-obser-main-page',
  templateUrl: './obser-main-page.component.html',
  styleUrls: ['./obser-main-page.component.css']
})
export class ObserMainPageComponent implements OnInit, OnDestroy {
  activated = false;
  private subscription: Subscription;
  constructor(private _usrService: UserService) { }

  ngOnInit(): void {
      this.subscription = this._usrService.isActivated.subscribe((value: boolean) => {
        this.activated = value;
      })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
