import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebSocketService} from './websocket.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const CHAT_URL = 'ws://localhost:3005';

export interface Message {
	author: string,
	message: string,
	newDate?: string
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>  = new Subject<Message>();

	constructor(private wsService: WebSocketService, private http: Http) {

		// 1. subscribe to chatbox
		this.messages   = <Subject<Message>>this.wsService
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

	loadMessages() {
		return this.http.get('/api/messages')
            .map(res => res.json());
	}

	saveMessage(message) {
		console.log(message);
		 var headers = new Headers();
   		 headers.append("Content-Type", "application/json");
   		 return this.http.post("/api/message", JSON.stringify(message), {headers: headers})
                .map(response => response.json());
	}
} 
