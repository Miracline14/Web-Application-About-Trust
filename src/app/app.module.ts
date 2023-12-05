import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import { AboutPageComponent } from './about-page/about-page.component';
import { CreateAcountPageComponent } from './create-acount-page/create-acount-page.component';
import{HttpClientModule}from '@angular/common/http';
import {Myguard} from './myguard'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentDescriptionComponent } from './content-description/content-description.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatTableModule} from '@angular/material/table';
import { OtpValidationComponent } from './otp-validation/otp-validation.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    LoginPageComponent,
    AboutPageComponent,
    CreateAcountPageComponent,
    ContentPageComponent,
    ContentDescriptionComponent,
    RegisterPageComponent,
    ContactPageComponent,
    DonationPageComponent,
    OtpValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatMenuModule
    
  ],
  providers: [Myguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
