import { Zone } from "../../enums/zone.enum";
import { IDevice } from "./IDevice";

export interface IZone {
  id: number,
  name: Zone,

  devices: IDevice[]
}
