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
  errorMessage;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  signIn(param) {
    // console.log(form.value);
    // var param = {
    //   email: this.email,
    //   pswd: this.password
    // };
    console.log(param);
    this.auth.login(param.value)
        .then(
          response => {
            console.log('Login Response', response);
            this.route.navigate(['/home']);
          },
          error => {
            console.log('Error occured', error);
            this.errorMessage = error.message;
          }
        )
  }

}
