import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ACM';
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLoggedIn()
        .subscribe(
            response => this.isLoggedIn = response ? true : false,
            error => console.log('Error occurred', error)
        )
  }

}
