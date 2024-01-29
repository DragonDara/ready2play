import { TariffEnum } from "../../enums/tariff.enum";
import { ITariff } from "../interfaces/ITariff";

export class Tariff implements ITariff {
  id: number;
  name: TariffEnum;

  /**
   *
   */
  constructor(id: number, name: TariffEnum) {
    this.id = id;
    this.name = name;
  }

}
