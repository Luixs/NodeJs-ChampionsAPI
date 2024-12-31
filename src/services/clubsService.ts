/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-30 19:05
*****************************************************************************************/

// ===== IMPORTS
import { httpHelper } from "../utils";
import { BaseResponseAPI, ClubModel } from "../models";
import * as clubsRepository from "../repositories/clubsRepository";



const getClubs = async () => {

    const data = await clubsRepository.findAllClubs();
    let resp = null;

    // ===== Handler
    if (data) {
        resp = await httpHelper.OK(data);
    } else {
        resp = await httpHelper.NoContent();
    }

    return resp;
}

const getClubById = async (id: string) => {

    let resp = null;

    try {

        // =====  GET DATA
        const club = await clubsRepository.findClubById(parseInt(id));

        if (club) {
            resp = await httpHelper.OK(club);
        } else {
            resp = await httpHelper.NoContent();
        }

    } catch (error) {
        resp = await httpHelper.BadRequest(error?.toString());
    }

    return resp;

}

const createClub = async (content: ClubModel): Promise<BaseResponseAPI> => {

    let resp = null;
    try {
        // ===== CHECK CONTENT
        let keys = Object.keys(content);
        if(keys.length == 0 || !keys.includes("name")) throw new Error("NO CONTENT ON THIS REQUEST. PLEASE, SEE THE OFICIAL DOCUMENTATION!");

        // ===== SAVE NEW CLUB
        let newClub = await clubsRepository.createNewClub(content);
        if(newClub == null) throw new Error("INTERNAL SERVER ERROR - CAN'T SAVE A NEW CLUB IN THIS MOMENT");

        // ===== RETURN
        resp = httpHelper.Created(newClub);
    } catch (error) {
        resp = httpHelper.BadRequest(error?.toString());
    }

    return resp;
}

export default {
    getClubs,
    createClub,
    getClubById
}