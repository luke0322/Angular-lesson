import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { User } from '../user/user'; //two dots moves up a level

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users: User[]; 
	// property instantiates an empty array of type User

  constructor(private UserSvc: UserService) { } 
    //dependency injection occurring here, angular takes cre of it
  	//injects user svc into this component so that we can use this user service
  ngOnInit() { //"lifecycle hook" called once when component fires up
  //good place to initialize data 
  	this.UserSvc.list() //making a call to the service (promise) 
  	.then(data=>{ //fat arrow empty function (lambda expression)
  		this.users = data; //store this data into the users variable
  		console.log(this.users); //log data in console for results
  	});
  }

}
