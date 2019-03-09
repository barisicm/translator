import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

export class AppInitGuard implements CanActivate {
    constructor(public router: Router) {}

    canActivate(): boolean {
      return true;
    }
}

