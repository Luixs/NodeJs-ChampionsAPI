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

const getClubById = async (req: Request, resp: Response) => {

    // ===== Get params
    const { id } = req.params;

    // ===== Get data
    const httpResp = await clubsService.getClubById(id);

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);

}

const postClub = async (req: Request, resp: Response) => {

    // ==== Get Values
    const { body } = req;

    // ===== send data
    const httpResp = await clubsService.createClub(body);

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);

}

const updateClub = async (req: Request, resp: Response) => {

    // ==== Get Values
    const { body } = req;
    const { id } = req.params;

    // ===== send data
    const httpResp = await clubsService.updateClubById(id, body);

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);

}

const deleteClub = async (req: Request, resp: Response) => {

    // ==== Get Values
    const { id } = req.params;

    // ===== send data
    const httpResp = await clubsService.deleteClubById(id);

    // ===== Return
    resp.status(httpResp.statusCode).json(httpResp.body);
}

export default {
    getClubs,
    postClub,
    updateClub,
    deleteClub,
    getClubById
}