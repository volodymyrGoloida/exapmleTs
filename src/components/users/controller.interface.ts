import { Request, Response } from "express"

export interface UsersController {
  login(req: Request, res: Response): Promise<Response | void>
}
