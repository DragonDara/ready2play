import { Component, Input } from '@angular/core';
import { Device } from '../../../models/enums/device.enum';
import { IDevice } from '../../../models/entities/interfaces/IDevice';
import { DeviceMode } from '../../../models/enums/deviceMode.enum';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css'],
})
export class DeviceIconComponent {
  public deviceType: typeof Device = Device;
  @Input() device: IDevice = {
    type: Device.Default,
    number: 0,
    mode: DeviceMode.Default
  };

  constructor() {}

  public getBackgroundColorForIcons(deviceMode: DeviceMode): string { 
    switch (deviceMode) {
      case DeviceMode.Reserved:
        return '#2F80ED'; // blue
      case DeviceMode.Available:
        return '#0D9488'; //green
      case DeviceMode.InMaintenance:
        return '#A5A5A5'; //grey, disabled
      default:
        throw new Error(`Unhandled device mode: ${deviceMode}`);
    }
  }

  public getIdStyleForDisplayField(deviceMode: DeviceMode): string {
    switch(deviceMode) {
      case DeviceMode.Available:
        return `display: flex;
                max-width: 64px;
                padding: 0px 4px;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
                border: 1px solid var(--Status-Success, #0D9488);`;
      case DeviceMode.Reserved:
        return `border-radius: 100px;
                border: 1px solid var(--Blue-1, #2F80ED);
                display: inline-flex;
                max-width: 64px;
                padding: 0px 4px;
                justify-content: center;
                align-items: center`;
      case DeviceMode.InMaintenance:
        return `display: inline-flex;
                max-width: 64px;
                padding: 0px 2px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 100px;
                background: var(--text-icons-disabled, #DFDFDF);`;
      default:
        throw new Error(`Unhandled device mode: ${deviceMode}`)
    }
  }
}
