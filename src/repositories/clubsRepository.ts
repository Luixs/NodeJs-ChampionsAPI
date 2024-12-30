/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { ClubModel } from "../models";
import fs from 'fs/promises';

export const findAllClubs = async (): Promise<ClubModel[]> => {
    try {
        
        // === Get data
        const data = await fs.readFile('./src/data/clubs.json', "utf-8");
        const clubs : ClubModel[] = JSON.parse(data);

        return clubs;

    } catch (error) {
        return [];
    }
}