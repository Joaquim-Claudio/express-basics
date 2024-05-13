import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import database from './config/db_connector.js'
import filmeRotas from './routes/filmes.js';

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());

server.use('/filmes', filmeRotas);



async function start() {
    try{
        console.log('Starting database connection');
        database.connect();
        console.log('Connection has been stablished successfully.');

        server.listen(port, async function() {
            console.log(`Server listening at: http://localhost:${port}`);
        })

    } catch(error) {
        throw new Error(error);
    }
}

start();