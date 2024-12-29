/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-28 14:20
*****************************************************************************************/

// ===== IMPORTS
import { PlayerModel } from "../models";

const dummyData: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "nationality": "Argentina",
        "position": "Forward",
        "club": "Paris Saint-Germain",
        "statistics": {
            "overall": 92,
            "pace": 85,
            "shooting": 90,
            "passing": 91,
            "dribbling": 95,
            "defending": 38,
            "physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "nationality": "Portugal",
        "position": "Forward",
        "club": "Al-Nassr",
        "statistics": {
            "overall": 91,
            "pace": 87,
            "shooting": 93,
            "passing": 82,
            "dribbling": 88,
            "defending": 35,
            "physical": 75
        }
    },
    {
        "id": 3,
        "name": "Kylian Mbappé",
        "nationality": "France",
        "position": "Forward",
        "club": "Paris Saint-Germain",
        "statistics": {
            "overall": 93,
            "pace": 97,
            "shooting": 89,
            "passing": 80,
            "dribbling": 92,
            "defending": 42,
            "physical": 76
        }
    },
    {
        "id": 4,
        "name": "Kevin De Bruyne",
        "nationality": "Belgium",
        "position": "Midfielder",
        "club": "Manchester City",
        "statistics": {
            "overall": 91,
            "pace": 76,
            "shooting": 86,
            "passing": 94,
            "dribbling": 88,
            "defending": 64,
            "physical": 74
        }
    },
    {
        "id": 5,
        "name": "Robert Lewandowski",
        "nationality": "Poland",
        "position": "Forward",
        "club": "Barcelona",
        "statistics": {
            "overall": 92,
            "pace": 78,
            "shooting": 94,
            "passing": 80,
            "dribbling": 86,
            "defending": 45,
            "physical": 82
        }
    },
    {
        "id": 6,
        "name": "Erling Haaland",
        "nationality": "Norway",
        "position": "Forward",
        "club": "Manchester City",
        "statistics": {
            "overall": 90,
            "pace": 89,
            "shooting": 92,
            "passing": 75,
            "dribbling": 84,
            "defending": 42,
            "physical": 88
        }
    },
    {
        "id": 7,
        "name": "Virgil van Dijk",
        "nationality": "Netherlands",
        "position": "Defender",
        "club": "Liverpool",
        "statistics": {
            "overall": 91,
            "pace": 81,
            "shooting": 60,
            "passing": 71,
            "dribbling": 72,
            "defending": 92,
            "physical": 86
        }
    },
    {
        "id": 8,
        "name": "Karim Benzema",
        "nationality": "France",
        "position": "Forward",
        "club": "Al-Ittihad",
        "statistics": {
            "overall": 91,
            "pace": 80,
            "shooting": 88,
            "passing": 83,
            "dribbling": 90,
            "defending": 41,
            "physical": 78
        }
    },
    {
        "id": 9,
        "name": "Luka Modrić",
        "nationality": "Croatia",
        "position": "Midfielder",
        "club": "Real Madrid",
        "statistics": {
            "overall": 88,
            "pace": 72,
            "shooting": 75,
            "passing": 91,
            "dribbling": 90,
            "defending": 72,
            "physical": 66
        }
    },
    {
        "id": 10,
        "name": "Joshua Kimmich",
        "nationality": "Germany",
        "position": "Midfielder",
        "club": "Bayern Munich",
        "statistics": {
            "overall": 89,
            "pace": 74,
            "shooting": 72,
            "passing": 91,
            "dribbling": 84,
            "defending": 83,
            "physical": 77
        }
    },
    {
        "id": 11,
        "name": "Neymar Jr.",
        "nationality": "Brazil",
        "position": "Forward",
        "club": "Al-Hilal",
        "statistics": {
            "overall": 91,
            "pace": 87,
            "shooting": 85,
            "passing": 87,
            "dribbling": 94,
            "defending": 36,
            "physical": 62
        }
    },
    {
        "id": 12,
        "name": "Jan Oblak",
        "nationality": "Slovenia",
        "position": "Goalkeeper",
        "club": "Atlético Madrid",
        "statistics": {
            "overall": 89,
            "pace": 0,
            "shooting": 0,
            "passing": 50,
            "dribbling": 45,
            "defending": 18,
            "physical": 70
        }
    },
    {
        "id": 13,
        "name": "Mohamed Salah",
        "nationality": "Egypt",
        "position": "Forward",
        "club": "Liverpool",
        "statistics": {
            "overall": 90,
            "pace": 93,
            "shooting": 87,
            "passing": 81,
            "dribbling": 89,
            "defending": 45,
            "physical": 75
        }
    },
    {
        "id": 14,
        "name": "Casemiro",
        "nationality": "Brazil",
        "position": "Midfielder",
        "club": "Manchester United",
        "statistics": {
            "overall": 89,
            "pace": 65,
            "shooting": 70,
            "passing": 78,
            "dribbling": 75,
            "defending": 90,
            "physical": 89
        }
    },
    {
        "id": 15,
        "name": "Marc-André ter Stegen",
        "nationality": "Germany",
        "position": "Goalkeeper",
        "club": "Barcelona",
        "statistics": {
            "overall": 89,
            "pace": 0,
            "shooting": 0,
            "passing": 52,
            "dribbling": 48,
            "defending": 18,
            "physical": 70
        }
    }
];



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

export const insertPlayer = async (player: PlayerModel) : Promise<boolean> => {

    dummyData.push(player);
    return true;
}