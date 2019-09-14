import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  signIn() {
    var param = {
      email: this.email,
      pswd: this.password
    };
    this.auth.login(param)
        .then(
          response => {
            console.log('Login Response', response);
            this.route.navigate(['/home']);
          },
          error => {
            console.log('Error occured', error)
          }
        )
  }

}
