import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.logout();
  }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['dashboard']),
        err => {
          this.error = err.error.message;
        }
      );
  }
}