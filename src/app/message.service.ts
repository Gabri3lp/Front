import { Injectable } from '@angular/core';
import { Message } from './message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
	messages: Message[] = [];
	show(message: Message) {
    	this.messages.push(message);
    	this.messages.length
  	}
 
  	clear() {
    	this.messages = [];
  	}
}
