import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {

  constructor(private http: HttpClient) { 

  }

  addUser(user: User){
    this.http.post("https://reqres.in/api/users", JSON.stringify(user))
    .subscribe(data => {
      console.log(data);
    });
  }

  updateUser(user: User){
    this.http.put(`https://reqres.in/api/users/${user.id}`, JSON.stringify(user))
    .subscribe(data => {
      console.log(data);
    });
  }

  deleteUser(id: number){
    this.http.delete(`https://reqres.in/api/users/${id}`);
  }
  
}
