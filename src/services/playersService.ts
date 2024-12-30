/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 18:30
*****************************************************************************************/

// ===== IMPORTS
import { httpHelper } from "../utils";
import { BaseResponseAPI, PlayerModel } from "../models";
import * as playersRepository from "../repositories/playersRepository";
import { PlayerStatistics } from "../models/playerModel";


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

        resp = await httpHelper.Created(playerInsert);
    } catch (error) {
        // TODO: CREATE A 500 ERROR HELPER
        resp = await httpHelper.BadRequest();
    }

    return resp;
}

const deletePlayer = async (id: number) => {
    let resp = null;
    try {

        // ===== DELETE PLAYER
        let isDeleted = await playersRepository.deleteOnePlayer(id);

        if (isDeleted) resp = await httpHelper.OK(null);
        else throw new Error("PLAYER NOT FOUND TO DELETE!");

    } catch (error) {
        resp = await httpHelper.BadRequest(error?.toString());
    }

    return resp;
}

const updatePlayer = async (id: number, body: PlayerStatistics) => {

    let resp = null;
    try {

        if (Object.keys(body).length == 0) throw new Error("NO BODY FOUND!");

        // ===== UPDATE PLAYER
        let isUpdated = await playersRepository.updatePlayer(id, body);

        if (isUpdated) resp = await httpHelper.OK(isUpdated);
        else throw new Error("PLAYER NOT FOUND TO UPDATE!");

    } catch (error) {
        resp = await httpHelper.BadRequest();
    }

    return resp;
}

export default {
    getPlayers,
    updatePlayer,
    createPlayer,
    deletePlayer,
    getPlayerById,
}