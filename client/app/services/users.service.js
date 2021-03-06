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
//http module
var http_1 = require("@angular/http");
//Observable through reactive extensions so we want to import map operator to map the data
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        console.log("Users Service Initialized...");
    }
    UsersService.prototype.getUser = function (email) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/api/users/" + email)
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.addUser = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/user", JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.getAllUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUserStatus = function (id, status) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post('/user/updateStatus', JSON.stringify({ id: id, status: status }), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map