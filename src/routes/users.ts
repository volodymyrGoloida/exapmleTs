import { Server } from "../server/interface"
import express, { Router } from "express"
import { NotImplemented } from "./../helpers/501"

export default class Users {
  app: Server
  router: Router = express.Router()

  constructor(app: Server) {
    this.app = app

    this.setupRouter = this.setupRouter.bind(this)

    this.setupRouter()
  }

  setupRouter() {
    const router = this.router
    router.get(
      "/login",
      this.app.components?.users.controller.login || NotImplemented
    )
  }
}
