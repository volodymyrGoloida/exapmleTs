import http from "http"
import { Server } from "./interface"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import path from "path"
import { createLogger, format, transports } from "winston"
import Components from "../components"
import Routes from "../routes"
import { logFormatConsole } from "../helpers/log_format"
import { connectDataBase } from "../db/connector"

export function createServer(): Server {
  const app: Server = express()
  app.server = http.createServer(app)

  app.use(
    cors({
      exposedHeaders: "*"
    })
  )

  app.use(
    bodyParser.json({
      limit: "50mb"
    })
  )

  const filesPath = path.join(__dirname, "files")
  app.use("/files", express.static(filesPath))

  app.logger = createLogger({
    level: "info",
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    transports: [
      new transports.Console({
        format: format.combine(
          format.colorize(),
          format.simple(),
          logFormatConsole
        )
      })
    ]
  })

  if (process.env.NODE_ENV === "dev") {
    app.logger.add(
      new transports.File({
        filename: "logs/errors.log",
        level: "error"
      })
    )
  }
  app.db = connectDataBase()
  app.logger.info("connected to DataBase")
  app.components = new Components(app)

  new Routes(app)

  return app
}
