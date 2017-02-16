//Inject a service as dependency we need injectable
import { Injectable } from "@angular/core";
//http module
import { Http, Headers } from '@angular/http';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Rx";

@Injectable()
export class MessageService {

    constructor(private http: Http) {
        console.log("Users Service Initialized...");
    }

    loadMessages() {
        return this.http.get('/api/messages')
            .map(res => res.json());
    }

    saveMessage(message) {
        console.log(message);
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/api/message", JSON.stringify(message), { headers: headers })
            .map(response => response.json());
    }
}