import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent} from './resume/resume.component';
import { PlaygroundComponent} from './playground/playground.component';
import { UserComponent} from './user/user.component';
import { UserListComponent} from './user-list/user-list.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'},
	//if path is empty, redirect it to this path /home, full url
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },  //be careful w/ order
	{ path: 'resume',component: ResumeComponent},
	{ path: 'playground', component: PlaygroundComponent},
	{ path: 'user', component: UserComponent},
	{ path: 'user/detail/:id', component: UserDetailComponent},
	{ path: 'userlist', component: UserListComponent},
	{ path: '**', component: HomeComponent}
	 //URL in browser must replicate this at end
]; //** catches everything else and sends it to home

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
