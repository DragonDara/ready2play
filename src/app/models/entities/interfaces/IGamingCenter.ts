import { IPersonnel } from "./IPersonnel"
import { ITariff } from "./ITariff"

export interface IGamingCenter {
  id: number
  name: string // name of a gaming center
  personnel: IPersonnel
  tariffs: ITariff
}
