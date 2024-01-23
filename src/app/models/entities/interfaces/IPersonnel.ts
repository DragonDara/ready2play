import { Role } from "../../enums/role.enum";

export interface IPersonnel {
  id: number,
  firstName: string,
  lastName: string,
  role: Role
}
