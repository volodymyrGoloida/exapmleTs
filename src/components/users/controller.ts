import { UsersController } from "./controller.interface"
import { Server } from "./../../server/interface"
import { Request } from "express"
import { Response } from "express"
import { getRequestError } from "./../../helpers/errors"
import HttpStatusCode from "./../../helpers/http_status_code"

export default class Controller implements UsersController {
  app: Server
  constructor(app: Server) {
    this.app = app
  }
  login = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      return res.status(HttpStatusCode.OK).send("work begining")
    } catch (e) {
      if (e instanceof Error) {
        getRequestError.apply(this, [res, e.message, "login"])
      }
    }
  }
}
