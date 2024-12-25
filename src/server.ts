/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-24 07:20
*****************************************************************************************/

// ===== IMPORTS
import express, { json, Request, Response } from 'express';
import createApp from './app';

// ===== CONSTS
const app = createApp();
const port = process.env.PORT;


app.listen(port, () => console.log(`✅ Server on at port http://localhost:${port} ✅`));