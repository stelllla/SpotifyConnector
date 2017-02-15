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
var Subject_1 = require("rxjs/Subject");
var websocket_service_1 = require("./websocket.service");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CHAT_URL = 'ws://localhost:3005';
var ChatService = (function () {
    function ChatService(wsService, http) {
        this.wsService = wsService;
        this.http = http;
        this.messages = new Subject_1.Subject();
        // 1. subscribe to chatbox
        this.messages = this.wsService
            .connect(CHAT_URL)
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                author: data.author,
                message: data.message,
                newDate: data.newDate
            };
        });
    }
    ChatService.prototype.loadMessages = function () {
        return this.http.get('/api/messages')
            .map(function (res) { return res.json(); });
    };
    ChatService.prototype.saveMessage = function (message) {
        console.log(message);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/message", JSON.stringify(message), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService, http_1.Http])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map