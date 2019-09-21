import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ACM';
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isLoggedIn()
        .subscribe(
            response => {
              if(response) {
                this.router.navigate(['home']);
                this.isLoggedIn = true;
              } else {
                this.isLoggedIn = false;
              }
            },
            error => console.log('Error occurred', error)
        )
  }

}
