import { Server } from "./../../server/interface"
import { UsersController } from "./controller.interface"

export interface Users {
  app: Server
  controller: UsersController
}
