import { Component, OnInit } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user: User;

showConsole(): void{
	console.log(this.user);
}
  constructor() { }

  ngOnInit() {
  	this.user = new User("bmarley","iriemon","bob","marley","555-555-5555","bmarley@gmail.com",false,false,false);
  	this.showConsole();
  }

}
