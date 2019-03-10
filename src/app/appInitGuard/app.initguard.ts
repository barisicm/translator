import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AppInitGuard implements CanActivate {
    constructor(protected router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('isUserRegistered')) {
        this.router.navigate(['/', 'configure']);
        return true;
      } else {
        this.router.navigate(['/', 'configure']);
        return true;
      }
    }
}

