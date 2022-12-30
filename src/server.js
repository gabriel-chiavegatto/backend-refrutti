import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const server = express();

server.use(cors());
server.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;

server.listen(port, () => { console.log(`SERVER RUN IN PORT ${port}`)})