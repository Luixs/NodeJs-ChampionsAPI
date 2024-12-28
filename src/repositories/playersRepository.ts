/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { PlayerModel } from "../models";

const dummyData: PlayerModel[] = [
    {
        id: 1,
        name: "Messi"
    },
    {
        id: 2,
        name: "Ronaldo"
    },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {

    try {
        return dummyData;
    } catch (error) {
        return [];
    }

}

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    return dummyData.find(p => p.id === id) ?? null;
}
