import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DB
})

export default db;