//Inject a service as dependency we need injectable
import {Injectable} from "@angular/core";
//http module
import {Http, Headers} from '@angular/http';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Rx";

@Injectable()
export class UsersService {

  constructor(private http: Http) {
    console.log("Users Service Initialized...");
  }

  getUser(email) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get("/api/users/" + email)
                .map(response => response.json());
  }

  addUser(user) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("/api/user", JSON.stringify(user), {headers: headers})
                .map(response => response.json());
  }

  getAllUsers() {
     return this.http.get('/api/users')
            .map(res => res.json());
  }
}
