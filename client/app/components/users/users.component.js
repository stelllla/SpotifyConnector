"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var users_service_1 = require("../../services/users.service");
var authentication_service_1 = require("../../services/authentication.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var UsersComponent = (function () {
    function UsersComponent(_usersService, _router, _auth) {
        this._usersService = _usersService;
        this._router = _router;
        this._auth = _auth;
        this.currUser = { name: "", email: "" };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var email = this._auth.getCurrentUser();
        this._usersService.getUser(email).subscribe((function (data) {
            _this.currUser = data;
        }));
        this._usersService.getAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent.prototype.logout = function () {
        this._auth.deleteCurrentUser();
        this._router.navigate(['/login']);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'users',
        templateUrl: 'users.component.html',
        providers: [users_service_1.UsersService, authentication_service_1.AuthenticationService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router, authentication_service_1.AuthenticationService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map