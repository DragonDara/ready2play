import { DeviceEnum } from "../../enums/device.enum";
import { DeviceMode } from "../../enums/deviceMode.enum";
import { IDevice } from "../interfaces/IDevice";

export class Device implements IDevice {
  type!: DeviceEnum;
  number!: number;
  mode!: DeviceMode;
  macAddress!: string;
  ipAddress!: string;
  row!: number;
  col!: number;

  constructor(type: DeviceEnum, number: number, mode: DeviceMode, macAddress: string, ipAddress: string, row: number, col: number) {
    this.type = type;
    this.number = number;
    this.mode = mode;
    this.macAddress = macAddress;
    this.ipAddress = ipAddress;
    this.row = row;
    this.col = col;
  }
}
