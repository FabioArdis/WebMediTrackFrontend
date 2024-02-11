import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: any;
  userId: string | null | undefined;
  searchPlansList : any = {};

  patientColumns = ['name', 'surname', 'username', 'cf'];
  doctorColumns = ['name', 'surname', 'username', 'spec', 'availability'];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    console.log("ciao");
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  protected readonly sessionStorage = sessionStorage;

  editPlan(id: string) {
    sessionStorage.setItem("currentPlan", id);
    this.router.navigate(['editPlan']);
  }

  removePlan(id: string) {
    this.userService.removePlan(id);
    const currentUrl = this.router.url;
    this.userService.updateUser();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl])
    });
  }

  updateUser() {
    this.userService.updateUser();
    this.user = this.userService.getUser();
  }

}












