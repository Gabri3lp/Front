import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token");
        if(token){ 
        const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer " + JSON.parse(token))
            });
            return next.handle(cloned);
        }else {
        return next.handle(req);
        }
    }
}