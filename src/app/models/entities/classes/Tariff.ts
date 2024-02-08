import { TariffEnum } from "../../enums/tariff.enum";
import { ITariff } from "../interfaces/ITariff";

export class Tariff implements ITariff {
  id: number;
  displayName: string;

  /**
   *
   */
  constructor(id: number, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }

}
