/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 18:30
*****************************************************************************************/

// ===== IMPORTS
import { httpHelper } from "../utils";
import { BaseResponseAPI, PlayerModel } from "../models";
import * as playersRepository from "../repositories/playersRepository";


const getPlayers = async () => {

    const data = await playersRepository.findAllPlayers();
    let resp = null;

    // ===== Handler
    if (data) {
        resp = await httpHelper.OK(data);
    } else {
        resp = await httpHelper.NoContent();
    }

    return resp;
}

const getPlayerById = async (id: string) => {

    const data = await playersRepository.findPlayerById(parseInt(id));
    let resp: BaseResponseAPI | null = null;

    // ===== Handler
    if (data) {
        resp = await httpHelper.OK(data);
    } else {
        resp = await httpHelper.NoContent();
    }

    return resp;
}

const createPlayer = async (body: PlayerModel) => {
    let resp = null;

    try {

        if (Object.keys(body).length == 0) throw new Error("NO BODY FOUND!");

        // ===== INSERT PLAYER
        let playerInsert = await playersRepository.insertPlayer(body);

        return await httpHelper.Created(playerInsert);
    } catch (error) {
        // TODO: CREATE A 500 ERROR HELPER
        return await httpHelper.BadRequest();
    }
}
export default {
    getPlayers,
    createPlayer,
    getPlayerById
}