import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})

export class HomeComponent implements OnInit{
  user : any;

  constructor(private userService : UserService, private router : Router) {}

  ngOnInit() : void {
    console.log("eccoti.");
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  searchPatient() : void
  {
    this.router.navigate(['searchPatient']);
  }

  searchMedicine() : void
  {
    this.router.navigate(['searchMedicine']);
  }

  createPlan() : void
  {
    this.router.navigate(['createPlan']);
  }

  login(u : string)
  {
    if (u === "doc")
      this.router.navigate(['login'], { queryParams: { user: 'doctor' } });
    else if (u === "pat")
      this.router.navigate(['login'], { queryParams: { user: 'patient' } });
  }

  register(u : string)
  {
    if (u === "doc")
      this.router.navigate(['register'], { queryParams: { user: 'doctor' } });
    else if (u === "pat")
      this.router.navigate(['register'], { queryParams: { user: 'patient' } });
  }

  userInfo() : void
  {
    this.userService.updateUser();
    this.router.navigate(['userProfile']);
  }

  logout() : void
  {
    this.userService.clearUser();
    this.sessionStorage.clear();
    window.location.reload();
  }

  protected readonly sessionStorage = sessionStorage;
}
