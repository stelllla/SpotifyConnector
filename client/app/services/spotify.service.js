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
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
        console.log("Spotify Service Initialized...");
    }
    //TODO Check if search is not empty string
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
        return this.http.get(this.searchUrl).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this.http.get(this.artistUrl).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this.http.get(this.albumsUrl).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (id) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        return this.http.get(this.albumUrl).map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map