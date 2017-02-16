import {Component} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {AuthenticationService} from '../../services/authentication.service';
import {MessageService} from '../../services/message.service';

@Component({
	moduleId: module.id,
	selector: 'create-message',
	templateUrl: 'create-message.component.html',
	viewProviders: [ChatService, AuthenticationService]
})
export class CreateMessage {
	private message = {
		author : '',
		message: '',
		newDate: ''
	};

	constructor(private chatService: ChatService, private _auth: AuthenticationService, private messageService: MessageService) {

	}

	sendMsg() {
		// console.log('new message from client: ', this.message);
		this.message.author = this._auth.getCurrentUser();
		this.message.newDate = new Date().toLocaleTimeString();
		this.messageService.saveMessage(this.message).subscribe((data) => {
				console.log('message saved');
			});
		

		this.chatService.messages.next(this.message);
		this.message.message = '';
	}
}
