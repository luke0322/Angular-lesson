import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	isAdmin: boolean = true; //we will need this multiple times in prs
	todayIsTuesday: boolean = true;
	textForAdmin: string ='';
	textForButton: string = 'Button text'; //we are binding the label to data in that property
	
	buttonClick(): void {  //we need return values for all functions
		this.textForAdmin = "An admin clicked the button";
	}
	//user: User;
	//we will pull the user data by id
  constructor() { }

  ngOnInit() {
  }

}
