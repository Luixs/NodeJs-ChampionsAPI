/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 10:43
*****************************************************************************************/

// ===== IMPORTS
import { Request, Response } from 'express';
import { playersService } from '../services';
import { BaseResponseAPI } from '../models';

const getPlayers = async (req: Request, resp: Response) => {

    // ===== Get data
    const httpResp = await playersService.getPlayers();

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);
}

const getPlayerById = async (req: Request, resp: Response) => {

    // ==== Get params
    const { id } = req.params;

    // ===== Get data
    const httpResp = await playersService.getPlayerById(id);

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);

}

export default {
    getPlayers,
    getPlayerById
};