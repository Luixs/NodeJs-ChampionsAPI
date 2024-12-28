/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-25 10:35
*****************************************************************************************/

// ===== IMPORTS
import { playersRoutes } from './routes';
import express, { json } from 'express';

export default function createApp() {

    // ===== MAIN CONST 
    const app = express();

    // ===== MIDDLEWARE
    app.use(json());

    // ===== ROUTES
    app.use('/api/v1', playersRoutes);

    return app;

}