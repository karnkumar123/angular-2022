import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guard/auth-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginStatusMessage: string = 'logout';
  styleObj = {};
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.loginStatusMessage.subscribe((data: string) => {
      this.loginStatusMessage = data;
      this.styleObj = {
        color: this.loginStatusMessage === 'login'? 'green': 'red',
        'border-Color': this.loginStatusMessage === 'login'? 'green': 'red',
        'border-width': '5px',
        'border-style': 'solid'
      }
    })
  }

}
