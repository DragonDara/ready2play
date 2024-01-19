import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceIconComponent } from './icons/device-icon/device-icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DeviceIconComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [DeviceIconComponent],
})
export class CommonComponentsModule {}
