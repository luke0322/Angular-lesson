export class User{
	Id: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	Email: string;
	Admin: boolean;
	Reviewer: boolean;
	Active: boolean;

	display(): void {
		console.log(this);
	}

	constructor(UserName: string,Password: string,FirstName: string, LastName: string,
		PhoneNumber: string,Email: string,Admin: boolean,Reviewer: boolean,Active: boolean){
		this.UserName = UserName;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.PhoneNumber = PhoneNumber;
		this.Email = Email; //do not need id when creating a new entry 
		this.Admin = Admin;
		this.Reviewer = Reviewer;
		this.Active = Active;
	}

}