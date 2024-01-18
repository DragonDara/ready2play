import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LeftSideMenuComponent } from '../left-side-menu/left-side-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './default.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookingNotificationComponent } from '../../components/booking-notification/booking-notification.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ActiveHeaderComponent } from '../../components/active-header/active-header.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    LeftSideMenuComponent,
    BookingNotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MenuItemComponent,
    ProfileComponent,
    ActiveHeaderComponent,
  ],
  exports: [DefaultComponent, HeaderComponent, LeftSideMenuComponent],
})
export class DefaultModule {}
