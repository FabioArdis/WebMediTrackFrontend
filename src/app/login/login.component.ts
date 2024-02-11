import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userData : any;
  hide: boolean = true ;
  constructor(private loginService : LoginService, private userService : UserService, private router : Router)
  {
    this.userData = {};
  }
  loginUser() : void
  {
    this.loginService.login(this.userData).subscribe({
        next: response => {
          if (response != null) {
            console.log("Login avvenuto con successo: ", response);
            this.userService.setUser(response);
            this.router.navigate([""]);
          }
        },
        error: error => {
          console.error("ERRORE!", error);
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

  goToHome() {
    this.router.navigate(['']);
  }
}
