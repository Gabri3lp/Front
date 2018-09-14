import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable,of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Hour } from './hour';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
	url = "http://127.0.0.1:8000/api/";
	private updatedUser;
	constructor(
		private http: HttpClient
	) { }

	private refreshToken<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			if(error.status == '401'){
				this.http.get(this.url + "token/refresh").subscribe(response =>{
					if(response['status'] == "success"){
						localStorage.setItem('token', JSON.stringify(response['data']));
						location.reload();
					}
				});
		}
		  return of(result as T);
		};
	  }
	public getCurrentUser(): Observable<User>{
		return this.http.get(this.url + "currentUser").pipe(map(response =>{return response['data'];})
		,catchError(this.refreshToken('getCurrentUser'))
		);
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

	generateTotalReport(initialDate: Date, finalDate: Date){
		return this.http.post(this.url + "report/total", 
			{initialDate: initialDate, finalDate: finalDate}
			,{responseType: "blob"}
			).pipe(map(response =>{
				if(response.type == 'application/pdf'){
					return response;
				}
				alert("Campos Invalidos");
			})
			);
	}
}
