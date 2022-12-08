import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-btn',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./login-btn.component.scss'],
})
export class LoginBtnComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
