/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-30 19:05
*****************************************************************************************/

// ===== IMPORTS
import { httpHelper } from "../utils";
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

        if(club) {
            resp = await httpHelper.OK(club);
        } else {
            resp = await httpHelper.NoContent();
        }
        
    } catch (error) {
        resp = await httpHelper.BadRequest(error?.toString());
    }

    return resp;

}

export default {
    getClubs,
    getClubById
}