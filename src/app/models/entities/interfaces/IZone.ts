import { ZoneEnum } from "../../enums/zone.enum";
import { IDevice } from "./IDevice";

export interface IZone {
  id: number,
  name: ZoneEnum,

  devices: IDevice[],
  gamingCenterId: number
}
