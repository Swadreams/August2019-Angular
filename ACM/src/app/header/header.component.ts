import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout()
        .then(
          response => alert('You have successfully logged out.'),
          error => console.log('Error occured', error)
        )
  }

}
