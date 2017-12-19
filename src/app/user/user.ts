export class User{
	id: number;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	admin: boolean;
	reviewer: boolean;
	active: boolean;

	display(): void {
		console.log(this);
	}

	constructor(userName: string,password: string,firstName: string, lastName: string,
		phone: string,email: string,admin: boolean,reviewer: boolean,active: boolean){
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email; //do not need id when creating a new entry 
		this.admin = admin;
		this.reviewer = reviewer;
		this.active = active;
	}

}