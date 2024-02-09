import { Component } from '@angular/core';
import {SearchService} from "../search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrl: './search-medicine.component.css'
})
export class SearchMedicineComponent {
  searchMedicineList : any = {};
  medName : string = "";

  constructor(private searchService : SearchService, private router : Router) {}
  searchMedicine() {
    console.log(this.medName)
    this.searchService.searchMedicine(this.medName).subscribe({
      next: response => {
        this.searchMedicineList = response;
        console.log(this.searchMedicineList);
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
}
