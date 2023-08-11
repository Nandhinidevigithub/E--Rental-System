import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { RegistrationComponent } from './user-admin/registration/registration.component';
import { LoginComponent } from './user-admin/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path: 'user', component: UserAdminComponent,
    children: [
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
