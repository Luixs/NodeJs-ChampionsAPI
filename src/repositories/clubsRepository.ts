/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { ClubModel } from "../models";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    try {
        return [
            {
                id: 1,
                name: "Real Madrid"
            }
        ]
    } catch (error) {
        return [];
    }
}