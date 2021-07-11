import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Store} from "@ngrx/store";
import {Event} from "../../models/event";
import {MatPaginator} from "@angular/material/paginator";
import {EventService, TableEvent} from "../../services/event.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {

  events: Event[] = [];
  event!: Event;
  index!: number;
  dataSource: any;


  displayedColumns: string[] = ['timestamp', 'price', 'status'];

  clickedRows = new Set<Event>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private store: Store,
    private service: EventService
  ) {
  }

  @ViewChild(MatSort) sort!: MatSort;
  displayedClickedColumns: string[] = [];


  ngOnInit(): void {

//-----GET EVENTS FROM FILE
    this.service.events$.subscribe(events =>
      this.events = events
    )
//---------------------------------------------------------------------

//------ GET EVENT BY INDEX
    this.service.index$.subscribe(ind => {
      this.service.eventListener$.next(this.events[ind]);
    })
//---------------------------------------------------------------------


//-----SET DATA TO TABLE
    const arr: TableEvent[] = Object.values(this.events).map(e => {
      return {
        timestamp: e.timestamp,
        price: e.price,
        status: e.status
      } as TableEvent
    })

    this.dataSource = new MatTableDataSource<TableEvent>(arr.filter(el => el.price != undefined));
//---------------------------------------------------------------------
  }


  onClickRow(row: Event, index: number) {
    this.service.eventListener$.next(row);
    this.service.indexListener$.next(index);
    console.log("Click ", row, index + 1);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  /*
      const event: Event = this.dataSource = this.dataSource.filter((value: any, key: any) => {
        if (value.dataIndex == i) {
        }
        return this.onClickRow(event, i);
      });
  */
  // this.service.getIndex();

  /*
      this.service.ind$.subscribe(ind => this.index = ind.index);]
      this.service.indListener$();
  */

  /*this.store.pipe(select(selectEvents)).subscribe(ev => {
    this.events = ev;
    const arr = Object.values(ev).map(e => {
      return {
        timestamp: e.timestamp,
        price: e.price,
        status: e.status
      }
    })

    this.dataSource = new MatTableDataSource<TableEvents>(arr);

  });
}*/

  /*
//-----EVENT LISTENER
//     this.service.eventListener$.subscribe();
     // this.service.getEvent();

     /!* this.service.ind$.subscribe(i => {
        this.index = i;
        this.service.eventListener$.next(this.getRowByIndex(i));
     *!/   // this.getRowByIndex(i);
     /!*
           this.service.eventListener$.next({
             timestamp: 222,
             price: "4444",
             status: "44444"
           });


     console.log("Index ", this.index)
   })

 }
*!/
     /!*
       getRowByIndex(index: number) {
         console.log(this.dataSource.data[index]);
         return this.dataSource.data[index];
         /!*  Object.values(this.dataSource).filter((value: any, key: any) => {
             console.log(value)
             if (value.id == index) {
               console.log("Value ",value.price);
               return value as Event
           /!*    return {
                 timestamp: value.timestamp,
                 price: value.price,
                 status: value.status
               } as Event
           *!/  }

           });*!/
     *!/
   }

   getEventByIndex(ind
 :
   number
 )
   {
     this.dataSource.filter((value: any, key: any) => {
       if (value.dataIndex == 3) {
       }
     })
   }

   onClickRow(row
 :
   Event, index
 :
   number
 )
   {
     // this.service.setEvent(row, index + 1)
     console.log("Click ", row, index + 1);
   }

*/
}
