import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatItem } from './models';
import { Store } from '@ngrx/store';
import { State, selectChatMessages, selectUserName } from '../../reducers';
import { Observable, Subscription } from 'rxjs';
import { SentChat } from 'src/app/actions/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  chat$: Observable<ChatItem[]>;
  userName$: Observable<string>;
  userName: string;
  subscription: Subscription;

  constructor(public store: Store<State>) {

  }

  ngOnInit() {
    this.chat$ = this.store.select(selectChatMessages);
    this.userName$ = this.store.select(selectUserName);
    this.subscription = this.userName$.subscribe(name => this.userName = name);
  }

  sendChat(message: HTMLInputElement) {
    this.store.dispatch(new SentChat(this.userName, message.value));
    message.value = '';
    message.focus();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
