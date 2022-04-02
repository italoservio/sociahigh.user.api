import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import {ENV_FILE, PORT} from './constants';
import userRouter from '../modules/user/user.controller';

dotenv.config({path: path.resolve(process.cwd(), '..', '..', ENV_FILE)});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.listen(PORT);
