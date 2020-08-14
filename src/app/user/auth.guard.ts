import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authService : AuthenticationService, private router :Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { //enkel krijgt toegang tot app of niet (boolean)
      if(this.authService.user$.getValue()){//kijken of er een user is, of we een waarde kunnen ophalen
        return true;
      }
      this.authService.redirectUrl = state.url;
       this.router.navigate(['/login']); 
       return true;
    
  }
  
}
