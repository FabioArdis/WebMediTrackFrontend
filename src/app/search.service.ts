import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8080/search';
  constructor(private http : HttpClient) { }

  searchMedicine(medName: string) : Observable<any> {
    console.log("cercando " + medName + "...");
    const url = `${this.baseUrl}/medicine?name=${medName}`;
    return this.http.get<any>(url);
  }

  searchPatient(patName: string) : Observable<any> {
    console.log(patName);
    const url = `${this.baseUrl}/patient?name=${patName}`;
    return this.http.get<any>(url);
  }
}
