import { Component } from '@angular/core'; //at sign shows root folder for angular

@Component({ //decorating the classes, ties the html and css to this piece of code
  selector: 'app-root', //you make up the html tag that you wanna use
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //an array of files(string path), can add more files
})
export class AppComponent { //we will always export our class 
  title: string = 'java'; //changes the title on webpage, will reload automatically
  //could type this as a string
}
