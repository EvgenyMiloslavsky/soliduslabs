import {Component, OnInit} from '@angular/core';
import {EventService, TableEvent} from "../../services/event.service";

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent implements OnInit {

  index!: number;
  event!: TableEvent;
  size!: number;


  constructor(
    private service: EventService
  ) {
  }

  ngOnInit(): void {

    this.size = this.service.getQuantity();

//----- INDEX SUBSCRIPTION
    this.service.index$.subscribe(index => {
        this.index = index;
      }
    )

    /* this.service.event$.subscribe(ev =>
       this.event = ev)*/
  }

  firstEvent() {
    if (this.index != 0) {
      // this.service.firstEvent();
      this.service.indexListener$.next(0)
    }
  }

  lastEvent() {
    if (this.index != this.size - 1) {
      // this.service.lastEvent();
      this.service.indexListener$.next(this.size -1)


    }
  }


  previousEvent() {
    if (this.index > 0) {
      this.service.indexListener$.next(this.index - 1)
    }
  }

  nextEvent() {
    if (this.index != this.size - 1) {
      this.service.indexListener$.next(this.index + 1)
    }
  }


  onPlayPause() {
    this.service.onPlayPause();
/*
    this.flag = !this.flag;
    console.log(this.flag);
    if (this.index < this.size && this.flag) {
      this.interval = setInterval(() => {
        console.log("Play")
      }, 20)
    } else {
      clearInterval(this.interval)
    }
*/
  }


}
