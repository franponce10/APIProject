import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    
  }

  login(email: string, password: string) {
    let body = {email : email, password: password};

    this.http.post("https://reqres.in/api/login", body)
    .subscribe(data => {
      console.log(data);
    });

  }
}
