import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseLogin } from '../modelos/ResponseLogin';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

import { urls } from '../enviroment/Enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "usuario/"
  constructor(private http : HttpClient) { }
  Login(model : LoginI) : Observable<any>{
    return this.http.post<any>(`${this.url}login`, model)
  }
}
