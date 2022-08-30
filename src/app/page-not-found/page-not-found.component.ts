import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pageNotFoundMessage: string;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageNotFoundMessage = this._activatedRoute.snapshot.data['message'];
    this._activatedRoute.data.subscribe((data) => {
      this.pageNotFoundMessage = data['message'];
    })
  }
}
