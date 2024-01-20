import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './shared/layout/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MapHallComponent } from './features/map-hall/map-hall.component';
import { ZoneTariffsComponent } from './features/zone-tariffs/zone-tariffs.component';
import { HistoryComponent } from './features/history/history.component';
import { UsersComponent } from './features/users/users.component';
import { NotificationModalComponent } from './features/notification-modal/notification-modal.component';
import { CardBookingComponent } from './features/card-booking/card-booking.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CellCardComponent } from './shared/components/cell-card/cell-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MapHallComponent,
    ZoneTariffsComponent,
    HistoryComponent,
    UsersComponent,
    NotificationModalComponent,
    CardBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButtonModule,
    CellCardComponent,
    MatDialogActions,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
