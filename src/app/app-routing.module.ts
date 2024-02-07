import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {SearchPatientComponent} from "./search-patient/search-patient.component";
import {SearchMedicineComponent} from "./search-medicine/search-medicine.component";
import {CreatePlanComponent} from "./create-plan/create-plan.component";
import {EditPlanComponent} from "./edit-plan/edit-plan.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'userProfile', component: UserProfileComponent},
  { path: 'searchPatient', component: SearchPatientComponent},
  { path: 'searchMedicine', component: SearchMedicineComponent},
  { path: 'createPlan', component: CreatePlanComponent},
  { path: 'editPlan', component: EditPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
