import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid/grid.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule
  ],
  providers: [],
  exports: [GridComponent]
})
export class MainComponentsModule { }
