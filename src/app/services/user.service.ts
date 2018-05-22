import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {RootObject, Result} from '../core/models/remoteUser.model';

@Injectable()
export class UserService {
  remoteUsers :RootObject;
  private remoteUserUrl = 'https://randomuser.me/api/?results=20';
  constructor(private http: Http) { }

  getRemoteUsers () :Observable<RootObject>{

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.remoteUserUrl,{ headers })
    .map(response => response.json());
  }

  getUserByUserName(username: string) 
  {
    return this.remoteUsers.results.find(x => x.login.username == username);
  }
}