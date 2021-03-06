import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Result, RootObject } from '../core/models/remoteUser.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public remoteUsers : Result[]=[] ;
  selectedUser: Result;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRemoteUsers()
                    .subscribe(_remoteUsers => {
                      this.remoteUsers = _remoteUsers.results;
                    }
                  );
  }

  onSelect(remoteUser)
  {
    this.selectedUser = remoteUser;
  }

}