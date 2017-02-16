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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var authentication_service_1 = require("../../services/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(_usersService, _router, fb, _auth) {
        this._usersService = _usersService;
        this._router = _router;
        this.fb = fb;
        this._auth = _auth;
        this.loginForm = this.fb.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var email = this.loginForm.value.email;
        var pass = this.loginForm.value.password;
        this._usersService.getUser(email).subscribe(function (data) {
            console.log("Success " + data);
            if (data.password == pass) {
                _this._auth.setCurrentUser(data.email);
                _this._usersService.updateUserStatus(data._id, 'online');
                _this._router.navigate(['']);
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this._router.navigate(['/register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        providers: [users_service_1.UsersService, authentication_service_1.AuthenticationService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router, forms_1.FormBuilder, authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map