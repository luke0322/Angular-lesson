import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	user: User; //property we will grab from db

  constructor(private UserSvc: UserService, //injecting user svc
  			  private router: Router, //injecting router
  			  private route: ActivatedRoute)//route selected
             { }

  ngOnInit() {
  	this.route.paramMap
  		.switchMap((params: ParamMap) =>
			this.UserSvc.get(params.get('id')))
  				.subscribe((users: User[]) => this.user = users[0]);
	}
}
