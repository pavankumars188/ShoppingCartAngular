import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dress1Component } from './dress1/dress1.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { Skirt1Component } from './skirt1/skirt1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'app-skirt1', component:Skirt1Component},
  {path:'app-register', component:RegisterComponent},
  {path:'app-dress1', component:Dress1Component,data:{header:false}},
  {path:'app-login', component:LoginComponent},
  {path:'app-payment', component:PaymentComponent},
  {path:'app-cart', component:CartComponent},
  {path:'app-home', component:HomeComponent},
  //{path:'app-header', component:HeaderComponent},
  {path:'app-footer', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlexLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
