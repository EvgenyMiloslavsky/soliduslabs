import {EventActions} from "../actions.type";
import {Action, createReducer, on} from "@ngrx/store";
import * as events from 'src/assets/events.json';
import {Event} from "../../models/event";


export interface EventsState {
  currentEvents: Event[];
}

export const initialEventsState: EventsState = {
  currentEvents: events
}

export const eventsReducer = createReducer(
  initialEventsState,
)

export function reducer(state: EventsState | undefined, action: Action) {
  return eventsReducer(state, action);
}
