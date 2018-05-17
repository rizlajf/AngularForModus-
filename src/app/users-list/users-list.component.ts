import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RemoteUser } from '../core/models/remoteUser.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  remoteUsers: RemoteUser;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRemoteUsers()
                    .subscribe(remoteUsers => {
                      this.remoteUsers = remoteUsers;
                    }
                  );
  }

}
