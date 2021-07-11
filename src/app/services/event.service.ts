import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as events from "src/assets/events.json";
import {Event} from "../models/event";

export interface Index {
  size: number;
  index: number;
}

export interface TableEvent {
  timestamp?: number;
  price?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

//------GET EVENTS FROM FILE

  events: Event[] = events;
  currentEvent!: Event;

  eventsQuantity = this.events.length;
  index: number = 0;

  interval: any;
  flag = false;
  /*
    index: Index = {
      size: this.events.length,
      index: 0
    };
  */

//----- EVENTS OBSERVABLE
  eventsListener$ = new BehaviorSubject<Event[]>(this.events);
  events$ = this.eventsListener$.asObservable();

//----- EVENT OBSERVABLE init
  eventListener$ = new BehaviorSubject<Event>(this.events[0]);
  event$ = this.eventListener$.asObservable();

  //------INDEX OBSERVABLE
  indexListener$ = new BehaviorSubject<number>(this.index);
  index$ = this.indexListener$.asObservable();


  constructor() {
  }

  getQuantity(): number {
    return this.eventsQuantity;
  }

  /* firstEvent(): void {
     this.eventByIndex(0)
   }

   lastEvent(): void {
     this.eventByIndex(this.eventsQuantity - 1)
   }

   previousEvent(): void {
     this.eventByIndex(this.index )
   }
 */


  onPlayPause() {
    this.flag = !this.flag;
    if (!this.flag) {
      clearInterval(this.interval)
    } else {
      this.interval = setInterval(() => {
        if (this.index >= this.eventsQuantity - 1 && !this.flag) {
          clearInterval(this.interval)
        } else {
          // this.eventByIndex(this.index);
          this.indexListener$.next(this.index)
          this.index = this.index + 1;
        }
      }, 200)
    }

  }


  /*incrementIndex() {
    // if (this.testIndex()) {
    this.index = this.index + 1;

    this.indexListener$.next(this.index);

  }
*/

  /*decrementIndex() {
    const tst = this.testIndex()
    console.log(tst);
    if (tst) {
/!*
      this.index = {index: this.index.index - 1, size: this.index.size};
      this.indexListener$.next(this.index);
*!/
    }
  }*/


  /*
    eventFromTable(row: Event, index: number){
      this.oneEventListener$.next(row);
      this.indexListener$.next(this.index.index = index)
    }
  */

  /*
    setEvent(){

    }
  */

  /*
    getIndex() {
      this.indListener$.next(this.eventIndex)
    }
  */

  /*
    getIndex() {
      // this.indListener$.next(this.index)
    }

    setEvent(ev: Event/!*, index: number*!/) {
      // this.eventListener$.next(ev);
      // this.eventIndex = index;
    }

    nextEvent() {
      // this.indListener$.next(this.index.index++)
    }

    getPreviousEvent() {
      // this.indListener$.next(--this.eventIndex)
    }

    lastIndex(){
      // this.indListener$.next(this.index.size-1)
    }

    getEventByIndex(dataSource: any) {
      dataSource.filter((value: any, key: any) => {
        if (value.index == this.eventIndex) {
        }
        return {
          timestamp: value.timestamp,
          price: value.price,
          status: value.status
        } as Event
      });
    }
  */

}

