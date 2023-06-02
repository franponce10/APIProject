import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Resource } from '../model/resource';
import { Observable, of } from 'rxjs';
import { UsersRequest } from '../model/users-request';
import { UserRequest } from '../model/user-request';
import { ResourcesRequest } from '../model/resources-request';
import { ResourceRequest } from '../model/resource-request';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http: HttpClient) { 

  }

  getListUsers(): Observable<UsersRequest>{
    let body = `https://reqres.in/api/users`;
    return this.http.get<UsersRequest>(body);
  }

  getSingleUser(id: number): Observable<UserRequest>{
    let body = `https://reqres.in/api/users/${id}`;
    return this.http.get<UserRequest>(body);
  }

  getListResources(): Observable<ResourcesRequest>{
    let body = `https://reqres.in/api/unknown`;
    return this.http.get<ResourcesRequest>(body);
  }

  getResource(id: number): Observable<ResourceRequest>{
    let body = `https://reqres.in/api/unknown/${id}`;
    return this.http.get<ResourceRequest>(body);
  }

}
