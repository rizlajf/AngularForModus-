import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RemoteUser } from '../core/models/remoteUser.model';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private remoteUserUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getRemoteUsers () :Observable<any[]>{
    return this.http.get(this.remoteUserUrl)
      .map((res: Response) => res.json())
  }
}
