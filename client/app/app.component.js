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
var spotify_service_1 = require("./services/spotify.service");
var router_1 = require("@angular/router");
var authentication_service_1 = require("./services/authentication.service");
require("rxjs/add/operator/filter");
var AppComponent = (function () {
    function AppComponent(_spotifyService, _router, _auth) {
        var _this = this;
        this._spotifyService = _spotifyService;
        this._router = _router;
        this._auth = _auth;
        this._router.events.subscribe(function (event) {
            console.log(event);
            var currUserEmail = _this._auth.getCurrentUser();
            if (!currUserEmail) {
                _this._router.navigate(['/login']);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.components.html',
        providers: [spotify_service_1.SpotifyService, router_1.Router, authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService, router_1.Router, authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map