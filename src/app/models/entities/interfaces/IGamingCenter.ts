import { IPersonnel } from "./IPersonnel"
import { ITariff } from "./ITariff"
import { IZone } from "./IZone"

export interface IGamingCenter {
  id: number
  name: string // name of a gaming center
  personnel: IPersonnel | undefined
  tariffs: ITariff[];
  zones: IZone[]
}
