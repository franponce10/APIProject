import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserRequest } from 'src/app/model/user-request';
import { APIserviceService } from 'src/app/service/apiservice.service';
import { CRUDServiceService } from 'src/app/service/crudservice.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCRUDComponent {

  @Input() id: string = "";
  user: User = new User(0,"","","","","","", Date.now(), Date.now());
  userRequest: UserRequest = new UserRequest(this.user); 
  

  constructor(private apiService: APIserviceService, private crudService: CRUDServiceService, router: ActivatedRoute){

    this.id = router.snapshot.paramMap.get("id")!;

    this.apiService.getSingleUser(this.id).subscribe(data => {
      this.userRequest = data;
      this.user = this.userRequest.data;
    });

  }

  create(){
    this.crudService.addUser(this.user);
    console.log("creado")
    alert("usuarios")
  }

  update() {
    this.crudService.updateUser(this.user);
  }

}
