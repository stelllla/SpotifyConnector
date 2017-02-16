import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebSocketService} from './websocket.service';
import {Http, Headers} from '@angular/http';


import 'rxjs/add/operator/map';

const CHAT_URL = 'ws://731e4e0a.ngrok.io';

export interface Message {
	author: string,
	message: string,
	newDate?: string
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>  = new Subject<Message>();

	constructor(private wsService: WebSocketService, private http: Http) {
		this.messages = <Subject<Message>>this.wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					author : data.author,
					message: data.message,
					newDate: data.newDate
				}
			});
	}
} 
