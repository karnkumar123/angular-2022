import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, retry } from "rxjs";

export class LoginInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Hello->',req.headers.get('auth'));
        if(req.headers.get('auth') === 'XYzxse12W'){
            return next.handle(req);
        }
        return next.handle(null); 
    }
}