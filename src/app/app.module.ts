import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBookingComponent } from './features/card-booking/card-booking.component';
import { HistoryComponent } from './features/history/history.component';
import { MapHallComponent } from './features/map-hall/map-hall.component';
import { NotificationModalComponent } from './features/notification-modal/notification-modal.component';
import { UsersComponent } from './features/users/users.component';
import { ZoneTariffsComponent } from './features/zone-tariffs/zone-tariffs.component';
import { CellCardComponent } from './shared/components/cell-card/cell-card.component';
import { GridHeaderComponent } from './shared/components/grid-header/grid-header.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { UserBookingComponent } from './shared/components/user-booking/user-booking.component';
import { DeviceIconComponent } from './shared/components/device-icon/device-icon.component';
import { DefaultModule } from './shared/layout/default/default.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeviceBookingsComponent } from './shared/components/device-bookings/device-bookings.component';
import { DeviceInfoComponent } from './shared/components/device-info/device-info.component';
import { ManualBookingFormComponent } from './features/manual-booking-form/manual-booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment.dev';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeModalComponent } from './features/qr-code-modal/qr-code-modal.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MapHallComponent,
    ZoneTariffsComponent,
    HistoryComponent,
    UsersComponent,
    NotificationModalComponent,
    CardBookingComponent,
    GridComponent,
    DeviceIconComponent,
    GridHeaderComponent,
    DeviceBookingsComponent,
    DeviceInfoComponent,
    ManualBookingFormComponent,
    QrCodeModalComponent
  ],
  imports: [
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    CellCardComponent,
    MatDialogActions,
    MatIconModule,
    UserBookingComponent,
    FlexLayoutModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    QRCodeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
