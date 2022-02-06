import { Server } from "../../server/interface"
import Controller from "./controller"
import { UsersController } from "./controller.interface"

export default class UsersInit {
  app: Server
  controller: UsersController

  constructor(app: Server) {
    this.app = app
    this.controller = new Controller(app)
  }
}
