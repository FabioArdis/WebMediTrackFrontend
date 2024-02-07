import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private plan : any;
  constructor(private http : HttpClient) {}
  private searchUrl = 'http://localhost:8080/search';
  private updateUrl = 'http://localhost:8080/update';
  getPlan(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      id: id
    };

    return this.http.post<any>(`${this.searchUrl}/plan`, body, { headers: headers });
  }

  updatePlan(planData: any, id : number) {
    planData.planId = id;
    console.log(planData);
    this.http.post<any>(`${this.updateUrl}/plan/data`, planData, { responseType: 'text' as 'json' }).subscribe( {
      next: response => {
        alert(response);
      },
      error: error => {
        alert(error.error)
      }
    });
  }

  addMedicine(medicine : number, id : string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      medicineId : medicine,
      planId: id
    };

    return this.http.post<any>(`${this.updateUrl}/plan/addMedicine`, body, { headers: headers });
  }

  removeMedicine(medicine : number, id : string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      medicineId : medicine,
      planId: id
    };

    return this.http.post<any>(`${this.updateUrl}/plan/removeMedicine`, body, { headers: headers });
  }
}
