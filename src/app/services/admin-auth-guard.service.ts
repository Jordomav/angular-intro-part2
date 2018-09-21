import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

canActivate() {
  if (this.authService.isLoggedIn() && this.authService.currentUsers.admin) {
    return true;
  } else {
    this.router.navigate(['/not-found']);
    return false;
  }
}
}
