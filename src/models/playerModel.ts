/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:34
*****************************************************************************************/

export interface PlayerModel {
    id: number;
    name: string;
    nationality: string;
    position: string;
    club: string;
    statistics: PlayerStatistics;
}

interface PlayerStatistics {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
}