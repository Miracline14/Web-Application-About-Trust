import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CreateAcountPageComponent } from './create-acount-page/create-acount-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentDescriptionComponent } from './content-description/content-description.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import { OtpValidationComponent } from './otp-validation/otp-validation.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'about',component:AboutPageComponent},
  {path:'createAccount',component:CreateAcountPageComponent},
  {path:'content',component:ContentPageComponent},
  {path:'description/:id',component:ContentDescriptionComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'donation',component:DonationPageComponent},
  {path:'otp',component:OtpValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
