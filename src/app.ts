/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 10:35
*****************************************************************************************/

// ===== IMPORTS
import { clubsRoutes, playersRoutes } from './routes';
import express, { json } from 'express';
import cors from 'cors';

export default function createApp() {

    // ===== MAIN CONST 
    const app = express();

    // ===== MIDDLEWARE
    app.use(json());
    app.use(cors())

    // ===== ROUTES
    app.use('/api/v1', playersRoutes);
    app.use('/api/v1', clubsRoutes);

    return app;

}