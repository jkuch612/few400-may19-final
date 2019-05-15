import { Action } from '@ngrx/store';
import { IsoDate } from '../components/chat/models';
import * as fromActions from '../actions/chat.actions';

export interface ChatEntity {
  by: string;
  at: IsoDate;
  message: string;
}

export interface State {

  messages: ChatEntity[];

}

const initialState: State = {
  messages: []
};

export function reducer(state: State = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.CHAT_SENT: {
      const addMe: ChatEntity = {
        by: action.by,
        at: action.at,
        message: action.message
      };

      return { messages: [addMe, ...state.messages] };
    }
    case fromActions.CHAT_RECEIVED: {
      return { messages: [action.item, ...state.messages] };
    }
    default: {
      return state;
    }
  }
}
