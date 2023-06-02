import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Resource } from '../model/resource';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http: HttpClient) { 

  }

  getListUsers(){
    let body = `https://reqres.in/api/users`;
    this.http.get<User[]>(body)
  }

  getSingleUser(id: number){
    let body = `https://reqres.in/api/users/${id}`;
    this.http.get<User>(body)
  }

  getListResources(){
    let body = `https://reqres.in/api/unknown`;
    this.http.get<Resource[]>(body)
  }

  getResource(id: number){
    let body = `https://reqres.in/api/unknown/${id}`;
    this.http.get<Resource>(body)
  }

}
