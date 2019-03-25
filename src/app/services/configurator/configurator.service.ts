import { Injectable } from '@angular/core';
import { ConfiguratorModel } from 'src/app/models/configurator/configurator-model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  constructor() { }

  setToLocalStorage(formValue) {
      localStorage.setItem('configData', JSON.stringify(formValue));
      localStorage.setItem('isConfigured', 'true');
  }

  getFromLocalStorage(): ConfiguratorModel {
    // Not sure if using the AS keyword is the best practice
    return JSON.parse(localStorage.getItem('configData')) as ConfiguratorModel;
  }

  isSet(): boolean {
    if (localStorage.getItem('isConfigured')) {
      return true;
    } else {
      return false;
    }
  }
}
