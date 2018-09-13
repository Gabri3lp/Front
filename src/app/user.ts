import { Role } from "./role";

export class User {
	constructor(){
		this.id = "";
		this.email = "";
		this.firstName = "";
		this.lastName = "";
		this.role = new Role;
		this.phone = "";
		this.cellphone = "";
		this.birthDate = "";
		this.city = "";
		this.status = "";
		this.password = "";
		this.address = "";
		this.country = "";

	}
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: Role;
	phone: string;
	cellphone: string;
	birthDate: string;
	city: string;
	status: string; 
	password: string;
	address: string;
	country: string;

}
