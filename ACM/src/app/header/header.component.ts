import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout()
        .then(
          response => {
            alert('You have successfully logged out.');
            this.route.navigate(['/login']);

          } ,
          error => console.log('Error occured', error)
        )
  }

}
