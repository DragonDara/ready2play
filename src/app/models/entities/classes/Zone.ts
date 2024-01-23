import { ZoneEnum } from "../../enums/zone.enum";
import { IDevice } from "../interfaces/IDevice";
import { IZone } from "../interfaces/IZone";

export class Zone implements IZone {
  id: number;
  name: ZoneEnum;
  devices: IDevice[];

  gamingCenterId: number

  constructor(id: number, name: ZoneEnum, devices: IDevice[], gamingCenterId: number) {
    this.id = id;
    this.name = name;
    this.devices = devices;
    this.gamingCenterId = gamingCenterId
  }
}
