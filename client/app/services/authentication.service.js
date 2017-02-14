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
//Inject a service as dependency we need injectable
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
//Observable through reactive extensions so we want to import map operator to map the data
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(_cookieService) {
        this._cookieService = _cookieService;
        console.log("Authentication Service Initialized...");
    }
    AuthenticationService.prototype.getCurrentUser = function () {
        return this._cookieService.get('user');
    };
    AuthenticationService.prototype.setCurrentUser = function (id) {
        this._cookieService.put('user', id);
    };
    AuthenticationService.prototype.deleteCurrentUser = function () {
        this._cookieService.remove('user');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map