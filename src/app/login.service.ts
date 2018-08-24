import { Injectable } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	private url = "http://127.0.0.1:8000/api/login";
  currentUser: User;
  constructor(private http: HttpClient, private router: Router) { 
  }

  hasToken(): boolean{
    if(localStorage.getItem('token'))
      return true;
    return false;
  }
  logIn(email: string, password: string) {
    return this.http.post(this.url, {email, password}, httpOptions)
      .pipe(map(response => {
        if(response['status'] == "success"){
          localStorage.setItem('token', JSON.stringify(response['token']));
          this.currentUser = response['user'];
          this.router.navigate(['/'], { queryParams: {}});
        }
        return response;
      })
    );
  }
  logOut(){
    localStorage.removeItem('token');
  }
}

