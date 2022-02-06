import {Server} from "../server/interface";
import express, {Router} from "express";

export default class Webinar {
    app: Server
    router: Router = express.Router()

    constructor(app: Server) {
        this.app = app;

        this.setupRouter = this.setupRouter.bind(this);

        this.setupRouter();
    }

    setupRouter() {
        const router = this.router;
    }
}
