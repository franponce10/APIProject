import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User(0,"","","","","","", Date.now(), Date.now());

  constructor(private authetication: AuthenticationService){}

  login(){
    
    this.authetication.login(this.user.email,this.user.password);
  }
}
