import { Users } from "./users/interface"
import { Server } from "./../server/interface"

export interface Components {
  app: Server
  users: Users
}
