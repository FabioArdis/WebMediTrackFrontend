import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/doLogging'
  constructor(private http : HttpClient) { }

  login(data : any) : Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    console.log("mandando:\n");
    console.log(data);
    return this.http.post<any>(`${this.baseUrl}`, data, { headers, withCredentials : true});
  }
}
