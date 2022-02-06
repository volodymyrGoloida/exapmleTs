import {Response} from "express";
import HttpStatusCode from "./http_status_code";

export function getRequestError(this: any, res: Response, error_message: string, function_name: string): void {
    this.app.logger?.error(`Error: ${error_message}`, {
        function_name
    })
    console.log(`Error: ${error_message} at ${function_name}`)
    res.status(HttpStatusCode.EXPECTATION_FAILED).json({error: error_message})
}
