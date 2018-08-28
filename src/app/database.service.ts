import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
const USERS = [
	{id: '26770427', email: "gabriel.jp215@gmail.com", firstName:"Gabriel Jesús", lastName:"Pérez Arellán", 
	role:"Administrador", phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', 
	country: 'Venezuela', pass: '12345678', address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '3', email: "jeuss.jp215@gmail.com", firstName:"jesus", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', pass: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '6', email: "juan.jp215@gmail.com", firstName:"juan", lastName:"arellan", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', pass: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '7', email: "pedro.jp215@gmail.com", firstName:"jose", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', pass: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '8', email: "jose.jp215@gmail.com", firstName:"pedro", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', pass: '12345678', 
	address: 'caimito 2', birthDate: '17/02/1997'},
];

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
	url = "http://127.0.0.1:8000/api/";
	currentUser: User;
	private updatedUser;
	
	constructor(
		private http: HttpClient
	) { }

	public setCurrentUser(user: User){
		this.currentUser;
	}
  	public getUserByEmail(email: string): Observable<User>{
		for(let i = 0; i < USERS.length; i++){
			if(USERS[i].email == email){
				//return of(USERS[i]);
				return of(Object.assign(new User(), USERS[i]));
			}
		}
  		return of(new User());
  	}
  	public getUsers(){
  		return of(USERS);
  	}
  	public updateUser(user: User, email: string): Observable<boolean>{
		for (let i = 0; i < USERS.length; i++) {
			if(USERS[i].email == email){
				USERS[i] = user;
				return of(true);
			} 
		 }
  		return of(false);
	  }
	  
  	public deleteUser(id: string): Observable<boolean>{
		for (let i = 0; i < USERS.length; i++) {
			if(USERS[i].id == id){
				USERS.splice(i, 1);
				return of(true);
			} 
		 }
  		return of(false);
  	}
  	public createUser(user: User): Observable<boolean>{
		return this.http.post<any>(this.url + "signup", {user}).pipe(map(response =>{
			if(response['status'] == 'success'){
				this.setCurrentUser(response['user']);
				return true;
			}else{
				return false;
			}
		}		
		));
	}
}
