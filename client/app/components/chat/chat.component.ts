import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat.service';
import { MessageService } from '../../services/message.service';

@Component({
	moduleId: module.id,
	selector: 'chat-component',
	templateUrl: 'chat.component.html',
	providers: [ChatService, MessageService]
})
export class ChatComponent implements OnInit {
	messages: Message[] = [];

	constructor(private chatService: ChatService, private messageService: MessageService) {
	}

	ngOnInit() {

		this.messageService.loadMessages().subscribe((data) => {
			this.messages = data;
		})

		this.chatService.messages.subscribe(msg => {
			// this.messageService.saveMessage(msg).subscribe((data) => {
			// 	console.log('message saved');
			// });
			this.messages.push(msg);
		});
	}
}
