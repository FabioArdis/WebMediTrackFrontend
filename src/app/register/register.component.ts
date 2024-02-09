import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userData : any = { };
  constructor(private registerService : RegisterService, private userService : UserService, private router : Router) { }

  registerUser() : void
  {
    this.registerService.register(this.userData).subscribe({
      next: response => {
        if (response != null) {
          console.log('Registrazione avvenuta con successo: ', response);
          this.userService.setUser(response);
          this.router.navigate([""]);
        }
      },
      error: error => {
        console.error('marooooo: ', error);
      }
    });
  }

  ngOnInit(): void {
    this.userData.userType = new URLSearchParams(window.location.search).get('user');
    if (this.userData.userType === "doctor") {
      const patientFields = document.getElementById("doctorFields")
      if (patientFields)
        patientFields.style.display = "block";
      sessionStorage.setItem('userType', "doctor");
    }

    if (this.userData.userType === "patient") {
      const doctorFields = document.getElementById("patientFields");
      if (doctorFields)
        doctorFields.style.display = "block";
      sessionStorage.setItem('userType', "patient");
    }
  }

  protected readonly sessionStorage = sessionStorage;
  secondFormGroup: any;

  goToHome() {
    this.router.navigate(['']);
  }
}
