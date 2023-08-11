import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'carts', redirectTo: 'carts/index', pathMatch: 'full'},
  { path: 'carts/index', component: IndexComponent },
  { path: 'carts/:cartId/view', component: ViewComponent },
  { path: 'carts/create', component: CreateComponent },
  { path: 'carts/:cartId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
