import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/Rx"
import { RemoteUser } from '../core/models/remoteUser.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private remoteUserUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getRemoteUsers (){
    return this.http.get<RemoteUser>(this.remoteUserUrl);
      // .pipe(
      //   tap(heroes => this.log(`fetched heroes`)),
      //   catchError(this.handleError('getHeroes', []))
      // );
  }
}
