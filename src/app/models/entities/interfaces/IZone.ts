import { ZoneEnum } from "../../enums/zone.enum";
import { IDevice } from "./IDevice";

export interface IZone {
  id: number,
  name: string,

  devices: IDevice[],
  gamingCenterId: number
}
