import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ResourceListComponent } from './component/resource-list/resource-list.component';
import { RegisterComponent } from './component/register/register.component';
import { UserCRUDComponent } from './component/user-crud/user-crud.component';
import { ResourceDetailsComponent } from './component/resource-details/resource-details.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listusers', component: UserListComponent},
  {path: 'listresources', component: ResourceListComponent},
  {path: 'usercrud/:id', component: UserCRUDComponent},
  {path: 'resourcedetail/:id', component: ResourceDetailsComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
