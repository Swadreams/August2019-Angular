import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private appAuth: AngularFireAuth) { }

  login(param) {
    return this.appAuth.auth.signInWithEmailAndPassword(param.email, param.pswd);
  }

  signup() {

  }

  logout() {
    return this.appAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.appAuth.authState;
  }

  isLoggedInState() {
    return this.appAuth.auth.currentUser;
  }

}
