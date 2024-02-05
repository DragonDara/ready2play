import { ZoneEnum } from "../../enums/zone.enum";
import { IDevice } from "../interfaces/IDevice";
import { IZone } from "../interfaces/IZone";

export class Zone implements IZone {
  id!: number;
  name!: string;
  devices!: IDevice[];

  gamingCenterId!: number

  constructor() {

  }
}
