import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private auth: UserService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.auth.userIsAuthenticated()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
