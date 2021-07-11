import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event";


@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {

  constructor(private service: EventService) {
  }

  event!: Event;
  index!: number

  ngOnInit(): void {

    this.service.event$.subscribe(event =>
      this.event = event
    )

  }
}
