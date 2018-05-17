import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Loginservice } from '../../services/login.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(private loginservice: Loginservice) { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  ngDoCheck()
  {
    this.isLoggedIn = this.loginservice.userToken != null ? true : false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.loginservice.loginUser();
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.loginservice.loginUser();
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.loginservice.logOutUser();
  }

}
