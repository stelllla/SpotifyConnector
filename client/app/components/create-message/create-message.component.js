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
var chat_service_1 = require("../../services/chat.service");
var authentication_service_1 = require("../../services/authentication.service");
var message_service_1 = require("../../services/message.service");
var CreateMessage = (function () {
    function CreateMessage(chatService, _auth, messageService) {
        this.chatService = chatService;
        this._auth = _auth;
        this.messageService = messageService;
        this.message = {
            author: '',
            message: '',
            newDate: ''
        };
    }
    CreateMessage.prototype.sendMsg = function () {
        // console.log('new message from client: ', this.message);
        this.message.author = this._auth.getCurrentUser();
        this.message.newDate = new Date().toLocaleTimeString();
        this.messageService.saveMessage(this.message).subscribe(function (data) {
            console.log('message saved');
        });
        this.chatService.messages.next(this.message);
        this.message.message = '';
    };
    return CreateMessage;
}());
CreateMessage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-message',
        templateUrl: 'create-message.component.html',
        viewProviders: [chat_service_1.ChatService, authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, authentication_service_1.AuthenticationService, message_service_1.MessageService])
], CreateMessage);
exports.CreateMessage = CreateMessage;
//# sourceMappingURL=create-message.component.js.map