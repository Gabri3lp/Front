import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable,of, from } from 'rxjs';
const USERS = [
	{id: '1', email: "gabriel.jp215@gmail.com", firstName:"Gabriel", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active'},
	{id: '3', email: "jeuss.jp215@gmail.com", firstName:"jesus", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active'},
	{id: '6', email: "juan.jp215@gmail.com", firstName:"juan", lastName:"arellan", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active'},
	{id: '7', email: "pedro.jp215@gmail.com", firstName:"jose", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active'},
	{id: '8', email: "jose.jp215@gmail.com", firstName:"pedro", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active'},
];

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
	url = "";
	currentUser: User;
	private updatedUser;
	
	  constructor() { }
	public setCurrentUser(user: User){
		this.currentUser;
	}
  	public getUserByEmail(email: string): Observable<User>{
		USERS.forEach(u => {
			if(u['email'] == email)
			return of(u);
		});
  		return of(null);
  	}
  	public getUsers(){
  		return of(USERS);
  	}
  	public update(user: User): boolean{
		for (let i = 0; i < USERS.length; i++) {
			if(USERS[i].email == user.email){
				USERS[i] = user;
			} 
		 }
  		return true;
  	}
  	public delete(id: string): Observable<boolean>{
		for (let i = 0; i < USERS.length; i++) {
			if(USERS[i].id == id){
				USERS.splice(i, 1);
				return of(true);
			} 
		 }
  		return of(false);
  	}
  	public create(user: User): Observable<boolean>{
		USERS.push(user);
  		return of(true);
  	}
}
