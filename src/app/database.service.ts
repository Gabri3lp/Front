import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Hour } from './hour';
import { Role } from './role';

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
				alert(response['msg']);
				return new User;
			}
		}		
		));
  	}
  	public getUsers(search = ''): Observable<User[]>{
		return this.http.post(this.url + "get/user/all", {search: search}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				alert(response['msg']);
				return new User;
			}
		}		
		));
  	}
  	public updateUser(user: User, id: string): Observable<boolean>{
		return this.http.post<any>(this.url + "update/user", {id: id, user: user}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				alert(response['msg']);
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
				alert(response['msg']);
				return false;
			}
		}		
		));
  	}
  	public createUser(user: User): Observable<boolean>{
		return this.http.post<any>(this.url + "signup", user).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				alert(response['msg']);
				return false;
			}
		}		
		));
	}
	

	public getHourById(id: string): Observable<Hour>{
		return this.http.post(this.url + "get/hour", {id: id}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				alert(response['msg']);
				return new Hour;
			}
		}		
		));
	  }
	  public getHours(search = ''): Observable<Hour[]>{
		return this.http.post(this.url + "get/hour/all", {search: search}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				alert(response['msg']);
				return new Hour();
			}
		}		
		));
  	}
  	public updateHour(hour: Hour): Observable<boolean>{
		return this.http.post<any>(this.url + "update/hour", hour).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				alert(response['msg']);
				return false;
			}
		}		
		));
	  }
	  
  	public deleteHour(id: string): Observable<boolean>{
		return this.http.post(this.url + "delete/hour", {id: id}).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				alert(response['msg']);
				return false;
			}
		}		
		));
  	}
  	public createHour(hour: Hour): Observable<boolean>{
		return this.http.post<any>(this.url + "create/hour", hour).pipe(map(response =>{
			if(response['status'] == 'success'){
				return true;
			}else{
				alert(response['msg']);
				return false;
			}
		}		
		));
	}

	public getRoles(): Observable<Role[]>{
		return this.http.get(this.url + "get/role/all").pipe(map(response =>{
			if(response['status'] == 'success'){
				return response['data'];
			}else{
				alert(response['msg']);
				return new Hour;
			}
		}		
		));
	}
}
