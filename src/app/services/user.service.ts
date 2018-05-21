import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RemoteUser } from '../core/models/remoteUser.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private remoteUserUrl = 'https://randomuser.me/api/';
  constructor(private http: Http) { }

  getRemoteUsers () :Observable<any>{

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.remoteUserUrl,{ headers })
    .map(response => response.json());
  }
}
