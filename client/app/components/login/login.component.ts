import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, NavigationStart} from '@angular/router'
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { User } from "../../../User";
import { FormBuilder, Validators } from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
   providers: [UsersService, AuthenticationService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class LoginComponent {
   public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

    constructor(private _usersService: UsersService, private _router:Router,public fb: FormBuilder, public _auth: AuthenticationService) {
    }

    login() {
        let email = this.loginForm.value.email;
        let pass = this.loginForm.value.password;
        this._usersService.getUser(email).subscribe(data => {
            console.log("Success " + data);
            if (data.password == pass) {
                this._auth.setCurrentUser(data.email);
                this._router.navigate(['']);
            }
        });
    }

    register() {
        this._router.navigate(['/register']);
    }
}

