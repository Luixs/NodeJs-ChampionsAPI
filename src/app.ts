/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 10:35
*****************************************************************************************/

// ===== IMPORTS
import express, { json, Request, Response } from 'express';

export default function createApp() {

    // ===== MAIN CONST 
    const app = express();

    // ===== MIDDLEWARE
    app.use(json());

    // TODO: REMOVE ROUTE AND CREATE A CONTROLLER
    app.get("/", (req: Request, resp: Response) => {
        resp.status(200).json({ message: "Hello World!" })
    })

    return app;

}