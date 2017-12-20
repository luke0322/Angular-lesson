import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //extension methods we are borrowing
//exist in angular already
import {User} from './user';

//the URLs called from this service all have these elements
const urlBase ='http://localhost:8080/'; //we have this one time for service
const mvcCtrl ='Users/';//we are going to be in the users controller
const url: string = urlBase + mvcCtrl; //concatenating these together

@Injectable()
export class UserService {

	list(): Promise<User[]> {
		return this.http.get(url +"List") //get call to server
			.toPromise()
			.then(resp =>resp.json() as User[]) //cast json to user array
			.catch(this.handleError);
	}

	get(id): Promise<User[]>{
		console.log(id); //we need a json object returned
		return this.http.get(url +'Get?id=' + id)
			.toPromise()
			.then(resp=>resp.json() as User[])
			.catch(this.handleError);
	}

	// change(user: User): Promise<any>{
	// //this function requires the user to be passed in, so we can change it
	// }

	// add(user: User): Promise<any>{

	// }
	// remove(user: User) Promise<any>{

	// }

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in user
	}
  constructor(private http: Http) { } //we need to inject the http 

}
