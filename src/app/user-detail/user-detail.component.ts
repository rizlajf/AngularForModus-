import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../core/models/remoteUser.model';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
   remoteUser: Result;
   @Input() data: string;
  constructor(private userService: UserService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const username = this.route.snapshot.paramMap.get('username');
    this.remoteUser = this.userService.getUserByUserName(username);
  }

  goBack(): void {
    this.location.back();
  }

}
