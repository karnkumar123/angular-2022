import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/guard/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this._authService.login();
  }

  onLogout(){
    this._authService.logout();
  }
}
