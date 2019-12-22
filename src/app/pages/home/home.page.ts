import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/userlogin.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser: User;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe((x: any) => this.currentUser = x);
  }

  goToDevices() {
    this.router.navigate(['/devices']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
