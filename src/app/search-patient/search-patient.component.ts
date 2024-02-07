import { Component } from '@angular/core';
import {SearchService} from "../search.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.css'
})
export class SearchPatientComponent {
  foundPatient : any;
  patName : string = "";

  constructor(private searchService : SearchService, private userService : UserService, private router : Router) {}

  searchPatient() {
    this.searchService.searchPatient(this.patName).subscribe({
      next: response => {
        this.foundPatient = response;
        console.log(this.foundPatient);
      },
      error: error => {
        console.log(error.error);
      }
    })
  }

  goToHome() : void
  {
    this.router.navigate(['']);
  }


  addPatient() {
    if (this.foundPatient != null)
      this.userService.addPatient(this.foundPatient.username);
  }

  removePatient() {
    if (this.foundPatient != null)
      this.userService.removePatient(this.foundPatient.username);
  }
}
