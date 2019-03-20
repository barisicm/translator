import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { ConfiguratorService } from '../services/configurator/configurator.service';

@Injectable()
export class AppInitGuard implements CanActivate {
    constructor(private config: ConfiguratorService, protected router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.config.isSet()) {
        return true;
      } else {
        this.router.navigate(['/', 'configure']);
        return false;
      }
    }
}

