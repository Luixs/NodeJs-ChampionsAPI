/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 18:30
*****************************************************************************************/

// ===== IMPORTS
import * as playersRepository from "../repositories/playersRepository";
import { httpHelper } from "../utils";


const getPlayers = async () => {

    const data = await playersRepository.findAllPlayers();
    let resp = null;

    // ===== Handler
    if(data) {
        resp =  await httpHelper.OK(data);
    } else {
        resp = await httpHelper.NoContent();
    }
    
    

    return resp;
}

export default {
    getPlayers
}