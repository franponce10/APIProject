import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ResourceListComponent } from './component/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './component/resource-details/resource-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { UserCRUDComponent } from './component/user-crud/user-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    FooterComponent,
    LoginComponent,
    UserCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
