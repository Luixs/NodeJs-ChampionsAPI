/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-24 07:20
*****************************************************************************************/
// ===== IMPORTS
import express, { Request, Response } from 'express';

const app = express();

app.get("/", (req: Request, resp: Response)=> {

    resp.send({message: "Hello World!"})
})

app.listen(3000)