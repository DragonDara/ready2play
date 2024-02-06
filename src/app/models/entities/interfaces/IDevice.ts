import { DeviceEnum } from '../../enums/device.enum';
import { DeviceMode } from '../../enums/deviceMode.enum';

export interface IDevice {
  type: DeviceEnum;
  number: number;
  mode: DeviceMode;
  macAddress: string,
  ipAddress: string
  row: number,
  col: number,
}
