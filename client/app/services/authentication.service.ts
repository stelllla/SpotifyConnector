//Inject a service as dependency we need injectable
import {Injectable} from "@angular/core";
import {CookieService} from 'angular2-cookie/core';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthenticationService {

  constructor(private _cookieService: CookieService) {
    console.log("Authentication Service Initialized...");
  }

  getCurrentUser() {
    return this._cookieService.get('user');
  }

  setCurrentUser(id) {
    this._cookieService.put('user', id);
  }

  deleteCurrentUser() {
      this._cookieService.remove('user');
  }


}
