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
var message_service_1 = require("../../services/message.service");
var ChatComponent = (function () {
    function ChatComponent(chatService, messageService) {
        this.chatService = chatService;
        this.messageService = messageService;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.loadMessages().subscribe(function (data) {
            _this.messages = data;
        });
        this.chatService.messages.subscribe(function (msg) {
            // this.messageService.saveMessage(msg).subscribe((data) => {
            // 	console.log('message saved');
            // });
            _this.messages.push(msg);
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat-component',
        templateUrl: 'chat.component.html',
        providers: [chat_service_1.ChatService, message_service_1.MessageService]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, message_service_1.MessageService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map