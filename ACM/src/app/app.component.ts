import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { slideInAnimation} from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
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
                // this.router.navigate(['courses/edit/4']);
                this.router.navigate(['home']);
                this.isLoggedIn = true;
              } else {
                this.isLoggedIn = false;
              }
            },
            error => console.log('Error occurred', error)
        )
    // this.router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event['url'] == '/login' || event['url'] == '/signup') {
    //       this.isLoggedIn = false;
    //     } else {
    //       // console.log("NU")
    //       this.isLoggedIn = true;
    //     }
    //   }
    // });
  }

}
