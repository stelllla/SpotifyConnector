import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat.service';

@Component({
	moduleId: module.id,
	selector: 'chat-component',
	templateUrl: 'chat.component.html',
	providers: [ChatService]
})
export class ChatComponent implements OnInit {
	messages: Message[] = [];

	constructor(private chatService: ChatService) {
	}

	ngOnInit() {

		this.chatService.loadMessages().subscribe((data) => {
			this.messages = data;
		})


		this.chatService.messages.subscribe(msg => {
			this.chatService.saveMessage(msg).subscribe((data) => {
				console.log('message saved');
			});
			this.messages.push(msg);
		});
	}
}
