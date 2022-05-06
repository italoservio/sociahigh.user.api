import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {API_PREFIX} from './constants';
import userRouter from '../modules/user/userController';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(API_PREFIX, userRouter);
app.listen(process.env.PORT ?? 6100);
