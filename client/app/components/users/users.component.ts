import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router} from '@angular/router'
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import { User } from "../../../User";

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
   providers: [UsersService,AuthenticationService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class UsersComponent implements OnInit{
    private users: [any];
    private currUser: any;

    constructor(private _usersService: UsersService, private _router: Router, private _auth: AuthenticationService) {
        this.currUser = { name:"", email: ""};
    }

    ngOnInit() {
        let email  = this._auth.getCurrentUser();

        this._usersService.getUser(email).subscribe((data => {
            this.currUser = data;
        }));

        this._usersService.getAllUsers().subscribe((data) => {
             this.users = data;
        });
    }

    logout() {
        this._auth.deleteCurrentUser();
        this._usersService.updateUserStatus(this.currUser._id, 'offline');
        this._router.navigate(['/login']);
    }
}