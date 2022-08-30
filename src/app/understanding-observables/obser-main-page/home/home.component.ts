import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  count = 0;
  private subsciption: Subscription;
  customObservable = new Observable<number>((observer) => {
    setInterval(() => {
      observer.next(this.count);
      this.count++;
    }, 500)
  });
  constructor() { }
  

  ngOnInit(): void {
    this.subsciption = this.customObservable.pipe(filter((data: number) => {
      return data > 0;
    }),map((data: number) => {
      return `Hello ${data}`;
    })).subscribe((data: string) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
}
