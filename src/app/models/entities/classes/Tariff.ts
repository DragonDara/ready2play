import { TariffEnum } from "../../enums/tariff.enum";
import { ITariff } from "../interfaces/ITariff";

export class Tariff implements ITariff {
  id: number;
  name: TariffEnum;

  displayName: string;

  /**
   *
   */
  constructor(id: number, name: TariffEnum, displayName: string) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
  }

}
