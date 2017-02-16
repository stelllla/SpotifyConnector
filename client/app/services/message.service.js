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
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        console.log("Users Service Initialized...");
    }
    MessageService.prototype.loadMessages = function () {
        return this.http.get('/api/messages')
            .map(function (res) { return res.json(); });
    };
    MessageService.prototype.saveMessage = function (message) {
        console.log(message);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/message", JSON.stringify(message), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map