import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LeftSideMenuComponent } from '../left-side-menu/left-side-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    LeftSideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    DefaultComponent,
    HeaderComponent,
    LeftSideMenuComponent
  ]
})
export class DefaultModule { }
