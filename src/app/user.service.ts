import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : any;
  private updateUrl = 'http://localhost:8080/update';

  constructor(private http : HttpClient) {}
  setUser(userData : any): void
  {
    this.user = userData;
  }

  updateUser()
  {
    const body = {
      username: this.user.username,
      userType: sessionStorage.getItem("userType")
    };
    this.http.post<any>(`${this.updateUrl}/user`, body).subscribe({
      next: response => {
        console.log(`aggiornando ${this.user.username}`);
        this.user = response;
      },
      error: error => {
        console.log(error.error);
      }
    })
  }

  addPatient(patUsername : string)
  {
    const body = {
      username: this.user.username,
      patUsername: patUsername
    };
    this.http.post<String>(`${this.updateUrl}/addPatient`, body,{ responseType: 'text' as 'json' }).subscribe({
      next: (response : any) => {
        alert(response);
        this.updateUser();
      },
      error: (error : any) => {
        alert(error.error);
      }
    })
  }

  removePatient(patUsername : string)
  {
    const body = {
      username: this.user.username,
      patUsername: patUsername
    };
    this.http.post<any>(`${this.updateUrl}/removePatient`, body, { responseType: 'text' as 'json' }).subscribe({
      next: response => {
        alert(response);
        this.updateUser();
      },
      error: error => {
        alert(error.error);
      }
    })
  }

  addPlan(planData : any)
  {
    planData.username = this.user.username;
    planData.userType = sessionStorage.getItem("userType");
    this.http.post<any>(`${this.updateUrl}/addPlan`, planData, { responseType: 'text' as 'json' }).subscribe({
      next: response => {
        alert(response);
        this.updateUser();
      },
      error: error => {
        alert(error.error)
      }
    })
  }

  getUser() : any
  {
    return this.user;
  }

  clearUser() : void
  {
    this.user = null;
  }

  removePlan(id : string) {
    const body = {
      username: this.user.username,
      planId: id
    };
    this.http.post<any>(`${this.updateUrl}/removePlan`, body, { responseType: 'text' as 'json' }).subscribe({
      next: response => {
        alert(response);
        this.updateUser();
      },
      error: error => {
        alert(error.error);
      }
    })
  }
}
