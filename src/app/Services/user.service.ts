import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../enviroment/Enviroment';
import {Observable} from 'rxjs';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "usuario/"
  constructor(private http : HttpClient) { }
  register(model : User) : Observable<User>{
    return this.http.post<User>(`${this.url}registro`, model)
  }
}
