import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './Product/product.module';
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { CustomerModule } from './customer/customer.module';
import { VendorModule } from './vendor/vendor.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { VendorHomePageComponent } from './vendor-home-page/vendor-home-page.component';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { LoginComponent } from './user-admin/login/login.component';
import { RegistrationComponent } from './user-admin/registration/registration.component';
import { UserAdminService } from './user-admin/user-admin.service';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerHomePageComponent,
    AdminHomePageComponent,
    VendorHomePageComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    UserAdminComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    ProductModule,
    BookingModule,
    CartModule,
    CustomerModule,
    VendorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    ToastrModule.forRoot(
      {progressBar:true}
    ),
  ],
  providers: [UserAdminService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
