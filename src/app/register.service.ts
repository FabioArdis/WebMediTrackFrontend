import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/doRegistering'
  constructor(private http : HttpClient) { }

  register(data : any) : Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(data);
    return this.http.post<any>(`${this.baseUrl}`, data, { headers, withCredentials: true });
  }
}
