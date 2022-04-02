import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import {API_PREFIX} from './constants';
import userRouter from '../modules/user/user.controller';

const env = `${process.env.NODE_ENV}.env`;
dotenv.config({path: path.resolve(process.cwd(), '..', '..', env)});

const app = express();
app.use(cors());
app.use(express.json());
app.use(`${API_PREFIX}/user`, userRouter);
app.listen(process.env.PORT ?? 6100);
