/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import fs from 'fs/promises';
import { PlayerModel } from "../models";
import { CHAMPIONS_CONSTANTS } from "../utils";
import { PlayerStatistics } from "../models/playerModel";


export const findAllPlayers = async (): Promise<PlayerModel[]> => {

    try {
        const players = await getDataFromJson()
        return players;
    } catch (error) {
        return [];
    }

}

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {

    //return dummyData.find(p => p.id === id) ?? null;
    try {
        // ===== GET ALL
        const players = await getDataFromJson();
        return players.find(p => p.id === id) ?? null;

    } catch (error) {
        return null;
    }


}

export const insertPlayer = async (player: PlayerModel): Promise<boolean> => {

    try {

        // ===== GET CURRENT LIST
        const players = await getDataFromJson();

        // ===== ADDING NEW PLAYER
        players.push({
            ...player,
            id: (players[players.length - 1].id + 1),
        });

        // ===== SAVE IN JSON
        await saveNewDataIntoJson(players);

        return true;

    } catch (error) {
        return false;
    }

}

export const deleteOnePlayer = async (id: number): Promise<boolean> => {

    try {

        // ===== GET CURRENT LIST
        const players = await getDataFromJson();
        const findPlayerIndex = players.findIndex(p => p.id === id);

        if (findPlayerIndex === - 1) throw new Error("NOT FOUND PLAYER")

        players.splice(findPlayerIndex, 1);

        // ===== SAVE AFTER REMOVE
        await saveNewDataIntoJson(players);

        return true;

    } catch (error) {
        return false;
    }

}

export const updatePlayer = async (id: number, data: PlayerStatistics): Promise<PlayerModel | null> => {

    // ===== GET CURRENT LIST
    const players = await getDataFromJson();
    const findPlayerIndex = players.findIndex(p => p.id === id);

    if (findPlayerIndex === - 1) throw new Error("NOT FOUND PLAYER")

    // ===== UPDATE DATA
    players[findPlayerIndex] = {
        ...players[findPlayerIndex],
        statistics: data
    }

    // ===== SAVE NEW LIST
    await saveNewDataIntoJson(players);
    
    return players[findPlayerIndex];

}

// ===== INTERNAL FUNCTIONS
async function getDataFromJson(): Promise<PlayerModel[]> {
    try {
        var file = await fs.readFile(CHAMPIONS_CONSTANTS.paths.players, "utf-8");
        const players: PlayerModel[] = JSON.parse(file);

        return players;
    } catch (error) {
        return [];
    }
}

async function saveNewDataIntoJson(players: PlayerModel[]): Promise<Boolean> {
    try {

        // ===== SAVING NEW LIST
        await fs.writeFile(CHAMPIONS_CONSTANTS.paths.players, JSON.stringify(players, null, 4), "utf-8");

        return true;

    } catch (error) {
        return false;
    }
}
