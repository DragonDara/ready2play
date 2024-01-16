import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './shared/layout/default/default.module';
import { MainComponentsModule } from './shared/components/main-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MapHallComponent } from './features/map-hall/map-hall.component';
import { ZoneTariffsComponent } from './features/zone-tariffs/zone-tariffs.component';
import { HistoryComponent } from './features/history/history.component';
import { UsersComponent } from './features/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    MapHallComponent,
    ZoneTariffsComponent,
    HistoryComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponentsModule,
    DefaultModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
