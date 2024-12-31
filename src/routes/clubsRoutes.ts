/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-30 19:00
* @Description: mapping the routes linked to players
*****************************************************************************************/

// ===== IMPORTS
import { Router } from "express";
import clubsController from "../controllers/clubsController";


const router = Router();

// ===== PLAYER ROUTES
router.get('/clubs', clubsController.getClubs);
router.get('/clubs/:id', clubsController.getClubById);
router.post('/clubs', clubsController.postClub);


export default router;