import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
      <div class="alert alert-success">
        <em>This is success alert</em>
      </div>
  `,
  styles: [
    `em{
      color: green;
    }`
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
