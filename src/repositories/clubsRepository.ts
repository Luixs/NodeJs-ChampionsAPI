/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { ClubModel } from "../models";
import fs from 'fs/promises';

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


async function getDataFromJson(): Promise<ClubModel[]> {
    try {

        var file = await fs.readFile('./src/data/clubs.json', "utf-8");
        const clubs: ClubModel[] = JSON.parse(file);

        return clubs;


    } catch (error) {
        return [];
    }
}