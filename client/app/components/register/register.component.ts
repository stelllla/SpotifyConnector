import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router} from '@angular/router'
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { User } from "../../../User";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
   providers: [UsersService, AuthenticationService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RegisterComponent {
    public registerForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required],
        name: ["", Validators.required]
  });

    constructor(private _usersService: UsersService, private _router:Router, public fb: FormBuilder, public _auth: AuthenticationService) {
    }

    signup() {
        var user = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        }
         this._usersService.addUser(user).subscribe(data => {
            console.log("Success " + data);
            this._auth.setCurrentUser(data.email);
            this._router.navigate(['']);
        });
    }
}

