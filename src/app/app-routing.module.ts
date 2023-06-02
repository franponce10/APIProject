import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ResourceListComponent } from './component/resource-list/resource-list.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listusers', component: UserListComponent},
  {path: 'listresources', component: ResourceListComponent},
  {path: 'adduser', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
