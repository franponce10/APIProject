import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Resource } from '../model/resource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http: HttpClient) { 

  }

  getListUsers(): Observable<User[]>{
    let body = `https://reqres.in/api/users`;
    return this.http.get<User[]>(body);
  }

  getSingleUser(id: number): Observable<User>{
    let body = `https://reqres.in/api/users/${id}`;
    return this.http.get<User>(body);
  }

  getListResources(): Observable<Resource[]>{
    let body = `https://reqres.in/api/unknown`;
    return this.http.get<Resource[]>(body);
  }

  getResource(id: number): Observable<Resource>{
    let body = `https://reqres.in/api/unknown/${id}`;
    return this.http.get<Resource>(body);
  }

}
