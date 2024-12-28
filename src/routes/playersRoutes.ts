/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 10:47
* @Description: mapping the routes linked to players
*****************************************************************************************/

// ===== IMPORTS
import { Router } from "express";
import playersController from "../controllers/playersController";

const router = Router();

// ===== PLAYER ROUTES
router.get('/players', playersController.getPlayers);

export default router;