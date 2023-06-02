import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersRequest } from 'src/app/model/users-request';
import { APIserviceService } from 'src/app/service/apiservice.service';
import { CRUDServiceService } from 'src/app/service/crudservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  usersRequest: UsersRequest = new UsersRequest([]); 
  listUsers: User[] = [];

  constructor(private apiService: APIserviceService, private crudService: CRUDServiceService){

    this.apiService.getListUsers().subscribe(data => {
      this.usersRequest = data;
      this.listUsers = this.usersRequest.data;
    });

  }

  delete(id: number){
    this.crudService.deleteUser(id);
    alert("Vas a borrar un usuario")
  }

}
