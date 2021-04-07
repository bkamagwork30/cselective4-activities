import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    this.loggedIn = window.sessionStorage.getItem('login')=='true'?true:false;
    return this.loggedIn;
  }

  setLogIn(): void {
    window.sessionStorage.setItem('login', 'true');
    // this.loggedIn = true;
  }

  setLogOut(): void {
    // this.loggedIn = false;
    window.sessionStorage.clear();
  }
}
