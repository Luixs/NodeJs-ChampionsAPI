/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-30 19:00
*****************************************************************************************/

// ===== IMPORTS
import { Request, Response } from "express";
import { clubsService } from "../services";


const getClubs = async (req: Request, resp: Response) => {

    // ===== Get data
    const httpResp = await clubsService.getClubs();

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);

}

export default {
    getClubs
}