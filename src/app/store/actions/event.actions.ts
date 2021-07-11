import {createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  CURRENT = '[Event] Current Event',
  LOAD_EVENTS = '[Event] Load All Events'
}



export const selectAction = createAction(
'CURRENT',
  props<{event: Event}>()
)

export const loadAllEvents = createAction(
  'LOAD_EVENTS',
  props<{events:Event[]}>()
)
