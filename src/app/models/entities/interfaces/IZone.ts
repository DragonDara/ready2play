import { IDevice } from "./IDevice";
import { IZoneNameable } from "./IZoneNameable";

export interface IZone extends IZoneNameable{

  devices: IDevice[],
}
