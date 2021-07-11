import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {eventsReducer, EventsState} from "../store/reducers/event.reducer";


export interface AppState {
  events: EventsState
}

export const reducers: ActionReducerMap<AppState> = {
events: eventsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
