import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EventsState} from "./reducers/event.reducer";


export const selectEventsState = createFeatureSelector<EventsState>('events');

export const selectEvents = createSelector(
  selectEventsState,
  state => state.currentEvents || []
);


