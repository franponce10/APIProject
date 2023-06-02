
import { Component } from "@angular/core";
import { User } from "src/app/model/user";
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  
  user = new User(0,"","","","","","", Date.now(), Date.now());

  constructor(private authetication: AuthenticationService){}
    

  register(){
    
    this.authetication.register(this.user.email,this.user.password);
  }
}