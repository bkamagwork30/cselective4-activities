import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  username: string = "test";
  password: string = "test1234";
  
  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    if(this.user.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    if(this.user.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  login(e): void {
    let un = e.target.un.value
    let up = e.target.pw.value
    // console.log(un, pw);

    if(un==this.username && up==this.password) {
      this.user.setLogIn();
      this.router.navigate(['/home']);
    }
  }

}
