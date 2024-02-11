import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {PlanService} from "../plan.service";

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrl: './edit-plan.component.css'
})
export class EditPlanComponent implements OnInit {
  plan : any = {};
  planData : any = {};

  searchTerm: string = '';
  searchResults: any;
  selectedMedicine: any = null;

  medicineColumns: string[] = ['id', 'name', 'dosage', 'manufacturer', 'action'];

  constructor(private searchService : SearchService, private userService : UserService, private planService : PlanService, private router : Router) {
  }

  saveGeneralInfo() {
    this.planData.name = this.planData.name || this.plan.name;
    this.planData.length = this.planData.length || this.plan.length;
    this.planData.type = this.planData.type || this.plan.type;

    this.planService.updatePlan(this.planData, this.plan.id);
    this.router.navigate(['userProfile']);
  }

  searchMedicine(name : string) {
    console.log("triggerato edit-plan.searchMedicine() con searchTerms: " + this.searchTerm);
    this.searchService.searchMedicine(name).subscribe({
      next: response => {
        this.searchResults = response;
        console.log(this.searchResults);
      },
      error: error => {
        console.log(error.error);
      }
    })
  }

  addMedicineToPlan(medicine: any) {
    let selectedPlan = sessionStorage.getItem("currentPlan");

    if (selectedPlan !== null) {
      this.planService.addMedicine(medicine.id, selectedPlan).subscribe({
        next: response => {
          alert(response);
          this.updatePlan();
        },
        error: error => {
          alert(error.error);
        }
      })
    } else {
      console.error("Selected plan is null");
    }
  }
  removeMedicine(medicine: any) {
    let selectedPlan = sessionStorage.getItem("currentPlan");

    if (selectedPlan !== null) {
      this.planService.removeMedicine(medicine.id, selectedPlan).subscribe({
        next: response => {
          alert(response);
          this.updatePlan();
        },
        error: error => {
          alert(error.error);
        }
      })
    } else {
      console.error("Selected plan is null");
    }
  }

  ngOnInit(): void {
    let selectedPlan = sessionStorage.getItem("currentPlan");

    if (selectedPlan !== null) {
      this.planService.getPlan(selectedPlan).subscribe({
        next: response => {
          this.plan = response;
          console.log(this.plan);
        },
        error: error => {
          console.error(error.error);
        }
      })
    } else {
      console.error("Selected plan is null");
    }

    this.planData = {
      name: this.plan.name || '',
      length: this.plan.length || null,
      type: this.plan.type || ''
    };
  }
  updatePlan() {
    let selectedPlan = sessionStorage.getItem("currentPlan");

    if (selectedPlan !== null) {
      this.planService.getPlan(selectedPlan).subscribe({
        next: response => {
          this.plan = response;
          console.log(this.plan);
        },
        error: error => {
          console.error(error.error);
        }
      })
    } else {
      console.error("Selected plan is null");
    }
  }

  protected readonly sessionStorage = sessionStorage;

  goToHome() {
    this.router.navigate(['']);
  }
}
