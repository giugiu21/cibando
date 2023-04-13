import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLogged();
    if(!isLoggedIn){
      this.router.navigate(['home']);
    }
    return isLoggedIn;
  }

  constructor(
    private router: Router,
    public authService: AuthService){}
  
}
