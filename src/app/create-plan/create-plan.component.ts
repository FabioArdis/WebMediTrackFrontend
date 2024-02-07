import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrl: './create-plan.component.css'
})
export class CreatePlanComponent implements OnInit {
  planData : any = {};

  constructor(private userService : UserService, private router : Router) {
  }
  ngOnInit(): void {
    if (sessionStorage.getItem("userType") === "patient") {
      const patientFields = document.getElementById("doctorFields")
      if (patientFields)
        patientFields.style.display = "block";
    }

    if (sessionStorage.getItem("userType") === "doctor") {
      const doctorFields = document.getElementById("patientFields");
      if (doctorFields)
        doctorFields.style.display = "block";
    }
  }

  createPlan() {
    this.userService.addPlan(this.planData);
  }

  protected readonly sessionStorage = sessionStorage;

  goToHome() {
    this.router.navigate(['']);
  }
}
