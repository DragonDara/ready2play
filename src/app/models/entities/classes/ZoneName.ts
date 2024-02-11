import { IZoneNameable } from "../interfaces/IZoneNameable";

export class ZoneName implements IZoneNameable {
  id: number;
  name: string;
  gamingCenterId: number;

  constructor(id: number, name: string, gamingCenterId: number) {
    this.id = id;
    this.name = name;
    this.gamingCenterId = gamingCenterId;
  }
}
