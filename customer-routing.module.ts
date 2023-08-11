import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  { path: 'customers', redirectTo: 'customers/index', pathMatch: 'full'},
  { path: 'customers/index', component: IndexComponent },
  { path: 'customers/:customerId/view', component: ViewComponent },
  { path: 'customers/create', component: CreateComponent },
  { path: 'customers/:customerId/edit', component: EditComponent },
  {path:'signup',component:LoginSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
