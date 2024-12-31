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
            id: (currentList[currentList.length - 1].id + 1),
            name: content.name
        }

        // ===== ADD NEW ONE
        currentList.push(newClub);

        // ===== SAVE NEW LIST
        await saveNewDataIntoJson(currentList);

        return newClub;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateById = async (id: number, content: ClubModel): Promise<ClubModel | null> => {
    try {

        // ===== GET CURRENT LIST
        const currentList = await getDataFromJson();
        let currentIndexToUpdate = currentList.findIndex(c => c.id === id);

        if (currentIndexToUpdate == -1) throw new Error();

        // ===== UPDATE CLUB
        let updatedClub: ClubModel = {
            ...currentList[currentIndexToUpdate],
            name: content.name
        }

        currentList[currentIndexToUpdate] = updatedClub;

        // ===== SAVE JSON
        await saveNewDataIntoJson(currentList);

        return updatedClub;


    } catch (error) {
        return null;
    }
}

export const deleteById = async (id: number): Promise<Boolean> => {
    
    try {

        // ===== GET CURRENT LIST
        let currentList = await getDataFromJson();
        let currentIndexToDelete = currentList.findIndex(c => c.id === id);

        if (currentIndexToDelete == -1) throw new Error();

        // ===== REMOVE THIS ELEMENT
        currentList.splice(currentIndexToDelete, 1);

        // ===== SAVE JSON
        await saveNewDataIntoJson(currentList);

        return true;


    } catch (error) {
        return false;
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

async function saveNewDataIntoJson(clubs: ClubModel[]): Promise<Boolean> {
    try {

        // ===== SAVE NEW LIST
        await fs.writeFile(CHAMPIONS_CONSTANTS.paths.clubs, JSON.stringify(clubs, null, 4), "utf-8");

        return true;

    } catch (error) {
        return false;
    }
}

