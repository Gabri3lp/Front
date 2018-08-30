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
	country: 'Venezuela', password: '12345678', address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '3', email: "jeuss.jp215@gmail.com", firstName:"jesus", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', password: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '6', email: "juan.jp215@gmail.com", firstName:"juan", lastName:"arellan", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', password: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '7', email: "pedro.jp215@gmail.com", firstName:"jose", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', password: '12345678',
	address: 'caimito 2', birthDate: '17/02/1997'},
	{id: '8', email: "jose.jp215@gmail.com", firstName:"pedro", lastName:"Pérez", role:"Administrador",
	phone: '12345', cellphone: '4444444', city:'guayana', status: 'active', country: 'Venezuela', password: '12345678', 
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
  	public getUserById(id: string): Observable<User>{
		return this.http.post(this.url + "get/user", {id: id}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				alert("No se encontró el Usuario. Estado: " + response['msg']);
				return of(new User);
			}
		}		
		));
  	}
  	public getUsers(): Observable<User[]>{
		return this.http.get(this.url + "get/user/all").pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				return null;
			}
		}		
		));
  	}
  	public updateUser(user: User, id: string): Observable<boolean>{
		return this.http.post<any>(this.url + "update/user", {id: id, user: user}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				return false;
			}
		}		
		));
	  }
	  
  	public deleteUser(id: string): Observable<boolean>{
		return this.http.post(this.url + "delete/user", {id: id}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				return false;
			}
		}		
		));
  	}
  	public createUser(user: User): Observable<boolean>{
		//return this.http.post<any>(this.url + "signup", {user}).pipe(map(response =>{
		return this.http.post<any>(this.url + "signup", user).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				return false;
			}
		}		
		));
	}
}
