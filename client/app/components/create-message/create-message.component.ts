import {Component} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
	moduleId: module.id,
	selector: 'create-message',
	templateUrl: 'create-message.component.html',
	viewProviders: [ChatService, AuthenticationService]
})
export class CreateMessage {
	private message = {
		author : '',
		message: ''
	};

	constructor(private chatService: ChatService, private _auth: AuthenticationService) {

	}

	sendMsg() {
		// console.log('new message from client: ', this.message);
		this.message.author = this._auth.getCurrentUser();
		this.chatService.messages.next(this.message);
		this.message.message = '';
	}
}
