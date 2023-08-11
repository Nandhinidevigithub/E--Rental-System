import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'vendor', redirectTo: 'vendor/index', pathMatch: 'full'},
  { path: 'vendor/index', component: IndexComponent },
  { path: 'vendor/:vendorId/view', component: ViewComponent },
  { path: 'vendor/create', component: CreateComponent },
  { path: 'vendor/:vendorId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }

