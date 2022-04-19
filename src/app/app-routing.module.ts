import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UserComponent } from './user/user.component';
// import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // {path:'home', component:HomeComponent},
  {path:'users', component:UserComponent},
  {path:'repos', component:ReposComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
