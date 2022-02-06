import { Server } from "../server/interface"
import express, { Router } from "express"

import fs = require("fs")

import Users from "./users"

export default class Routes {
  app: Server
  router: Router = express.Router()

  constructor(app: Server) {
    this.app = app

    this.initVersion()
    this.initRouters()
  }

  initVersion = () => {
    this.app.use("/", this.router)
  }

  initRouters = () => {
    this.router.use("/users", new Users(this.app).router)
  }
}
