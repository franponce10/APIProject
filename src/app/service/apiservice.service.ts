import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http: HttpClient) { 

  }

  getListUsers(){

  }

  getSingleUser(id: string){
    let body = `https://reqres.in/api/users/${id}`;
    this.http.get<User>(body)
  }

  getListResources(){

  }

  getResource(){

  }

}
