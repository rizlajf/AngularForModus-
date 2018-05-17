import { Injectable } from '@angular/core';

@Injectable()
export class Loginservice {
  userToken;S
  constructor() { }
  loginUser() 
  {
    this.userToken = 'test#';
  }

  logOutUser() 
  {
    this.userToken = null;
  }
}
