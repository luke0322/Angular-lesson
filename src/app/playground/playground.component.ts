import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
	isAdmin: boolean = true;

	textForPerson: string = 'No people';

  	buttonClick1(): void {  //we need return values for all functions
		this.textForPerson = 'Person 1 clicked the button';
	}

	buttonClick2(): void {  //we need return values for all functions
		this.textForPerson = 'Person 2 clicked the button';
	}

	 buttonClick3(): void {  //we need return values for all functions
		this.textForPerson = 'Person 3 clicked the button';
	}
  constructor() { }

  ngOnInit() {
  }

}
