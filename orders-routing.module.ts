import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AdminHomePageComponent } from '../admin-home-page/admin-home-page.component';



const routes: Routes = [
  { path: 'orders', redirectTo: 'orders/index', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent},
  { path: 'admin-home', component: AdminHomePageComponent},
  // { path: 'user-admin/login', component:LoginComponent},
  // { path: 'user-admin/registration', component:RegistrationComponent},
  { path: 'orders/index', component: IndexComponent },
  { path: 'orders/:orderId/view', component: ViewComponent },
  { path: 'orders/create', component: CreateComponent },
  { path: 'orders/:orderId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
