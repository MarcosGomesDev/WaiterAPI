import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';

import { router } from './router';

const app = express();
const server =http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017/RestaurantApi')
    .then(() => {
        console.log('banco conectado');

        io.on('connect', () => {
            console.log('conectou')
        })

        app.use(cors());
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());

        app.use(router);

        server.listen(3001, () => {
            console.log('server on');
        });
    })
    .catch(() => console.log('error ao conectar banco'));
