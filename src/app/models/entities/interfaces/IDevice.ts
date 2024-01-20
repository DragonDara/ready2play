import { Device } from '../../enums/device.enum';
import { DeviceMode } from '../../enums/deviceMode.enum';

export interface IDevice {
  type: Device;
  number: number;
  mode: DeviceMode;
  row: number,
  col: number
}
