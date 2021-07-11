import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {EventBoxComponent} from './components/event-box/event-box.component';
import {TableComponent} from './components/table/table.component';
import {ButtonTogglesComponent} from './components/button-toggles/button-toggles.component';
import {MatSortModule} from "@angular/material/sort";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {eventsReducer} from "./store/reducers/event.reducer";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
// import { Events } from './services/events.service/events.service';

const routes: Routes = [
  {path: 'event', component: EventBoxComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    EventBoxComponent,
    TableComponent,
    ButtonTogglesComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatTableModule,
        MatSortModule,
        RouterModule.forRoot(routes),
        MatButtonToggleModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        MatPaginatorModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
