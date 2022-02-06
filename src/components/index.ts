import { Server } from "../server/interface"
import { Components } from "./interface"
import UsersInit from "./users/index"
import { Users } from "./users/interface"

export default class ComponentsInit implements Components {
  app: Server
  users: Users

  constructor(app: Server) {
    this.app = app
    this.users = new UsersInit(app)
  }
}
