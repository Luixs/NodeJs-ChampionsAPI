/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { ClubModel } from "../models";
import fs from 'fs/promises';
import { CHAMPIONS_CONSTANTS } from "../utils";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    try {

        // ===== Get data
        const clubs = await getDataFromJson();
        return clubs;

    } catch (error) {
        return [];
    }
}

export const findClubById = async (id: number): Promise<ClubModel | null> => {

    try {

        // ===== Get data
        const allClubs = await getDataFromJson();

        // ===== Filter and return the unique club
        return allClubs.filter(c => c.id === id)[0];


    } catch (error) {
        return null;
    }
}

export const createNewClub = async (content: ClubModel): Promise<ClubModel | null> => {
    try {

        // ===== GET CURRENT LIST
        const currentList = await getDataFromJson();
        const newClub: ClubModel = {
            id: (currentList[currentList.length-1].id + 1),
            name: content.name
        }

        // ===== ADD NEW ONE
        currentList.push(newClub);

        // ===== SAVE NEW LIST
        await fs.writeFile(CHAMPIONS_CONSTANTS.paths.clubs, JSON.stringify(currentList, null, 4), "utf-8");

        return newClub;

    } catch (error) {
        console.log(error);
        return null;
    }
}



// ===== INTERNAL FUNCTIONS
async function getDataFromJson(): Promise<ClubModel[]> {
    try {

        var file = await fs.readFile(CHAMPIONS_CONSTANTS.paths.clubs, "utf-8");
        const clubs: ClubModel[] = JSON.parse(file);

        return clubs;


    } catch (error) {
        return [];
    }
}

