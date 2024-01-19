import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid/grid.component';
import { CommonComponentsModule } from '../common-components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DeviceBookingsComponent } from './device-bookings/device-bookings.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    GridComponent, 
    DeviceBookingsComponent, 
    GridHeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  providers: [],
  exports: [
    GridComponent,
    GridHeaderComponent
  ],

})
export class MainComponentsModule {}
