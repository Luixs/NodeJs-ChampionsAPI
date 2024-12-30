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

export default {
    getClubs
}