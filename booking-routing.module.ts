import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'booking', redirectTo: 'booking/index', pathMatch: 'full'},
  { path: 'booking/index', component: IndexComponent },
  { path: 'booking/:bookingId/view', component: ViewComponent },
  { path: 'booking/create', component: CreateComponent },
  { path: 'booking/:bookingId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
