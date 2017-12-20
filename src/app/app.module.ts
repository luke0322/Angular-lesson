import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'; //new today

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PlaygroundComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, //http module added in
    AppRoutingModule
  ],
  providers: [UserService], //makes the user service available globally
  bootstrap: [AppComponent] //this is the home directory that renders everything
})
export class AppModule { }
