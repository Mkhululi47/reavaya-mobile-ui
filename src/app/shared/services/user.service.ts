import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserDto } from '../models/userdto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('currentUser');
  }

  registration(user: UserDto) {
    return this.http.post<any>(`${environment.api}/User/register`, user, {
        headers: new HttpHeaders({
            Authorization: 'Bearer ' + this.token,
            'Content-Type': 'application/json'
        })
    });
  }
}
