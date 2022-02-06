import { Express } from "express"
import http from "http"
import winston from "winston"
import { Components } from "../components/interface"
import knex from "knex"

export interface Server extends Express {
  server?: http.Server
  components?: Components
  logger?: winston.Logger
  db?: knex.QueryBuilder | any
}
