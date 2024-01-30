import { TariffEnum } from "../../enums/tariff.enum";

export interface ITariff {
  id: number;
  name: TariffEnum,
  displayName: string
}
