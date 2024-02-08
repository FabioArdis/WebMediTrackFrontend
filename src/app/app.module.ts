import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatStep, MatStepper} from "@angular/material/stepper";
import {MatList, MatListItem} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
    HomeComponent,
    SearchPatientComponent,
    SearchMedicineComponent,
    CreatePlanComponent,
    EditPlanComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbar,
    MatFormField,
    MatSelectModule,
    MatInputModule,
    MatStep,
    ReactiveFormsModule,
    MatStepper,
    MatList,
    MatListItem,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
